import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/AppTheme';


interface Props extends StackScreenProps<any, any>{}

export const Pagina1Screen = ({navigation}:Props) => {
    let obj = {
        name: 'pedro',
        id: 124425
    }
// console.log(props)
    return (
        <View style={styles.globalMargin}>
                <Text style={styles.title}>Pagina1Screen..!!</Text>

                <Button
                    title = 'ir a pagina2'
                    onPress = { () => navigation.navigate('Pagina2Screen') }
                />

                <Text>Navegar con argumentos</Text>

                <TouchableOpacity
                    onPress={()=> navigation.navigate('PersonaScreen', obj)}
                >  
                    <Text>Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=> navigation.navigate('PersonaScreen', {
                        name: 'maria',
                        id: 2
                    })}
                >  
                    <Text>Maria</Text>
                </TouchableOpacity>
        </View>
    )
}


















//ol
