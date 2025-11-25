import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

export default function Logout() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('Usuario cerró sesión');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}></Text>
        <Text style={styles.title}>¿Listo para salir?</Text>
        <Text style={styles.subtitle}>
          Esperamos verte pronto de vuelta. Tu progreso se mantendrá guardado.
        </Text>
        
        <View style={styles.features}>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}></Text>
            <Text style={styles.featureText}>Datos guardados</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}></Text>
            <Text style={styles.featureText}>Historial intacto</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}></Text>
            <Text style={styles.featureText}>Sesión segura</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>FaneStore © 2024</Text>
        <Text style={styles.footerSubtext}>Gracias por visitarnos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  emoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 40,
  },
  features: {
    width: '100%',
    marginBottom: 50,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureIcon: {
    fontSize: 20,
    marginRight: 15,
  },
  featureText: {
    fontSize: 14,
    color: '#2c3e50',
    fontWeight: '500',
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#e74c3c',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    marginBottom: 15,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelButton: {
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#bdc3c7',
  },
  cancelButtonText: {
    color: '#7f8c8d',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    padding: 25,
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  footerText: {
    fontSize: 14,
    color: '#2c3e50',
    fontWeight: '600',
    marginBottom: 5,
  },
  footerSubtext: {
    fontSize: 12,
    color: '#7f8c8d',
  },
});