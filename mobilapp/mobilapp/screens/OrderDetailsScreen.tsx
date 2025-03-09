import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert, Image, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type OrderDetail = {
  Megrendeles_ID: number;
  termeknev: string;
  kategoria: string;
  tipus: string;
  egysegar: number;
  cikkszam: string;
  mennyiseg: number;
  Osszeg: number;
  datum: string;
  Statusz: string;
  szunet: number;
  Kepurl: string;
};

type OrderDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'OrderDetails'>;
type OrderDetailsScreenRouteProp = RouteProp<RootStackParamList, 'OrderDetails'>;

const OrderDetailsScreen = ({
  navigation,
  route,
}: {
  navigation: OrderDetailsScreenNavigationProp;
  route: OrderDetailsScreenRouteProp;
}) => {
  const [orderDetails, setOrderDetails] = useState<OrderDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const { orderId } = route.params;

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (!token) {
          Alert.alert('Hiba', 'Nincs bejelentkezve');
          navigation.replace('Login');
          return;
        }

        const response = await axios.get(`http://localhost:3000/userorders/details/${orderId}`, {
          headers: {
            Authorization: token,
          },
        });
        setOrderDetails(response.data);
      } catch (error) {
        Alert.alert('Hiba', 'Nem sikerült lekérni a rendelés részleteit');
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [navigation, orderId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Töltés...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rendelés részletei (ID: {orderId})</Text>
      {orderDetails.length === 0 ? (
        <Text>Nincsenek részletek ehhez a rendeléshez.</Text>
      ) : (
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
          {orderDetails.map((item) => (
            <View key={item.cikkszam} style={styles.detailItem}>
              <Image
                source={{ uri: item.Kepurl }}
                style={styles.image}
                onError={() => Alert.alert('Hiba', `Nem sikerült betölteni a képet: ${item.Kepurl}`)}
              />
              <Text>Termék neve: {item.termeknev}</Text>
              <Text>Kategória: {item.kategoria}</Text>
              <Text>Típus: {item.tipus}</Text>
              <Text>Cikkszám: {item.cikkszam}</Text>
              <Text>Egységár: {item.egysegar} Ft</Text>
              <Text>Mennyiség: {item.mennyiseg}</Text>
              <Text>Összeg: {item.Osszeg} Ft</Text>
              <Text>Dátum: {item.datum}</Text>
              <Text>Állapot: {item.Statusz}</Text>
              <Text>Szünet: {item.szunet}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    minHeight: Dimensions.get('window').height, // Minimális magasság a képernyő méretéhez
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 50, // Több hely a görgetéshez az utolsó elem után

  },
  detailItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
    resizeMode: 'contain',
  },
});

export default OrderDetailsScreen;