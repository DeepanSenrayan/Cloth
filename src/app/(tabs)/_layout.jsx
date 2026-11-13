import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { Colors } from '../../constants/Colors'

export default function TabLayout() {
  return (
    <>
        <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.primary, tabBarStyle:{borderRadius: 50,position:'absolute', bottom:10,height:55, borderTopWidth:0, elevation:5,}, tabBarLabelStyle:{ fontSize:12}}}>
          <Tabs.Screen name='home' options={{ tabBarLabel: "Home", tabBarIcon: ({ color }) => <Ionicons size={26} color={color} name='home' /> }} />
          <Tabs.Screen name='cart' options={{tabBarLabel: "Cart", tabBarIcon: ({color}) => <Ionicons size={26} color={color} name='cart-outline' />}} />
          <Tabs.Screen name='profile' options={{ tabBarLabel: "Profile", tabBarIcon: ({ color }) => <Ionicons size={26} color={color} name='person-circle' /> }} />
        </Tabs>
    </>
  )
}