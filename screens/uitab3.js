
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import topics from '../data/topic';

export default function UITab3({ navigation }) {
  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate('TopicDetail', { topic: item, place: item })
      }
    >
      <View style={styles.numberCircle}>
        <Text style={styles.number}>{index + 1}</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {item.title || item.name}
        </Text>
      </View>

      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={topics}
        keyExtractor={(item, index) =>
          String(item.id || index)
        }
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F9FC',
  },

  list: {
    padding: 16,
    paddingTop: 20,
    paddingBottom: 24,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DFE6EF',
    borderRadius: 22,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 100,
  },

  numberCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#DCEAFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },

  number: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2459C4',
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#202C40',
    lineHeight: 25,
  },

  arrow: {
    fontSize: 32,
    color: '#3478E5',
    marginLeft: 8,
  },
});
