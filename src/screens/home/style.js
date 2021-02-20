import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    backgroundColor: "white",
    paddingVertical: 10,
    marginHorizontal:10,
    margin:10,
    borderRadius:10
  },
  imageContainer: {
    height: 200,
    width: "100%",
  },
  cover:{
    width: "100%",
    height:"100%"
  },
  titleContainer:{
      marginTop: 10,
      padding:10,
  },
  articleTitle:{
      fontSize: 20,
      fontWeight: "bold",
      marginBottom:5
  },
  description:{
      fontSize: 14,
      color:"gray"
  }
});

export default styles;
