import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomePage from '../pages/HomePage.js';
import AddPage from '../pages/AddPage.js'

const pages = {
    HomePage:{
        screen: HomePage
    },
    AddItemPage:{
        screen: AddPage
    },
    
  
}
const HomeStack= createStackNavigator(pages);
export default createAppContainer(HomeStack);