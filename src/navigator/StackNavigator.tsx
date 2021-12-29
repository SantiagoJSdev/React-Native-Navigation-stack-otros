

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

const Stack = createStackNavigator();

export const  StackNavigator = () => {
 return (
   <Stack.Navigator

  //  initialRouteName='Pagina2Screen'
  //  con esta propiedad decido en cual routa va iniciar mi app

  screenOptions={{
    // headerShown: false, esta propiedad le quita el header
    headerStyle:{
      elevation: 0,
      backgroundColor: 'rgba(240,210,210,0.9)',
      shadowColor: 'transparent'
    },
    cardStyle:{
      backgroundColor: 'rgba(240,210,210,0.9)'
    }
  }}
   >

     
    
     <Stack.Screen name="Pagina1Screen" options={{title:'Pagina 1'}} component={ Pagina1Screen } />
     <Stack.Screen name="Pagina2Screen" options={{title:'Pagina 2'}} component={ Pagina2Screen } />
     <Stack.Screen name="Pagina3Screen" options={{title:'Pagina 3'}}component={ Pagina3Screen } />
     <Stack.Screen name="PersonaScreen" component={ PersonaScreen } />     
   </Stack.Navigator>
 );
}