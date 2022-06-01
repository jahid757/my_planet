import React from 'react';
import {View, StyleSheet,Pressable} from 'react-native';
import Text from './text/text';
import { spacing } from './../theme/spacing';
import { colors } from '../theme/colors';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const PlanetHeader = ({backButton,title='THE PLANETS'}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {
                backButton && (
                    <Pressable style={{marginRight:spacing[4]}} onPress={
                       () => navigation.goBack()
                    }>
                        <AntDesign name="left" size={24} color="white" />
                    </Pressable>
                )
            }
            <Text preset='h2'>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding:spacing[5],
        borderBottomWidth:0.3,
        borderBottomColor:colors.white,
        paddingBottom:spacing[3],
        alignItems:'center',
        flexDirection:'row',
    }
})

export default PlanetHeader;
