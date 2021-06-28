import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ListGroup,
  Modal,
} from 'react-bootstrap'
import { ErrorMessage } from '../components/Messages'
import { normalize } from '../helpers'

function showAddress(shippingAddress) {
  const { address } = shippingAddress
  const complement =
    address.complement.length > 0 ? `, ${address.complement} - ` : ' - '
  return (
    <>
      {' '}
      {address.street}, {address.number}
      {complement} {address.district}. {address.city}/{address.state}. CEP:{' '}
      {normalize.cep(address.cep)}.
    </>
  )
}

export default function OrderPage() {
  const { id: orderId } = useParams()

  const orderSelector = useSelector((state) => state.order)
  const { orders } = orderSelector

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  let order
  if (orders.length > 0) {
    order = orders.find((o) => o.id === Number(orderId))
  }

  return (
    <>
      <Container>
        <Row>
          <Col className="col-12 text-center">
            <h4>Pedido {order?.id}</h4>
          </Col>
        </Row>
        {!order ? (
          <Col>
            <ErrorMessage variant="danger">Pedido não encontrado</ErrorMessage>
          </Col>
        ) : (
          <Row>
            <Col lg={9} xl={8} xxl={8}>
              <ul style={{ listStyleType: 'none' }}>
                <li>
                  <Card>
                    <Card.Body>
                      <Card.Title>Entrega</Card.Title>
                      <Card.Text>
                        <strong>Nome Completo:</strong>{' '}
                        {order.shippingAddress.fullName} <br />
                        <strong>Endereço de Entrega:</strong>
                        {showAddress(order.shippingAddress)}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </li>
                <li>
                  <Card>
                    <Card.Body>
                      <Card.Title>Itens do Pedido</Card.Title>
                      <Card.Text>
                        <ListGroup variant="flush">
                          {order.orderItems.map((item) => (
                            <ListGroup.Item key={item.product}>
                              <Row>
                                <Col>
                                  <img
                                    src={`${process.env.PUBLIC_URL}/images/${item.image}`}
                                    alt={item.name}
                                    style={{
                                      maxHeight: 'auto',
                                      maxWidth: '50px',
                                    }}
                                  />
                                </Col>
                                <Col>
                                  <Link to={`/product/${item.product.id}`}>
                                    {item.name}
                                  </Link>
                                </Col>
                                <Col>
                                  R${(item.qty * item.price).toFixed(2)} + R$
                                  {order.shippingPrice > 0
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
                <Card.Body className="text-center">
                  <Card.Title>
                    Resumo do Pedido
                    <Card.Text>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <Row>
                            <Col className="text-start">
                              <p>Subtotal</p>
                            </Col>
                            <Col className="text-end">
                              R${order.itemsPrice.toFixed(2)}
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col className="text-start">Frete</Col>
                            <Col className="text-end">
                              {order.shippingPrice <= 0 ? (
                                <p
                                  className="text-danger"
                                  style={{ textDecoration: 'line-through' }}
                                >
                                  R$
                                  {(10 * order.orderItems.length).toFixed(2)}
                                </p>
                              ) : (
                                <p>R${order.shippingPrice.toFixed(2)}</p>
                              )}
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col className="text-start">
                              <p>
                                <strong>Total</strong>
                              </p>
                            </Col>
                            <Col className="text-end">
                              R${order.totalPrice.toFixed(2)}
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      </ListGroup>
                      <div>
                        <Button variant="success" onClick={handleShow}>
                          Realizar Pagamento
                        </Button>
                      </div>
                    </Card.Text>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Desafio React Finalizado!</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
