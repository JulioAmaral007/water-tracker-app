import React from 'react'
import { ScrollView, View } from 'react-native'

type ColorListProps = {
  color: string
}

export function ColorList ({color}: ColorListProps) {
  return (
    <ScrollView 
      className='px-6 py-3 h-full'>
      {
        [1, 0.8, 0.5].map(opacity=> (
          <View 
            key={opacity} 
            className='w-full h-44 rounded-3xl mb-5'
            style={{backgroundColor: color, opacity}} 
          />
        ))
      }
    </ScrollView>
  )
}