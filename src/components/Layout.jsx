import {
  Drawer,
  Heading,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Button,
  Box,
  Text,
  List,
  OrderedList,
  ListIcon,
  ListItem,
  UnorderedList,
  DrawerFooter,
} from "@chakra-ui/react";
import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { MdTune } from "react-icons/md";
import { Link } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";

const Layout = () => {
  // const generateRadioStation = (frequency, stationName)=> {
  //   return { frequency, stationName };
  // }
  // const stationData = [
  //   { frequency: "92.3", stationName: "Radio Wave" },
  //   { frequency: "101.5", stationName: "Sunset FM" },
  //   { frequency: "98.7", stationName: "Rock City Radio" },
  //   { frequency: "105.2", stationName: "Starlight Radio" },
  //   { frequency: "89.9", stationName: "Smooth Jazz Radio" },
  //   { frequency: "96.1", stationName: "Energy FM" },
  //   { frequency: "94.8", stationName: "Classic Hits Radio" },
  //   { frequency: "103.6", stationName: "Top 40 Radio" },
  //   { frequency: "107.3", stationName: "Country Vibes FM" },
  //   { frequency: "93.4", stationName: "Hip Hop Station" }
  // ];
  // const generatedStations = [];

  // while (generatedStations.length < 40) {
  //   const randomIndex = Math.floor(Math.random() * stationData.length);
  //   const { frequency, stationName } = stationData[randomIndex];
  //   generatedStations.push(generateRadioStation(frequency, stationName));
  // }
  const ChannnelList = [
    { frequency: "92.3", stationName: "Radio Wave" },
    { frequency: "101.5", stationName: "Sunset FM" },
    { frequency: "98.7", stationName: "Rock City Radio" },
    { frequency: "105.2", stationName: "Starlight Radio" },
    { frequency: "89.9", stationName: "Smooth Jazz Radio" },
    { frequency: "96.1", stationName: "Energy FM" },
    { frequency: "94.8", stationName: "Classic Hits Radio" },
    { frequency: "103.6", stationName: "Top 40 Radio" },
    { frequency: "107.3", stationName: "Country Vibes FM" },
    { frequency: "93.4", stationName: "Hip Hop Station" },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button ml={"2"} bg={"orange.400"}>
        <Box>
          <BiPowerOff />
        </Box>
      </Button>
      <Button m={4} onClick={onOpen} bg={"white"} boxShadow={"2xl"}>
        <Box>
          <MdTune />
        </Box>
      </Button>

      <Drawer onClose={onClose} isOpen={isOpen} size={"sm"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            fontSize={"3xl"}
            bg={"rgba(11,27,103,1)"}
            color={"white"}
          >
            SkyRadio
          </DrawerHeader>
          <DrawerBody>
            <Text as={"p"} fontSize={"2xl"}>
              Channels List
            </Text>
            {ChannnelList.map((channel, index) => {
              // console.log(channel.stationName.length);
              return (
                <UnorderedList key={channel.frequency.indexOf}>
                  <ListItem mb={2} mt={2} key={index}>
                    <Button
                      bg={"none"}
                      _hover={{
                        backgroundColor: "rgba(11,27,103,1)",
                        color: "white",
                      }}
                    >
                      {channel.stationName}
                    </Button>
                    <Text ml={2} mt={2} as={"span"}>{channel.frequency}</Text>
                  </ListItem>
                  <hr color="orange"/>
                </UnorderedList>
              );
            })}

            {/*  */}
          </DrawerBody>
        </DrawerContent>
        <DrawerFooter>Copyright SkyRadio @2020</DrawerFooter>
      </Drawer>
    </>
  );
};

export default Layout;
