import React from 'react'
import About from './About';
import Home from './Home';
import Counter from './Counter';
import User from './User';
import Rooms from './Rooms';
import Registro from './Registro';


const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>home!</div>,
        main: Home
    },
    {
        path: '/abouts',
        sidebar: () => <div>abouts!</div>,
        main: About
    },
    {
        path: '/one',
        sidebar: () => <div>one!</div>,
        main: () => <h2>One</h2>
    },
    {
        path: '/counters',
        sidebar: () => <div>Counter!</div>,
        main: Counter
    },
    {
        path: '/users',
        sidebar: () => <div>User!</div>,
        main: User
    },
    {
        path: '/rooms',
        sidebar: () => <div>Rooms!</div>,
        main: Rooms
    },
    {
        path: '/registro',
        sidebar: () => <div>Registro!</div>,
        main: Registro
    }
    
    
]

export default routes