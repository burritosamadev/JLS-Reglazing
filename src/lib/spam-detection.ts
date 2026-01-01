import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
)

const disposableDomains = [
  'tempmail.com',
  'guerrillamail.com',
  '10minutemail.com',
  'throwaway.email',
  'mailinator.com',
  'maildrop.cc',
  'temp-mail.org',
  'yopmail.com',
  'trashmail.com',
]

const spamKeywords = [
  'viagra',
  'cialis',
  'crypto',
  'bitcoin',
  'lottery',
  'click here',
  'act now',
  'limited time',
  'congratulations',
  'you won',
  'free money',
  'no credit check',
  'guarantee',
  'make money fast',
  'weight loss',
]

interface SpamCheckInput {
  email: string
  message: string
  honeypotFilled: boolean
  submissionTime: number
  ipAddress: string
}

interface SpamCheckResult {
  isSpam: boolean
  spamScore: number
  reasons: string[]
}

export async function calculateSpamScore(input: SpamCheckInput): Promise<SpamCheckResult> {
  let spamScore = 0
  const reasons: string[] = []

  // Honeypot check (instant block)
  if (input.honeypotFilled) {
    spamScore += 100
    reasons.push('Honeypot filled')
    return { isSpam: true, spamScore, reasons }
  }

  // Timing checks
  if (input.submissionTime < 3) {
    spamScore += 50
    reasons.push('Submitted too fast')
  }
  if (input.submissionTime > 600) {
    spamScore += 20
    reasons.push('Form abandoned too long')
  }

  // Email validation
  const emailDomain = input.email.split('@')[1]?.toLowerCase()
  if (emailDomain && disposableDomains.includes(emailDomain)) {
    spamScore += 40
    reasons.push('Disposable email domain')
  }

  // Check blocklist
  const { data: blockedIP } = await supabase
    .from('blocklist')
    .select('*')
    .eq('value', input.ipAddress)
    .eq('type', 'ip')
    .single()

  if (blockedIP) {
    spamScore += 100
    reasons.push('IP address blocked')
    return { isSpam: true, spamScore, reasons }
  }

  const { data: blockedEmail } = await supabase
    .from('blocklist')
    .select('*')
    .eq('value', input.email.toLowerCase())
    .eq('type', 'email')
    .single()

  if (blockedEmail) {
    spamScore += 100
    reasons.push('Email address blocked')
    return { isSpam: true, spamScore, reasons }
  }

  if (emailDomain) {
    const { data: blockedDomain } = await supabase
      .from('blocklist')
      .select('*')
      .eq('value', emailDomain)
      .eq('type', 'domain')
      .single()

    if (blockedDomain) {
      spamScore += 100
      reasons.push('Email domain blocked')
      return { isSpam: true, spamScore, reasons }
    }
  }

  // Check rate limiting
  const oneHourAgo = new Date(Date.now() - 3600000).toISOString()
  const { data: recentSubmissions, error: rateError } = await supabase
    .from('form_submissions')
    .select('id')
    .eq('ip_address', input.ipAddress)
    .gte('created_at', oneHourAgo)

  if (!rateError && recentSubmissions && recentSubmissions.length >= 3) {
    spamScore += 60
    reasons.push('Rate limit exceeded')
  }

  // Content spam detection
  const lowerMessage = input.message.toLowerCase()
  const foundKeywords = spamKeywords.filter((keyword) => lowerMessage.includes(keyword))
  if (foundKeywords.length > 0) {
    spamScore += 30
    reasons.push(`Spam keywords: ${foundKeywords.join(', ')}`)
  }

  // Link count check
  const linkCount = (input.message.match(/https?:\/\//g) || []).length
  if (linkCount > 3) {
    spamScore += 25
    reasons.push('Too many links')
  }

  const isSpam = spamScore >= 50

  return { isSpam, spamScore, reasons }
}
