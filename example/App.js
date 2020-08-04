import React, { useState } from "react";
import { StyleSheet, StatusBar, View, Text, ScrollView } from "react-native";
import TextInput from "react-native-material-textinput";

export default function App() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [multilineText, setMultilineText] = useState(
    "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
  );

  const handleProductNameChange = (value) => setProductName(value);
  const handlePriceChange = (value) => setPrice(value);
  const handleMultilineTextChange = (value) => setMultilineText(value);

  return (
    <View style={styles.layout}>
      <StatusBar backgroundColor="#1a237e" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Material Design Text Fields</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput label="Product name" value={productName} onChangeText={handleProductNameChange} />
        <TextInput label="Price" placeholder="$5,999.00" value={price} onChangeText={handlePriceChange} />
        <TextInput
          label="The Matrix"
          value={multilineText}
          onChangeText={handleMultilineTextChange}
          multiline
          minHeight={150}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    justifyContent: "flex-end",
    height: 100,
    padding: 16,
    backgroundColor: "#3f51b5",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    padding: 16,
  },
});
