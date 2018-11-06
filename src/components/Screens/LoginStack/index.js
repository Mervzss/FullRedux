import {createStackNavigator} from 'react-navigation'

// imports stacks
import LoginView from '../LoginStack/LoginView'
import SignInView from '../LoginStack/SignInView'

export default LoginStack = createStackNavigator({
    Login:LoginView,
    SignIn: SignInView    
})