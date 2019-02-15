// import Home from './components/home';

// 用户模块
// import Login from './components/login';
// import Register from './components/register';
// import ForgetPass from './components/forgetPass';
// import ChangePass from './components/changePass';
// import Profile from './components/profile';

// 酒店，攻略模块
// import Com from './components/strategy';
// import Strategy from './components/strategy/strategy';
// import StrategyDetails from './components/strategy/details';
// import StrategyClassify from './components/strategy/classify';
// import HotelDetails from './components/hotel/hotel_details';
// import HotelLists from './components/hotel/hotel_lists';

//目的地
// import Dest from './components/dest';
// import destCity from './components/dest/destCity';


export const routes = [
	{ 
		path     : '/home',
		component: resolve => require(['./components/home'], resolve)
	},
	{ 
		path     : '/login',
		component: resolve => require(['./components/login'], resolve)
	},
	{ 
		path     : '/register',
		component: resolve => require(['./components/register'], resolve)
	 },
	{ 
		path     : '/forgetpass',
		component: resolve => require(['./components/forgetPass'], resolve)
	 },
	{ 
		path     : '/changepass',
		component: resolve => require(['./components/changePass'], resolve)
	 },
	{ 
		path     : '/profile',
		component: resolve => require(['./components/profile'], resolve)
	 },

	{ 
		path     : '/strategy',
		component: resolve => require(['./components/strategy'], resolve),

		children:[
			{
				path     : '/',
				component: resolve => require(['./components/strategy/strategy'], resolve)

			},
			{
				path     : '/strategy_details',
				component: resolve => require(['./components/strategy/details'], resolve)

			},
			{
				path     : '/strategy_classify',
				component: resolve => require(['./components/strategy/classify'], resolve)
			}
		]
	},
	{
		path     : '/hotel_details',
		component: resolve => require(['./components/hotel/hotel_details'], resolve)
	},
	{
		path     : '/hotel_lists',
		component: resolve => require(['./components/hotel/hotel_lists'], resolve)
	},
	
	{ 
		path     : '/dest',
		component: resolve => require(['./components/dest'], resolve)
	},
	{ 
		path     : '/dest/destCity/:parentId/:id',
		component: resolve => require(['./components/dest/destCity'], resolve)
	},


	{ path: '*', redirect: '/home'},
];