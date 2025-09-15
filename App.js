import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './components/style.js';

const request = async (callback) => {
  const response = await fetch('https://api.disneyapi.dev/character');
  const parsed = await response.json();
  return parsed.data;
}

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    request(setData);
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.superior}>
          Disney!
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({item}) =>
          <Text style={styles.item}>
            <Text>Filmes: {item.films[0]}{'\n'}</Text>
            <Text>Programa de TV: {item.tvShows[0]}{'\n'}</Text>
            <Text>Video games: {item.videoGames[0]}{'\n'}</Text>
          </Text>
        }>
      </FlatList >
    </View >
  );
}