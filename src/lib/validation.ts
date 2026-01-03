import { z } from 'zod'

// Form submission validation schema
export const formSubmissionSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .trim(),

  email: z
    .string()
    .email('Please enter a valid email address')
    .toLowerCase()
    .trim(),

  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s\-\+\(\)]{10,}$/.test(val),
      'Please enter a valid phone number'
    ),

  company: z
    .string()
    .max(100, 'Company name must be less than 100 characters')
    .optional()
    .transform((val) => val?.trim()),

  subject: z
    .string()
    .max(200, 'Subject must be less than 200 characters')
    .optional()
    .transform((val) => val?.trim()),

  message: z
    .string()
    .max(5000, 'Message must be less than 5000 characters')
    .optional()
    .transform((val) => val?.trim() || ''),

  // Honeypot field - should always be empty
  website: z
    .string()
    .optional()
    .refine((val) => !val || val === '', 'Invalid submission'),

  // Timing field - seconds taken to fill form
  submissionTime: z
    .number()
    .min(3, 'Submission too fast')
    .max(600, 'Submission timeout'),

  // File attachments (optional)
  attachments: z
    .array(
      z.object({
        name: z.string(),
        type: z.string(),
        data: z.string(), // Base64
      })
    )
    .optional(),
})

export type FormSubmissionInput = z.infer<typeof formSubmissionSchema>

// Helper function to validate email domain
export function isValidEmailDomain(email: string): boolean {
  const domain = email.split('@')[1]
  if (!domain) return false

  // Basic domain validation
  const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?\.[a-zA-Z]{2,}$/
  return domainRegex.test(domain)
}

// List of disposable email domains (partial list)
const DISPOSABLE_DOMAINS = [
  'tempmail.com',
  'guerrillamail.com',
  '10minutemail.com',
  'throwaway.email',
  'mailinator.com',
  'temp-mail.org',
  'fakeinbox.com',
  'trashmail.com',
  'maildrop.cc',
  'getnada.com',
  'sharklasers.com',
  'yopmail.com',
  'emailondeck.com',
  'disposableemailaddresses.com',
]

export function isDisposableEmail(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase()
  return DISPOSABLE_DOMAINS.includes(domain)
}

// Spam keywords list
const SPAM_KEYWORDS = [
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
  'weight loss',
  'make money fast',
  'work from home',
  'mlm',
  'pyramid scheme',
  'get rich',
  'guaranteed income',
  'online pharmacy',
]

export function containsSpamKeywords(text: string): {
  isSpam: boolean
  keywords: string[]
} {
  const lowerText = text.toLowerCase()
  const foundKeywords = SPAM_KEYWORDS.filter((keyword) =>
    lowerText.includes(keyword)
  )

  return {
    isSpam: foundKeywords.length > 0,
    keywords: foundKeywords,
  }
}

// Count links in text
export function countLinks(text: string): number {
  const urlRegex = /(https?:\/\/[^\s]+)/g
  const matches = text.match(urlRegex)
  return matches ? matches.length : 0
}
