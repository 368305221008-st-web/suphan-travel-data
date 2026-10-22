
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

const COLORS = {
  primary: '#1E456E',
  green: '#16A34A',
  background: '#F6F9FC',
  white: '#FFFFFF',
  text: '#24364B',
  secondary: '#64748B',
  lightGreen: '#E8F5E9',
};

export default function UITab1() {
  return (
    <View style={styles.screen}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* กล่องหลักอยู่ตรงกลาง */}
        <View style={styles.hero}>

          {/* รูปหน้าปก */}
          <Image
            source={require('../assets/images/One.jpg')}
            style={styles.banner}
            resizeMode="cover"
          />

          {/* ชื่อเว็บไซต์ */}
          <View style={styles.heroText}>
            <Text style={styles.mainTitle}>
              SUPHAN BURI
            </Text>

            <Text style={styles.subTitle}>
              TRAVEL HUB
            </Text>

            <Text style={styles.description}>
              ค้นพบสถานที่ท่องเที่ยวที่น่าสนใจ
              {'\n'}
              ในจังหวัดสุพรรณบุรี
            </Text>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },

  hero: {
    width: '100%',
    backgroundColor: COLORS.lightGreen,
    borderRadius: 24,
    overflow: 'hidden',
    alignSelf: 'center',
  },

  banner: {
    width: '100%',
    height: 220,
  },

  heroText: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
    paddingTop: 26,
    paddingBottom: 30,
  },

  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
  },

  subTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.green,
    marginTop: 6,
    textAlign: 'center',
  },

  description: {
    fontSize: 16,
    lineHeight: 28,
    color: COLORS.text,
    textAlign: 'center',
    marginTop: 20,
  },
});
