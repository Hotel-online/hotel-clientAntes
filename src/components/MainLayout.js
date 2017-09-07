import React, { Component } from 'react'
import {
    Switch,
    Route,
    Link,
    NavLink

} from 'react-router-dom'
import routes from './routes'

import '../App.css';

class MainLayout extends Component {
    render() {
        return (

                <div>
                    
                        <ul>
                            <li><NavLink exact to="/header" activeClassName="selected">Header</NavLink></li>
                            <li><NavLink exact to="/" activeClassName="selected">Home</NavLink></li>
                            <li><NavLink exact to="rooms" activeClassName="selected">Habitaciones</NavLink></li>
                            <li><NavLink exact to="photos" activeClassName="selected">Fotos</NavLink></li>
                            <li><NavLink exact to="/abouts" activeClassName="selected">abouts</NavLink></li>
                            <li><NavLink exact to="/one" activeClassName="selected">one</NavLink></li>
                            <li><NavLink exact to="/counters" activeClassName="selected">Counter</NavLink></li>
                            <li><NavLink exact to="/users" activeClassName="selected">users</NavLink></li>
                            <li><NavLink exact to="/footer" activeClassName="selected">Footer</NavLink></li>
                            
                        </ul>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.sidebar}
                            />
                        ))}

                    <div style={{ flex: 1, padding: '10px' }}>

                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            ))}
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </div>
           
        )
    }
}

export default MainLayout;



const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
        <div className={match ? 'active' : ''}>
            {match ? '> ' : ''}<Link to={to}>{label}</Link>
        </div>
    )} />
)

const NoMatch = ({ location }) => (
    <div>
        <h3>No se encontró la página <code>{location.pathname}</code></h3>
    </div>
)