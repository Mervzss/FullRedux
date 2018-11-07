import React, {Component} from 'react'
import {View,Text,TextInput,StyleSheet, Button} from 'react-native'
import {connect} from 'react-redux'
import {checkAccount} from '../../../ReduxStore/Action/accountLogin'
class LoginView extends Component{
    static navigationOptions={
        header:null
    }
    state={
        username:'',
        password:''
    }
    constructor(props){
        super(props)
        
    }

    onUpdateText =(key,val)=>{
        this.setState({
            [key]:val
        })  
        
    }

    onLogin = () =>{
        this.props.validity ? this.props.navigation.navigate('MainTab') : alert('Wrong Password') 
        this.setState({
            username:'',
            password:''
        }) 
    }


    render(){
        return(
            <View style={styles.container}>
            <Text> Test Log</Text>

                
                <TextInput placeholder='Enter Name' 
                onChangeText={(val)=> 
                this.onUpdateText('username',val)} 
                value={this.state.username}/>

                <TextInput placeholder='Password' 
                onChangeText={(val)=> 
                this.onUpdateText('password',val)}
                value={this.state.password}/>

                <Button title="Login" onPress={this.onLogin}/>
                    
                <Button title="SignUp" onPress={() => this.props.navigation.navigate('SignIn')}/>

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
        prevProps.accountData(this.state.username,this.state.password)
        console.log("Component did Update")
    }
    componentWillUnmount(){
        console.log("Component will Unmount")
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    }
})
const mapStateToProps = state =>{
    return{
        validity: state.accountsReducer.verify
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        accountData: (name,pass) => dispatch(checkAccount(name,pass))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)