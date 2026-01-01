import { useState, useEffect, useRef } from 'react'
import { useFormSubmit } from '../../hooks/useFormSubmit'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function ContactForm() {
  const { isSubmitting, isSuccess, error, submitForm, reset } = useFormSubmit()

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    website: '', // Honeypot field
  })

  // File upload state
  const [files, setFiles] = useState<FileList | null>(null)
  const [fileError, setFileError] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Timing tracking
  const [startTime, setStartTime] = useState<number | null>(null)
  const hasInteracted = useRef(false)

  // Start timer on first field focus
  const handleFirstInteraction = () => {
    if (!hasInteracted.current) {
      hasInteracted.current = true
      setStartTime(Date.now())
    }
  }

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files
    setFileError('')

    if (selectedFiles) {
      // Validate file size (max 10MB total)
      const totalSize = Array.from(selectedFiles).reduce((acc, file) => acc + file.size, 0)
      if (totalSize > 10 * 1024 * 1024) {
        setFileError('Total file size must be less than 10MB')
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
        return
      }

      // Validate file types (images only)
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/heic']
      const invalidFiles = Array.from(selectedFiles).filter(
        (file) => !allowedTypes.includes(file.type.toLowerCase())
      )
      if (invalidFiles.length > 0) {
        setFileError('Only image files (JPG, PNG, WebP, HEIC) are allowed')
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
        return
      }

      setFiles(selectedFiles)
    }
  }

  // Reset form after successful submission
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          website: '',
        })
        setFiles(null)
        setFileError('')
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
        hasInteracted.current = false
        setStartTime(null)
        reset()
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [isSuccess, reset])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Calculate submission time
    const submissionTime = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0

    // Convert files to base64 if present
    const fileData: Array<{ name: string; type: string; data: string }> = []
    if (files) {
      for (const file of Array.from(files)) {
        const reader = new FileReader()
        const base64Promise = new Promise<string>((resolve) => {
          reader.onloadend = () => {
            const base64String = reader.result as string
            resolve(base64String.split(',')[1]) // Remove data:image/jpeg;base64, prefix
          }
          reader.readAsDataURL(file)
        })

        const base64Data = await base64Promise
        fileData.push({
          name: file.name,
          type: file.type,
          data: base64Data,
        })
      }
    }

    await submitForm({
      ...formData,
      submissionTime,
      attachments: fileData.length > 0 ? fileData : undefined,
    })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <CheckCircleIcon className="w-24 h-24 text-green-600 mx-auto mb-4" />
        <h3 className="text-3xl font-orbitron font-bold text-green-900 mb-3">
          Thank You!
        </h3>
        <p className="text-lg text-green-700 mb-4 font-jost">
          Your quote request has been received. We'll get back to you within 24 hours!
        </p>
        <p className="text-sm text-green-600 font-jost">
          Our team is reviewing your inquiry and will provide a detailed quote soon...
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          <p className="font-orbitron font-semibold">Error</p>
          <p className="text-sm mt-1 font-jost">{error}</p>
        </div>
      )}

      {/* Honeypot field - hidden from users, bots will fill it */}
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-orbitron font-semibold text-gray-700 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            onFocus={handleFirstInteraction}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent font-jost text-gray-900 placeholder:text-gray-400"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-orbitron font-semibold text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            onFocus={handleFirstInteraction}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent font-jost text-gray-900 placeholder:text-gray-400"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-orbitron font-semibold text-gray-700 mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onFocus={handleFirstInteraction}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent font-jost text-gray-900 placeholder:text-gray-400"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-orbitron font-semibold text-gray-700 mb-2">
            Property/Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            onFocus={handleFirstInteraction}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent font-jost text-gray-900 placeholder:text-gray-400"
            placeholder="Property name or company"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-orbitron font-semibold text-gray-700 mb-2">
          Service Needed
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          onFocus={handleFirstInteraction}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent font-jost text-gray-900 placeholder:text-gray-400"
          placeholder="e.g., Bathtub reglazing, Kitchen countertop"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-orbitron font-semibold text-gray-700 mb-2">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          onFocus={handleFirstInteraction}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent font-jost text-gray-900 placeholder:text-gray-400"
          placeholder="Tell us about your reglazing needs, number of units, location, timeline, etc..."
        />
      </div>

      <div>
        <label htmlFor="attachments" className="block text-sm font-orbitron font-semibold text-gray-700 mb-2">
          Attachments (Optional)
        </label>
        <input
          ref={fileInputRef}
          type="file"
          id="attachments"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent font-jost text-gray-900"
        />
        {files && (
          <p className="text-sm text-green-600 mt-2 font-jost">
            {files.length} file{files.length > 1 ? 's' : ''} selected ({Math.round(Array.from(files).reduce((acc, file) => acc + file.size, 0) / 1024)}KB)
          </p>
        )}
        {fileError && (
          <p className="text-sm text-red-600 mt-2 font-jost">{fileError}</p>
        )}
        <p className="text-xs text-gray-500 mt-2 font-jost">
          Upload photos of areas needing reglazing. Max 10MB total. Accepted: JPG, PNG, WebP, HEIC
        </p>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-orbitron font-bold text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          {isSubmitting ? 'Sending Request...' : 'Request Free Quote'}
        </button>
      </div>

      <p className="text-sm text-gray-600 text-center font-jost">
        We typically respond within 24 hours with a detailed quote.
      </p>
    </form>
  )
}
