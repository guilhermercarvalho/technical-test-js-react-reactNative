import { React } from 'react'
import './CheckoutSteps.css'

export default function CheckoutSteps({ step1, step2 }) {
  return (
    <div className="row checkout-steps text-center">
      <div className={step1 ? 'active' : ''}>Envio</div>
      <div className={step2 ? 'active' : ''}>Pedido</div>
    </div>
  )
}
