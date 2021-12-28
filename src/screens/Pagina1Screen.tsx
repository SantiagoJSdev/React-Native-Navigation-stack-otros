import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme';


interface Props extends StackScreenProps<any, any>{}

export const Pagina1Screen = ({navigation}:Props) => {
// console.log(props)
    return (
        <View style={styles.globalMargin}>
                <Text style={{color:'red'}}>Pagina1Screen</Text>

                <Button
                    title = 'ir a pagina2'
                    onPress = { () => navigation.navigate('Pagina2Screen') }
                />
        </View>
    )
}
