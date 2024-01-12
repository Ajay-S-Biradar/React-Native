import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import { Image } from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const Header = ({}) => {
    const navigation = useNavigation();
    return (
        <View>
            <View className="flex flex-row items-center gap-4 p-1 ">
                <Image source={require('../assets/mind-harbour-logo.png')} className="w-14 h-14" />
                <Text className="text-3xl font-bold text-cyan-950">Mind Harbour</Text>
            </View>
            <Pressable
                onPress={()=>{
                    console.log("clicked")
                    navigation.navigate('show');
                }}
            >
                <Text>show</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Header;
