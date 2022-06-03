import { useState } from 'react';
import { Button, ChakraProvider, Divider, Flex, Icon, Select } from '@chakra-ui/react';

import { BsFillMoonStarsFill, BsFillSunFill, BsPlay } from 'react-icons/bs';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';

export default function App() {
  const [value, setValue] = useState(`import banana


  class Monkey:
      # Bananas the monkey can eat.
      capacity = 10
      def eat(self, n):
          """Make the monkey eat n bananas!"""
          self.capacity -= n * banana.size
  
      def feeding_frenzy(self):
          self.eat(9.25)
          return "Yum yum"
  `);

  const [output, setOutput] = useState('Code output');
  const [theme, setTheme] = useState('dark');

  return (
    <ChakraProvider>
      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
        direction="column"
        gap="20px"
        bg={theme === 'dark' ? 'blackAlpha.700' : 'blackAlpha.200'}
      >
        <Flex align="center" gap="26px">
          {' '}
          <Flex cursor="pointer" onClick={theme === 'dark' ? () => setTheme('light') : () => setTheme('dark')}>
            {theme === 'dark' ? (
              <Icon as={BsFillSunFill} color="yellow.400" boxSize="20px" />
            ) : (
              <Icon as={BsFillMoonStarsFill} color="purple.400" boxSize="20px" />
            )}
          </Flex>
          <Select
            w="300px"
            bg={theme === 'dark' ? 'blackAlpha.600' : 'blackAlpha.200'}
            color={theme === 'dark' ? 'gray.200' : 'blackAlpha.700'}
            borderColor={theme === 'dark' ? 'blackAlpha.600' : 'blackAlpha.200'}
          >
            <option value="python" disabled selected>
              Lenguaje
            </option>

            <option value="python">Python</option>
          </Select>
        </Flex>
        <Flex rounded="xl" overflow="hidden" shadow="lg">
          <CodeMirror
            theme={theme}
            value={value}
            height="600px"
            width="600px"
            extensions={[python()]}
            onChange={(value, viewUpdate) => {
              console.log('value:', value);
            }}
          />
          <Divider orientation="vertical" />
          <CodeMirror theme={theme} value={output} height="600px" width="600px" extensions={[python()]} editable={false} />
        </Flex>
        <Button colorScheme="teal" rightIcon={<Icon as={BsPlay} />}>
          Run
        </Button>
      </Flex>
    </ChakraProvider>
  );
}
