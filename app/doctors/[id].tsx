import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { useSearchParams } from "expo-router";

const DoctorsScreen = () => {
    const {id} = useSearchParams();
  return (
    <View>
      <Text>[id]</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DoctorsScreen;
