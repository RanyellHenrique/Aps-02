import * as React from 'react'
import { View, KeyboardAvoidingView, Alert } from 'react-native'
import CryptoJS from "react-native-crypto-js"
import { ScrollView } from 'react-native-gesture-handler'

import Styles from './styles/Styles'
import Header from '../components/Header'
import Button from '../components/Button'
import Input from '../components/Input'
import ButtonDialogue from '../components/ButtonDialogue'
import InputDialogue from '../components/InputDialogue'
import Dialogue from '../components/Dialogue'
import Progress from '../components/Progress'

export default class AssetExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text_normal: '',
      password: '',
      text_decrypted: '',
      password_decrypted: '',
      list: [],
      index: '',
      progress: 0,
      show: true,
    }
  }

  cryptography = () => { // função é chamada para criptografar o texto
    if (this.state.text_normal === '' || this.state.password === '') {
      Alert.alert('Digite o texto e a chave!!')
    } else {
      let ciphertext = CryptoJS.AES.encrypt(this.state.text_normal, this.state.password).toString()
      this.state.list.push({ text: ciphertext, user: '1', show: false })
      this.setState({ list: this.state.list, text_normal: '', password: '', progress: 0 })
    }
  }

  decryption = () => { // função é chamada para descriptografar o texto
    if (this.state.password_decrypted !== '') {
      let texts = this.state.list
      let bytes = CryptoJS.AES.decrypt(this.state.text_decrypted, this.state.password_decrypted)
      let originalText = bytes.toString(CryptoJS.enc.Utf8)
      if (originalText !== '') {
        texts[this.state.index].text = originalText
        texts[this.state.index].show = false
        this.setState({ list: texts, password_decrypted: '', show: true })
      } else {
        Alert.alert('Chave Errada!!')
      }
    } else {
      Alert.alert('Digite a Chave!!')
    }
  }

  text_input = text => { // função é chamada para obter o valor do texto digitado 
    let value = text.length / 128
    this.setState({ text_normal: text, progress: value })

  }

  password_input = text => { // função é chamada para obter o valor da chave digitada no periodo criptografia
    this.setState({ password: text })
  }

  password_decryption = text => { // função é chamada para obter o valor da chave digitada no periodo descriptografia
    this.setState({ password_decrypted: text })
  }

  password_activation = (text, key) => { // função é chamada para verificar se a chave e o texto estão corretos
    let texts = this.state.list
    this.setState({ text_decrypted: text.text, index: key })
    if (text.show == true) {
      texts[key].show = false
      this.setState({ lista: texts })
    } else {
      texts[key].show = true
      this.setState({ lista: texts })
    }
    let shows = this.state.list.filter(list => list.show === true)
    if (shows.length > 0) {
      this.setState({ show: false })
    } else {
      this.setState({ show: true })
    }

  }



  render() { // função que renderiza os componentes criados
    return (
      <React.Fragment>
        <Header title="Criptografia" subTitle="AES" />
        <Progress value={this.state.progress} />
        <ScrollView style={Styles.scroll}>
          {this.state.list.map((item, key) => //função que renderiza os textos digitados
            <View key={key}>
              <Dialogue
                value={item.text}
                choose={item.show}
                chamar={this.password_activation.bind(this, item, key)} />
              {item.show ? (
                <KeyboardAvoidingView style={Styles.bottonInput} behavior="padding" enabled>
                  <InputDialogue text={this.state.password_decrypted} receive={this.password_decryption} name='chave' />
                  <ButtonDialogue click={this.decryption} name='D' />
                </KeyboardAvoidingView>) : null}
            </View>)}
        </ScrollView>
        {this.state.show ?
          (<KeyboardAvoidingView style={Styles.inputs} behavior="padding" enabled>
            <View>
              <Input text={this.state.text_normal} receive={this.text_input} name='texto' />
              <Input text={this.state.password} receive={this.password_input} name='chave' />
            </View>
            <Button name="C" click={this.cryptography} />
          </KeyboardAvoidingView>) : null}
      </React.Fragment>
    );
  }
}

