import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const FlexDirection = () => {
  return (
    <View>

      <Text style={styles.h2}>FlexDirection (主軸方向)</Text>

      {/* column(default) */}
      <View>
        <Text style={styles.h3}>flexDirection: 'column'(預設)</Text>
        <View style={[styles.container]}>
          <Text style={styles.itemBase}>React</Text>
          <Text style={styles.itemBase}>Javascript</Text>
          <Text style={styles.itemBase}>Flutter</Text>
        </View>
      </View>

      {/* column-reverse */}
      <View>
        <Text style={styles.h3}>flexDirection: 'column-reverse'</Text>
        <View style={[styles.container, styles.flexColumnReverse]}>
          <Text style={styles.itemBase}>React</Text>
          <Text style={styles.itemBase}>Javascript</Text>
          <Text style={styles.itemBase}>Flutter</Text>
        </View>
      </View>

      {/* row */}
      <View>
        <Text style={styles.h3}>flexDirection: 'row'</Text>
        <View style={[styles.container, styles.flexRow]}>
          <Text style={styles.itemBase}>React</Text>
          <Text style={styles.itemBase}>Javascript</Text>
          <Text style={styles.itemBase}>Flutter</Text>
        </View>
      </View>

      {/* row-reverse */}
      <View>
        <Text style={styles.h3}>flexDirection: 'row-reverse'</Text>
        <View style={[styles.container, styles.flexRowReverse]}>
          <Text style={styles.itemBase}>React</Text>
          <Text style={styles.itemBase}>Javascript</Text>
          <Text style={styles.itemBase}>Flutter</Text>
        </View>
      </View>
    </View>
  );
};

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
  flexColumn: {
    flexDirection: "column"
  },
  flexColumnReverse: {
    flexDirection: "column-reverse"
  },
  flexRow: {
    flexDirection: "row"
  },
  flexRowReverse: {
    flexDirection: "row-reverse"
  }
});
export default FlexDirection;