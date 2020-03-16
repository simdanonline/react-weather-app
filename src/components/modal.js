import React, { useState, useContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { v1 as uuid } from 'uuid';
import { Context as weatherContext } from '../context/weatherContext'
import { Container } from 'reactstrap'


const ModalExample = (props) => {
    const {

        className
    } = props;

    const { add_item } = useContext(weatherContext)


    const [modal, setModal] = useState(false);
    const [name, setName] = useState('')

    const toggle = () => setModal(!modal);
    const handleChange = (event) => {
        setName(event.target.value);
    }

    return (
        <Container style={{ marginBottom: 10, marginTop: 10 }} >
            <Button color="danger" onClick={toggle}> Add item </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <input
                        value={name}
                        onChange={handleChange}
                        autoFocus
                        style={{ borderRadius: 5, borderColor: 'red', borderWidth: 1 }}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="dark"
                        style={{ marginBottom: '2rem' }}
                        onClick={() => {
                            // const name = prompt('Enter name')
                            const id = uuid()
                            if (name) {
                                add_item({ name, id })
                                setName('')
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

export default ModalExample