import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';

import Subject from './components/Subject';
import NewSubjectModal from './components/NewSubjectModal';

export default class App extends Component {
  state = {
    modalVisible: false,
    subjects: [],
  };

  async componentDidMount() {
    const subjects = JSON.parse(await AsyncStorage.getItem('repository')) || [];

    this.setState({ subjects });
  }

  openModal = () => {
    this.setState({ modalVisible: true });
  };

  _addSubject = async (name,number) => {

    const repository = {
      id: Math.random(),
      title: name,
      number: number,
    };

    this.setState({
      modalVisible: false,
      subjects: [
        ...this.state.subjects,
        repository,
      ],
    });

    await AsyncStorage.setItem('repository', JSON.stringify(this.state.subjects));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Aprovado</Text>
          <TouchableOpacity onPress={this.openModal}>
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.subjectList}>
          { this.state.subjects.map(subject => <Subject key={subject.id} data={subject} />) }
        </ScrollView>

        <NewSubjectModal
          onCancel={() => this.setState({ modalVisible: false })}
          onAdd={(name,number) => this._addSubject(name,number)}
          visible={this.state.modalVisible}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },

  header: {
    height: 70,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  headerButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  subjectList: {
    padding: 20,
  },
});