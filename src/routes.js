import Home from './components/home';
import Login from './components/login';
import Register from './components/register';


export const routes = [
	{ path:'/home',component:Home },
	{ path:'/login',component:Login },
	{ path:'/register',component:Register },
	{path: '/', redirect: '/home'},
];