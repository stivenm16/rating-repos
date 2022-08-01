import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StyledText from './StyledText'

function RepositoryStats (props) {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
           <View>
                <StyledText >Stars</StyledText>
                <StyledText >{props.stargazersCount}</StyledText>
           </View>

           <View>
                <StyledText >Forks Count</StyledText>
                <StyledText >{props.forksCount}</StyledText>
           </View>
           
           <View>
                <StyledText >Review Count</StyledText>
                <StyledText >{props.reviewCount}</StyledText>
           </View>
           
           <View>
                <StyledText >Rating</StyledText>
                <StyledText >{props.ratingAverage}</StyledText>
           </View>
        </View>
    )
}

export default function RepositoryItem(props) {
  return (
    <View>
        <View key={props.id} style={style.container}>
            <StyledText fontWeight='bold' fontSize='subheading' >{props.fullName}</StyledText>
            <StyledText style={{marginBottom: 30}}>{props.description}</StyledText>
            <StyledText >{props.language}</StyledText>
            
        </View>
        <View>
            <RepositoryStats {...props}/>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        padding: 20, 
        paddingBottom: 5,
        paddingTop: 5,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    strong: {
        color: '#09f',
        fontWeight: 'bold',
        marginBottom: 5,
    }
})
