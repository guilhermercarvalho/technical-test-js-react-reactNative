import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { listProducts } from '../actions/productActions'
import { loadContent } from '../helpers'
import Product from '../components/Product'

export default function HomePage() {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, products, error } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <Container>
      <Row>
        {loading || error
          ? loadContent(loading, error)
          : products.map((el) => (
              <Col key={el.id}>
                <Product product={el} />
              </Col>
            ))}
      </Row>
    </Container>
  )
}
