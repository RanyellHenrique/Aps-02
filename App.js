import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Screen1 from './src/screen/Home'
import Screen2 from './src/screen/Criptografia'
import Custon from './src/Drawer/DrawerCuston'

//Definição das rotas utilizadas na aplicação

const DrawerNavigatorExample = createDrawerNavigator({
  Screen1: {
    screen: Screen1,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
  Screen2: {
    screen: Screen2,
    navigationOptions: {
      drawerLabel: 'Criptografia',
    },
  },
},{
  contentComponent: Custon,
  drawerWidth: 300
});



export default createAppContainer(DrawerNavigatorExample);