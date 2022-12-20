import React from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import {SingleCoordItem} from './SingleCoordItem';

export const CoordinatesSection = () => {
  // const [text, onChangeText] = React.useState("xxx");

  return (
    <SafeAreaView style={{backgroundColor: 'tan', padding: 15, flex: 1}}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Starting position</Text>
        <View>
          <SingleCoordItem name="Position X" testNum="100" />
          <SingleCoordItem name="Position Y" testNum="200" />
          <SingleCoordItem name="Height of position" testNum="300" />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Air target</Text>
        <View>
          <SingleCoordItem name="Target X" testNum="400" />
          <SingleCoordItem name="Target Y" testNum="500" />
          <SingleCoordItem name="Height of target" testNum="600" />
        </View>
      </View>
      <Button
        title="Fire"
        color="tomato"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
      {/* <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    marginBottom: 15,
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginEnd: 10,
    marginTop: 20,
    width: 140,
  },
});
