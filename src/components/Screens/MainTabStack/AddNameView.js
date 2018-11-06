import React, {Component} from 'react'
import {View,Text,TextInput,StyleSheet,Button} from 'react-native'
import {connect} from 'react-redux'
import {addName} from '../../../ReduxStore/Action/addTab'
class AddNameView extends Component{
    state={
        name:''
    }
    onUpdateText = (key,val) =>{
        this.setState({
            [key]:val
        })
    }
    onAdd = () =>{
        this.props.onAddName(this.state.name)
    }
    render(){
        return(
            <View style={styles.container}>
            <Text> {this.props.accountName} SAd </Text>
                <TextInput placeholder='Enter Name' onChangeText={(val) => this.onUpdateText('name', val)}/>
                <Button title='Add' onPress={this.onAdd}/>
            </View>
        )
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
        accountName: state.accountsReducer.userName
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onAddName: name => dispatch(addName(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNameView)