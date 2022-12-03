import { Button, StyleSheet, Text, View, Dimensions as Dim, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import React, { useEffect, useState } from 'react';

const Dimensions = () => {
  const [width, setWidth] = useState(Dim.get("window").width);
  const [randomNum, setRandomNum] = useState(0);

  const handlePress = () => {
    console.log("目前寬度為", { width });
    setRandomNum(Math.random());
  };

  useEffect(() => {
    setRandomNum(Math.random());
  }, []);


  return (
    <View style={[styles.container]}>
      <Text style={[styles.h1]}>{width}</Text>
      <View style={[styles.flex, { marginBottom: 20 }]}>
        <View style={{ flex: 1 }}>
        </View>
        <View style={{ flex: 1 }}>
          <Button title={`目前寬度為：${width}`} color="purple" onPress={handlePress} />
        </View>
        <View style={{ flex: 1 }}>
          <TouchableNativeFeedback onPress={handlePress} background={TouchableNativeFeedback.Ripple("black", false)}>
            <View style={{ borderRadius: 4, width: undefined, padding: 20, backgroundColor: '#fff' }}>
              <Text style={{ color: 'black', textAlign: 'center' }}>{randomNum}</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
};

export default Dimensions;

const styles = StyleSheet.create({
  container: {
  },
  h1: {
    fontSize: 60
  },
  flex: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ddd",
    padding: 10
  }
});