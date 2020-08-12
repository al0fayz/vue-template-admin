import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Dashboard from './components/pages/dashboard/Index';
import Calender from './components/pages/Calender';
import Invoice from './components/pages/pages/Invoice';
import Profile from './components/pages/pages/Profile';
import Ecommerce from './components/pages/pages/Ecommerce';
import Project from './components/pages/pages/Projects';
import Contacts from './components/pages/pages/Contacts';

export const myRoutes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/admin/',
        component: Home,
        children: [
            {
                path: 'dashboard',
                component: Dashboard
            },
            {
                path: 'calender',
                component: Calender
            },
            {
                path: 'invoice',
                component: Invoice
            },
            {
                path: 'profile',
                component: Profile
            },
            {
                path: 'ecommerce',
                component: Ecommerce
            },
            {
                path: 'project',
                component: Project
            },
            {
                path: 'contact',
                component: Contacts
            }
        ]
    }
]