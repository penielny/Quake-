import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NewsCard from "../../components/newscard";

export default function Search({ navigation }) {
  const search_url = "https://store-apis.herokuapp.com/api/technews/q";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchtext, setSearchtext] = useState("");

  const search = () => {
    setLoading(true);
    fetch(`${search_url}/${searchtext}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <View style={{ flex: 1, display: "flex" }}>
      <View
        style={{
          margin: 3,
          borderWidth: 0.5,
          borderRadius: 510,
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          marginVertical: 10,
          backgroundColor:"#fff",
          borderColor:"#fff",
          paddingHorizontal:5
        }}
      >
        <TextInput
          placeholder="Search News..."
          style={{ padding: 10, flex: 1 }}
          onChangeText={setSearchtext}
        />
        <TouchableOpacity
          onPress={() => search()}
          style={{ marginHorizontal: 10 }}
        >
          <Ionicons name="search" size={20} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          refreshing={loading}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(item) => (
            <NewsCard data={item.item} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
}
