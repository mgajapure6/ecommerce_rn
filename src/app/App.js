import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Block, GalioProvider } from "galio-framework";
import { appTheme } from "./common/Theme";
import { Ionicons } from '@expo/vector-icons';
import Home from './screens/Home';
import Category from './screens/Category';
import Notification from './screens/Notification';
import Account from './screens/Account';
import Cart from './screens/Cart';
import {HomeScreenHeader, HomeScreenHeaderLeft, HomeScreenHeaderRight } from './common/components/HomeScreenHeader';
import Search from './screens/Search';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function AppTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} options={({ route, navigation }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = focused ? 'home' : 'home-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        // headerLeft: (props) => (<HomeScreenHeaderLeft {...props}></HomeScreenHeaderLeft>),
        headerRight: (props) => {
          let iconName = 'search';
          return(<Ionicons name={iconName} size={22} style={{padding: 15}} onPress={()=>{
            navigation.navigate('Search')
          }}/>)}
      })}/>
      <Tab.Screen name="Categories" component={Category} options={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = focused ? 'grid' : 'grid-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}/>
      <Tab.Screen name="Notifications" component={Notification} options={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = focused ? 'notifications' : 'notifications-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}/>
      <Tab.Screen name="Account" component={Account} options={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = focused ? 'person-circle' : 'person-circle-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}/>
      <Tab.Screen name="Cart" component={Cart} options={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = focused ? 'cart' : 'cart-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}/>
    </Tab.Navigator>
  );
}




function App() {
  return (
    <NavigationContainer>
      <GalioProvider theme={appTheme}>
        <Block flex>
        <Stack.Navigator>
        <Stack.Screen name="Tab" component={AppTabs} options={{ headerShown: false }}/>
        <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
        </Block>
      </GalioProvider>
    </NavigationContainer>
  );
}

export default App;