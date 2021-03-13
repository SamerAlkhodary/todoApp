import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ListPage from '../pages/ListPage.js';
import AddPage from '../pages/AddPage.js'
import DashBoardPage from '../pages/DashBoardPage.js'
const pages = {
    DashBoardPage:{
        screen: DashBoardPage,
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