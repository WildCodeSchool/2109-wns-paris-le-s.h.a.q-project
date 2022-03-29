import React from "react";
import {
  Box,
  Center,
  FlatList,
  Heading,
  HStack,
  Icon,
  Spacer,
  Text,
  VStack,
} from "native-base";
import { Feather } from "@expo/vector-icons";

const TasksScreen = () => {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Lorem Ipsum",
      timeStamp: "12/03 2022",
      recentText: "Lorem Ipsum",
      icon: "monitor",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Lorem Ipsum",
      timeStamp: "12/03 2022",
      recentText: "Lorem Ipsum",
      icon: "server",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Lorem Ipsum",
      timeStamp: "12/03 2022",
      recentText: "Lorem Ipsum",
      icon: "server",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Lorem Ipsum",
      timeStamp: "12/03 2022",
      recentText: "Lorem Ipsum",
      icon: "monitor",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Lorem Ipsum",
      timeStamp: "12/03 2022",
      recentText: "Lorem Ipsum",
      icon: "server",
    },
  ];
  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Heading size="lg">Tasks</Heading>
        <HStack space={2} alignItems="center">
          <VStack space={5} alignItems="center">
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <Box pl="4" pr="5" py="2">
                  <HStack
                    space={4}
                    justifyContent="center"
                    alignItems="center"
                    _dark={{
                      bg: "violet.800",
                    }}
                    _light={{
                      bg: "violet.400",
                    }}
                    p={2}
                    rounded="md"
                    shadow={3}
                  >
                    <Icon as={Feather} name={item.icon} color="white" />
                    <VStack>
                      <Text
                        _dark={{
                          color: "warmGray.50",
                        }}
                        color="white"
                        bold
                      >
                        {item.fullName}
                      </Text>
                      <Text
                        color="coolGray.600"
                        _dark={{
                          color: "warmGray.200",
                        }}
                      >
                        {item.recentText}
                      </Text>
                    </VStack>
                    <Spacer />
                    <Text
                      fontSize="xs"
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="white"
                      alignSelf="flex-start"
                    >
                      {item.timeStamp}
                    </Text>
                  </HStack>
                </Box>
              )}
              keyExtractor={(item) => item.id}
            />
          </VStack>
        </HStack>
      </VStack>
    </Center>
  );
};
export default TasksScreen;
