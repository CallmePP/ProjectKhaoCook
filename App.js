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
import CustomTabBar from "./screens/CustomTabBar"; // เพิ่ม CustomTabBar ที่นี่
import ResultScreen from './screens/ResultScreen';
import SettingScreen from "./screens/SettingScreen";
import EditProfile from './screens/EditProfile'; // เพิ่ม EditProfile ที่นี่

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator
const MainTabNavigator = () => (
  <Tab.Navigator
    tabBar={(props) => <CustomTabBar {...props} />}  // ใช้ CustomTabBar ที่นี่
    screenOptions={{ headerShown: false }} // ปิด header ด้วย
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
        {/* ใช้ MainTabNavigator ให้เป็นหน้าหลัก */}
        <Stack.Screen name="MainTabs" component={MainTabNavigator} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="EditScreen" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
