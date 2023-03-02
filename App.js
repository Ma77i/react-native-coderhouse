import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, FlatList, Modal, TouchableOpacity } from "react-native";
import { useState } from "react";
import ModalItem from "./src/components/Modal";
import AddItem from "./src/components/AddItem";
import List from "./src/components/List/List";

export default function App() {

  const [ textItem, setTextItem ] = useState('')
  const [ itemList, setItemList ] = useState([])

  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const onHandlerChangeItem = (text) => setTextItem(text)

  const addItem = () => { 
    console.log("TEXTITEM: ", textItem)
    setItemList(currentItems => [
      ...currentItems, {
        id: Math.random().toString(),
        value: textItem
      }
    ])
    setTextItem('')
    console.log(itemList)
  }

  const onHandlerDelete = id => {
    setItemList(items=>items.filter(i=>i.id !== id))
    setItemSelected({})
    setModalVisible(false)
  }

  const onHandlerModal = (item) => {
    setItemSelected(item)
    setModalVisible(true)
  }

  const onCloseModal = () => {
    setModalVisible(false)
  }

  return (
    <View style={{ padding: 30 }}>
      <ModalItem
        visible={modalVisible}
        onDelete={()=>onHandlerDelete(itemSelected.id)}
        item={itemSelected}
        closeModal={onCloseModal}
      />

      <View>
        <AddItem
          onChange={onHandlerChangeItem}
          onAddItem={addItem}
          value={textItem}
        />
      </View>

      <View>
        <List
          onHandlerModal={onHandlerModal}
          
          itemList={itemList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
