import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Alert, ImageBackground } from 'react-native';

export default function App() {
  console.log('App is running');

  const [page, setPage] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('useEffect called');
    switch (page) {
      case 0:
        setText('Hello, Sujoy! Here is the react native page explaining why I am a good fit at your company.');
        break;
      case 1:
        setText('Throughout my academic career, I have gained a strong foundation in computer science principles, including data structures, algorithms, and programming languages such as C++, Java, and Python. I have also honed my skills in project management, having worked on several game development projects and solidified written communication skills');
        break;
      case 2:
        setText('As a teacher, I am particularly drawn to your company because of its commitment to embettering the experience of educators and students through innovative technology solutions. I admire your focus on creating engaging and effective educational tools, and I am excited about the opportunity to contribute to such meaningful work.');
        break;
      case 3:
        setText('I am eager to collaborate with a team of like-minded individuals who share my enthusiasm for learning and development.');
        break;
      default:
        setText('Thank you for considering my application! Let\s connect and discuss how I can contribute to your team soon!');
    }
  }, [page]);
  
  return (
    <SafeAreaView>
      <ImageBackground 
        source={require('./assets/abstract-blue-background.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Text  style={styles.paragraph}> {text} </Text>
        </View>
        <View style={styles.page_buttons}>
          <Button
            title="Previous Page"
            onPress={() => setPage(page - 1)}
            disabled={page <= 0}
          />
          <Button
            title="Next Page"
            onPress={() => setPage(page + 1)}
            disabled={page >= 3}
          />
        </View>          
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#fff',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  paragraph: {
    //backgroundColor: '#fff',
    color: '#fff',
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: 20,
  },
  page_buttons: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 200,
    paddingBottom: 100,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
});
