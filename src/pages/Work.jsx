import { Box, Heading, SimpleGrid, Image } from "@chakra-ui/react";

const Work = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        Our Work
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        <Box>
          <Image src="https://via.placeholder.com/300x169.png?text=Video+1" alt="Video 1" />
        </Box>
        <Box>
          <Image src="https://via.placeholder.com/300x169.png?text=Video+2" alt="Video 2" />
        </Box>
        <Box>
          <Image src="https://via.placeholder.com/300x169.png?text=Video+3" alt="Video 3" />
        </Box>
        <Box>
          <Image src="https://via.placeholder.com/300x169.png?text=Video+4" alt="Video 4" />
        </Box>
        <Box>
          <Image src="https://via.placeholder.com/300x169.png?text=Video+5" alt="Video 5" />
        </Box>
        <Box>
          <Image src="https://via.placeholder.com/300x169.png?text=Video+6" alt="Video 6" />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Work;
