import React from 'react';
import axios from 'axios'


const fetch = (dispatch) => async () => {
    axios.get('/help')
}

{/* <div className='space' >
                <ModalExample />
            </div> */}




{/*  <ListGroup><TransitionGroup className="shopping-list">
                    {state.map(({ id, name }) => (
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
                 </ListGroup> */}
