import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import "./bg.css"

export default function Etape3() {

    const [name, setName] = useState("")

    let { id } = useParams();

    useEffect(() => {

        if (!name) {
            axios.get("https://swapi.dev/api/starships/" + id)
                .then(res => {
                    console.log(res.data);
                    setName(res.data)
                })
        }

    }, [name, id])

  return (

    <div className='bg'>
         {name ? (
                <>
                    <p>Name: {name.name}</p>
                    <p>Model: {name.model}</p>
                    <p>Manufacturer: {name.manufacturer}</p>
                    {
                        name.pilots.map((data) => {
                          return <div><a href={"/people/" + data.split("/")[5]} key={data}>Pilots: {data}</a></div> 
                        })
                    }
                </>

            ) : (
                null
            )}
    </div>
  )
}
