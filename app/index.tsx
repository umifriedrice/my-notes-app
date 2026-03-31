import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.text}>My Recipes</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Hello World. This is the home screen</Text>
        <Link href="/note" style={styles.button}>
          Go to Note screen
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    // backgroundColor: "#25292e",
    backgroundColor: "red",
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  container: {
    flex: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
