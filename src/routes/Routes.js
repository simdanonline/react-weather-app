import React from 'react'
import { Switch, Route } from 'react-router-dom';
import AboutPage from '../pages/about';
import ContactPage from '../pages/contact';
import Home from '../pages/home';
import PostPage from '../pages/posts';
import Todos from '../pages/todo';



const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path='/posts' component={PostPage} />
            <Route path='/todos' component={Todos} />
            {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
            <Route component={Home} />
        </Switch>

    )
}

export default Routes
