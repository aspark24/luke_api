import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Planet = () => {
    const [planet, setPlanet] = useState()
    const {id} = useParams()
    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/${id}')
        .then(response => {
            setPlanet(response.data)
        })
        .catch(err => {
            console.log('There is an error on the planet!!')
        })
    }, [id])
    return(
        <div>
            {
                planet?
                <div>
                    <h1>{planet.name}</h1>
                    <p>Climate: {planet.climate}</p>
                    <p>Terrain: {planet.terrain}</p>
                    <p>Surface Water: {planet.surface_water}</p>
                    <p>Population: {planet.population}</p>
                </div>:
                <p>plnaet cant be found</p>
            }
        </div>
    )
}

export default Planet