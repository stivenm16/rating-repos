import { View, Text } from 'react-native'
import React from 'react'
import repositories from '../data/repositories'
import { FlatList } from 'react-native'

export default function RepositoryList() {
  return (
    <FlatList
        data={repositories}
        ItemSeparatorComponent={() => <Text></Text>}
        renderItem={({item: repo}) => (
            
                <View key={repo.id} style={{padding: 20, paddingBottom: 5, paddingTop: 5}}>
                    <Text style={{fontWeight: 'bold', marginBottom: 10}}>Fullname: {repo.fullName}</Text>
                    <Text>Description: {repo.description}</Text>
                    <Text>Language: {repo.language}</Text>
                    <Text>Stars: {repo.stargazersCount}</Text>
                    <Text>Forks Count: {repo.forksCount}</Text>
                    <Text>Review Count:{repo.reviewCount}</Text>
                    <Text>Rating: {repo.ratingAverage}</Text>
                </View>
            
        )}
    >


      
    </FlatList>
  )
}