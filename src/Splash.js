import React, { useEffect, useState } from 'react';
import {View, StyleSheet,Text,Image} from 'react-native';
import * as Animatable from 'react-native-animatable';

const Splash = ({navigation}) => {
    if(setEntered){
        navigation.navigate('home')
    }
    const [entered,setEntered] = useState(false);
    useEffect(()=>{
        setEntered(true);
        setTimeout(()=>{
            navigation.navigate('home')
        },2500);
    })

    return (
        <>
        <View className="bg-blue-300 flex-1 justify-center items-center relative" >
            <Animatable.View className="absolute z-10" animation="fadeInDownBig" duration={2000}>
                <Text className="text-4xl font-bold text-cyan-950">Welcome</Text>
            </Animatable.View>
            <Animatable.View className="relative -top-5" animation="fadeInUpBig" duration={2000}>
                <Image
                    source={{
                    uri: 'https://ajay-s-biradar.github.io/images/doctorsnimated.png',
                    }}
                    style={styles.image}
                />
            </Animatable.View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    image:{
        width:300,
        height:300
    }
})

export default Splash;
