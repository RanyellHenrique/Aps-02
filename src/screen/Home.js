import * as React from 'react'
import { Text} from 'react-native'
import { Card, Divider } from 'react-native-elements'

import Header from '../components/Header'
import Styles from './styles/Styles'

export default class AssetExample extends React.Component {
  render() {
    return ( // função que renderiza os componentes criados
      <React.Fragment >
        <Header title="Home" subTitle="Definição" />
        <Card style={Styles.card}>
          <Text style={Styles.title}> Criptografia AES </Text>
          <Divider style={{ backgroundColor: 'gray' }} />
          <Text>
            O Advanced Encryption Standard ou AES também é chamado de Rijndael cipher (meu favorito).
            AES suporta criptografia de 128, 192 e 256 bits, que pode ser determinada pelo tamanho da
            chave, o tamanho da chave de criptografia de 128 bits é de 16 bytes, a chave de criptografia
            de 192 bits é de 24 bytes eo tamanho da chave de criptografia de 256 bits é de 32 bytes. A AES
            Encryption oferece um bom desempenho e um bom nível de segurança. A criptografia AES é uma cifra
            simétrica e usa a mesma chave para criptografia e descriptografia.
          </Text>
        </Card>
      </React.Fragment>
    );
  }
}