import React from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { styles } from '../theme/AppTheme';
// interface RootParamList extends ProfileScreenNavigationProp {}
export const Pagina2Screen = () => {

    const navigator = useNavigation();

    return (
        <View style={styles.globalMargin}>
                <Text>Pagina2Screen</Text>

                <Button
                title = 'Ir a la pagina 3'
                onPress = { () => navigator.navigate('Pagina3Screen' as never) }
                />
        </View>
    )
}
