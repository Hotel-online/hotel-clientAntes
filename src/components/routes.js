import React from 'react'
import Form from './Form';
import Home from './Home';
import Footer from './home/Footer';
import Rooms from './Rooms';
import Photos from './Photos';
import Information from './Information';

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