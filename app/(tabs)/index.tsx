import { View, StyleSheet, Button } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.containerColumn}>
      <View style={styles.containerRow}>
        <Button title="Press me" onPress={() => alert("Button pressed")} />
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
});
