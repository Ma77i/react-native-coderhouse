import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Item = ({ item, openModal, switchViews }) => {
  return (
    <View style={styles.itemList}>
      <Text style={styles.textItem}>{item.item.value}</Text>
      <Button
        style={styles.delBtn}
        title="VIEW"
        onPress={() => {
          switchViews(true);
        }}
      />
      <Button
        style={styles.delBtn}
        title="DELETE"
        color="#f15"
        onPress={() => {
          openModal(item.item);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemList: {
    flexDirection: "row",
    justifyContent: 'space-between',
    backgroundColor: "#ccc",
    padding: 10,
    margin: 5,
  },
  textItem: {
    width: "60%",
  },
  delBtn: {
    justifyContent: "flex-end",
  },
});

export default Item;
