import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { Searchbar } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Link href="/search" asChild
        >
          <Pressable style={styles.searchBar}>
            <Text>Search for doctor, appointment</Text>
            <FontAwesome name="search" size={24} color="black" />
          </Pressable>
        </Link>

        <Link href="/search">Search your</Link>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "white",
  },
  main: {
    flex: 1,
    marginHorizontal: "auto",
    maxWidth: 960,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    borderRadius: 10,
    maxHeight: 45,
    width: '100%'
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
