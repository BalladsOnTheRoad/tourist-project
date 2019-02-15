import Home from './components/home';

// 用户模块
import Login from './components/login';
import Register from './components/register';
import ForgetPass from './components/forgetPass';
import ChangePass from './components/changePass';
import Profile from './components/profile';

// 酒店，攻略模块
import Com from './components/strategy';
import Strategy from './components/strategy/strategy';
import StrategyDetails from './components/strategy/details';
import StrategyClassify from './components/strategy/classify';
import HotelDetails from './components/hotel/hotel_details';
import HotelLists from './components/hotel/hotel_lists';

//目的地
import Dest from './components/dest';
import destCity from './components/dest/destCity';


export const routes = [
	{ path:'/home',component:Home },
	{ path:'/login',component:Login},
	{ path:'/register',component:Register },
	{ path:'/forgetpass',component:ForgetPass },
	{ path:'/changepass',component:ChangePass },
	{ path:'/profile',component:Profile },

	{ path:'/strategy',component:Com,children:[
		{path:'/',component:Strategy},
		{path:'/strategy_details',component:StrategyDetails},
		{path:'/strategy_classify',component:StrategyClassify}
	 ]},
	{path:'/hotel_details',component:HotelDetails},
	{path:'/hotel_lists',component:HotelLists},
	
	{ path:'/dest',component:Dest},
	{ path:'/dest/destCity/:parentId/:id',component:destCity},


	{ path: '/', redirect: '/home'},
];