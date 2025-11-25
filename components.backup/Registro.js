import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';


export default function Registro({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      alert('Por favor completa todos los campos');
      return;
    }

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Usuario registrado exitosamente');
    } catch (error) {
      console.error('Error al registrar:', error);
      alert('Error al registrar: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.logo}>Fan Store</Text>
          <Text style={styles.welcome}>Crear cuenta</Text>
          <Text style={styles.subtitle}>Únete a nuestra comunidad</Text>
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
              placeholder="Mínimo 6 caracteres"
              placeholderTextColor="#a0a0a0"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirmar Contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder="Repite tu contraseña"
              placeholderTextColor="#a0a0a0"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>

          <View style={styles.requirements}>
            <Text style={styles.requirementsTitle}>Requisitos de contraseña:</Text>
            <Text style={styles.requirement}>• Mínimo 6 caracteres</Text>
            <Text style={styles.requirement}>• Letras y números</Text>
          </View>

          <TouchableOpacity 
            style={[styles.registerButton, loading && styles.registerButtonDisabled]} 
            onPress={handleRegister}
            disabled={loading}
          >
            <Text style={styles.registerButtonText}>
              {loading ? 'Creando cuenta...' : 'Crear Cuenta'}
            </Text>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>o</Text>
            <View style={styles.dividerLine} />
          </View>

          <TouchableOpacity 
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.loginButtonText}>¿Ya tienes cuenta? Inicia sesión</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Al registrarte aceptas nuestros</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Términos y Condiciones</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 25,
  },
  header: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
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
  requirements: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 12,
    marginBottom: 30,
  },
  requirementsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  requirement: {
    fontSize: 12,
    color: '#7f8c8d',
    marginBottom: 4,
  },
  registerButton: {
    backgroundColor: '#27ae60',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#27ae60',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  registerButtonDisabled: {
    backgroundColor: '#bdc3c7',
  },
  registerButtonText: {
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
  loginButton: {
    borderWidth: 2,
    borderColor: '#e74c3c',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#e74c3c',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    marginTop: 40,
    marginBottom: 30,
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