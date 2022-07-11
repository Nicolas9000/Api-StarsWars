/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import "./bg.css"

export default function Etape2() {

    const [name, setName] = useState("")

    let { id } = useParams();

    useEffect(() => {

        if (!name) {
            axios.get("https://swapi.dev/api/people/" + id)
                .then(res => {
                    // console.log(res.data);
                    setName(res.data)
                })
        }

    }, [name, id])



    return (
        <div className='bg'>


            {name ? (
                <>
                    <p>Name: {name.name}</p>
                    <p>Eye Color: {name.eye_color}</p>
                    <p>Birth Year: {name.birth_year}</p>
                    <p>Gender: {name.gender}</p>
                    {
                        name.starships.map((data) => {
                          return <div><a href={"/starship/" + data.split("/")[5]} key={data}>Starships: {data}</a></div> 
                        })
                    }
                    <p>Created: {name.created}</p>
                    <p>Edited: {name.edited}</p>
                </>

            ) : (
                null
            )}
        </div>
    )
}

