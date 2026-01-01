import { useState } from 'react'
import { formSubmissionSchema, type FormSubmissionInput } from '../lib/validation'

interface UseFormSubmitResult {
  isSubmitting: boolean
  isSuccess: boolean
  error: string | null
  submitForm: (data: FormSubmissionInput) => Promise<void>
  reset: () => void
}

export function useFormSubmit(): UseFormSubmitResult {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submitForm = async (data: FormSubmissionInput) => {
    setIsSubmitting(true)
    setError(null)
    setIsSuccess(false)

    try {
      // Validate data
      const validatedData = formSubmissionSchema.parse(data)

      // Submit to API endpoint
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to submit form')
      }

      setIsSuccess(true)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unexpected error occurred')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const reset = () => {
    setIsSubmitting(false)
    setIsSuccess(false)
    setError(null)
  }

  return {
    isSubmitting,
    isSuccess,
    error,
    submitForm,
    reset,
  }
}
