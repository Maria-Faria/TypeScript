import { Layout } from "./components/Layout";

//import styled from "styled-components";

import { Box, Button, Center, ChakraProvider, defaultSystem, Input } from "@chakra-ui/react";
import { login } from "./services/login";

// const Box = styled.div`
//   background-color: orange;
//   border-radius: 25px;
//   padding-left: 15px;
// `;

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      {/* <Box>
          <h1>Faça o login</h1>
        </Box> */}
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#ffffff' borderRadius='25px' padding='15px'>
          <Center>
            <h1>Faça o login</h1>
          </Center>

          <Input placeholder="email" />
          <Input placeholder="senha" />

          <Center>
            <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
              Entrar
            </Button>
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
