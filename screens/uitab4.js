
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  RefreshControl,
} from 'react-native';

const API_URL =
  'https://raw.githubusercontent.com/368305221008-st-web/suphan-travel-data/main/places.json';

// รูปภาพใน assets/images
const placeImages = [
  {
    keyword: 'หอคอยบรรหาร',
    image: require('../assets/images/tower.jpg'),
  },
  {
    keyword: 'ตลาดสามชุก',
    image: require('../assets/images/samchuk.jpg'),
  },
  {
    keyword: 'บึงฉวาก',
    image: require('../assets/images/buengchawak.jpg'),
  },
  {
    keyword: 'ปุษยคีรี',
    image: require('../assets/images/buddha.jpg'),
  },
  {
    keyword: 'ดอนเจดีย์',
    image: require('../assets/images/donchedi.jpg'),
  },
  {
  keyword: 'หมู่บ้านอนุรักษ์ควายไทย',
  image: require('../assets/images/buffalovillage.jpg')
  },
  {
    keyword: 'พุเตย',
    image: require('../assets/images/phutoei.jpg'),
  },
  {
    keyword: 'เก้าห้อง',
    image: require('../assets/images/kaohongmarket.jpg'),
  },
  {
    keyword: 'ไผ่โรงวัว',
    image: require('../assets/images/watphairongwua.jpg'),
  },
  {
    keyword: 'หนองหลอด',
    image: require('../assets/images/watnonglot.jpg'),
  },
];

function normalizeName(name) {
  return String(name || '').replace(/\s+/g, '').trim();
}

function getPlaceImage(name) {
  const normalizedName = normalizeName(name);

  const matched = placeImages.find((item) =>
    normalizedName.includes(normalizeName(item.keyword))
  );

  return matched ? matched.image : null;
}

export default function UITab4({ navigation }) {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const loadPlaces = async () => {
    setError('');

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error('โหลดข้อมูลจาก GitHub ไม่สำเร็จ');
      }

      const data = await response.json();

      const list = Array.isArray(data)
        ? data
        : Array.isArray(data.places)
        ? data.places
        : [];

      if (list.length === 0) {
        throw new Error('ไม่พบรายการสถานที่ในไฟล์ places.json');
      }

      const formattedPlaces = list.map((item, index) => {
        const name =
          item.name ||
          item.title ||
          item.placeName ||
          `สถานที่ ${index + 1}`;

        return {
          ...item,
          id: String(item.id || index + 1),
          name,
          description:
            item.description ||
            item.detail ||
            item.content ||
            'ยังไม่มีรายละเอียดสถานที่',
          district: item.district || '',
          image: getPlaceImage(name),
        };
      });

      setPlaces(formattedPlaces);
    } catch (e) {
      setError(e.message || 'เกิดข้อผิดพลาด กรุณาลองใหม่');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadPlaces();
  }, []);

  const openDetail = (item) => {
    navigation.navigate('TopicDetail', {
      place: item,
    });
  };

  const renderPlace = ({ item, index }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => openDetail(item)}
    >
      {item.image ? (
        <Image
          source={item.image}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.noImage}>
          <Text style={styles.noImageText}>
            ไม่พบรูปของ {item.name}
          </Text>
        </View>
      )}

      <View style={styles.cardContent}>
        <Text style={styles.number}>
          สถานที่ {index + 1}
        </Text>

        <Text style={styles.placeName}>{item.name}</Text>

        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>

        <Text style={styles.detailButton}>
          ดูรายละเอียด ›
        </Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2563EB" />
        <Text style={styles.message}>
          กำลังโหลดสถานที่ท่องเที่ยว...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorTitle}>
          โหลดข้อมูลไม่สำเร็จ
        </Text>

        <Text style={styles.message}>{error}</Text>

        <TouchableOpacity
          style={styles.retryButton}
          onPress={() => {
            setLoading(true);
            loadPlaces();
          }}
        >
          <Text style={styles.retryText}>ลองอีกครั้ง</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>เที่ยวสุพรรณบุรี</Text>

        <Text style={styles.subtitle}>
          สถานที่ท่องเที่ยวที่น่าสนใจ
        </Text>

        <Text style={styles.count}>
          ทั้งหมด {places.length} สถานที่
        </Text>
      </View>

      <FlatList
        data={places}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={renderPlace}
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              loadPlaces();
            }}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    padding: 20,
    backgroundColor: '#DBEAFE',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1E3A8A',
  },
  subtitle: {
    fontSize: 15,
    color: '#64748B',
    marginTop: 6,
  },
  count: {
    fontSize: 13,
    color: '#2563EB',
    marginTop: 8,
  },
  list: {
    padding: 16,
    paddingBottom: 28,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  image: {
    width: '100%',
    height: 210,
    backgroundColor: '#E2E8F0',
  },
  noImage: {
    width: '100%',
    height: 210,
    backgroundColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  noImageText: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
  },
  cardContent: {
    padding: 16,
  },
  number: {
    fontSize: 12,
    color: '#2563EB',
    marginBottom: 8,
  },
  placeName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  description: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 21,
    marginTop: 8,
  },
  detailButton: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2563EB',
    textAlign: 'right',
    marginTop: 12,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F8FAFC',
  },
  message: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 12,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DC2626',
  },
  retryButton: {
    marginTop: 20,
    backgroundColor: '#2563EB',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
  },
  retryText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
