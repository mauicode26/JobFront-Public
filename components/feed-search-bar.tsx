import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';

type SearchBarComponentProps = {};

const FeedSearchBar: React.FunctionComponent<SearchBarComponentProps> = () => {
const [search, setSearch] = useState("");

const updateSearch = (search: string) => {
  setSearch(search);
};

return (
  <View style={styles.view}>
    <SearchBar
      placeholder="Type Here..."
      onChangeText={updateSearch}
      value={search}
      containerStyle={styles.search}
    />
  </View>
);
};

const styles = StyleSheet.create({
  view: {
    marginBottom: 30,
  },
  search: {
    backgroundColor: 'white',
    borderWidth: 0,
  }
});

export default FeedSearchBar;
