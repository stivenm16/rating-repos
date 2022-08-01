import { Text, StyleSheet } from 'react-native'
import React from 'react'
import theme from '../theme'

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary: {
        color: theme.colors.textSecondary
    },
    colorSecondary:{
        color: theme.colors.textSecondary
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    }

})

export default function StyledText({children, color, fontSize, fontWeight, style, ...restOfProps}) {

  const textStyles = [
    styles.text,
    color ==='primary' && styles.colorPrimary,
    color ==='secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold

  ]

  return (
    
    <Text style= {textStyles} {...restOfProps}>
        {children}
    </Text>
    
  )
}