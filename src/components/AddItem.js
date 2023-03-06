import { Button, StyleSheet, TextInput, View } from "react-native";

const AddItem = (props) => {
  const { onChange, onAddItem, value } = props;

  return (
    <View
			style={styles.container}
    >
      <TextInput
        placeholder="Item de Lista"
        style={styles.input}
        onChangeText={onChange}
        value={value}
      />
      <Button title="ADD ITEM" onPress={onAddItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "75%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});

export default AddItem;
