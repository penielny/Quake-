import React from "react";
import styles from "../../screens/home/style";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNews } from "../../context/news";

export default function NewsCard({ data, navigation }) {
  const { fecthFullArticle } = useNews();

  const cb = () => {
    navigation.navigate("Details");
  };
  return (
    <TouchableOpacity
    onLongPress={(e)=>navigation.navigate('image',{image_url:data})}
      onPress={() => fecthFullArticle(data.href,cb)}
      style={styles.cardContainer}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.cover} source={{ uri: data.image }} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.articleTitle}>{data.title}</Text>
        <Text style={styles.description}>{data.content}</Text>
      </View>
    </TouchableOpacity>
  );
}
