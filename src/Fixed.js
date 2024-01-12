import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import { HomeIcon, ClipboardDocumentListIcon, UserIcon, PhoneIcon } from "react-native-heroicons/outline";
import Header from './components/Header';
import { useNavigation } from '@react-navigation/native';


const Fixed = () => {
    const navigation = useNavigation();
    return (
        <>
        <Header />
        <View className="flex flex-row justify-around">
            <Pressable 
                onPress={()=>{
                    navigation.navigate('home');
                    console.log("clciked")
                }}
            >
                <HomeIcon size={36} color={"black"} />
            </Pressable>
            <Pressable>
                <UserIcon size={36} color={"black"}/>
            </Pressable>
            <Pressable>
                <ClipboardDocumentListIcon size={36} color={"black"}/>
            </Pressable>
            <Pressable>
                <PhoneIcon size={36} color={"black"}/>
            </Pressable>
        </View>
        </>
    );
}

const styles = StyleSheet.create({})

export default Fixed;
