import { useState, useRef } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function QuickQuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    serviceAddress: '',
    projectDetails: '',
    occupied: false,
    smsConsent: false,
    website: '', // Honeypot
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
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    // Calculate submission time
    const submissionTime = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0

    try {
      // Prepare JSON payload
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form')
      }

      setIsSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        serviceAddress: '',
        projectDetails: '',
        occupied: false,
        smsConsent: false,
        website: '',
      })
      hasInteracted.current = false
      setStartTime(null)

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <CheckCircleIcon className="w-16 h-16 text-green-600 mx-auto mb-3" />
        <h3 className="text-xl font-bold text-green-900 mb-2">
          Quote Request Received!
        </h3>
        <p className="text-sm text-green-700">
          We'll contact you within 24 hours with your personalized quote.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {/* Honeypot field */}
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleChange}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3 text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-2 gap-2">
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          onFocus={handleFirstInteraction}
          className="h-9 px-3 border border-[#E5E0D6] rounded-md text-sm placeholder:text-[#7A7269] text-[#221F1C] bg-white focus:ring-2 focus:ring-[#FB8040] focus:border-transparent"
          placeholder="Full Name *"
        />
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          onFocus={handleFirstInteraction}
          className="h-9 px-3 border border-[#E5E0D6] rounded-md text-sm placeholder:text-[#7A7269] text-[#221F1C] bg-white focus:ring-2 focus:ring-[#FB8040] focus:border-transparent"
          placeholder="Email *"
        />
      </div>

      {/* Row 2: Phone + Service */}
      <div className="grid grid-cols-2 gap-2">
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          onFocus={handleFirstInteraction}
          className="h-9 px-3 border border-[#E5E0D6] rounded-md text-sm placeholder:text-[#7A7269] text-[#221F1C] bg-white focus:ring-2 focus:ring-[#FB8040] focus:border-transparent"
          placeholder="Phone *"
        />
        <select
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          onFocus={handleFirstInteraction}
          className="h-9 px-3 pr-8 border border-[#E5E0D6] rounded-md text-sm text-[#221F1C] bg-white focus:ring-2 focus:ring-[#FB8040] focus:border-transparent appearance-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 6l4 4 4-4' stroke='%237A7269' stroke-width='2'/%3E%3C/svg%3E")`,
            backgroundPosition: 'right 0.75rem center',
            backgroundRepeat: 'no-repeat',
          }}
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

      {/* Row 3: Service Address */}
      <input
        type="text"
        name="serviceAddress"
        required
        value={formData.serviceAddress}
        onChange={handleChange}
        onFocus={handleFirstInteraction}
        className="h-9 px-3 border border-[#E5E0D6] rounded-md text-sm placeholder:text-[#7A7269] text-[#221F1C] bg-white focus:ring-2 focus:ring-[#FB8040] focus:border-transparent w-full"
        placeholder="Service Address *"
      />

      {/* Row 4: Project Details */}
      <textarea
        name="projectDetails"
        rows={2}
        value={formData.projectDetails}
        onChange={handleChange}
        onFocus={handleFirstInteraction}
        className="px-3 py-2 border border-[#E5E0D6] rounded-md text-sm placeholder:text-[#7A7269] text-[#221F1C] bg-white focus:ring-2 focus:ring-[#FB8040] focus:border-transparent resize-none w-full"
        placeholder="Project details (optional)"
      />

      {/* Row 5: Occupied Checkbox */}
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="occupied"
          name="occupied"
          checked={formData.occupied}
          onChange={handleChange}
          onFocus={handleFirstInteraction}
          className="mt-0.5 w-4 h-4 border border-[#E5E0D6] rounded bg-white checked:bg-[#FB8040] checked:border-[#FB8040] focus:ring-2 focus:ring-[#FB8040] focus:ring-offset-0"
        />
        <label htmlFor="occupied" className="text-xs text-[#7A7269] leading-tight cursor-pointer">
          Occupied
        </label>
      </div>

      {/* Row 6: SMS Consent Checkbox */}
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="smsConsent"
          name="smsConsent"
          checked={formData.smsConsent}
          onChange={handleChange}
          onFocus={handleFirstInteraction}
          className="mt-0.5 w-4 h-4 border border-[#E5E0D6] rounded bg-white checked:bg-[#FB8040] checked:border-[#FB8040] focus:ring-2 focus:ring-[#FB8040] focus:ring-offset-0"
        />
        <label htmlFor="smsConsent" className="text-xs text-[#7A7269] leading-tight cursor-pointer">
          I agree to receive SMS from JLS Reglazing. Msg & data rates may apply. Reply STOP to opt out.
        </label>
      </div>

      {/* Row 7: Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-10 bg-[#FB8040] hover:bg-[#E5722A] text-white text-sm font-bold rounded-md flex items-center justify-center gap-2 disabled:opacity-50 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
        <span>{isSubmitting ? 'Sending...' : 'Get Free Quote'}</span>
      </button>

      {/* Row 8: Footer Privacy Note */}
      <p className="text-[10px] text-[#7A7269] text-center leading-tight">
        We respond within 24 hours. Your info is kept private.
      </p>
    </form>
  )
}
