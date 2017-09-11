import React from 'react'
import Form from './Form';
import Home from './Home';
import Footer from './home/Footer';
import Rooms from './Rooms';
import Photos from './Photos';
import Information from './Information';
import Login from './logins/Login';
import Registered from './logins/Registered';
import Bienvenido from './logins/Bienvenido';
import RecupPassword from './logins/RecupPassword';

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
    },
    {
        path: '/logins',
        sidebar: () => <div>Login!</div>,
        main: Login
    },
    {
        path: '/registereds',
        sidebar: () => <div>Registered!</div>,
        main: Registered
    },
    {
        path: '/bienvenidos',
        sidebar: () => <div>Bienvenido!</div>,
        main: Bienvenido
    }    ,
    {
        path: '/recuppasswords',
        sidebar: () => <div>RecupPassword!</div>,
        main: RecupPassword
    }
]

export default routes