import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';

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
            }
        ]
    }
]