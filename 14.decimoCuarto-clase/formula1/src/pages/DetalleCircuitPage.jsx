import React, { useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router'
import { getCircuitById } from '../services/circuitFetch'

const DetalleCircuitPage = () => {

  const [circuitDetail, setCircuitDetail ] = useState(undefined)
  const { 
    id
  } = useParams()
  const navigate = useNavigate()

  const loadDetail = () => {
    const auxCircuit = getCircuitById(id)
    setCircuitDetail(auxCircuit)
  }

  const goToList = () => {
    navigate('/')
  }

  useEffect(() => {
    loadDetail()
  }, [])

  return (
    <div>
      <h2>Detalle del circuito </h2>
      {
        !circuitDetail ? (
          <div>Loading...</div>
        ) : (
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <span>ID: {circuitDetail.id}</span>
            <span>Nombre: {circuitDetail.nombre}</span>
            <span>KM: {circuitDetail.km}</span>
            <span>País: {circuitDetail.pais}</span>
          </div>
        )
      }
      <button onClick={goToList}>Volver</button>
    </div>
  )
}

export default DetalleCircuitPage