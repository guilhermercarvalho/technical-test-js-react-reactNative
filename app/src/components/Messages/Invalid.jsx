import React from 'react'

export default function Invalid({ className, error }) {
  return (
    <div className={className || 'invalid-feedback text-lowercase'}>
      {error}
    </div>
  )
}
