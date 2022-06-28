import { useState } from 'react';
import { Flex, Icon, Select } from '@chakra-ui/react';

import { BsFillMoonStarsFill, BsFillSunFill, BsPlay } from 'react-icons/bs';
import OBCodeInput from './OBCodeInput';
import OBCodeOutput from './OBCodeOutput';
import { executeCode } from '../middleware/execute.middleware';

const LANGUAGES = [
  { label: 'Python', value: 'python', id: '70' },
  { label: 'JavaScript', value: 'js', id: '63' },
  { label: 'Java', value: 'java', id: '62' },
  { label: 'C#', value: 'csharp', id: '51' },
];

export default function OBCodeMirror() {
  const [value, setValue] = useState();

  const [output, setOutput] = useState<any>();
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const [language, setLanguage] = useState<any>({ label: 'Python', value: 'python', id: '1' });
  
  /**
   * Función para ejecutar el código.
   * Devuelve la salida de bat.
   */
  const compileCode = async() => {
    const languageSelected = LANGUAGES.find((lang: any) => lang?.value === language);

    const output = await executeCode({ source_code: value, language_id: languageSelected?.id })
      .then((res) => res?.value?.data?.data)
      .catch((error) => console.log(error));
    
    console.log({output: output?.stdout})
    setOutput(output?.stdout);
  };

  return (
    <Flex
      w="fit-content"
      p="40px"
      direction="column"
      gap="55px"
      bg={theme === 'dark' ? 'rgba(21, 22, 33, 1)' : 'rgba(235, 235, 235, 1)'}
      rounded="20px"
    >
      <Flex w="100%" align="center" gap="20px" justify="space-between" px="20px">
        <Flex justify="space-between" w="62.5%" align="center">
          <Flex
            cursor="pointer"
            onClick={theme === 'dark' ? () => setTheme('light') : () => setTheme('dark')}
            align="center"
            transition="all 0.5 ease"
          >
            {theme === 'dark' ? (
              <Flex
                align="center"
                gap="10px"
                bg="rgba(35, 35, 35, 1)"
                rounded="40px"
                color="white"
                p="10px"
                _hover={{ opacity: 0.7 }}
              >
                <Icon as={BsFillSunFill} color="white" boxSize="35px" bg="rgba(221, 173, 3, 1)" rounded="100%" p="5px" />
                Light
              </Flex>
            ) : (
              <Flex align="center" gap="10px" bg="rgba(218, 218, 218, 1)" rounded="40px" color="black" p="10px">
                Dark
                <Icon as={BsFillMoonStarsFill} color="white" boxSize="35px" bg="rgba(9, 9, 9, 1)" rounded="100%" p="7px" />
              </Flex>
            )}
          </Flex>
          <Flex bg={theme === 'dark' ? 'rgba(39, 39, 39, 1)' : 'rgba(203, 203, 203, 1)'} p="10px" rounded="40px">
            <Select
              w="fit-content"
              color={theme === 'dark' ? 'white' : 'black'}
              fontWeight="bold"
              border="none"
              _hover={{ border: 'none' }}
              _focus={{ border: 'none' }}
              value={language}
              onChange={(event: any) => setLanguage(event.target.value)}
            >
              {LANGUAGES?.map((language: any) => (
                <option
                  style={
                    theme === 'dark'
                      ? { backgroundColor: 'rgba(39, 39, 39, 1)', color: 'white' }
                      : { backgroundColor: 'rgba(203, 203, 203, 1)', color: 'black' }
                  }
                  value={language?.value}
                >
                  {language?.label}
                </option>
              ))}
            </Select>
            <Flex
              align="center"
              justify="center"
              bg="linear-gradient(102.94deg, #59C173 -22.3%, #5D26C1 93.76%)"
              _hover={{ opacity: 0.7 }}
              cursor="pointer"
              rounded="40px"
              p="10px 22px"
              onClick={compileCode}
            >
              Compile <Icon as={BsPlay} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex rounded="xl" overflow="hidden" w="100%" width="fit-content" gap="25px">
        <OBCodeInput theme={theme} value={value} languageSelected={language} setValue={setValue} />
        <OBCodeOutput theme={theme} value={output} />
      </Flex>
    </Flex>
  );
}
