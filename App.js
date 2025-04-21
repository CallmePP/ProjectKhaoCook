import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import RandomMenuScreen from "./screens/RandomMenuScreen";
import Notifications from "./screens/NotificationScreen";
import Profile from "./screens/MyProfile";
import SavedRecipes from "./screens/SaveScreen";
import CustomTabBar from "./screens/CustomTabBar";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom tab with custom tab bar
const MainTabNavigator = () => (
  <Tab.Navigator
  tabBar={(props) => <CustomTabBar {...props} />} // 👈 ใช้อันนี้แทนของเดิม
  screenOptions={{ headerShown: false }} // 👈 ปิด header ด้วย
>
  <Tab.Screen name="Home" component={HomeScreen} />
  <Tab.Screen name="SavedRecipes" component={SavedRecipes} />
  <Tab.Screen name="RandomMenuScreen" component={RandomMenuScreen} />
  <Tab.Screen name="Notifications" component={Notifications} />
  <Tab.Screen name="Profile" component={Profile} />
</Tab.Navigator>

);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Main tab navigator is placed here */}
        <Stack.Screen name="MainTabs" component={MainTabNavigator} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
