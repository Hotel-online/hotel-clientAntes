import React from 'react'
import About from './About';
import Home from './Home';
import Counter from './Counter';
import User from './User';
import Header from './home/Header';
import Footer from './home/Footer';
import Rooms from './hotel/Rooms';

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
        path: '/header',
        sidebar: () => <div>Header!</div>,
        main: Header
    },
    {
        path: '/footer',
        sidebar: () => <div>Footer!</div>,
        main: Footer
    },
    {
        path: '/rooms',
        sidebar: () => <div>Rooms!</div>,
        main: Rooms
    }
    
]

export default routes