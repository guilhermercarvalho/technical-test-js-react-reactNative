import React from 'react'

export default function Error(props) {
  const { children, variant } = props
  return (
    <div
      className={`d-flex justify-content-center text-lowercase alert alert-${variant}`}
      role="alert"
    >
      <div>{children}</div>
    </div>
  )
}
