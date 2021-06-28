import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Product({ product }) {
  let border
  switch (product.plataform) {
    case 'playstation':
      border = 'primary'
      break
    case 'nintendo':
      border = 'danger'
      break
    default:
      border = 'light'
      break
  }
  return (
    <div className="cards_landscape_wrap-2">
      <div className={product.plataform}>
        <Card border={border} style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src={`${window.location.origin}/images/${product.image}`}
          />
          <div className="text-center">Score: {product.score}</div>
          <Card.Body>
            <Card.Subtitle className="text-center">
              {product.name}
            </Card.Subtitle>
            <Card.Text className="text-center">
              <div>
                <strong>R${product.price}</strong>
              </div>
            </Card.Text>
          </Card.Body>
          <Link to={`/product/${product.id}`} className="stretched-link" />
        </Card>
      </div>
    </div>
  )
}
