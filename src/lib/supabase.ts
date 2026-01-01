import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface FormSubmission {
  id: string
  created_at: string
  name: string
  email: string
  phone?: string
  company?: string
  subject?: string
  message: string
  metadata?: Record<string, any>
  status: string
  assigned_to?: string
  is_spam: boolean
  spam_score?: number
  spam_reasons?: string[]
  ip_address?: string
  user_agent?: string
  honeypot_filled: boolean
  submission_time_seconds?: number
  blocked: boolean
  blocked_reason?: string
  notification_sent: boolean
  notification_sent_at?: string
  slack_notification_sent: boolean
  n8n_workflow_triggered: boolean
  n8n_workflow_triggered_at?: string
  n8n_workflow_id?: string
  ai_parsed_intent?: string
  ai_lead_score?: number
  ai_sentiment?: string
  auto_reply_sent: boolean
  auto_reply_sent_at?: string
  auto_reply_content?: string
  auto_reply_method?: string
}
