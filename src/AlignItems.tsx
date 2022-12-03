import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AlignItems = () => {
  return (
    <View style={{ height: "100%" }}>
      <Text style={styles.h2}>AlignItems</Text>

      {/* flex-start(default) */}
      <View>
        <Text style={styles.h3}>alignItems: 'flex-start'(Default)</Text>
        <View style={[styles.container, styles.flexRow]}>
          <Text style={styles.itemBase}>React</Text>
          <Text style={styles.itemBase}>Javascript</Text>
          <Text style={styles.itemBase}>Flutter</Text>
        </View>
      </View>

      {/* center */}
      <View>
        <Text style={styles.h3}>alignItems: 'center'</Text>
        <View style={[styles.container, styles.center, styles.flexRow]}>
          <Text style={styles.itemBase}>React</Text>
          <Text style={styles.itemBase}>Javascript</Text>
          <Text style={styles.itemBase}>Flutter</Text>
        </View>
      </View>

      {/* flex-end */}
      <View>
        <Text style={styles.h3}>alignItems: 'flex-end'</Text>
        <View style={[styles.container, styles.flexEnd, styles.flexRow]}>
          <Text style={styles.itemBase}>React</Text>
          <Text style={styles.itemBase}>Javascript</Text>
          <Text style={styles.itemBase}>Flutter</Text>
        </View>
      </View>

      {/* stretch */}
      <View>
        <Text style={styles.h3}>alignItems: 'stretch'</Text>
        <View style={[styles.container, { alignItems: "stretch" }, styles.flexRow]}>
          <Text style={styles.itemBase}>React</Text>
          <Text style={styles.itemBase}>Javascript</Text>
          <Text style={styles.itemBase}>Flutter</Text>
        </View>
      </View>

      {/* baseline */}
      <View>
        <Text style={styles.h3}>alignItems: 'baseline'</Text>
        <View style={[styles.container, { alignItems: "baseline" }, styles.flexRow]}>
          <Text style={styles.itemBase}>React</Text>
          <Text style={[styles.itemBase, { fontSize: 30, height: "100%" }]}>Javascript</Text>
          <Text style={[styles.itemBase, { fontSize: 20, height: "100%" }]}>Flutter</Text>
        </View>
      </View>
    </View>
  );
};

export default AlignItems;

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
    alignItems: "flex-start"
  },
  center: {
    alignItems: "center"
  },
  flexEnd: {
    alignItems: "flex-end"
  }
});