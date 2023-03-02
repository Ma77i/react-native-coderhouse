import {
  FlatList,
  StyleSheet,
} from "react-native";
import Item from "./Item";

const List = ({itemList, onHandlerModal}) => {
  return (
    <FlatList
      data={itemList}
      renderItem={(data) => {
        return <Item item={data} openModal={onHandlerModal} />
      }}
      keyExtractor={item=>item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  itemList: {
    backgroundColor: "#ccc",
    padding: 10,
    margin: 5,
  },
});

export default List;
