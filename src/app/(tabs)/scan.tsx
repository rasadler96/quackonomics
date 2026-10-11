import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, View } from 'react-native';
import Button from '../components/button';

export default function ScanScreen() {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a Photo" onPress={pickImageAsync} />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
