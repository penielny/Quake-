import React from 'react'
import { View, Text,Image,ScrollView } from 'react-native'
import { useNews } from '../../context/news';
import styles from "../home/style";
export default function Details() {
    const {fullArticle} = useNews()
    return (
        <ScrollView
        style={styles.cardContainer}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.cover} source={{ uri: fullArticle.image }} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.articleTitle}>{fullArticle.title}</Text>
          <Text style={styles.description}>{fullArticle.content}</Text>
        </View>
      </ScrollView>
    )
}
