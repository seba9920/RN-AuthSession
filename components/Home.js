import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../App';

export default class Home extends React.Component{
    render(){
      return (
        <View style={styles.container}>
          <Text>Home</Text>
          <Button
            title="Ver personajes"
            onPress={() => this.props.navigation.navigate('Personajes')}
          />
        </View>
      );
    }
  }

  