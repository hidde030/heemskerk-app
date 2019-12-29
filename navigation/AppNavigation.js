import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Select from '../screens/Select'
import Score from '../screens/Score'

const AppNavigation = createStackNavigator(
  {
    Home: { screen: Home },
    Select: { screen: Select },
    Detail: { screen: Detail },
    Score: { screen: Score },

   
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',

  },
  

)

export default AppNavigation
