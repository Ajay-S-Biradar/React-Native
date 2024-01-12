import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Pressable } from 'react-native';
import quizData from "./constants/quizData.json";
import SingleCard from './components/SingleCard';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyDxXGwowqu_W0khhj5sEkSLgCcNkNW9ZrM");

const Card = ({ route, userResponses, navigation, setUserResponses }) => {
    const { id } = route.params;
    const cardNo = `card${id}`;
    const len = quizData[cardNo].length;
    let response = Array(len);

    const handlePrompt = async () => {
        let message = "";
        for (let i = 0; i < response.length; i++) {
            message = message + `Question${i + 1}: ` + response[i].q + `Its Answer: ` + response[i].a;
        }
        message += `.From this questionnaire understand and diagnose from these disorders: Anxiety Disorders,Depression,PTSD,OCD,Bipolar Disorder,Schizophrenia,Eating Disorders,Substance Use Disorders,ADHD which disorder
            is the user likely to have? Give the response as a JSON object such that it has disorder name, index number considering the options I gave above as an array and some Tips to overcome it.`;
        submit(message);
    };

    async function submit(prompt) {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        const cleanedString = text.trim();

        // Extract the content between curly braces
        const jsonString = cleanedString.match(/\{([^}]+)\}/)?.[1];
        if (jsonString) {
            try {
                // Parse the extracted content as JSON
                const jsonObject = JSON.parse(`{${jsonString}}`);
                navigation.navigate('show', { report: jsonObject });
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        } else {
            console.log('No JavaScript object found in the string.');
        }
    }

    return (
        <ScrollView>
            {
                quizData[cardNo].map((x, ind) => (
                    <SingleCard key={ind} id={ind} response={response} card={x} />
                ))
            }
            <Pressable
                key="submitBtn"
                onPress={() => {
                    setUserResponses(response);
                    console.log("clicked");
                    handlePrompt();
                }}
            >
                <View className="flex items-center justify-center">
                    <Text className="text-xl text-black font-semibold bg-blue-300 px-3 py-1 rounded-lg">Submit</Text>
                </View>
            </Pressable>
        </ScrollView>
    );
};

const styles = StyleSheet.create({});

export default Card;
