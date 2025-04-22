import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import RandomMenuScreen from "./screens/RandomMenuScreen";
import Notifications from "./screens/NotificationScreen";
import Profile from "./screens/MyProfile";
import SavedRecipes from "./screens/SaveScreen";
import CustomTabBar from "./screens/CustomTabBar";
import ResultScreen from "./screens/ResultScreen";
import SettingScreen from "./screens/SettingScreen";
import useAuth from "./hooks/useAuth"; // Custom hook for authentication
// Create Stack and Tab Navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator
const MainTabNavigator = () => (
  <Tab.Navigator
    tabBar={(props) => <CustomTabBar {...props} />}
    screenOptions={{ headerShown: false }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="SavedRecipes" component={SavedRecipes} />
    <Tab.Screen name="RandomMenuScreen" component={RandomMenuScreen} />
    <Tab.Screen name="Notifications" component={Notifications} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

// Main App Component
const App = () => {
  const { user } = useAuth(); // Get user data

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* If user exists, show MainTabNavigator */}
        {user ? (
          <Stack.Screen name="MainTabs" component={MainTabNavigator} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        )}
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
