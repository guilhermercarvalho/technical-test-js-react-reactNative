import React from 'react'
import { ErrorMessage, LoadingMessage } from '../components/Messages'

export default function loadContent(loading, error) {
  if (error) {
    window.scrollTo(0, 0)
    return <ErrorMessage variant="danger">{error}</ErrorMessage>
  }
  if (loading) return <LoadingMessage />
  return <></>
}
