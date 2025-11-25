import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Por favor completa todos los campos');
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Usuario logueado exitosamente');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al iniciar sesión: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.header}>
        <Text style={styles.logo}>Fan Store</Text>
        <Text style={styles.welcome}>Bienvenido de vuelta</Text>
        <Text style={styles.subtitle}>Inicia sesión en tu cuenta</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="tu@email.com"
            placeholderTextColor="#a0a0a0"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#a0a0a0"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.loginButton, loading && styles.loginButtonDisabled]} 
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.loginButtonText}>
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </Text>
        </TouchableOpacity>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>o</Text>
          <View style={styles.dividerLine} />
        </View>

        <TouchableOpacity 
          style={styles.registerButton}
          onPress={() => navigation.navigate('Registro')}
        >
          <Text style={styles.registerButtonText}>Crear una cuenta nueva</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Al iniciar sesión aceptas nuestros</Text>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Términos y Condiciones</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 25,
  },
  header: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 50,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  welcome: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f8f9fa',
    borderWidth: 2,
    borderColor: '#ecf0f1',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#2c3e50',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: '#3498db',
    fontSize: 14,
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#e74c3c',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  loginButtonDisabled: {
    backgroundColor: '#bdc3c7',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ecf0f1',
  },
  dividerText: {
    marginHorizontal: 15,
    color: '#7f8c8d',
    fontSize: 14,
  },
  registerButton: {
    borderWidth: 2,
    borderColor: '#3498db',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#3498db',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  footerText: {
    color: '#7f8c8d',
    fontSize: 12,
    marginBottom: 5,
  },
  footerLink: {
    color: '#3498db',
    fontSize: 12,
    fontWeight: '500',
  },
});