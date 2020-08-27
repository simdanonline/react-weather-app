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
                <p className='check_w_statz' style={{color: '#fff'}} > Check your weather status </p>
                <div>
                    <input value={address} onChange={handleChange} className='weather_input' />
                </div>
                    <br />
                <Button onClick={() => {
                    if(!address){
                        return alert('Enter a location')
                    }
                    getWeather(address)}} className='weather_btn' > {state.isFetching ? 'Loading' : 'Check weather status'} </Button>
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
    )
}

export default Home
