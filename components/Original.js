import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function Original() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const categories = [
    { id: 'all', name: ' Todos' },
    { id: "men's clothing", name: 'Ropa Hombre' },
    { id: "women's clothing", name: ' Ropa Mujer' },
    { id: 'jewelery', name: ' Joyería' },
    { id: 'electronics', name: ' Electrónicos' },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Cargando productos especiales...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}> Productos Originales y filtrador</Text>
        <Text style={styles.subtitle}>Descubre artículos únicos</Text>
      </View>

      {/* Categorías */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.categoriesContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.id && styles.categoryButtonActive
            ]}
            onPress={() => setSelectedCategory(category.id)}
          >
            <Text style={[
              styles.categoryText,
              selectedCategory === category.id && styles.categoryTextActive
            ]}>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Contador de productos */}
      <View style={styles.counter}>
        <Text style={styles.counterText}>
          {filteredProducts.length} productos encontrados
        </Text>
      </View>

      {/* Grid de productos */}
      <View style={styles.productsGrid}>
        {filteredProducts.map((product) => (
          <TouchableOpacity key={product.id} style={styles.productCard}>
            <Image
              source={{ uri: product.image }}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productCategory}>
                {product.category}
              </Text>
              <Text style={styles.productTitle} numberOfLines={2}>
                {product.title}
              </Text>
              <View style={styles.productFooter}>
                <Text style={styles.productPrice}>${product.price}</Text>
                <Text style={styles.productRating}>
                   {product.rating?.rate}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Mensaje si no hay productos */}
      {filteredProducts.length === 0 && (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No hay productos en esta categoría</Text>
        </View>
      )}
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
    fontSize: 16,
    color: '#6c757d',
  },
  header: {
    backgroundColor: '#ffffff',
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  categoriesContainer: {
    padding: 15,
    backgroundColor: 'white',
    marginTop: 10,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ecf0f1',
    borderRadius: 20,
    marginRight: 10,
  },
  categoryButtonActive: {
    backgroundColor: '#3498db',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2c3e50',
  },
  categoryTextActive: {
    color: 'white',
  },
  counter: {
    padding: 15,
    alignItems: 'center',
  },
  counterText: {
    fontSize: 14,
    color: '#7f8c8d',
    fontWeight: '500',
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  productCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productInfo: {
    flex: 1,
  },
  productCategory: {
    fontSize: 10,
    color: '#e74c3c',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  productTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
    lineHeight: 16,
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#27ae60',
  },
  productRating: {
    fontSize: 12,
    color: '#f39c12',
    fontWeight: '600',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
  },
});