import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DoctorListItem from "./src/components/DoctorListItem";
import searchData from "../data/search.json";
import { useHeaderHeight } from '@react-navigation/elements';

const SearchScreen = () => {
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();
  const [search, setSearch] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: (event) => setSearch(event.nativeEvent.text),
      },
    });
  }, [navigation]);

  useEffect(() => {
    setFilteredDoctors(
      searchData.filter(
        (d) =>
          d.name.toLowerCase().includes(search.toLowerCase()) ||
          d.specialty.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);
  

  return (
      <FlatList
        contentContainerStyle={{ padding: 10 }}
        data={filteredDoctors}
        renderItem={({ item }) => <DoctorListItem doctor={item} />}
        contentInsetAdjustmentBehavior="automatic"
      />
  );
};

export default SearchScreen;
