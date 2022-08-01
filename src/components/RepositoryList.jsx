import { Text } from 'react-native'
import React from 'react'
import repositories from '../data/repositories'
import { FlatList } from 'react-native'
import RepositoryItem from './RepositoryItem'

export default function RepositoryList() {
  return (
    <FlatList
        data={repositories}
        ItemSeparatorComponent={() => <Text></Text>}
        renderItem={({item: repo}) => (
            
             <RepositoryItem {...repo}/>
            
        )}
    >


      
    </FlatList>
  )
}