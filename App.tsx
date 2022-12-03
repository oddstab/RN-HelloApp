import React from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import AlignItems from './src/AlignItems';
import Dimensions from './src/Dimensions';
import FlexDirection from './src/FlexDirection';
import JustifyContent from './src/JustifyContent';

const App = () => {
  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
      {/* <View>
        <Text style={{ fontSize: 40 }}>一手女用車</Text>
        <Text style={[{ fontSize: 40 }, { color: 'red' }]}>2手女用車</Text>
        <Text style={[styles.h1, styles.h2]}>Toyota Yaris</Text>
        <Button title="Toyota corolla cross" color={'green'} />
      </View> */}
      <ScrollView>
        {/* <FlexDirection />
        <JustifyContent />
        <AlignItems /> */}
        <Dimensions />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default App;
