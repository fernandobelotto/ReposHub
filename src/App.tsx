import r100 from "./mock/r100.json";
import r200 from "./mock/r200.json";
import r300 from "./mock/r300.json";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Checkbox,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text, VStack
} from "@chakra-ui/react";
import { filters } from "./filters";

let repos = [...r100, ...r200, ...r300];

export default function App() {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={5} alignItems="flex-start">
        <Flex justify="space-between" w='100%'>
          <Box>
            <Heading>Repos Hub</Heading>
          </Box>
          <Box>
            <Heading>Total {repos.filter(repo => !repo.fork).length}</Heading>
          </Box>
        </Flex>
        <Box>
          <Box p={5} border="1px solid" borderColor="gray.300" rounded="md">
            <Flex gap={3} flexWrap="wrap">
              {filters

              .map((filter) => {
                return (
                  <Checkbox
                    bg=""
                    px={2}
                    rounded="sm"
                    value={filter.value}
                  >
                    {filter.label}
                  </Checkbox>
                );
              })}
            </Flex>
          </Box>
        </Box>

        <SimpleGrid spacing={5} columns={4} minChildWidth={200} w='100%'>
          {repos
          .filter(repo => !repo.fork)
          .map((repo) => {
            const fork = repo.fork;

            if (fork) return null;
            return (
              <>
                <Box
                  rounded="md"
                  shadow="md"
                  color="gray.700"
                  border="1px solid"
                  p={5}
                  transition="all 150ms ease"
                  _hover={{
                    transform: 'scale(103%)',
                    borderColor: 'blue.500',
                    shadow: 'lg'
                  }}
                >
                  <VStack spacing={1} alignItems="flex-start">
                    <Link href={repo.html_url} target='_blank'>
                      <Text fontWeight={500}>{repo.name}</Text>
                    </Link>
                      <Text noOfLines={2}>{repo.description}</Text>
                    {/* <Tooltip label={repo.description}>
                    </Tooltip> */}
                    <Text px={1} bg="gray.700" color="white" rounded="md">
                      {repo.language}
                    </Text>
                    <Flex gap={3} flexWrap="wrap">
                      {repo.topics.map((topic) => (
                        <Text px="1" bg="gray.100" rounded="md">
                          {topic}
                        </Text>
                      ))}
                    </Flex>
                    {repo.homepage && (
                      <Link href={`http://${repo.homepage}`} target='_blank'>
                        <ExternalLinkIcon />
                      </Link>
                    )}
                  </VStack>
                </Box>
              </>
            );
          })}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}

// import React, { useState, useRef, useCallback } from "react";
// import useSearchBook from "./hooks/useSearchBook";

// export default function App() {
//   const [query, setQuery] = useState("");
//   const [pageNum, setPageNum] = useState(1);
//   const { isLoading, error, books, hasMore } = useSearchBook(query, pageNum);

//   const observer = useRef<any>();
//   const lastBookElementRef = useCallback(
//     (node: any) => {
//       if (isLoading) return;
//       if (observer.current) observer.current.disconnect();
//       observer.current = new IntersectionObserver((entries) => {
//         if (entries[0].isIntersecting && hasMore) {
//           setPageNum((prev) => prev + 1);
//         }
//       });
//       if (node) observer.current.observe(node);
//     },
//     [isLoading, hasMore]
//   );

//   const handleChange = (e: ) => {
//     setQuery(e.target.value);
//     setPageNum(1);
//   };

//   return (
//     <div className="App">
//       <h1>Search Book</h1>
//       <input type="text" onChange={handleChange} value={query} />
//       {books.map((book, i) => {
//         if (books.length === i + 1) {
//           return (
//             <div key={i} ref={lastBookElementRef}>
//               {book}
//             </div>
//           );
//         } else {
//           return <div key={i}>{book}</div>;
//         }
//       })}
//       <div>{isLoading && "Loading..."}</div>
//       <div>{error && "Error..."}</div>
//     </div>
//   );
// }
