import { router } from 'expo-router'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../constants/Colors'

export default function category() {

  return (
    <>
      <View style={{ marginTop: 35 }}>
        <View style={{ gap: 10, padding: 10 }}>
          <TouchableOpacity onPress={() => router.navigate("/home")} style={{ width: 40, height: 40, backgroundColor: Colors.secondary, borderRadius: '50%' }}><Image source={require("./../assets/images/back.png")} /></TouchableOpacity>
          <Text style={{ fontSize: 20, fontFamily: 'outfit-bold', padding: 10 }}>Shop Of Categories</Text>
        </View>
      </View>
      <View style={{marginLeft:15, marginTop:10}}>
        <TouchableOpacity onPress={()=> router.navigate("/hoodies")}style={{ width: 380, height: 60, backgroundColor: Colors.secondary, borderRadius: 30, display: 'flex', flexDirection: 'row', alignItems: 'center', gap:10 }}>
          <Image style={{ width: 50, height: 50, marginLeft:10 }} source={require('../assets/images/category/Ellipse 1.png')} />
          <Text style={{fontSize:18, fontFamily:'outfit-medium'}}>Hoodies</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginLeft:15, marginTop:10}}>
        <TouchableOpacity style={{ width: 380, height: 60, backgroundColor: Colors.secondary, borderRadius: 30, display: 'flex', flexDirection: 'row', alignItems: 'center', gap:10 }}>
          <Image style={{ width: 50, height: 50, marginLeft:10 }} source={require('../assets/images/category/Ellipse 2.png')} />
          <Text style={{fontSize:18, fontFamily:'outfit-medium'}}>Shorts</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginLeft:15, marginTop:10}}>
        <TouchableOpacity style={{ width: 380, height: 60, backgroundColor: Colors.secondary, borderRadius: 30, display: 'flex', flexDirection: 'row', alignItems: 'center', gap:10 }}>
          <Image style={{ width: 50, height: 50, marginLeft:10 }} source={require('../assets/images/category/Ellipse 3.png')} />
          <Text style={{fontSize:18, fontFamily:'outfit-medium'}}>Shoes</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginLeft:15, marginTop:10}}>
        <TouchableOpacity style={{ width: 380, height: 60, backgroundColor: Colors.secondary, borderRadius: 30, display: 'flex', flexDirection: 'row', alignItems: 'center', gap:10 }}>
          <Image style={{ width: 50, height: 50, marginLeft:10 }} source={require('../assets/images/category/Ellipse 4.png')} />
          <Text style={{fontSize:18, fontFamily:'outfit-medium'}}>Bags</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginLeft:15, marginTop:10}}>
        <TouchableOpacity style={{ width: 380, height: 60, backgroundColor: Colors.secondary, borderRadius: 30, display: 'flex', flexDirection: 'row', alignItems: 'center', gap:10 }}>
          <Image style={{ width: 50, height: 50, marginLeft:10 }} source={require('../assets/images/category/Ellipse 5.png')} />
          <Text style={{fontSize:18, fontFamily:'outfit-medium'}}>Accessories</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}