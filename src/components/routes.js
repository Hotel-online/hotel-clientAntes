import React from 'react'
import Form from './hotel/Form';
import Home from './Home';
import Counter from './Counter';
import User from './User';
import Footer from './home/Footer';
import Rooms from './hotel/Rooms';
import Photos from './hotel/Photos';
import Information from './hotel/Information';

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>home!</div>,
        main: Home
    },
    {
        path: '/forms',
        sidebar: () => <div>Form!</div>,
        main: Form
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
        path: '/footer',
        sidebar: () => <div>Footer!</div>,
        main: Footer
    },
    {
        path: '/rooms',
        sidebar: () => <div>Rooms!</div>,
        main: Rooms
    },
    {
        path: '/photos',
        sidebar: () => <div>Photos!</div>,
        main: Photos
    },
    {
        path: '/informations',
        sidebar: () => <div>Information!</div>,
        main: Information
    }
    
]

export default routes