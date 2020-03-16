import React, { useState, useContext } from 'react'
import { Container, Button } from 'reactstrap'
import { Context as weatherContext } from '../context/weatherContext'


const ContactPage = () => {
    const { state } = useContext(weatherContext)

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleName = (event) => {
        setName(event.target.value);
    }
    const handlePhone = (event) => {
        setPhone(event.target.value);
    }
    const handleSubject = (event) => {
        setSubject(event.target.value);
    }
    const handleBody = (event) => {
        setBody(event.target.value);
    }

    const sendEmail =  ({ email, name, phone, subject, body }) => {
        console.log(email, name, phone, subject, body)
        setEmail('')
        setName('')
        setPhone('')
        setSubject('')
        setBody('')
    
    }



    return (
        <Container>
            <div>
                <h2 style={{ color: '#6C757D', marginTop: 40, marginBottom: 30}} > Contact Us </h2>
                <input value={email} onChange={handleEmail} style={{ marginBottom: 10, width: 500, padding: 5, borderRadius: 5, borderWidth: 1 }} placeholder='Email' /> 
                <br />
                <input value={name} onChange={handleName} style={{ marginBottom: 10, width: 500, padding: 5, borderRadius: 3, borderWidth: 1 }} placeholder='Name' /> 
                <br />
                <input value={phone} onChange={handlePhone} style={{ marginBottom: 10, width: 500, padding: 5, borderRadius: 3, borderWidth: 1 }} placeholder='Phone number' /> 
                <br />
                <input value={subject} onChange={handleSubject} style={{ marginBottom: 10, width: 500, padding: 5, borderRadius: 3, borderWidth: 1 }} placeholder='Subject' /> 
                <br />
                <textarea value={body} onChange={handleBody} style={{ marginBottom: 10, width: 500, padding: 15, borderRadius: 3, borderWidth: 1 }} placeholder='Body' />
                <br />
                <Button onClick={() => { sendEmail({ email, name, phone, subject, body }) }} > Send </Button>

            </div>
        </Container>
    )
}

export default ContactPage
