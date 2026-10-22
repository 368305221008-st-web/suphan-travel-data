import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default function TopicDetail({ route }) {
  const place = route?.params?.place;

  if (!place) {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>ไม่พบข้อมูลรายละเอียด</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {place.image ? (
        <Image
          source={place.image}
          style={styles.image}
          resizeMode="cover"
        />
      ) : null}

      <View style={styles.content}>
        <Text style={styles.title}>
          {place.name || place.title || 'รายละเอียด'}
        </Text>

        {place.district ? (
          <Text style={styles.district}>{place.district}</Text>
        ) : null}

        <Text style={styles.sectionTitle}>รายละเอียด</Text>

        <Text style={styles.description}>
          {place.description ||
            place.detail ||
            place.content ||
            'ยังไม่มีรายละเอียด'}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  image: {
    width: '100%',
    height: 260,
    backgroundColor: '#E2E8F0',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 10,
  },
  district: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 26,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
