import createDataContext from "./createDataContext";
//import { v1 as uuid } from 'uuid';
import axios from 'axios'

const initialState = {
    items: [],
    names: [],
    todo: []
}

const docReducer = (state = initialState, action) => {
    switch (action.type) {


        case "fetch":
            return { names: action.payload }
        case "Get_TODO":
            return { todo: action.pay }
        case "AddTodo":
            return {

                todo: [...state.todo, action.payload]
            }
        case "DELETE_TODO":
            return {
                todo: [...state.todo.filter(todo => todo.id !== action.payload)]
            }
        case "MARK":
            return {
                todo: [...state.todo, action.payload]
            }
        case "weather":
            return { weather: action.payload }
        case "ADD":
            return {
                ...state,
                names: [action.payload, ...state.names]
            }
        case "Remove":
            return { names: state.names.filter(blogpost => blogpost.id !== action.payload) }

        default:
            return state;
    }

};

const getTodos = (dispatch) => () => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => {
            dispatch({
                type: "Get_TODO",
                pay: res.data
            })
            console.log(res.data)
        })
}

const addTodo = (dispatch) => (title) => {
    console.log('this is ' + title)
    axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
    })
        .then(res => {
            dispatch({
                type: "AddTodo",
                payload: res.data
            })
        })
    //  getTodos()
}

const deleteTodo = (dispatch) => (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => {
            console.log(res)
            dispatch({
                type: "DELETE_TODO",
                payload: id
            })
        })
}

const markCompeleted = (dispatch) => (id, title, completed) => {
    axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        title,
        completed,
    }).then(res => {
        dispatch({
            type: "MARK",
            payload: res.data
        })
    })


}

const getnames = (dispatch) => () => {
    axios.get('api/items')
        .then(res => {
            // console.log(res.data)
            dispatch({
                type: "fetch",
                payload: res.data
            })
        })

}



const add_item = (dispatch) => (name, id) => {
    dispatch({
        type: "ADD",
        payload: name, id
    })
}

const remove_item = (dispatch) => (id) => {
    dispatch({
        type: "Remove",
        payload: id
    })
}



const getWeather = (dispatch) => (address) => {
    const url = 'https://api.openweathermap.org/data/2.5/find?q=' + address + '&units=metric&appid=153963ec7b4420f8045f6c8510c911e1'
    axios({
        method: 'get',
        url: url
    })
        .then(res => {
            if (res.data.list.length === 0) {
                dispatch({
                    type: 'weather',
                    payload: "Can't find location"
                })
            } else if (res.data.list.length !== 0) {
                dispatch({
                    type: 'weather',
                    payload: 'The temperature in ' + res.data.list[0].name + ', ' + res.data.list[0].sys.country + ' is ' + res.data.list[0].main.temp + '°C' + ' and the humidity is ' + res.data.list[0].main.humidity + ' .The weather status is: ' + res.data.list[0].weather[0].main + ', ' + res.data.list[0].weather[0].description
                })
            } else {
                dispatch({
                    type: 'weather',
                    payload: "Couldn't fetch response, try again"
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: 'weather',
                payload: "Couldn't fetch response, try again"
            })
        })
}

const sendEmail = () => ({ email, name, phone, subject, body }) => {
    console.log(email, name, phone, subject, body)

}




export const { Provider, Context } = createDataContext(
    docReducer,
    { add_item, remove_item, getnames, sendEmail, getWeather, getTodos, addTodo, deleteTodo, markCompeleted },
    { weather: '', names: [], todo: [] }
);
