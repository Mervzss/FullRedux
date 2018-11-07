import React, {Component} from 'react'
import {View,Text,TextInput,StyleSheet, Button} from 'react-native'
import {createAccount} from '../../../ReduxStore/Action/accountLogin'
import {connect} from 'react-redux'
class SignInView extends Component{
    state={
        accountCreate:{
            userName:{
                value: '',
                rules:{
                    minLength:6
                }
            }
        },
        password:'',
        confirmpass:''
    }
    
    onUpdateText = (key, val) =>{
        // let newAccount = this.state.accountCreate
        // newAccount = {
        //     ...newAccount,
        //     ...newAccount[key]={
        //         value: val
        //     }

        // }
        this.setState(prevState =>{
            return{
                accountCreate:{
                ...prevState.accountCreate,
                [key]:{
                    ...prevState.accountCreate[key],
                    value:val
                }
                    
                }
            }
            
        })
        // this.setState({
        //     accountCreate:{
        //         userName:{
        //             value:val
        //         }
        //     }
        // })
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

                <TextInput placeholder='Confirm Password' 
                value={this.state.confirmpass} 
                onChangeText={val => this.onUpdateText('confirmpass', val)}/>

                <Button title='Create Account' onPress={this.onCreateAccount}/>
            </View>
        )
    }
    componentDidMount(){
        console.log("Component Did Mount")
    }
    shouldComponentUpdate(){
        console.log("Should Component Update")
        return true;
    }
    componentDidUpdate(prevProps, prevState,snapshot){
        
        console.log("Component did Update")
    }
    componentWillUnmount(){
        console.log("Component will Unmount")
    }

}
const mapDispatchToProps = dispatch =>{
    return{
        accountCreate:(username,pass) => dispatch(createAccount(username,pass))
    }
}
export default connect(null, mapDispatchToProps)(SignInView)