import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const handleLogout = () => {
    // You can clear any user session or authentication here (optional)
    navigation.replace('Login'); // Replace with Login screen to ensure user can't go back
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
      {/* Styled Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#F5E0C3' // Background color for the screen
  },
  text: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#5B3A29', // Consistent color with the theme
    marginBottom: 20 
  },
  logoutButton: {
    backgroundColor: '#5B3A29', // Button background matching theme color
    paddingVertical: 12, // Vertical padding for button size
    paddingHorizontal: 30, // Horizontal padding for button size
    borderRadius: 8, // Rounded corners for the button
    marginTop: 20, // Add spacing before button
    width: '60%', // Button width adjusted to be more compact
    alignItems: 'center', // Center text in button
  },
  logoutButtonText: {
    color: '#fff', // Text color for the button (white)
    fontSize: 18, // Font size for the text inside the button
    fontWeight: 'bold',
  }
});

export default SettingsScreen;
