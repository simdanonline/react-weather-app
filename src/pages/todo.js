import React, { useContext, useEffect, useState } from 'react'
import { Context as weatherContext } from '../context/weatherContext'
import { Container, ListGroup, ListGroupItem, Button, Alert } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import TodoModal from '../components/todoModal'


const Todos = () => {
    const { state, getTodos, deleteTodo, markCompeleted } = useContext(weatherContext)
    useEffect(() => {
        getTodos()
    }, [])

    const [comp, setComplete] = useState(false)

    const markCompelted = (id) => {
        // alert(id)
        state.todo.map(todo => {
            // alert(todo.id)
            if (todo.id === id) {
                // alert(todo.title)
                const d = todo.completed = !todo.completed
                markCompeleted(id, todo.title, d)
            }
            return todo;
        })

    }





    return (
        <Container>

            <ListGroup>
                {/* <ModalExample /> */}
                <TodoModal />
                <TransitionGroup className="shopping-list">
                    {state.todo.map(({ id, title, completed }) => (
                        <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button
                                    className='remove-btn'
                                    color='danger'
                                    size='sm'
                                    onClick={() => {
                                        deleteTodo(id)
                                        //alert(id)
                                        //   remove_item(id)
                                        //setItems(items.filter(item => item.id !== id))
                                    }}
                                > &times; </Button>

                                <p onClick={() => markCompelted(id)} style={{ textDecoration: completed ? 'line-through' : 'none' }} >{title}  </p>
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    )
}

export default Todos
