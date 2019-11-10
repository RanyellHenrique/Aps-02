import * as React from 'react'
import { Text, View, StyleSheet, KeyboardAvoidingView, ProgressBarAndroid, Alert } from 'react-native'
import CryptoJS from "react-native-crypto-js"
import { ScrollView } from 'react-native-gesture-handler'

import  Styles from '../styles/Styles'

import Header from '../components/Header'
import Button from '../components/Button'
import Input from '../components/Input'
import ButtonDialogo from '../components/ButtonDialogo'
import InputDialogo from '../components/InputDialogo'
import Dialogue from '../components/Dialogo'
import Progress from '../components/Progress'



export default class AssetExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      texto_normal: '',
      chave: '',
      texto_criptografado: '',
      chave_descriptografada: '',
      list: [],
      index: '',
      progress: 0,
      show: true,
    }
  }

  criptografia = () => {
    if (this.state.texto_normal === '' || this.state.chave === '') {
      Alert.alert('Digite o texto e a chave!!')
    } else {
      let ciphertext = CryptoJS.AES.encrypt(this.state.texto_normal, this.state.chave).toString()
      this.state.list.push({ text: ciphertext, user: '1', show: false })
      this.setState({ list: this.state.list, texto_normal: '', chave: '', progress: 0 })
    }
  }

  entrada_texto = texto => {
    let value = texto.length / 128
    this.setState({ texto_normal: texto, progress: value })

  }

  entrada_chave = texto => {
    this.setState({ chave: texto })
  }

  chave_descriptografia = texto => {
    this.setState({ chave_descriptografada: texto })
  }

  acionar_chave = (texto, key) => {
    let textos = this.state.list
    this.setState({ texto_criptografado: texto.text, index: key })
    if (texto.show == true) {
      textos[key].show = false
      this.setState({ lista: textos })
    } else {
      textos[key].show = true
      this.setState({ lista: textos })
    }
    let shows = this.state.list.filter(list => list.show === true)
    if (shows.length > 0) {
      this.setState({ show: false })
    } else {
      this.setState({ show: true })
    }

  }

  descriptografia = () => {
    let textos = this.state.list
    let bytes = CryptoJS.AES.decrypt(this.state.texto_criptografado, this.state.chave_descriptografada)
    let originalText = bytes.toString(CryptoJS.enc.Utf8)
    if (originalText !== '') {
      textos[this.state.index].text = originalText
      this.setState({ lista: textos })
    }else{
      Alert.alert('Chave Errada!!')
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header name="Criptografia AES" />
        <Progress value={this.state.progress} />
        <ScrollView style={Styles.scroll}>
          {this.state.list.map((item, key) =>
            <View key={key}>
              <Dialogue
                value={item.text}
                choose={item.show}
                chamar={this.acionar_chave.bind(this, item, key)} />
              {item.show ? (
                <KeyboardAvoidingView style={Styles.bottonInput} behavior="padding" enabled>
                  <InputDialogo chamar={this.chave_descriptografia} name='chave' />
                  <ButtonDialogo click={this.descriptografia} name='D' />
                </KeyboardAvoidingView>) : null}
            </View>)}
        </ScrollView>
        {this.state.show ?
          (<KeyboardAvoidingView style={Styles.inputs} behavior="padding" enabled>
            <View>
              <Input texto={this.state.texto_normal} chamar={this.entrada_texto} name='texto' />
              <Input texto={this.state.chave} chamar={this.entrada_chave} name='chave' />
            </View>
            <Button name="C" click={this.criptografia} />
          </KeyboardAvoidingView>) : null}
      </React.Fragment>
    );
  }
}

