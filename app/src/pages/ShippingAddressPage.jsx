import isValidCep from '@brazilian-utils/is-valid-cep'
import cepPromise from 'cep-promise'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'
import { InvalidMessage } from '../components/Messages'
import { normalize } from '../helpers'

const schema = yup.object().shape({
  fullName: yup
    .string()
    .required('nome completo é requerido')
    .matches(
      /^[a-zA-Z\u00C0-\u00FF_]+( [a-zA-Z\u00C0-\u00FF_]+)*$/i,
      'deve conter apenas letras'
    ),

  cep: yup
    .string()
    .required('CEP é requerido')
    .matches(/[0-9]{5}-[0-9]{3}/, 'CEP inválido')
    .test('isCep', 'CEP inválido', (value) => isValidCep(value)),
  number: yup
    .number()
    .typeError('deve ser um número')
    .required('numero é requerido'),
  complement: yup.string().notRequired(),
})

export default function ShippingAddressScreen() {
  const cart = useSelector((state) => state.cart)

  const { shippingAddress } = cart

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: shippingAddress.fullName,
      cep: shippingAddress?.address?.cep,
      number: shippingAddress?.address?.number,
      complement: shippingAddress?.address?.complement,
    },
  })

  const history = useHistory()

  const [street, setStreet] = useState('')
  const [district, setDistrict] = useState('')
  const [city, setCity] = useState('')
  const [stateCity, setStateCity] = useState('')
  const [cep, setCep] = useState(getValues('cep'))

  useEffect(() => {
    if (isValidCep(cep)) {
      cepPromise(cep)
        .then((data) => {
          setStreet(data.street)
          setDistrict(data.neighborhood)
          setCity(data.city)
          setStateCity(data.state)
        })
        .catch()
    } else {
      setStreet('')
      setDistrict('')
      setCity('')
      setStateCity('')
    }
  }, [undefined, cep])

  const dispatch = useDispatch()

  const onSubmitHandler = (data) => {
    dispatch(
      saveShippingAddress({
        fullName: data.fullName,
        address: {
          cep: data.cep,
          street,
          district,
          city,
          state: stateCity,
          number: data.number,
          complement: data.complement,
        },
      })
    )
    history.push('/placeorder')
  }

  return (
    <div className="container-fluid">
      <CheckoutSteps step1 />
      {/* Row Address */}
      <div className="row justify-content-center align-items-center">
        <div className="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
          <div className="mb-3 justify-content-center text-center">
            <h3>Endereço de Envio</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
            {/* fullName */}
            <div className="mb-3">
              <label htmlFor="inputFullName">Nome Completo</label>
              <input
                id="inputFullName"
                className={`form-control ${
                  errors.fullName ? 'is-invalid' : ''
                }`}
                name="fullName"
                {...register('fullName')}
              />
              <InvalidMessage error={errors.fullName?.message} />
            </div>

            {/* CEP */}
            <div className="mb-3">
              <label htmlFor="inputCEP" className="form-label">
                CEP
              </label>
              <input
                id="inputCEP"
                className={`form-control ${errors.cep ? 'is-invalid' : ''}`}
                placeholder="00000-000"
                name="cep"
                maxLength="9"
                type="tel"
                {...register('cep')}
                onChange={(e) => {
                  e.target.value = normalize.cep(e.target.value)
                  setCep(e.target.value)
                }}
              />
              <InvalidMessage error={errors.cep?.message} />
            </div>

            {/* Number */}
            <div className="mb-3">
              <label htmlFor="inputNumber" className="form-label">
                Número
              </label>
              <input
                name="number"
                className={`form-control ${errors.number ? 'is-invalid' : ''}`}
                id="inputNumber"
                placeholder="0000"
                type="tel"
                {...register('number')}
              />
              <InvalidMessage error={errors.number?.message} />
            </div>

            {/* Complement */}
            <div className="mb-3">
              <label htmlFor="inputComplement" className="form-label">
                Complemento
              </label>
              <input
                id="inputComplement"
                className={`form-control ${
                  errors.complement ? 'is-invalid' : ''
                }`}
                name="complement"
                {...register('complement')}
              />
              <InvalidMessage error={errors.complement?.message} />
            </div>

            {/* Street */}
            <div className="mb-3">
              <label htmlFor="inputStreet" className="form-label">
                Rua
              </label>
              <input
                type="text"
                className="form-control"
                id="inputStreet"
                placeholder="Av. Paulo VI"
                disabled
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>

            {/* District */}
            <div className="mb-3">
              <label htmlFor="inputDistrict" className="form-label">
                Bairro
              </label>
              <input
                type="text"
                className="form-control"
                id="inputDistrict"
                placeholder="Jardim Alvorada"
                disabled
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
            </div>

            {/* City */}
            <div className="mb-3">
              <label htmlFor="inputCity" className="form-label">
                Cidade
              </label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="Franca"
                disabled
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            {/* State */}
            <div className="mb-3">
              <label htmlFor="inputState" className="form-label">
                Estado
              </label>
              <input
                type="text"
                className="form-control"
                id="inputState"
                placeholder="SP"
                disabled
                value={stateCity}
                onChange={(e) => setStateCity(e.target.value)}
              />
            </div>

            {/* Submit - Button */}
            <div className="mb-3 d-grid gap-2 d-md-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-success"
                disabled={!isValid}
              >
                Continuar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
