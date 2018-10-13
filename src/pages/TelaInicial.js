import React, {Component} from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';


export default class TelaInicial extends Component {

    constructor(props) {
  
      super(props);
  
      this.state = {
        nome: '',  
      }
    }
  
    static navigationOptions = ({navigation}) => ({
      title: 'Conversa',
    });
  
    render() {
      return (
        <View style={styles.container}>
          <TextInput 
            style={styles.textInput}
            placeholder="Digite seu nome"
            underlineColorAndroid="transparent"
            value={this.state.nome}
            onChangeText ={text => this.setState({nome:text})}
          />
          <Button 
            title="conversar"
            onPress={
                ()=>this.props.navigation.navigate('Conversa',{nome:this.state.nome})
            }
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    textInput:{
        height: 40,
        marginBottom: 40,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        padding: 10,
        fontSize: 18,
        backgroundColor: '#FFFFFF'
    
      }
  })