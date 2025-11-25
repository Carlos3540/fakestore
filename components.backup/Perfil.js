import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function Perfil() {
  const user = {
    name: 'Carlos García',
    email: 'carlos@fanestore.com',
    membership: 'Premium',
    joinDate: 'Enero 2024',
    avatar: 'https://i.pravatar.cc/150?img=3',
  };

  const stats = [
    { label: 'Pedidos', value: '24', icon: '' },
    { label: 'Favoritos', value: '18', icon: '' },
    { label: 'Puntos', value: '1,250', icon: '' },
    { label: 'Reseñas', value: '12', icon: '' },
  ];

  const menuItems = [
    { icon: '', title: 'Editar Perfil', subtitle: 'Información personal' },
    { icon: '', title: 'Direcciones', subtitle: 'Gestionar ubicaciones' },
    { icon: '', title: 'Métodos de Pago', subtitle: 'Tarjetas y wallets' },
    { icon: '', title: 'Notificaciones', subtitle: 'Preferencias' },
    { icon: '', title: 'Privacidad', subtitle: 'Configuración de seguridad' },
    { icon: '', title: 'Ayuda', subtitle: 'Centro de soporte' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header del perfil */}
      <View style={styles.profileHeader}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <View style={styles.profileInfo}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
          <View style={styles.membershipBadge}>
            <Text style={styles.membershipText}>{user.membership}</Text>
          </View>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        {stats.map((stat, index) => (
          <View key={index} style={styles.statItem}>
            <Text style={styles.statIcon}>{stat.icon}</Text>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      {/* Menú de opciones */}
      <View style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Configuración</Text>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Text style={styles.menuIcon}>{item.icon}</Text>
            <View style={styles.menuText}>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
            </View>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Información adicional */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Miembro desde</Text>
        <Text style={styles.infoValue}>{user.joinDate}</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
        <Text style={styles.progressText}>Nivel 5 - Experto</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  profileHeader: {
    backgroundColor: 'white',
    padding: 25,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#3498db',
  },
  profileInfo: {
    marginLeft: 15,
    flex: 1,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  userEmail: {
    fontSize: 14,
    color: '#7f8c8d',
    marginVertical: 4,
  },
  membershipBadge: {
    backgroundColor: '#f39c12',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  membershipText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  statItem: {
    alignItems: 'center',
  },
  statIcon: {
    fontSize: 20,
    marginBottom: 5,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  statLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 2,
  },
  menuSection: {
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 20,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    margin: 15,
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  menuIcon: {
    fontSize: 24,
    marginRight: 15,
    width: 30,
  },
  menuText: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
  menuSubtitle: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 2,
  },
  menuArrow: {
    fontSize: 20,
    color: '#bdc3c7',
    fontWeight: 'bold',
  },
  infoCard: {
    backgroundColor: 'white',
    margin: 15,
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 15,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#ecf0f1',
    borderRadius: 3,
    marginBottom: 8,
  },
  progressFill: {
    height: 6,
    backgroundColor: '#27ae60',
    borderRadius: 3,
    width: '75%',
  },
  progressText: {
    fontSize: 12,
    color: '#7f8c8d',
    textAlign: 'center',
  },
});