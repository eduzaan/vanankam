"use client"
import React from 'react'
import Button from '@/components/ui/Button'
import Toast from '@/components/ui/Toast'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { careersSchema, CareersForm } from '@/lib/validators'

export default function CareersApplyPage() {
  const { register, handleSubmit, formState } = useForm<CareersForm>({ resolver: zodResolver(careersSchema) })
  const { errors, isSubmitting } = formState

  async function onSubmit(data: CareersForm) {
    try {
      const res = await fetch('/api/careers/apply', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      const json = await res.json()
      if (res.ok) {
        alert(json.message || 'Application received')
      } else {
        alert(json.error || 'Submission failed')
      }
    } catch (err) {
      alert('Network error')
    }
  }

  return (
    <section className="container mx-auto px-4 py-20 max-w-xl">
      <h1 className="text-3xl font-bold mb-4">Apply for a role</h1>
      <p className="text-muted-foreground mb-4">Please fill in your details and include a link to your resume (Google Drive/Dropbox) or portfolio.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1">Full name</label>
          <input {...register('name')} aria-label="Full name" className="w-full input" />
          {errors.name && <div className="text-sm text-red-500">{String(errors.name.message)}</div>}
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input {...register('email')} type="email" aria-label="Email" className="w-full input" />
          {errors.email && <div className="text-sm text-red-500">{String(errors.email.message)}</div>}
        </div>
        <div>
          <label className="block mb-1">Resume (link)</label>
          <input {...register('resume')} aria-label="Resume link" className="w-full input" />
        </div>
        <Button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit Application'}</Button>
      </form>
    </section>
  )
}
