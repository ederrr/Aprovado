/* Core */
import React, { Component } from 'react';

/* Presentational */
import {
  View,
  Text,
  Modal,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

export default class NewSubjectModal extends Component {
  state = {
    newSubjectName: '',
  };

  _onAdd = () => {
    this.props.onAdd(this.state.newSubjectName,this.state.newSubjectNumber);

    this.setState({ 
      newSubjectName: '',
      newSubjectNumber: 2,
  });
  };

  render() {
    return (
      <Modal onRequestClose={()=>{}} animationType="fade" transparent={true} visible={this.props.visible}>
        <KeyboardAvoidingView behavior="height" style={styles.modalContainer}>
          <View style={styles.boxContainer}>
            <Text style={styles.boxTitle}>Adicionar Materia</Text>
            <TextInput
              autoFocus
              autoCapitalize="none"
              style={styles.boxInput}
              underlineColorAndroid="rgba(0, 0, 0, 0)"
              placeholder="nome da materia"
              value={this.state.newSubjectName}
              onChangeText={newSubjectName => this.setState({ newSubjectName })}
            />
            <TextInput
              style={styles.boxInput}
              keyboardType="numeric"
              underlineColorAndroid="rgba(0, 0, 0, 0)"
              placeholder="numero de provas"
              value={this.state.newSubjectNumber}
              onChangeText={newSubjectNumber => this.setState({ newSubjectNumber })}
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={this.props.onCancel}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.submitButton]}
                onPress={this._onAdd}
              >
                <Text style={styles.buttonText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxContainer: {
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    width: 280,
  },

  boxTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  boxInput: {
    alignSelf: 'stretch',
    marginTop: 10,
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    height: 40,
    borderRadius: 3,
  },

  buttonContainer: {
    marginTop: 10,
    height: 40,
    flexDirection: 'row',
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: '#333',
  },

  cancelButton: {
    backgroundColor: '#E25F5F',
    marginRight: 5,
  },

  submitButton: {
    backgroundColor: '#70BD85',
    marginLeft: 5,
  },

  buttonText: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 12,
  },
});