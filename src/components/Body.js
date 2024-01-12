import React, { useState } from 'react';
import {ScrollView ,View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
import cardData from "../constants/card.json"
import { Image } from 'react-native-animatable';

const api = "https://ajay-s-biradar.github.io/images/";

const Body = ({navigation}) => {
    const [click,setClick] = useState(false);
    return (
        <View className="flex justify-center items-center">
        <ScrollView horizontal>
            {cardData.map((x)=>{
                return(
                    <View  key={x.id} style={{backgroundColor:x.color, elevation:1,width:300,height:500}}
                     className="flex justify-center items-center m-3 p-2 rounded-xl">
                        <View>
                            <Text className="text-2xl font-bold text-blue-950">{x.text1}</Text>
                        </View>
                        <View>
                            <Text className="text-lg text-black font-semibold" >{x.text2}</Text>
                        </View>
                        <View className="border-2 border-black">
                            <Image source={{
                                uri:api+x.image1+'.png'
                            }} style={{width:250,height:350}} />
                        </View>
                        <TouchableOpacity 
                            onPress={()=>{
                                setClick(true);
                                navigation.navigate('card',{id:x.id});
                            }}
                            className={`${click? "bg-slate-600" :""} m-2 p-2`}
                        > 
                            <Text className="text-base text-blue-900">{x.text3} {`>`} </Text>
                        </TouchableOpacity>
                    </View>
                )
            })}
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Body;
