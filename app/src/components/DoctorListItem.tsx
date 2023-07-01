import React from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const DoctorListItem = ({ doctor }) => {
  return (
    <Link href ={`/doctors/${doctor.id}`} asChild>
      <Pressable style={styles.container}>
        <Image source={{ uri: doctor.image }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{doctor.name}</Text>
          <Text style={styles.specialty}>{doctor.specialty}</Text>
        </View>
        <AntDesign name="right" size={24} color="darkgray" />
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  specialty: {
    fontSize: 14,
    color: "gray",
  },
});

export default DoctorListItem;
