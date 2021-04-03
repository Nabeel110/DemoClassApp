import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4fa8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-1a45571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-1455s71e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0faaa-3da1-471f-bd96-1455s71e29d72",
    title: "Third Item",
  },

  {
    id: "58694a0f-3da1-471f-bd9aa6-145571e29sd72",
    title: "Third Item",
  },
  {
    id: "5869d4a0f-3da1-471f-bd9aa6-145571e29sd72",
    title: "Third Item",
  },
  {
    id: "5a8694a0f-3da1-471f-bd9aa6-145571e29sd72",
    title: "Third Item",
  },
  {
    id: "58694as0f-3da1-471f-bd9aa6-145571e29sd72",
    title: "Third Item",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <TouchableOpacity
      style={styles.btn}
      onPress={() => alert(`List Item ${title}`)}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const ListItems = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;
  console.log(DATA);
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          margin: 20,
          color: "white",
          fontSize: 40,
        }}
      >
        List Items
      </Text>

      <FlatList
        // numColumns="2"
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ListItems;
