import React, { useEffect, useState } from 'react'
import {
  Container,
  Row,
  Col,
  ListGroup,
  Button,
  ButtonGroup,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { listProducts } from '../actions/productActions'
import { ErrorMessage } from '../components/Messages'
import Product from '../components/Product'
import { useQuery } from '../helpers'

export default function SearchScreen() {
  const query = useQuery(useLocation())
  const name = query.get('name')
  const alphabetically = query.get('alphabetically')
  const score = query.get('score')
  const price = query.get('price')
  const orderBy = query.get('orderBy')

  const [boolAlpha, setBoolAlpha] = useState(alphabetically === 'true')
  const [boolScore, setBoolScore] = useState(score === 'true')
  const [boolPrice, setBoolPrice] = useState(price === 'true')
  const [orderAscDesc, setOrderAscDesc] = useState('asc')

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { products } = productList

  useEffect(() => {
    dispatch(listProducts({ name, alphabetically, score, price, orderBy }))
  }, [dispatch, name, alphabetically, score, price, orderBy])

  const history = useHistory()

  useEffect(() => {
    if (boolScore) {
      query.set('alphabetically', boolAlpha ? 'true' : 'false')
      query.set('score', boolScore ? 'true' : 'false')
      query.set('price', boolPrice ? 'true' : 'false')
      query.set('orderBy', orderAscDesc)
      history.push({
        search: query.toString(),
      })
    } else if (boolAlpha) {
      query.set('score', boolScore ? 'true' : 'false')
      query.set('alphabetically', boolAlpha ? 'true' : 'false')
      query.set('price', boolPrice ? 'true' : 'false')
      query.set('orderBy', orderAscDesc)
      history.push({
        search: query.toString(),
      })
    } else if (boolPrice) {
      query.set('score', boolScore ? 'true' : 'false')
      query.set('alphabetically', boolAlpha ? 'true' : 'false')
      query.set('price', boolPrice ? 'true' : 'false')
      query.set('orderBy', orderAscDesc)
      history.push({
        search: query.toString(),
      })
    }
  }, [boolAlpha, boolScore, boolPrice, orderAscDesc])

  const orderByScore = () => {
    setBoolScore(true)
    setBoolAlpha(false)
    setBoolPrice(false)
    setOrderAscDesc('asc')
  }

  const orderByScoreDesc = () => {
    setBoolScore(true)
    setBoolAlpha(false)
    setBoolPrice(false)
    setOrderAscDesc('desc')
  }

  const orderByAlphabet = () => {
    setBoolAlpha(true)
    setBoolScore(false)
    setBoolPrice(false)
    setOrderAscDesc('asc')
  }

  const orderByAlphabetDesc = () => {
    setBoolAlpha(true)
    setBoolScore(false)
    setBoolPrice(false)
    setOrderAscDesc('desc')
  }

  const orderByPrice = () => {
    setBoolPrice(true)
    setBoolAlpha(false)
    setBoolScore(false)
    setOrderAscDesc('asc')
  }

  const orderByPriceDesc = () => {
    setBoolPrice(true)
    setBoolAlpha(false)
    setBoolScore(false)
    setOrderAscDesc('desc')
  }

  const orderByReset = () => {
    setBoolAlpha(false)
    setBoolScore(false)
    setBoolPrice(false)
    query.set('name', '')
    history.push({
      search: '?name=',
    })
  }

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <h4>{products.length} Resultado(s)</h4>
      </Row>
      <Row className="justify-content-start">
        <Col xs sm md lg={2}>
          <h4>Ordernar</h4>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Button variant="outline-secondary" onClick={orderByReset}>
                reset
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <ButtonGroup>
                <Button variant="outline-secondary" onClick={orderByPrice}>
                  +valor
                </Button>
                <Button variant="outline-secondary" onClick={orderByPriceDesc}>
                  -valor
                </Button>
              </ButtonGroup>
            </ListGroup.Item>
            <ListGroup.Item>
              <ButtonGroup>
                <Button variant="outline-secondary" onClick={orderByAlphabet}>
                  a-z
                </Button>
                <Button
                  variant="outline-secondary"
                  onClick={orderByAlphabetDesc}
                >
                  z-a
                </Button>
              </ButtonGroup>
            </ListGroup.Item>
            <ListGroup.Item>
              <ButtonGroup>
                <Button variant="outline-secondary" onClick={orderByScore}>
                  +score
                </Button>
                <Button variant="outline-secondary" onClick={orderByScoreDesc}>
                  -score
                </Button>
              </ButtonGroup>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className="col-10">
          {products.length === 0 && (
            <ErrorMessage>No Product Found</ErrorMessage>
          )}
          <Row className="justify-content-center">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
