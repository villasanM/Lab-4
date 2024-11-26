import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here, e.g., send credentials to a server
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (

    <View style={styles.container}> 
      <TextInput
        style={styles.input}
        placeholder="Email or Phone"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <Button title="Sign In" onPress={handleLogin} />
      <Text style={styles.orText}>or</Text>
      <Button title="Sign In with Google" />
      <Text style={styles.forgotText}>Forgot password?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  orText: {
    marginVertical: 10,
  },
  forgotText: {
    marginTop: 10,
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
  },
  loginText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});

export default LoginPage
