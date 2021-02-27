import React from "react";
import { View, Text, ImageBackground, Image, Dimensions } from "react-native";

const ImageScreen = ({ route, navigation }) => {
  const { image_url } = route.params;
  const { width, height } = Dimensions.get("screen");
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Image
        style={{ flex: 1, shadowRadius: 50 }}
        blurRadius={2}
        source={{ uri: image_url.image }}
        resizeMode="cover"
      />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 0,
          width: width,
          height: height,
        }}
      >
        <View
          style={{
            width: width / 1.2,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 0 },
            shadowRadius: 20,
            borderRadius: 5
          }}
        >
          <Image
            source={{ uri: image_url.image }}
            style={{
              width: width / 1.2,
              height: height / 2,
            }}
            resizeMode="stretch"
          />
          <View style={{ padding: 10 }}>
            <Text
              style={{
                textAlign: "left",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 5,
              }}
            >
              {image_url.title}
            </Text>
            <Text style={{ fontSize: 14, color: "gray" }}>Tech Crunch</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ImageScreen;
