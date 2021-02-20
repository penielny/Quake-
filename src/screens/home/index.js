import React from "react";
import { View, FlatList, Text, Modal, ActivityIndicator } from "react-native";
import Loading from "../../components/loading";
import NewsCard from "../../components/newscard";
import { useNews } from "../../context/news";
import styles from "./style";

export default function Home({ navigation }) {
  const { news, loading, fetchNews ,faload} = useNews();
  console.log("home:", news.length);
  return (
    <>
      {!news.length && loading ? (
        <Loading />
      ) : (
        <View style={styles.container}>
          <LoadinDetails visible={faload} />
          <FlatList
            onRefresh={fetchNews}
            refreshing={loading}
            data={news}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(item) => (
              <NewsCard data={item.item} navigation={navigation} />
            )}
          />
        </View>
      )}
    </>
  );
}

function LoadinDetails({ visible }) {
  return (
    <Modal transparent visible={visible}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "white",
            paddingHorizontal: 30,
            paddingVertical: 20,
            borderRadius: 10,
            borderWidth: 0.5,
            borderColor: "gray",
          }}
        >
          <ActivityIndicator size="large" color="tomato" />
          <Text style={{ fontWeight: "bold", marginTop: 10 }}>Loading</Text>
        </View>
      </View>
    </Modal>
  );
}
