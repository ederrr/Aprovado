/* Core */
import React from 'react';

/* Presentational */
import { View, Image, Text, StyleSheet } from 'react-native';

const Subject = ({ data }) => (
  <View style={styles.subject}>
    <Image
      style={styles.subjectImage}
      source={{ uri: 'https://enfoquepapelaria.com.br/wp-content/uploads/2018/08/books-stack-of-three.png' }}
    />
    <View style={styles.subjectInfo}>
      <Text style={styles.subjectTitle}>{data.title}</Text>
      <Text style={styles.subjectNumber}>{data.number} provas</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  subject: {
    padding: 20,
    backgroundColor: '#FFF',
    marginBottom: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  subjectImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  subjectInfo: {
    marginLeft: 10,
  },

  subjectTitle: {
    fontWeight: 'bold',
  },

  subjectNumber: {
    fontSize: 12,
    color: '#999',
  },
});

export default Subject;