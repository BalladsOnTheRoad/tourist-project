import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import ForgetPass from './components/forgetPass';
import ChangePass from './components/changePass';
import Profile from './components/profile';




export const routes = [
	{ path:'/home',component:Home },
	{ path:'/login',component:Login},
	{ path:'/register',component:Register },
	{ path:'/forgetpass',component:ForgetPass },
	{ path:'/changepass',component:ChangePass },
	{ path:'/profile',component:Profile },
	{ path: '/', redirect: '/home'},
];