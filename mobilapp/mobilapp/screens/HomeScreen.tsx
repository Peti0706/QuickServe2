import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';


// Navigációs stack típusdefiníció
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  OrderDetails: { orderId: number };
};

// Rendelés típusdefiníció az API válasza alapján
type Order = {
  Megrendeles_ID: number;
  Datum: string;
  Osszeg: number;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: { navigation: HomeScreenNavigationProp }) => {
  const [orders, setOrders] = useState<Order[]>([]); // Típus megadása
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (!token) {
          Alert.alert('Hiba', 'Nincs bejelentkezve');
          navigation.replace('Login');
          return;
        }

        const response = await axios.get('http://localhost:3000/userorders', {
          headers: {
            Authorization: token,
          },
        });
        setOrders(response.data);
      } catch (error) {
        Alert.alert('Hiba', 'Nem sikerült lekérni a rendeléseket');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [navigation]);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    navigation.replace('Login');
  };

  const handleViewOrder = (orderId: number) => {
    console.log(`Megnézem a rendelést: ${orderId}`);
     navigation.navigate('OrderDetails', { orderId });
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Töltés...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Üdv a főoldalon!</Text>
      <Text style={styles.subtitle}>Rendeléseid:</Text>
      {orders.length === 0 ? (
        <Text>Nincsenek rendeléseid.</Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.Megrendeles_ID.toString()}
          renderItem={({ item }) => (
            <View style={styles.orderItem}>
              <Text>Megrendelés ID: {item.Megrendeles_ID}</Text>
              <Text>Dátum: {item.Datum}</Text>
              <Text>Összeg: {item.Osszeg} Ft</Text>
              <Button title="Megnézem" onPress={() => handleViewOrder(item.Megrendeles_ID)} />
            </View>
          )}
        />
      )}
      <Button title="Kilépés" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  orderItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 8,
  },
});

export default HomeScreen;