import React from "react";
import { Center, Heading, HStack, Text, VStack } from "native-base";

export default function Home() {
  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Heading size="lg">Bienvenue sur Shaq-Mobile</Heading>
        <HStack space={2} alignItems="center">
          <Text>l'App Compagnion de Shaq-TaskManager.</Text>
        </HStack>
      </VStack>
    </Center>
  );
}
