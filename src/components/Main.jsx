import { View, Text } from 'react-native'
import React from 'react'
import Constants from "expo-constants"
import RepositoryList from './RepositoryList'

export default function Main() {
  return (
    <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>
      <Text>Rate Repository Application</Text>
      <RepositoryList/>
    </View>
  )
}