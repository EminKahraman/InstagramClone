import { View, Text, StyleSheet } from "react-native";
import SvgComponent from "../assets/SVG";

export default function EmptyState() {
  return (
    <View style={styles.container}>
      <SvgComponent />
      <Text style={styles.text}>
        No photo uploaded yet
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "gray",
    marginTop: 20,
  },
});