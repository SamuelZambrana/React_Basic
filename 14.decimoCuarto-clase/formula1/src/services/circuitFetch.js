const circuits = [
    {
        "id": "f21d9fd1-8496-4f8f-b56f-5893cc3dfc49",
        "nombre": "Autodromo Nazionale Monza",
        "km": 5.793,
        "pais": "Italia"
    },
    {
        "id": "69a5f577-e49e-47ad-b7c1-1e7de8d93d36",
        "nombre": "Circuit de Spa-Francorchamps",
        "km": 7.004,
        "pais": "Bélgica"
    },
    {
        "id": "bb1a5bc9-9c4d-4208-9fd0-589e0ec11770",
        "nombre": "Silverstone Circuit",
        "km": 5.891,
        "pais": "Reino Unido"
    },
    {
        "id": "6dd6dbcf-d0db-421e-a7d9-38bbf1926d2e",
        "nombre": "Circuit de Monaco",
        "km": 3.337,
        "pais": "Mónaco"
    },
    {
        "id": "c356b12e-060d-4cb6-bce7-4983ef9ae727",
        "nombre": "Suzuka International Racing Course",
        "km": 5.807,
        "pais": "Japón"
    },
    {
        "id": "f1b64700-0bc7-4a10-bffe-f8aeb661ce59",
        "nombre": "Autódromo José Carlos Pace",
        "km": 4.309,
        "pais": "Brasil"
    },
    {
        "id": "6f0b6f3b-8b15-4eb3-b4d4-ecc4f2ebffb1",
        "nombre": "Circuit of the Americas",
        "km": 5.513,
        "pais": "Estados Unidos"
    },
    {
        "id": "af37fdf1-91de-4a4f-bec4-99b2bb40298e",
        "nombre": "Yas Marina Circuit",
        "km": 5.281,
        "pais": "Emiratos Árabes Unidos"
    },
    {
        "id": "c94a61b1-358b-4cb1-9b6d-fad2745d2585",
        "nombre": "Circuit de Barcelona-Catalunya",
        "km": 4.657,
        "pais": "España"
    },
    {
        "id": "fbc429f6-d37c-4cf1-97ed-f1d37a98a6ef",
        "nombre": "Hungaroring",
        "km": 4.381,
        "pais": "Hungría"
    }
]


export const getCircuits = () => {
    return circuits.map(c => {
        return {
            id: c.id,
            nombre: c.nombre
        }
    })
}

export const getCircuitById = (idCircuit) => {
    const res = circuits.find(c => c.id == idCircuit)
    return res
}