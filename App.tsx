import React, { useState } from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from "./src/Splash";
import Home from "./src/Home";
import Card from "./src/Card";
import Responses from "./src/Responses";
import Show from "./src/Show";
import Fixed from "./src/Fixed";

const Stack = createNativeStackNavigator();

const App = () => {
  const [userResponses,setUserResponses] = useState([]);
  return (
      <>
      <NavigationContainer>
        <Fixed />
        <Stack.Navigator initialRouteName="splash"
          screenOptions={{headerShown:false}}
        >
          <Stack.Screen name="splash" component={Splash}  />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="card">
          {(props) => (
            <Card
              {...props}
              userResponses={userResponses}
              setUserResponses={setUserResponses}
            />
          )}
          </Stack.Screen>
          <Stack.Screen name="responses">
            {(props) => (
              <Responses
                {...props}
                userResponses={userResponses}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="show" component={Show}/>
        </Stack.Navigator>
      </NavigationContainer>
      </>
  );
};



export default App;
