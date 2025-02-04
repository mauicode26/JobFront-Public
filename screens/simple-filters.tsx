import React, { useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import FiltersSelectionContext from '../contexts/filters-selection-context'; // Adjust the path as necessary

const SimpleFilters = () => {
  const { filters, setFilterLocation, setFilterExperience } = useContext(FiltersSelectionContext);

  // Example of setting a filter, more can be added following this pattern
  const handleLocationChange = (key: string, value: string) => {
    setFilterLocation(key, value);
  };

  const handleExperienceChange = (value: string) => {
    setFilterExperience(value);
  };

  return (
    <View>
      {/* Example for a location filter */}
      <Text>Location:</Text>
      <TextInput
        placeholder="City"
        value={filters.location.city}
        onChangeText={(value) => handleLocationChange('city', value)}
      />
      <TextInput
        placeholder="State"
        value={filters.location.state}
        onChangeText={(value) => handleLocationChange('state', value)}
      />

      {/* Example for an experience level filter */}
      <Text>Experience Level:</Text>
      <Picker
        selectedValue={filters.experience}
        onValueChange={(itemValue, itemIndex) => handleExperienceChange(itemValue)}
      >
        <Picker.Item label="Junior" value="junior" />
        <Picker.Item label="Mid-level" value="mid" />
        <Picker.Item label="Senior" value="senior" />
      </Picker>

      {/* Additional filters for job type, title, etc. can be added following similar pattern */}

      {/* Button to apply filters (Example) */}
      <Button title="Apply Filters" onPress={() => console.log('Filters applied')} />
    </View>
  );
};

export default SimpleFilters;
