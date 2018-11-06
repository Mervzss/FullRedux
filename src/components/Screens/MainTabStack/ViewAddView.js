import React, {Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {connect} from 'react-redux'
class ViewAddView extends Component{
    getNames= () =>{
        this.props.name.map((name,index) =>{
            return(
                <Text key={index}> {this.props.name}</Text>
            )
        })
        
    }
    render(){
        return(
            <View style={styles.container}>
            <Text> View Name </Text>
                <Text>{this.props.name.map(name => name)}</Text>
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

const mapStateToProps = state => {
    return {
      name: state.nameReducer.name,
    };
  };

  export default connect(mapStateToProps)(ViewAddView)