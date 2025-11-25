import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    obtenerDatos();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Cargando productos...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Fan Store</Text>
        <Text style={styles.subtitulo}>Los mejores productos para ti</Text>
      </View>
      
      <View style={styles.lista}>
        {data.map((producto) => (
          <TouchableOpacity key={producto.id} style={styles.card}>
            <Image
              source={{ uri: producto.image }}
              style={styles.imagen}
            />
            <View style={styles.cardContent}>
              <Text style={styles.categoria}>{producto.category}</Text>
              <Text style={styles.tituloProducto} numberOfLines={2}>
                {producto.title}
              </Text>
              <View style={styles.precioContainer}>
                <Text style={styles.precio}>${producto.price}</Text>
                <Text style={styles.rating}>
                  ⭐ {producto.rating?.rate} 
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  loadingText: {
    fontSize: 18,
    color: '#6c757d',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2c3e50',
  },
  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    color: '#7f8c8d',
    marginTop: 5,
  },
  lista: {
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  imagen: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'space-between',
  },
  categoria: {
    fontSize: 12,
    color: '#e74c3c',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  tituloProducto: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2c3e50',
    marginVertical: 5,
  },
  precioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  precio: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27ae60',
  },
  rating: {
    fontSize: 12,
    color: '#f39c12',
    fontWeight: '600',
  },
});