import { createDrawerNavigator } from '@react-navigation/drawer';
import { Login } from '../screen/Login';
import { HomeScreen } from '../screen/HomeScreen';

const Drawer = createDrawerNavigator();
const MyDrawer = ()=> {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name="Home" component={Login} />
      <Drawer.Screen name="Article" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
export default  MyDrawer;