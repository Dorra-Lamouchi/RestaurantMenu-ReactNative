import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer  } from 'react-navigation'
import Search from '../Components/Login';
import Search1 from '../Components/Search';
  

  const AppNavigator = createStackNavigator({
    Search: { screen: Search },
    Search1: { screen: Search1 },
  },  
  
{
initialRouteName: 'Search',
}
  );
const App =createAppContainer(AppNavigator)
  export default App;