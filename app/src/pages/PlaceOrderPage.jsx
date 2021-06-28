import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Container, Row, Col, Button, ListGroup, Card } from 'react-bootstrap'
import { createOrder } from '../actions/orderActions'
import CheckoutSteps from '../components/CheckoutSteps'
import { ORDER_CREATE_RESET } from '../constants/orderConstants'

function showAddress(shippingAddress) {
  const { address } = shippingAddress
  const complement =
    address.complement.length > 0 ? `, ${address.complement} - ` : ' - '
  return (
    <>
      {' '}
      {address.street}, {address.number}
      {complement} {address.district}. {address.city}/{address.state}. CEP:{' '}
      {address.cep}.
    </>
  )
}

export default function PlaceOrderPage() {
  const cart = useSelector((state) => state.cart)

  const history = useHistory()

  const order = useSelector((state) => state.order)
  const { orders, success } = order

  const toPrice = (num) => Number(num.toFixed(2)) // 5.123 => "5.12" => 5.12

  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  )
  cart.shippingPrice =
    cart.itemsPrice > 250 ? toPrice(0) : toPrice(10) * cart.cartItems.length
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice

  const dispatch = useDispatch()
  const placeOrderHandler = () => {
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }))
  }

  useEffect(() => {
    if (success) {
      history.push(`/order/${orders[orders.length - 1].id}`)
      dispatch({ type: ORDER_CREATE_RESET })
    }
  }, [dispatch, orders, history, success])

  return (
    <>
      <CheckoutSteps step1 step2 />
      <Container fluid>
        <Row>
          <Col lg={8} xl={9} xxl={8}>
            <ul style={{ listStyleType: 'none' }}>
              <li>
                <Card>
                  <Card.Body>
                    <Card.Title>Entrega</Card.Title>
                    <Card.Text>
                      <strong>Nome Completo:</strong>{' '}
                      {cart.shippingAddress.fullName} <br />
                      <strong>Endereço de Envio: </strong>
                      {showAddress(cart.shippingAddress)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </li>
              <li>
                <Card>
                  <Card.Body>
                    <Card.Title>Itens</Card.Title>
                    <Card.Text>
                      <ListGroup variant="flush">
                        {cart.cartItems.map((item) => (
                          <ListGroup.Item key={item.product}>
                            <Row>
                              <Col>
                                <img
                                  src={`./images/${item.image}`}
                                  alt={item.name}
                                  style={{
                                    maxHeight: 'auto',
                                    maxWidth: '50px',
                                  }}
                                />
                              </Col>

                              <Col>
                                <Link to={`/product/${item.product}`}>
                                  {item.name}
                                </Link>
                              </Col>

                              <Col>
                                R${(item.qty * item.price).toFixed(2)} + R$
                                {cart.shippingPrice > 0
                                  ? Number(10).toFixed(2)
                                  : Number(0).toFixed(2)}
                              </Col>
                            </Row>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </li>
            </ul>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Resumo do Pedido</Card.Title>
                <Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col className="text-start">Subtotal</Col>
                        <Col className="text-end">
                          R${cart.itemsPrice.toFixed(2)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col className="text-start">Frete</Col>
                        <Col className="text-end">
                          {cart.shippingPrice <= 0 ? (
                            <p
                              className="text-danger"
                              style={{ textDecoration: 'line-through' }}
                            >
                              R$
                              {(toPrice(10) * cart.cartItems.length).toFixed(2)}
                            </p>
                          ) : (
                            <p>R${cart.shippingPrice.toFixed(2)}</p>
                          )}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col className="text-start">
                          <strong>Total</strong>
                        </Col>
                        <Col className="text-end">
                          R${cart.totalPrice.toFixed(2)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <div className="text-center">
                        <Button
                          variant="success"
                          onClick={placeOrderHandler}
                          disabled={cart.cartItems.length === 0}
                        >
                          Finalizar Pedido
                        </Button>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
