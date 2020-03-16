import React, { useEffect, useContext } from 'react'
import { Context as weatherContext } from '../context/weatherContext'
import { Container, ListGroup, ListGroupItem, Button, Alert } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ModalExample from '../components/modal'


const PostPage = () => {
    const { state, getnames, remove_item, geocode, getWeather } = useContext(weatherContext)

    useEffect(() => {
        getnames()
    }, [])

    console.log(state.names)
    return (

        <Container>

            <ListGroup>
                <ModalExample />
                <TransitionGroup className="shopping-list">
                    {state.names.map(({ id, name }) => (
                        <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button
                                    className='remove-btn'
                                    color='danger'
                                    size='sm'
                                    onClick={() => {
                                        //alert(id)
                                        remove_item(id)
                                        //setItems(items.filter(item => item.id !== id))
                                    }}
                                > &times; </Button>
                                {name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    )
}

export default PostPage
