'use client'

import { useState, useRef } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { analytics } from '@/lib/analytics'

interface QuickQuoteFormProps {
  defaultService?: string
}

export default function QuickQuoteForm({ defaultService = '' }: QuickQuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService,
    serviceAddress: '',
    projectDetails: '',
    occupied: false,
    smsConsent: false,
    website: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [startTime, setStartTime] = useState<number | null>(null)
  const hasInteracted = useRef(false)

  const handleFirstInteraction = () => {
    if (!hasInteracted.current) {
      hasInteracted.current = true
      setStartTime(Date.now())
      analytics.formStart('QuickQuote')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    const submissionTime = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.service,
        serviceAddress: formData.serviceAddress,
        occupied: formData.occupied,
        smsConsent: formData.smsConsent,
        message: formData.projectDetails || '',
        website: formData.website,
        submissionTime,
      }

      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'Failed to submit form')

      analytics.formSubmit('QuickQuote')
      setIsSuccess(true)
      setFormData({
        name: '', email: '', phone: '', service: defaultService,
        serviceAddress: '', projectDetails: '', occupied: false, smsConsent: false, website: '',
      })
      hasInteracted.current = false
      setStartTime(null)
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Something went wrong'
      setError(msg)
      analytics.formError('QuickQuote', msg)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <CheckCircleIcon className="w-16 h-16 text-green-600 mx-auto mb-3" />
        <h3 className="text-xl font-bold text-green-900 mb-2">Quote Request Received!</h3>
        <p className="text-sm text-green-700">We&apos;ll contact you within 24 hours with your personalized quote.</p>
      </div>
    )
  }

  const inputClass = "h-9 px-3 border border-form-border rounded-md text-sm placeholder:text-form-muted text-charcoal bg-white focus:ring-2 focus:ring-cta focus:border-transparent"

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input type="text" name="website" value={formData.website} onChange={handleChange} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden="true" />

      {error && <div className="bg-red-50 border border-red-200 rounded-md p-3 text-red-700 text-sm">{error}</div>}

      <div className="grid grid-cols-2 gap-2">
        <input type="text" name="name" required value={formData.name} onChange={handleChange} onFocus={handleFirstInteraction} className={inputClass} placeholder="Full Name *" />
        <input type="email" name="email" required value={formData.email} onChange={handleChange} onFocus={handleFirstInteraction} className={inputClass} placeholder="Email *" />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} onFocus={handleFirstInteraction} className={inputClass} placeholder="Phone *" />
        <select
          name="service" required value={formData.service} onChange={handleChange} onFocus={handleFirstInteraction}
          className="h-9 px-3 pr-8 border border-form-border rounded-md text-sm text-charcoal bg-white focus:ring-2 focus:ring-cta focus:border-transparent appearance-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 6l4 4 4-4' stroke='%236B7280' stroke-width='2'/%3E%3C/svg%3E")`, backgroundPosition: 'right 0.75rem center', backgroundRepeat: 'no-repeat' }}
        >
          <option value="">Select Service *</option>
          <option value="Bathtub Reglazing">Bathtub Reglazing</option>
          <option value="Bathroom Foundation Repair (cut-outs)">Bathroom Foundation Repair (cut-outs)</option>
          <option value="Kitchen Reglazing">Kitchen Reglazing</option>
          <option value="Sink/Vanity Reglazing">Sink/Vanity Reglazing</option>
          <option value="Tile Reglazing">Tile Reglazing</option>
          <option value="Porcelain Reglazing">Porcelain Reglazing</option>
          <option value="Repair Cracks or Peeling">Repair Cracks or Peeling</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <input type="text" name="serviceAddress" required value={formData.serviceAddress} onChange={handleChange} onFocus={handleFirstInteraction} className={`${inputClass} w-full`} placeholder="Service Address *" />

      <textarea name="projectDetails" rows={2} value={formData.projectDetails} onChange={handleChange} onFocus={handleFirstInteraction} className="px-3 py-2 border border-form-border rounded-md text-sm placeholder:text-form-muted text-charcoal bg-white focus:ring-2 focus:ring-cta focus:border-transparent resize-none w-full" placeholder="Project details (optional)" />

      <div className="flex items-start gap-2">
        <input type="checkbox" id="occupied" name="occupied" checked={formData.occupied} onChange={handleChange} onFocus={handleFirstInteraction} className="mt-0.5 w-4 h-4 border border-form-border rounded bg-white checked:bg-cta checked:border-cta focus:ring-2 focus:ring-cta" />
        <label htmlFor="occupied" className="text-xs text-form-muted leading-tight cursor-pointer">Occupied</label>
      </div>

      <div className="flex items-start gap-2">
        <input type="checkbox" id="smsConsent" name="smsConsent" checked={formData.smsConsent} onChange={handleChange} onFocus={handleFirstInteraction} className="mt-0.5 w-4 h-4 border border-form-border rounded bg-white checked:bg-cta checked:border-cta focus:ring-2 focus:ring-cta" />
        <label htmlFor="smsConsent" className="text-xs text-form-muted leading-tight cursor-pointer">
          By checking, you agree to receive appointment reminders and service updates via SMS from JLS Reglazing. Msg frequency varies. Msg & data rates may apply. Reply HELP for help, STOP to opt out. See our <a href="/privacy-policy" target="_blank" className="text-cta underline">privacy policy</a>.
        </label>
      </div>

      <button type="submit" disabled={isSubmitting} className="w-full h-10 bg-cta hover:bg-cta-hover text-white text-sm font-bold rounded-md flex items-center justify-center gap-2 disabled:opacity-50 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
        <span>{isSubmitting ? 'Sending...' : 'Get Free Quote'}</span>
      </button>

      <p className="text-[10px] text-form-muted text-center leading-tight">We respond within 24 hours. Your info is kept private.</p>
    </form>
  )
}
