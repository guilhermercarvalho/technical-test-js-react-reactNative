import React, { useEffect } from 'react'
import { Container, Row, Col, Button, Card, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { useQuery } from '../helpers'

export default function CartPage() {
  const { id: productId } = useParams()
  const history = useHistory()
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const query = useQuery(useLocation())
  const qty = query.get('qty') ? Number(query.get('qty')) : 1

  const dispatch = useDispatch()

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/shipping')
  }

  return (
    <Container fluid>
      <Row>
        <Col className="col-12 text-center">
          <h1>Carrinho</h1>
        </Col>
      </Row>
      {cartItems.length === 0 ? (
        <Row className="justify-content-center">
          <Col>
            <h4 className="text-center">
              Seu carrinho está vazio :(
              <br />
              <Link to="/">voltar às compras</Link>
            </h4>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col className="text-center">
            <Card className="justify-content-center align-middle">
              <Card.Body>
                <Card.Title className="text-center">Itens</Card.Title>
                <Card.Text>
                  <ListGroup variant="flush">
                    {cartItems.map((item) => (
                      <ListGroup.Item key={item.product}>
                        <Row className="mx-md-n5">
                          <Col className="px-md-5">
                            <img
                              src={`./images/${item.image}`}
                              alt={item.name}
                              style={{ maxHeight: 'auto', maxWidth: '50px' }}
                            />
                          </Col>
                          <Col className="px-md-5">
                            <Link to={`/product/${item.product}`}>
                              {item.name}
                            </Link>
                          </Col>
                          <Col className="px-md-5">
                            R$
                            {item.price.toFixed(2)}
                          </Col>
                          <Col className="px-md-5">
                            <button
                              className="btn btn-danger btn-sm"
                              type="button"
                              onClick={() =>
                                removeFromCartHandler(item.product)
                              }
                            >
                              <i className="fas fa-trash" />
                            </button>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} xl={3} xxl={1}>
            <Card>
              <Card.Body className="text-center">
                <Card.Title>Resumo dos Pedidos</Card.Title>
                <Card.Subtitle>Subtotal</Card.Subtitle>
                <Card.Text>
                  <div>
                    <Col>
                      <h5>
                        {cartItems.reduce((a, c) => a + c.qty, 0)} Item(s):
                      </h5>
                    </Col>
                    <Col>
                      <h5>
                        R$
                        {cartItems
                          .reduce((a, c) => a + c.price * c.qty, 0)
                          .toFixed(2)}
                      </h5>
                    </Col>
                  </div>
                  <div>
                    <Button
                      onClick={checkoutHandler}
                      variant="success"
                      disabled={cartItems.length === 0}
                    >
                      Realizar Checkout
                    </Button>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  )
}
