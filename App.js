import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Alert, ImageBackground } from 'react-native';

export default function App() {
  console.log('App is running');

  const [x, setX] = useState(5);
  const [y, setY] = useState(0);
  const [text, setText] = useState('Open up App.js to start working on your app!');

  useEffect(() => {
    setY(x**2 - 10);
    console.log('y is', y);
  }, [x]);
  
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ImageBackground 
        source={require('./assets/abstract-blue-background.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Text style={{color: '#fff'}}>{text}</Text>
          <Button
            title="Press me"
            onPress={() => {
              setX(x+1);
              setText('y is ' + y);
            }}
          />
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#fff',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  background: {
    flex: 1,
    justifyContent: 'center',
  },
});
