import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const JustifyContent = () => {
  return (
    <View>
      <Text style={styles.h2}>JustifyContent</Text>

      {/* flex-start(default) */}
      <View>
        <Text style={styles.h3}>justifyContent: 'flex-start'(Default)</Text>
        <View style={[styles.container, styles.flexRow]}>
          <Text style={styles.itemBase}>React</Text>
          <Text style={styles.itemBase}>Javascript</Text>
          <Text style={styles.itemBase}>Flutter</Text>
        </View>
      </View>

      {/* center */}
      <View>
        <Text style={styles.h3}>justifyContent: 'center'</Text>
        <View style={[styles.container, styles.center, styles.flexRow]}>
          <Text style={styles.itemBase}>React</Text>
          <Text style={styles.itemBase}>Javascript</Text>
          <Text style={styles.itemBase}>Flutter</Text>
        </View>
      </View>

      {/* flex-end */}
      <View>
        <Text style={styles.h3}>justifyContent: 'flex-end'</Text>
        <View style={[styles.container, styles.flexEnd, styles.flexRow]}>
          <Text style={styles.itemBase}>React</Text>
          <Text style={styles.itemBase}>Javascript</Text>
          <Text style={styles.itemBase}>Flutter</Text>
        </View>
      </View>
    </View>
  );
};

export default JustifyContent;

const styles = StyleSheet.create({
  container: {
    height: 150,
    margin: 10,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  h2: {
    fontSize: 30,
    marginHorizontal: 10
  },
  h3: {
    fontSize: 24,
    marginHorizontal: 10
  },
  itemBase: {
    height: 25,
    backgroundColor: "#888000",
    color: "#fff",
    paddingHorizontal: 10,
    marginVertical: 3,
    textAlign: "center"
  },
  flexRow: {
    flexDirection: "row"
  },
  flexStart: {
    justifyContent: "flex-start"
  },
  center: {
    justifyContent: "center"
  },
  flexEnd: {
    justifyContent: "flex-end"
  }
});