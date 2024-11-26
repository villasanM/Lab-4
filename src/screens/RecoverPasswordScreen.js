import React from 'react';
import { View, StyleSheet } from 'react-native';
import RecoverPasswordForm from '../components/RecoverPasswordForm';

const RecoverPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <RecoverPasswordForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 0, // Remove left and right margins
    paddingHorizontal: 0, // Remove left and right padding
    backgroundColor: '#F5E0C3', // Ensure the background color covers the full screen
  },
});

export default RecoverPasswordScreen;
