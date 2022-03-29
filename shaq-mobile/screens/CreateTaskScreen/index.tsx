import React from "react";
import {
  Center,
  Checkbox,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  Text,
  useToast,
  VStack,
} from "native-base";
import { Entypo, Feather } from "@expo/vector-icons";
import { ToggleDarkMode } from "../../components/ToggleDarkMode";

const CreateTaskScreen = () => {
  const instState = [
    {
      title: "Code",
      isCompleted: true,
    },
    {
      title: "Arriver à la wild",
      isCompleted: false,
    },
    {
      title: "Etre en retard",
      isCompleted: false,
    },
    {
      title: "Presenter l'avancement de la semaine",
      isCompleted: false,
    },
  ];
  const [list, setList] = React.useState(instState);
  const [inputValue, setInputValue] = React.useState("");
  const toast = useToast();

  const addItem = (title) => {
    if (title === "") {
      toast.show({
        title: "Please Enter Text",
        status: "warning",
      });
      return;
    }

    setList((prevList) => {
      return [
        ...prevList,
        {
          title: title,
          isCompleted: false,
        },
      ];
    });
  };

  const handleDelete = (index) => {
    setList((prevList) => {
      const temp = prevList.filter((_, itemI) => itemI !== index);
      return temp;
    });
  };

  const handleStatusChange = (index) => {
    setList((prevList) => {
      const newList = [...prevList];
      newList[index].isCompleted = !newList[index].isCompleted;
      return newList;
    });
  };

  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Heading size="lg">Create Task</Heading>
        <HStack space={2} alignItems="center">
          <Input
            flex={1}
            onChangeText={(v) => setInputValue(v)}
            value={inputValue}
            placeholder="Add Task"
          />
          <IconButton
            borderRadius="sm"
            variant="solid"
            icon={
              <Icon as={Feather} name="plus" size="sm" color="warmGray.50" />
            }
            onPress={() => {
              addItem(inputValue);
              setInputValue("");
            }}
          />
        </HStack>
        {list.map((item, itemI) => (
          <HStack
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            key={item.title + itemI.toString()}
          >
            <Checkbox
              isChecked={item.isCompleted}
              onChange={() => handleStatusChange(itemI)}
              value={item.title}
            />
            <Text
              width="100%"
              flexShrink={1}
              textAlign="left"
              mx="2"
              strikeThrough={item.isCompleted}
              _light={{
                color: item.isCompleted ? "gray.400" : "coolGray.800",
              }}
              _dark={{
                color: item.isCompleted ? "gray.400" : "coolGray.50",
              }}
              onPress={() => handleStatusChange(itemI)}
            >
              {item.title}
            </Text>
            <IconButton
              size="sm"
              colorScheme="trueGray"
              icon={
                <Icon as={Entypo} name="minus" size="xs" color="trueGray.400" />
              }
              onPress={() => handleDelete(itemI)}
            />
          </HStack>
        ))}
        <ToggleDarkMode />
      </VStack>
    </Center>
  );
};

export default CreateTaskScreen;
