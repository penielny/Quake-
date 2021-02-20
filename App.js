import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/home";
import { NewsProvider } from "./src/context/news";
import Details from "./src/screens/details";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NewsProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{
              headerTitleAlign: "center",
              title: "Quake🔥",
              headerRight: () => <HeaderRight />,
            }}
            component={Home}
          />
          <Stack.Screen
            name="Details"
            options={{
              headerTitleAlign: "center",
              title: "Quake🔥",
              headerRight: () => <HeaderRight />,
            }}
            component={Details}
          />
          <Stack.Screen
            name="Search"
            options={{
              headerTitleAlign: "center",
              title: "Quake🔥",
              headerRight: () => <HeaderRight close />,
            }}
            component={Search}
          />
        </Stack.Navigator>
      </NewsProvider>
    </NavigationContainer>
  );
}

import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Search from "./src/screens/search";
function HeaderRight({close}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity 
    style={{ margin: 10 }}
    onPress={() => {
      if(!close){
        navigation.navigate("Search")
      }else{
        navigation.goBack();
      }
    }}
    >
      <Ionicons name={close?"close" : "search"} size={20} 
       />
    </TouchableOpacity>
  );
}
