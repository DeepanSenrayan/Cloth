import { View, Text } from 'react-native'
import React, { useState } from 'react'
import data from '../assets/json/hoodies.json'

export default function hoodies() {
    const [collection] = useState(data)
  return (
    <>
    <View>
        
    </View>
    </>
  )
}