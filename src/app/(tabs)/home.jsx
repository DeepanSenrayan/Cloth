import { Ionicons } from '@expo/vector-icons'
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Colors } from './../../constants/Colors'
import { router } from 'expo-router'

export default function home() {
  const homeSlider = [
    { id: 1, image: "https://img.magnific.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?semt=ais_hybrid&w=740&q=80" },
    { id: 2, image: "https://img.magnific.com/premium-photo/background-image-elegant-clothing-boutique-interior-with-clothes-accessories-display-copy-space_236854-52930.jpg?semt=ais_hybrid&w=740&q=80" },
  ]

  const images = [
    { id: 1, image: (require("../../assets/images/category/Ellipse 1.png")), title: "Hoodies" },
    { id: 2, image: (require("../../assets/images/category/Ellipse 2.png")), title: "Shorts" },
    { id: 3, image: (require("../../assets/images/category/Ellipse 3.png")), title: "Shoes" },
    { id: 4, image: (require("../../assets/images/category/Ellipse 4.png")), title: "Bags" },
    { id: 5, image: (require("../../assets/images/category/Ellipse 5.png")), title: "Accessories" },
  ]

  const product = [
    { title: "Hoodies", subtitle: "Two-Jeyy", amt: 148, image: "https://i.pinimg.com/1200x/a5/46/f4/a546f4b422d6255dd32e494afc4de63c.jpg" },
    { title: "Slipper", subtitle: "Adidos", amt: 55, image: "https://i.pinimg.com/1200x/e6/1e/63/e61e638178d7a1888d3456e8191abd42.jpg" },
    { title: "Shorts", subtitle: "Crocotiles", amt: 499, image: "https://i.pinimg.com/1200x/a3/27/8a/a3278a7b9ab2cac02743fbc396ca4c0a.jpg" },
    { title: "Watch", subtitle: "Fossil", amt: 1499, image: "https://i.pinimg.com/1200x/06/5e/03/065e0321c5fbdbe053d8f382340b2ed5.jpg" },
    { title: "Hoodies", subtitle: "Two-Jeyy", amt: 1499, image: "https://i.pinimg.com/1200x/a5/46/f4/a546f4b422d6255dd32e494afc4de63c.jpg" },
  ]

  return (
    <>
    <ScrollView>
      <View style={{ backgroundColor: Colors.primary, padding: 20, paddingTop: 35, height: 180, borderBottomStartRadius: 20, borderBottomEndRadius: 20, }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10
          }}
        >
          <Image source={require("./../../assets/images/profile.png")} />
          <View>
            <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'outfit-bold' }}>UserName</Text>
            <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'outfit-medium' }}>example@email.com</Text>
          </View>
        </View>
        <View style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: '#fff',
          gap: 10,
          marginVertical: 10,
          marginTop: 30,
          borderRadius: 8
        }}>
          <Ionicons name='search' size={24} color={Colors.secondary} />
          <TextInput placeholder='Search' style={{ fontFamily: 'outfit', fontSize: 16, position:'static'}} />
        </View>
      </View>

      {/* Slider */}

      <View>
        <Text style={{ fontFamily: 'outfit-medium', fontSize: 20, paddingLeft: 20, paddingTop: 10, marginBottom: 5 }}>#Special For You</Text>
        <View>
          <FlatList data={homeSlider} style={{ padding: 20 }} horizontal={true} showsHorizontalScrollIndicator={false} renderItem={({ item, index }) => (
            <Image source={{ uri: item.image }} style={{ width: 300, height: 200, borderRadius: 15, marginRight: 15 }} />
          )} />
        </View>
      </View>

      {/* Categories */}
      <View>
        <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', marginTop: 15 }}>
          <Text style={{ fontFamily: 'outfit-bold', fontSize: 20, paddingLeft: 20 }}>Category</Text>
          <TouchableOpacity onPress={()=>router.push("/category")}><Text style={{ fontFamily: 'outfit', fontSize: 16, marginRight: 15, color: Colors.primary }}>See All</Text></TouchableOpacity>
        </View>
        <FlatList style={{ marginTop: 15, padding:20,}} data={images} horizontal={true} showsHorizontalScrollIndicator={false} renderItem={({ item }) => (
          <View key={item.id} style={{ display: 'flex', alignItems: 'center', padding:10}}>
            <View style={{width:90, alignItems:'center', paddingTop:'5', height:90, borderRadius:"50%", boxShadow:"0 2px 4px rgba(0,0,0,0.5)"}}>
              <Image source={item.image} style={{ width: 80, height: 80, }} />
            </View>
            <Text style={{ paddingTop: 15, fontFamily: 'outfit', }}>{item.title}</Text>
            <Text>{item.amt}</Text>
          </View>
        )} />
      </View>

      {/* Top Sell*/}
      <View>
        <View style={{ marginTop: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 20, fontFamily: 'outfit-bold', paddingLeft: 20 }}>Top Sells</Text>
          <TouchableOpacity><Text style={{ color: Colors.primary, paddingRight: 20 , fontFamily:'outfit', fontSize:16}}>See All</Text></TouchableOpacity>
        </View>
        <View>
          <FlatList style={{ marginTop: 15, padding:20,}} data={product} horizontal={true} showsHorizontalScrollIndicator={false} renderItem={({ item }) => (
          <View style={{ display: 'flex', marginRight:15, alignItems: 'center', width:150, height:200, boxShadow:"0 1px 2px rgba(0,0,0,0.5)" }}>
            <Image source={{uri: item.image}} style={{ width: 80, height: 100, marginTop:5, }} />
            <Text style={{ paddingTop: 15, fontFamily: 'outfit', fontSize:16}}>{item.title}</Text>
            <Text style={{fontSize:10, fontFamily:'outfit'}}>{item.subtitle}</Text>
            <Text style={{fontFamily:'outfit-medium'}}>Price:${item.amt}</Text>
          </View>
        )} />
        </View>
      </View>
      {/* Message */}
      <View style={{margin:10, marginBottom:50}}>
        <Text style={{textAlign:'center', padding:30, fontFamily:'outfit', fontSize:13}}>Important Message about Cloth.apk Terms & Condition of Use and Privacy Policy. &copy; since 2026</Text>
      </View>
      </ScrollView>
    </>
  )
}