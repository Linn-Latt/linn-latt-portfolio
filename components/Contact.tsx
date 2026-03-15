'use client'

import { useState } from 'react'
import { Send, Mail, User, MessageSquare, Phone, Github } from 'lucide-react'

interface FormData {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="min-h-screen px-10 py-10 max-w-4xl mx-auto scroll-mt-14">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>

          {/* Qucik Links */}
          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href="https://github.com/Linn-Latt" target="_blank"
              className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 dark:border-gray-600
                  rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <Github size={16} />

              {/* Mobile */}
              <span className="sm:hidden">GitHub</span>

              {/* Desktop */}
              <span className="hidden sm:inline">
                github.com/Linn-Latt
              </span>
            </a>

            <a
              href="mailto:linnlatt.ww11@gmail.com"
              className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 dark:border-gray-600
                rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <Mail size={16} />

              <span className="sm:hidden">Email</span>

              <span className="hidden sm:inline">
                linnlatt.ww11@gmail.com
              </span>
            </a>

            <a
              href="tel:09771635588"
              className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 dark:border-gray-600
                rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <Phone size={16} />

              <span className="sm:hidden">Phone</span>

              <span className="hidden sm:inline">
                09771635588
              </span>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="flex w-full items-center gap-2 text-sm font-medium mb-2">
                <User size={16} /> Name
              </label>
              <input
                type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                className="w-full px-4 border-b bg-primary focus:outline-none focus:border-accent transistion"
                placeholder="Your full name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium mb-2">
                <Mail size={16} /> Email
              </label>
              <input
                type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                className="w-full px-4 border-b bg-primary focus:outline-none focus:border-accent transistion"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium mb-2">
              <MessageSquare size={16} /> Message
            </label>
            <textarea
              id="message" name="message" value={formData.message} onChange={handleChange} required
              rows={2}
              className="w-full px-4 pt-3 border-b bg-primary focus:outline-none focus:border-accent transistion"
              placeholder="Tell me about your project or just say hello..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-1/3 flex items-center justify-center gap-2 px-6 py-3 
                       bg-[#C07F00] dark:bg-[#C07F00] hover:opacity-80 disabled:opacity-40
                       text-white font-medium rounded-lg transition-all duration-200
                       focus:ring-2 focus:ring-[#C07F00]/50 focus:ring-offset-2"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                Sending...
              </>
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg">
              <p className="text-green-800 dark:text-green-200 text-center">
                Thank you! Your message has been sent successfully. I'll get back to you soon.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-lg">
              <p className="text-red-800 dark:text-red-200 text-center">
                Sorry, there was an error sending your message. Please try again or contact me directly.
              </p>
            </div>
          )}
        </form>

        {/* Alternative Contact Info */}
        <div className="mt-10 text-center">
          <p className="text-secondary mb-4">
            Or reach out directly:
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-2 text-[#C07F00] dark:text-[#D8A25E] hover:underline"
          >
            <Mail size={16} />
            your.email@example.com
          </a>
        </div>
      </div>
    </section>
  )
}