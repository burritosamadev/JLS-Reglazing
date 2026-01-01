import { useState, useRef } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

interface QuickQuoteFormProps {
  compact?: boolean
}

export default function QuickQuoteForm({ compact = false }: QuickQuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    description: '',
    website: '', // Honeypot
  })
  const [files, setFiles] = useState<FileList | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [startTime, setStartTime] = useState<number | null>(null)
  const hasInteracted = useRef(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFirstInteraction = () => {
    if (!hasInteracted.current) {
      hasInteracted.current = true
      setStartTime(Date.now())
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files
    if (selectedFiles) {
      // Validate file size (max 10MB total)
      const totalSize = Array.from(selectedFiles).reduce((acc, file) => acc + file.size, 0)
      if (totalSize > 10 * 1024 * 1024) {
        setError('Total file size must be less than 10MB')
        e.target.value = ''
        return
      }
      // Validate file types (images only)
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/heic']
      const invalidFiles = Array.from(selectedFiles).filter(
        (file) => !allowedTypes.includes(file.type.toLowerCase())
      )
      if (invalidFiles.length > 0) {
        setError('Only image files (JPG, PNG, WebP, HEIC) are allowed')
        e.target.value = ''
        return
      }
      setFiles(selectedFiles)
      setError(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    // Calculate submission time
    const submissionTime = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0

    try {
      // Convert files to base64 if any
      const fileData: Array<{ name: string; type: string; data: string }> = []
      if (files) {
        for (const file of Array.from(files)) {
          const base64 = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () => {
              const result = reader.result as string
              resolve(result.split(',')[1]) // Remove data:image/xxx;base64, prefix
            }
            reader.onerror = reject
            reader.readAsDataURL(file)
          })
          fileData.push({
            name: file.name,
            type: file.type,
            data: base64,
          })
        }
      }

      // Prepare JSON payload
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.serviceType,
        message: `${formData.description}\n\n[Submitted via Quick Quote Form]${fileData.length > 0 ? `\n${fileData.length} photo(s) attached` : ''}`,
        website: formData.website,
        submissionTime,
        attachments: fileData,
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
        serviceType: '',
        description: '',
        website: '',
      })
      setFiles(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
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
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <CheckCircleIcon className="w-16 h-16 text-green-600 mx-auto mb-3" />
        <h3 className="text-xl font-orbitron font-bold text-green-900 mb-2">
          Quote Request Received!
        </h3>
        <p className="text-sm text-green-700 font-jost">
          We'll contact you within 24 hours with your personalized quote.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
          {error}
        </div>
      )}

      <div>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          onFocus={handleFirstInteraction}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent font-jost bg-white text-gray-900 placeholder:text-gray-400"
          placeholder="Your Name *"
        />
      </div>

      <div className={compact ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'space-y-4'}>
        <div>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            onFocus={handleFirstInteraction}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent font-jost bg-white text-gray-900 placeholder:text-gray-400"
            placeholder="Email Address *"
          />
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            onFocus={handleFirstInteraction}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent font-jost bg-white text-gray-900 placeholder:text-gray-400"
            placeholder="Phone Number *"
          />
        </div>
      </div>

      <div>
        <select
          name="serviceType"
          required
          value={formData.serviceType}
          onChange={handleChange}
          onFocus={handleFirstInteraction}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent font-jost bg-white text-gray-900"
        >
          <option value="">Select Service Type *</option>
          <option value="Bathtub Reglazing">Bathtub Reglazing</option>
          <option value="Kitchen Countertop">Kitchen Countertop</option>
          <option value="Sink Refinishing">Sink Refinishing</option>
          <option value="Tile Reglazing">Tile Reglazing</option>
          <option value="Vanity Restoration">Vanity Restoration</option>
          <option value="Crack Repair">Crack Repair</option>
          <option value="Multiple Services">Multiple Services</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <textarea
          name="description"
          required
          rows={compact ? 3 : 4}
          value={formData.description}
          onChange={handleChange}
          onFocus={handleFirstInteraction}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent font-jost bg-white resize-none text-gray-900 placeholder:text-gray-400"
          placeholder="Describe your project (size, location, timeline, etc.) *"
        />
      </div>

      <div>
        <label className="block text-sm font-jost text-gray-700 mb-2">
          Attach Photos (Optional - helps us provide accurate quote)
        </label>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          onFocus={handleFirstInteraction}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent font-jost bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <p className="text-xs text-gray-500 mt-1 font-jost">
          Max 10MB total. Supported: JPG, PNG, WebP, HEIC
        </p>
        {files && (
          <p className="text-sm text-green-600 mt-2 font-jost">
            {files.length} file{files.length > 1 ? 's' : ''} selected
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-orbitron font-bold text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 shadow-lg"
      >
        {isSubmitting ? 'Sending...' : 'Get Free Quote'}
      </button>

      <p className="text-xs text-center text-gray-600 font-jost">
        By submitting, you agree to be contacted about your quote request.
      </p>
    </form>
  )
}
