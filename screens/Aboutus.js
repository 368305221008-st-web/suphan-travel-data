import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

const members = [
  {
    id: '1',
    name: 'นางสาว ธันยกาญจน์ อ่ำสกุล',
    studentId: '008',
  },
  {
    id: '2',
    name: 'นางสาว ธีรัสดา วรแสน',
    studentId: '009',
  },
  {
    id: '3',
    name: 'นางสาว พิไลวรรณ ใจแจ้ง',
    studentId: '014',
  },
];

export default function Aboutus() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.emoji}>👩‍🎓</Text>

      <Text style={styles.title}>ผู้จัดทำ</Text>

      <Text style={styles.subtitle}>
        SUPHAN BURI TRAVEL HUB
      </Text>

      {members.map((member) => (
        <View key={member.id} style={styles.card}>
          <Text style={styles.name}>
            {member.name}
          </Text>

          <Text style={styles.studentId}>
            รหัสนักศึกษา {member.studentId}
          </Text>
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
    alignItems: 'center',
  },
  emoji: {
    fontSize: 48,
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#166534',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#64748B',
    marginTop: 6,
    marginBottom: 24,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#DCFCE7',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  studentId: {
    fontSize: 15,
    color: '#64748B',
    marginTop: 8,
  },
});
