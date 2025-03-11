import * as React from "react";
import { View, StyleSheet, Button, TextInput, Text } from "react-native";

export default function HomeScreen() {
  const [text, onChangeText] = React.useState("Hello World");
  const [webData, setwebData] = React.useState("No data");

  const request = new XMLHttpRequest();

  function handleButtonPress() {
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        console.log("SUccess: " + request.responseText);
        setwebData(
          "Status: " +
            request.status +
            " Response: " +
            request.statusText +
            " ResponseText: " +
            request.responseText
        );
      } else {
        console.log("Error: " + request.status);
        setwebData(
          "Status: " +
            request.status +
            " Response: " +
            request.statusText +
            " ResponseText: " +
            request.responseText
        );
      }
    };
    request.open("GET", text);
    request.send();
  }

  return (
    <View style={styles.containerColumn}>
      <View style={styles.containerRow}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        ></TextInput>
        <Button title="Request web" onPress={handleButtonPress} />
        <Text> {webData} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerColumn: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  containerRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
