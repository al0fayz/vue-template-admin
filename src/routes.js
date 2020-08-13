import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Dashboard from './components/pages/dashboard/Index';
import Calender from './components/pages/Calender';
import Invoice from './components/pages/pages/Invoice';
import Profile from './components/pages/pages/Profile';
import Ecommerce from './components/pages/pages/Ecommerce';
import Project from './components/pages/pages/Projects';
import Contacts from './components/pages/pages/Contacts';
import Register from './components/pages/extras/Register';
import ForgotPassword from './components/pages/extras/ForgotPassword';
import ResetPassword from './components/pages/extras/ResetPassword';
import Lock from './components/pages/extras/LockScreen';
import Error404 from './components/pages/extras/404';
import Error500 from './components/pages/extras/500';
import Inbox from './components/pages/mailbox/Inbox';
import Read from './components/pages/mailbox/Read';
import Compose from './components/pages/mailbox/Compose';
import ChartJs from './components/pages/chartjs/Index';
import Flot from './components/pages/chartjs/Flot';
import Inline from './components/pages/chartjs/Inline';

export const myRoutes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/forgotPassword',
        component: ForgotPassword
    },
    {
        path: '/resetPassword',
        component: ResetPassword
    },
    {
        path: '/lock',
        component: Lock
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
            },
            {
                path: '500',
                component: Error500
            },
            {
                path: '404',
                component: Error404
            },
            {
                path: 'inbox',
                component: Inbox
            },
            {
                path: 'read',
                component: Read
            },
            {
                path: 'compose',
                component: Compose
            },
            {
                path: 'chart-js',
                component: ChartJs
            },
            {
                path: 'flot',
                component: Flot
            },
            {
                path: 'inline',
                component: Inline
            }
        ]
    }
]