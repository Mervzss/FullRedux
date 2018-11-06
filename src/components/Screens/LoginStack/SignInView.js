import React, {Component} from 'react'
import {View,Text,TextInput,StyleSheet, Button} from 'react-native'
import {createAccount} from '../../../ReduxStore/Action/accountLogin'
import {connect} from 'react-redux'
class SignInView extends Component{
    state={
        userName:'',
        password:''
    }
    
    onUpdateText = (key, val) =>{
        this.setState({
            [key]:val
        })
    }

    onCreateAccount = () =>{    
        this.props.accountCreate(this.state.userName,this.state.password)
        this.props.navigation.goBack()
    }
    render(){
        return(
            <View>
                <Text>Sign In</Text>

                <TextInput placeholder='Enter User Name' 
                value={this.state.userName} 
                onChangeText={val => this.onUpdateText('userName',val)}/>

                <TextInput placeholder='Enter Password' 
                value={this.state.password} 
                onChangeText={val => this.onUpdateText('password', val)}/>

                <Button title='Create Account' onPress={this.onCreateAccount}/>
            </View>
        )
    }

}
const mapDispatchToProps = dispatch =>{
    return{
        accountCreate:(username,pass) => dispatch(createAccount(username,pass))
    }
}
export default connect(null, mapDispatchToProps)(SignInView)