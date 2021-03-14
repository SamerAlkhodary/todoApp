import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ListPage from '../pages/ListPage';
import AddPage from '../pages/AddPage';
import DashBoard from '../pages/DashBoadPage';
const pages = {
    DashBoardPage:{
        screen: DashBoard,
        navigationOptions:{
            title:""
            
        }
    },
    ListPage:{
        screen: ListPage,
        navigationOptions:{
            title:""
            
        }
    },
    AddItemPage:{
        screen: AddPage,
        navigationOptions:{
            title:""
            
        }
    },
    
  
}
const HomeStack= createStackNavigator(pages);
export default createAppContainer(HomeStack);