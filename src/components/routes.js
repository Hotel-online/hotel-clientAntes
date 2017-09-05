import React from 'react'
import About from './About';
import Home from './Home';
import User from './User';
import Rooms from './Rooms';
import Registro from './Registro';
import roomList from './roomList';


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
    },
    {
        path: '/roomList',
        sidebar: () => <div>roomList!</div>,
        main: roomList
    }


]

export default routes
