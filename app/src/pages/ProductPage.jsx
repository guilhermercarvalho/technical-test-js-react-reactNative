import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import { Button, Container, Row, Col, Card, ListGroup } from 'react-bootstrap'
import { detailsProduct } from '../actions/productActions'
import { loadContent } from '../helpers'

export default function ProductPage() {
  const { id: productId } = useParams()

  const history = useHistory()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(detailsProduct(productId))
  }, [dispatch, productId])

  const addToCardHandler = () => {
    history.push(`/cart/${productId}?qty=${1}`)
  }

  let border
  switch (product?.plataform) {
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
    <Container>
      <Row className="justify-content-center">
        <Col />
        {loading || error ? (
          loadContent(loading, error)
        ) : (
          <Col className="text-center align-middle col-6">
            <div className="cards_landscape_wrap-2">
              <div className={product.plataform}>
                <Card border={border}>
                  <Card.Body>
                    <Card.Img
                      className="rounded"
                      variant="top"
                      src={`${process.env.PUBLIC_URL}/images/${product.image}`}
                    />
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <Row>
                            <Col>Score:</Col>
                            <Col>{product.score}</Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col>Preço:</Col>
                            <Col>R${product.price.toFixed(2)}</Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col>
                              <Button
                                type="submit"
                                variant="outline-success"
                                onClick={addToCardHandler}
                              >
                                Adicionar ao carrinho
                              </Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <Row>
              <Col>
                <p>*Frete grátis em compras acima de R$250.00</p>
              </Col>
            </Row>
          </Col>
        )}
        <Col />
      </Row>
    </Container>
  )
}
