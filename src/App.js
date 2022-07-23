import React, { useCallback } from "react";
import {
  ChakraProvider,
  ButtonGroup,
  Button,
  Flex,
  Heading,
  Image,
  Text
} from "@chakra-ui/react";
import ReactHlsPlayer from "react-hls-player";

const gymLink =
  "https://stream-ue1-bravo.dropcam.com/nexus_aac/05a6a341aba84ae8abfba1cd7c5cb036/playlist.m3u8?public=IocLXvvuyA";
const romperLink =
  "https://stream-uc2-alfa.dropcam.com/nexus_aac/e5b12c95e31241b481779a31c954a924/playlist.m3u8?public=qT24gocxip";
const outsideLink =
  "https://stream-us1-charlie.dropcam.com/nexus_aac/ccf3aa5bbe8b4489b022006a230897e3/playlist.m3u8?public=t4vRldaU0z";

const App = () => {
  const [currentCameraLink, setCurrentCameraLink] = React.useState(gymLink);
  const setCameraToGym = () => setCurrentCameraLink(gymLink);
  const setCameraToRomper = () => setCurrentCameraLink(romperLink);
  const setCameraToOutside = () => setCurrentCameraLink(outsideLink);
  const phrases = {
    gym: "ohmydahg gym",
    romper: "rompin",
    outside: "hi from outside"
  };
  const currentPhrase = useCallback(() => {
    if (currentCameraLink === gymLink) {
      return phrases.gym;
    } else if (currentCameraLink === romperLink) {
      return phrases.romper;
    } else if (currentCameraLink === outsideLink) {
      return phrases.outside;
    }
  }, [currentCameraLink, phrases]);
  return (
    <ChakraProvider resetCSS>
      <Flex
        h="120vh"
        w="100vw"
        justifyContent="center"
        alignItems="center"
        backgroundColor="gray.800"
        flexDirection="column"
        overflowY="auto"
        p={10}
      >
        <Flex
          overflow="hidden"
          h="full"
          maxW="600px"
          p={10}
          w="440px"
          backgroundColor="gray.800"
          flexDirection="column"
          pb={10}
          mb={10}
        >
          <Flex alignItems="center" justifyContent="center">
            <Heading color="teal.500">its duh aspen cam</Heading>
          </Flex>
          <Flex minH="120px" justifyContent="flex-end" pos="relative">
            <Heading
              pos="absolute"
              top={10}
              right={0}
              pr={"110px"}
              size="sm"
              color="whiteAlpha.500"
            >
              hi. am appen
            </Heading>
            <Image
              top={-10}
              right={0}
              pos="absolute"
              height="150px"
              width="120px"
              src="bub.png"
            />
          </Flex>
          <Flex flexDirection="column" h="full">
            <ButtonGroup
              size="sm"
              isAttached
              variant="solid"
              mb={2}
              colorScheme={"gray"}
            >
              <Button onClick={setCameraToGym}>Gym</Button>
              <Button onClick={setCameraToRomper}>Romper</Button>
              <Button onClick={setCameraToOutside}>Outside</Button>
            </ButtonGroup>
            <Text color="whiteAlpha.500" fontWeight="bold">
              {currentPhrase()}
            </Text>
            <Flex
              backgroundColor="gray.700"
              h="full"
              children={
                <ReactHlsPlayer
                  src={currentCameraLink}
                  autoPlay={true}
                  controls={true}
                  width="100%"
                  height="auto"
                />
              }
            />
          </Flex>
          {/* <Flex flexDirection="column" h="full">
          <Text color="whiteAlpha.500" fontWeight="bold">
            hello from indoor
          </Text>
          <Flex
            backgroundColor="gray.700"
            h="full"
            children={
              <ReactHlsPlayer
                src=""
                autoPlay={true}
                controls={true}
                width="100%"
                height="auto"
              />
            }
          />
          </Flex> 
        <Flex flexDirection="column" h="full" mt={4}>
          <Text color="whiteAlpha.500" fontWeight="bold">
            hi from outdoor
          </Text>
          <Flex
            backgroundColor="gray.700"
            h="full"
            children={
              <ReactHlsPlayer
                src="https://stream-us1-charlie.dropcam.com/nexus_aac/ccf3aa5bbe8b4489b022006a230897e3/playlist.m3u8?public=t4vRldaU0z"
                autoPlay={true}
                controls={true}
                width="100%"
                height="auto"
              />
            }
          />
        </Flex> 
        */}
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
