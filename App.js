import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './components/style.js';

const request = async (callback) => {
  const response = await fetch('https://api.disneyapi.dev/character');
  const parsed = await response.json();
  callback(parsed);
}

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    request(data);
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
        keyExtractor={(item) => item.films.String()}
        renderItem={(item) =>
          <Text style={styles.item}>
            <Text>Filmes: {item.data.films}{'\n'}</Text>
            <Text>Programa de TV: {item.data.tvShows}{'\n'}</Text>
            <Text>Video games: {item.data.videoGames}{'\n'}</Text>
          </Text>
        }>
      </FlatList >
    </View>
  );
}