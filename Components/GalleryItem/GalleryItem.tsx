import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { withNavigation } from 'react-navigation';
import { UnsplashPhoto } from '../../types/Image';
import { useNavigation } from '@react-navigation/native';

type Props = {
  image: UnsplashPhoto;
}

export const GalleryItem: React.FC<Props> = ({ image }) => {

  const navigation = useNavigation();

  const handleOpenPhoto = () => {
    navigation.navigate('Photo', { imageUrl: image.urls.regular });
    console.log('Выбрана фотография:', image.description);
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleOpenPhoto}>
      <Image source={{ uri: image.urls.regular }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.descriptionStyle}>{image.description || 'Title missing'}</Text>
        <Text style={styles.nameStyle}>{image.user.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  descriptionStyle: {
    fontSize: 16,
    marginBottom: 5,
  },
  nameStyle: {
    fontSize: 14,
    color: '#666',
  },
});
