import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Item = ({item, openModal}) => {
  return (
    <TouchableOpacity 
      onPress={()=>{
        openModal(item.item)
      }}
    >
      <View style={styles.itemList}>
        <Text>{item.item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemList: {
    backgroundColor: "#ccc",
    padding: 10,
    margin: 5,
  },
});

export default Item;
