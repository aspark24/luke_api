import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const People = () => {
    const [people, setPeople]= useState()
    const {id}= useParams()
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/${id}')
        .then(response=>{
            setPeople(response.data)
        })
        .catch(err=>{
            console.log('There is an ERROR!!')
        })
    },[id])
    return (
        <div>
            {
                people?
                <div>
                    <h1>{people.name}</h1>
                    <p>Height: {people.height}</p>
                    <p>Mass: {people.mass}</p>
                    <p>Hair Color: {people.hair_color}</p>
                    <p>Skin Color: {people.skin_color}</p>
                </div>:
                <p>people can't be found</p>
            }
        </div>
    )
}

export default People