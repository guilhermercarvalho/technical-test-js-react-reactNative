import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Form, FormControl, Button } from 'react-bootstrap'

export default function SearchBox() {
  const [name, setName] = useState('')

  const history = useHistory()

  const submitHandler = (e) => {
    e.preventDefault()
    history.push(
      `/search?name=${name}&score=false&alphabetically=false&price=false`
    )
  }
  return (
    <Form className="d-flex" onSubmit={submitHandler}>
      <FormControl
        type="text"
        name="q"
        id="q"
        placeholder="Pesquisar"
        className="mr-2"
        onChange={(e) => setName(e.target.value)}
      />
      <Button type="submit" variant="outline-success">
        <i className="fa fa-search" />
      </Button>
    </Form>
  )
}
