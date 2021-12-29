
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

// interface RouterParams {
//     id: number,
//     name: string
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{} //de esta manera defini los tipos de los params para typescript

export const PersonaScreen = ({route, navigation}:Props) => {

    // const params = route.params as RouterParams ;

    const params = route.params

    useEffect(() => {
        
        navigation.setOptions({
            // aqui coloque ! para indicarle a typescript q yo voy a usar esos tipos sin especificarlos xq se lo q estoy haciendo
            // title: params!.name
            title: params.name
        })
        
    }, [])

    return (
       <View style={styles.globalMargin}>
           <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
       </View>
    )
}
