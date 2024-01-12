import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

const Show = ({route, navigation}) => {
    if(!route.params){
        return(
            <Text>Empty</Text>
        )
    }
    const {report} = route.params ;
    return (
        <View className="flex items-center">
        <View className="w-10/12">
            <Text className="text-xl text-black">Our Diagnosis: {report.disorder_name}</Text>
            <Text>{report.index_number}</Text> 
            <View>
            {
                report.tips.map((x,ind)=><Text className="text-lg text-black" >{ind+1+".  "+x}</Text>)
            }
            </View>
            <Pressable
                onPress={()=>{
                    navigation.navigate('responses');
                }}
            >
                <Text className="text-lg bg-blue-200 text-black flex w-36 rounded-xl">Your Responses</Text>
            </Pressable>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Show;
