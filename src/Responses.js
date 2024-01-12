import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const Responses = ({userResponses}) => {
  return (
    <SafeAreaView>
        <Text className="text-2xl font-semibold text-black">Your Responses</Text>
        <ScrollView className="p-2 m-2" >
        {
            userResponses.map((x)=>{
                return(
                    <>
                    <Text className="font-medium text-red-400 text-lg">
                        {x.q}
                    </Text>
                    <Text className="font-medium text-red-400 text-lg">
                        {x.a}
                    </Text>
                    </>
                )
            })
        }
        </ScrollView>
    </SafeAreaView>
  )
}

export default Responses