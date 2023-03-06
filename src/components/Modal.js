import React from "react";

import { Button, StyleSheet, Text, Modal, View } from "react-native";

const ModalItem = ({ visible, onDelete, item, closeModal }) => {
  if (!visible) return null;

  return (
    <Modal 
      animationType="slide" 
      visible={visible}
      style={styles.modalContainer}
    >
      <View>
        <Text>¿Desea eliminar este item?</Text>
      </View>
      <View>
        <Text>{item.value}</Text>
      </View>
      <View
        style={styles.buttonContainer}  
      >
        <Button 
          style={styles.button}
          onPress={onDelete} 
          title="CONFIRM" />
        <Button 
          style={styles.button}
          onPress={closeModal} 
          title="RETURN" 
          color="#f15"
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#f15",
    // width: "50%"
  }
});

export default ModalItem;
