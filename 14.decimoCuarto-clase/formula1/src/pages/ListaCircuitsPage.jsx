import React from 'react'
import { useState } from 'react'
import { getCircuits } from '../services/circuitFetch'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

const ListaCircuitsPage = () => {

  const navigate = useNavigate()
  const [listaCircuitos, setListaCircuitos] = useState(undefined)

  const loadCircuitos = () => {
    const aux = getCircuits()
    setListaCircuitos(aux)
  }

  const goToDetail = (idCircuit) => {
    navigate(`/detalle/${idCircuit}`)
  }


  useEffect(() => {
    loadCircuitos()
  }, [])

  return (
    <div>
      {
        !listaCircuitos ? (
          <div>Loading...</div>
        ) : (
          <>
            <h2>Lista de circuitos</h2>
            <hr />
            {
              listaCircuitos.map((c, idx) => (
                <div key={idx} style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>ID: {c.id}</span>
                  <span>Nombre: {c.nombre}</span>
                  <button onClick={() => goToDetail(c.id)}>Ver detalle</button>
                </div>
              ))
            }
          </>
        )
      }
    </div>
  )
}

export default ListaCircuitsPage