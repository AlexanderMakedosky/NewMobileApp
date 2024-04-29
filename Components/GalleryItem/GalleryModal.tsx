import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, StatusBar, Image, StyleSheet, Modal, TouchableOpacity } from "react-native";

type Props = {
  route: any,
}

export const GalleryModal: React.FC<Props> = ({ route }) => {
  const { imageUrl } = route.params;

  const navigation = useNavigation();

  const handleClosePhoto = () => {
    navigation.goBack();
  }

  return (
    <ScrollView vertical pagingEnabled>
      <TouchableOpacity
        onPress={handleClosePhoto}
        style={styles.modalContainer}>
        <View style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: imageUrl
            }}
          />
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    width: 300,
    height: 470,
    top: 60,
    flex: 1,
    aspectRatio: 16 / 9,
    resizeMode: 'contain'
  },
});
