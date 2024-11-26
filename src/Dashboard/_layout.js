import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './HomeScreen';       
import ProfileScreen from './ProfileScreen'; 
import SettingsScreen from './SettingScreen'; 

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

// Custom header for screens (without horizontal line icon)
const CustomHeader = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

// Wrapping HomeScreen with custom header
const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#5B3A29' },
      headerTintColor: '#fff',
    }}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        header: () => <CustomHeader title="Home" />,
      }}
    />
  </Stack.Navigator>
);

// Wrapping ProfileScreen with custom header
const ProfileStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#5B3A29' },
      headerTintColor: '#fff',
    }}
  >
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        header: () => <CustomHeader title="Profile" />,
      }}
    />
  </Stack.Navigator>
);

// Wrapping SettingsScreen with custom header
const SettingsStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#5B3A29' },
      headerTintColor: '#fff',
    }}
  >
    <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        header: () => <CustomHeader title="Settings" />,
      }}
    />
  </Stack.Navigator>
);

const DashboardLayout = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#5B3A29',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tabs.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
      <Tabs.Screen name="Profile" component={ProfileStack} options={{ headerShown: false }} />
      <Tabs.Screen name="Settings" component={SettingsStack} options={{ headerShown: false }} />
    </Tabs.Navigator>
  );
};

export default DashboardLayout;

const styles = StyleSheet.create({
  header: {
    alignItems:"flex-start",
    backgroundColor: '#5B3A29',
    paddingVertical: 10,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
