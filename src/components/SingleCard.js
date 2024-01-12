import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";

const SingleCard = ({ id, card, response }) => {
  const [click, setClick] = useState(null);

  const handleResponse = (ind) => {
    response[id] = {
      a: card.options[ind],
      q: card.question,
    };
  };

  return (
    <View key={id} className="flex bg-orange-600 m-3 p-2 items-center justify-center rounded-2xl">
      <View className="w-10/12 gap-4">
        <View className="">
          <Text className="text-2xl">{card?.question}</Text>
        </View>
        <View>
          {card.options.map((x, ind) => (
            <Pressable
              key={ind + 100}
              onPress={() => {
                setClick(ind);
                handleResponse(ind);
              }}
            >
              <View
                key={ind}
                className={`${
                  click === ind
                    ? "bg-cyan-600"
                    : "bg-cyan-300"
                } rounded-xl justify-center items-center flex m-2 p-2`}
              >
                <Text key={ind+300}>{x}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};

export default SingleCard;
