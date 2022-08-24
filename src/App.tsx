import r100 from "./mock/r100.json";
import r200 from "./mock/r200.json";
import r300 from "./mock/r300.json";

import {
  Box,
  Checkbox,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";

let repos = [...r100, ...r200, ...r300];

const filters = [
  { value: "Java", label: "Java" },
  { value: "React", label: "React" },
  { value: "Redux", label: "Redux" },
  { value: "React Native", label: "React Native" },
  { value: "Swift", label: "Swift" },
  { value: "Typescript", label: "Typescript" },
  { value: "Javascript", label: "Javascript" },
  { value: "CRUD", label: "CRUD" },
  { value: "Flutter", label: "Flutter" },
  { value: "Template", label: "Template" },
  { value: "Go", label: "Go" },
  { value: "Nextjs", label: "Nextjs" },
  { value: "Remix", label: "Remix" },
  { value: "Express", label: "Express" },
  { value: "Fastify", label: "Fastify" },
  { value: "Nestjs", label: "Nestjs" },
  { value: "Mobile", label: "Mobile" },
];

export default function App() {
  return (
    <Container maxW="container.lg">
      <Heading>Repos Hub</Heading>

      <Box p={5}>
        <Text>Filters</Text>
        <Box p={5}>
          <Flex gap={3} flexWrap="wrap">
            {filters.map((filter) => {
              return <Checkbox bg='blue.50' px={2} rounded='lg' value={filter.value}>{filter.label}</Checkbox>;
            })}
          </Flex>
        </Box>
      </Box>

      <SimpleGrid spacing={5} columns={10} minChildWidth={200}>
        {repos.map((repo) => {
          const fork = repo.fork;

          return (
            <>
              <Box
                rounded="md"
                shadow="md"
                p={5}
                border="1px solid"
                color={fork ? "blue.500" : "gray.700"}
              >
                <VStack spacing={1} alignItems="flex-start">
                  <Link href={repo.html_url}>
                    <Text fontWeight={500}>{repo.name}</Text>
                  </Link>
                  <Tooltip label={repo.description}>
                    <Text noOfLines={2}>{repo.description}</Text>
                  </Tooltip>
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
                    <Link href={repo.homepage} target="_blank">
                      Home page
                    </Link>
                  )}
                </VStack>
              </Box>
            </>
          );
        })}
      </SimpleGrid>
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
