import { createBottomTabNavigator } from "react-navigation";

// Tabs
import AddNameView from './AddNameView'
import ViewAddView from './ViewAddView'

export default MainTabs = createBottomTabNavigator(
    {
    AddName : AddNameView,
    ViewName: ViewAddView
    },
    {
        initialRouteName: 'AddName'
    }
)