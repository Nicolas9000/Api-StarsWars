/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./bg.css"

export default function Etape1() {

    const [personnage, setPersonnage] = useState("")
    const [search, setSearch] = useState("")


    useEffect(() => {

        if (!personnage) {
            axios.get("https://swapi.dev/api/people/")
                .then(res => {

                    setPersonnage(res.data.results)
                })
        }

    }, [personnage])

    return (
        <div className='bg'>

            <form>
                <label htmlFor="search">Search : </label>

                <input type="text" name="search" id="search" onChange={(e) => { setSearch(e.target.value) }} />
            </form>

            {personnage ? (
                personnage.filter((data) => {
                    if (search === "") {
                        return data
                    } else if (data.name.toLowerCase().includes(search.toLocaleLowerCase())) {
                        return data
                    }
                }).map((data, key) => (
                    <div>
                        <a href={/people/+ (key + 1)}>{data.name}</a>
                    </div>
                ))
            ) : (
                null
            )
            }
        </div>
    )
}
