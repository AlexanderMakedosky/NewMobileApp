import { View, Text, ScrollView, StatusBar, Image, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useEffect } from "react";
import * as actions from './features/imagesSlicer';
import React from "react";
import { GalleryList } from "./GalleryItem/GalleryList";

export const Main = () => {
    const dispatch = useAppDispatch();
    const images = useAppSelector(state => state.images.items);

    useEffect(() => {
      dispatch(actions.imagesInit());
    }, []);

    useEffect(() => {
        console.log('Результат', images);
    }, [images]);

    return (
      <View style={styles.container}>
        <ScrollView style={styles.imagesContainer} vertical pagingEnabled>
          <GalleryList images={images} />
        </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  imagesContainer: {
    flex: 1,
  },
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
