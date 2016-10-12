import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import RNFetchBlob from 'react-native-fetch-blob'

const dirs = RNFetchBlob.fs.dirs

console.log(dirs)

export default class MusicPage extends Component{

  constructor(){
    super()
  }
  render(){
    return(
      <View style={styles.container}><Text>music</Text></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'red'
  }
})