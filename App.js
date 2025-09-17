import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, ActivityIndicator } from 'react-native';
import styles from './components/style.js';

const request = async () => {
  try {
    const response = await fetch('https://api.disneyapi.dev/character');
    const parsed = await response.json();
    return parsed.data;
  } catch (error) {
    console.error("Erro ao buscar os dados: ", error);
    return [];
  }
}

export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const buscandoDados = async () => {
      const dadosConsumidos = await request();
      setData(dadosConsumidos);
      setIsLoading(false);
    };
    buscandoDados();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'#0000ff'} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.superior}>
          Disney!
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) =>
          <Text style={styles.item}>
            Id: {item._id}{'\n'}
            Filmes: {item.films[0]}{'\n'}
            Programa de TV: {item.tvShows[0]}{'\n'}
            Video games: {item.videoGames[0]}{'\n'}
          </Text>
        }>
      </FlatList >
    </View >
  );
}