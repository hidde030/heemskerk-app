import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Select from '../screens/Select'
import Score from '../screens/Score'
// import FireTest from '../screens/FireTest'

const AppNavigation = createStackNavigator(
  {
    Home: { screen: Home },
    Select: { screen: Select },
    Detail: { screen: Detail },
    Score: { screen: Score },
    // FireTest : { screen: FireTest },
   
  },
  {
    initialRouteName: 'Home',
    // headerMode: 'none',

  },
  

)

export default AppNavigation
