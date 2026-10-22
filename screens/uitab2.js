import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TEAM = [
  {
    id: '1',
    name: 'นางสาว ธันยกาญจน์ อ่ำสกุล',
    studentId: '008',
    role: 'ออกแบบแอปพลิเคชัน',
    emoji: '👩🏻‍💻',
  },
  {
    id: '2',
    name: 'นางสาว ธีรัสดา วรแสน',
    studentId: '009',
    role: 'จัดทำสื่อนำเสนอผลงาน',
    emoji: '👩🏻‍💻',
  },
  {
    id: '3',
    name: 'นางสาว พิไลวรรณ ใจแจ้ง',
    studentId: '014',
    role: 'จัดทำรูปเล่มรายงาน',
    emoji: '👩🏻‍💻',
  },
];

export default function UITab2() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>OUR TEAM</Text>
      <Text style={styles.subtitle}>สมาชิกผู้จัดทำโครงงาน</Text>

      {TEAM.map((member) => (
        <View key={member.id} style={styles.card}>
          <Text style={styles.avatar}>{member.emoji}</Text>

          <View style={styles.info}>
            <Text style={styles.name}>{member.name}</Text>
            <Text style={styles.studentId}>
              รหัสนักศึกษา {member.studentId}
            </Text>
            <Text style={styles.role}>{member.role}</Text>
          </View>
        </View>
      ))}

      <View style={styles.note}>
        <Text style={styles.noteText}>
          ร่วมกันพัฒนาแอป SUPHAN BURI TRAVEL HUB
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1E3A5F',
    textAlign: 'center',
    marginTop: 12,
  },
  subtitle: {
    fontSize: 15,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  avatar: {
    fontSize: 38,
    marginRight: 14,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 6,
  },
  studentId: {
    fontSize: 14,
    color: '#16A34A',
    marginBottom: 6,
  },
  role: {
    fontSize: 14,
    color: '#64748B',
  },
  note: {
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
    marginBottom: 24,
  },
  noteText: {
    textAlign: 'center',
    color: '#166534',
    fontSize: 14,
    lineHeight: 22,
  },
});
