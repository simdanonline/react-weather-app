import React, { useContext, useEffect, useState } from 'react'
import { Container, ListGroup, ListGroupItem, Button, Alert } from 'reactstrap'
import { Context as weatherContext } from '../context/weatherContext'


const Home = () => {



    const { state, getnames, remove_item, geocode, getWeather } = useContext(weatherContext)

    useEffect(() => {
        // getnames()
    }, [])

    const [address, setAddress] = useState('')
    const handleChange = (event) => {
        setAddress(event.target.value);
    }

    // console.log(state)



    return (

        <div className='we' >




            <div className='containers' >
                <div>
                    <h1 style={{ color: '#D2D2C6', marginBottom: 50, }}> Check your weather status </h1>
                    <input value={address} onChange={handleChange} style={{ marginRight: 10, width: 300, height: 45, borderRadius: 5, padding: 10 }} />
                    <Button onClick={() => getWeather(address)} style={{ height: 50, color: '#343A40' }} > Check weather status </Button>

                </div>
                <div className='space' >
                    {state.weather && state.weather !== "Can't find location" && state.weather !== "Couldn't fetch response, try again" ?
                        <Alert color="success">
                            {state.weather}
                        </Alert>
                        : null}
                </div>

                <div className='space' >
                    {state.weather && state.weather === "Can't find location" ?
                        <Alert color="danger">
                            {state.weather}
                        </Alert>
                        : null}
                </div>

                <div className='space' >
                    {state.weather && state.weather === "Couldn't fetch response, try again" ?
                        <Alert color="danger">
                            {state.weather}
                        </Alert>
                        : null}
                </div>

            </div>








        </div>
    )
}

export default Home
