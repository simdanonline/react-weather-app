import React, { useState, useContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { v1 as uuid } from 'uuid';
import { Context as weatherContext } from '../context/weatherContext'
import { Container } from 'reactstrap'


const TodoModal = (props) => {
    const {

        className
    } = props;

    const { addTodo } = useContext(weatherContext)


    const [modal, setModal] = useState(false);
    const [title, setName] = useState('')
    const [completed, setC] = useState(false)

    const toggle = () => setModal(!modal);
    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleTChange = (event) => {
        setC(event.target.value);
    }

    return (
        <Container style={{ marginBottom: 10, marginTop: 10 }} >
            <Button color="danger" onClick={toggle}> Add item </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody style={{ flexDirection: 'column' }} >
                    <p style={{ marginTop: 20 }} > Todo task?</p>

                    <input
                        value={title}
                        onChange={handleChange}
                        autoFocus
                        style={{ borderRadius: 5, borderColor: 'red', borderWidth: 1, padding: 10 }}
                        placeholder='Todo task'
                    />
                    <br />
                    <p style={{ marginTop: 20 }} > Completed?</p>
                    <input
                        value={completed}

                        placeholder='True/false'
                        onChange={handleTChange}
                        autoFocus
                        style={{ borderRadius: 5, borderColor: 'red', borderWidth: 1, padding: 10 }}
                    />

                </ModalBody>
                <ModalFooter>
                    <Button
                        color="dark"
                        style={{ marginBottom: '2rem' }}
                        onClick={() => {
                            // const name = prompt('Enter name')
                            //  const id = uuid()
                            if (title) {
                                addTodo(title)
                                setName('')
                                setC(false)
                            }
                            toggle()
                        }}
                    >
                        Add stuffs
            </Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}

export default TodoModal