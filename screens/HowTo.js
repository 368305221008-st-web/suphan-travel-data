
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

const steps = [
  {
    number: '1',
    title: 'เข้าสู่หน้าหลัก',
    detail: 'เปิดแอป SUPHAN BURI TRAVEL HUB เพื่อเริ่มต้นใช้งาน',
  },
  {
    number: '2',
    title: 'เลือกเมนูที่ต้องการ',
    detail: 'ใช้แถบเมนูด้านล่างเพื่อเข้าถึงหน้าหลัก สาระน่ารู้ สถานที่ท่องเที่ยว และผู้จัดทำ',
  },
  {
    number: '3',
    title: 'ดูสถานที่ท่องเที่ยว',
    detail: 'เลือกสถานที่ท่องเที่ยวเพื่อดูรายชื่อสถานที่ท่องเที่ยวในจังหวัดสุพรรณบุรี',
  },
  {
    number: '4',
    title: 'ดูรายละเอียดสถานที่',
    detail: 'กดเลือกสถานที่ที่สนใจเพื่ออ่านข้อมูลและรายละเอียดเพิ่มเติม',
  },
  {
    number: '5',
    title: 'ดูข้อมูลผู้จัดทำ',
    detail: 'เปิดเมนูด้านข้าง แล้วเลือกผู้จัดทำเพื่อดูรายชื่อสมาชิกกลุ่ม',
  },
];

export default function HowTo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.emoji}>📖</Text>

      <Text style={styles.title}>วิธีใช้งาน</Text>

      <Text style={styles.subtitle}>
        SUPHAN BURI TRAVEL HUB
      </Text>

      {steps.map((step) => (
        <View key={step.number} style={styles.card}>
          <View style={styles.numberCircle}>
            <Text style={styles.number}>{step.number}</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.stepTitle}>
              {step.title}
            </Text>

            <Text style={styles.detail}>
              {step.detail}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F8FAFC',
    padding: 20,
  },
  emoji: {
    fontSize: 44,
    textAlign: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#166534',
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 24,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#DCFCE7',
    alignItems: 'flex-start',
  },
  numberCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#16A34A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  number: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 6,
  },
  detail: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 22,
  },
});
