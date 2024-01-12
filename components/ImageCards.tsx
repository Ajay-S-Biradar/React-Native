
import React from "react";
import data from "../constants/data.json"

import {
    View,
    SafeAreaView,
    StyleSheet,
    Image,
    Text
} from "react-native"

const ImageCards = ()=>{

    const api = "https://ajay-s-biradar.github.io/images/" ;

    return (
        <>
        {
                data.map((x)=>{
                return(
                    <View key={x.url} style={
                    {
                        alignItems:"center",
                        justifyContent:"center"
                    }
                    }>
                    <Image source={{
                        uri:api+x.url 
                    }} 
                    style={styles.cardImg}
                    />
                    </View>
                )
                })
          } 
          </>
    )
}

const styles = StyleSheet.create({
    cardImg:{
        width:350,
        height:200,
        margin:5,
        borderRadius:6
      },
})

export default ImageCards;