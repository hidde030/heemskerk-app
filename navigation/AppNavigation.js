import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Select from '../screens/Select'

const AppNavigation = createStackNavigator(
  {
    Home: { screen: Home },
    Select: { screen: Select },
    Detail: { screen: Detail },

   
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',

  },
  

)

export default AppNavigation
