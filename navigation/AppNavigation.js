import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Select from '../screens/Select'
import Score from '../screens/Score'
import Leaderbord from '../screens/Leaderbord'
import Winner from '../screens/Winner'
// import FireTest from '../screens/FireTest'

const AppNavigation = createStackNavigator(
  {
    Home: { screen: Home },
    Select: { screen: Select },
    Detail: { screen: Detail },
    Score: { screen: Score },
    Leaderbord: {screen: Leaderbord},
    Winner:{screen:Winner},
    // FireTest : { screen: FireTest }
   
  },
  {
    initialRouteName: 'Home',
    // headerMode: 'none',

  },
  

)

export default AppNavigation
