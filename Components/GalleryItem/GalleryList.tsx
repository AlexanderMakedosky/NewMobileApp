import { View, StyleSheet, FlatList } from "react-native";
import { UnsplashPhoto } from "../../types/Image";
import { GalleryItem } from "./GalleryItem";

type Props = {
  images: UnsplashPhoto[],
}

export const GalleryList: React.FC<Props> = ({
  images,
  // navigation
}) => {
  return (
    <View style={styles.container}>
      <FlatList data={images} renderItem={({ item }) => (
        <GalleryItem key={item.id} image={item}/>
      )} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
  }
});
