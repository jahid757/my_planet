import React from 'react';
import {SafeAreaView, StyleSheet, FlatList,View,Pressable} from 'react-native';
import PlanetHeader from '../components/planet-header';
import { SafeViewAndroid } from '../components/safe-area';
import Text from '../components/text/text';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { PLANET_LIST } from './../data/planet-list';
import { AntDesign } from '@expo/vector-icons'; 

const Home = ({navigation}) => {
    const renderItem = ({item}) => {
        return (
            <Pressable onPress= {() => {
                navigation.navigate('Details',{
                    planet:item
                })
            }} style={styles.item}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <View style={[styles.circle, {backgroundColor:item.color}]}></View>
                    <Text style={styles.itemName} preset='h4'>{item.name}</Text>
                </View>
                <AntDesign name="right" size={16} color="white" />
            </Pressable>
        );
    }
    return (
        <SafeAreaView style={[styles.container, SafeViewAndroid.android]}>
            <PlanetHeader/>
            <FlatList
                contentContainerStyle={styles.list}
                data={PLANET_LIST}
                ItemSeparatorComponent = {() => <View style={styles.separator}/>}
                renderItem ={(item) => renderItem(item)}
                keyExtractor={(item ) => item.name}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.black,
        flex:1,
    },
    separator:{
        // normal
        // height:0.5,
        // backgroundColor:colors.white,
        // standard
        borderBottomColor:colors.white,
        borderBottomWidth:0.5,
    },
    list:{
        padding:spacing[5]
    },
    itemName:{
        textTransform:'uppercase',
        marginLeft:spacing[4],
    },
    item:{
        flexDirection:'row',
        alignItems:'center',
        padding:spacing[4],
        justifyContent:'space-between',
    },
    circle:{
        width:30,
        height:30,
        borderRadius:30,
        // marginTop:spacing[2]
        
    }
})

export default Home;
