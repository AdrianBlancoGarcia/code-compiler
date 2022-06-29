import { useState } from 'react';
import { Box, Flex, Icon } from '@chakra-ui/react';

import { BiCodeBlock, BiX, BiWindows, BiWindow } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
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

  const [language, setLanguage] = useState<any>({ label: 'Python', value: 'python', id: '1' });

  /**
   * Función para ejecutar el código.
   * Devuelve la salida de bat.
   */
  const compileCode = async () => {
    const languageSelected = LANGUAGES.find((lang: any) => lang?.value === language);

    const output = await executeCode({ source_code: value, language_id: languageSelected?.id })
      .then((res) => res?.value?.data?.data)
      .catch((error) => console.log(error));

    console.log({ output: output?.stdout });
    setOutput(output?.stdout);
  };

  return (
    <Flex w="fit-content" direction="column" bg={'#F0F0F3'} overflow="hidden">
      <Flex justify="space-between" p="12px 22px" align="center" bg={'rgba(18, 22, 37, 1)'}>
        <Flex align="center" gap="14px">
          <Icon as={BiCodeBlock} />
          <Box fontSize="14px" fontWeight="bold" lineHeight="17px">
            Live Code
          </Box>
        </Flex>
        <Flex gap="14px" align="center">
          <Icon as={BiWindow} color="rgba(165, 168, 179, 1)" w='18px' h='18px' cursor='pointer' />
          <Icon as={BiX} color="rgba(165, 168, 179, 1)" w='25px' h='25px' cursor='pointer' />
        </Flex>
      </Flex>
      <Flex overflow="hidden" w="100%" width="fit-content" gap="15px">
        <OBCodeInput
          value={value}
          languageSelected={language}
          setLanguage={setLanguage}
          setValue={setValue}
          languages={LANGUAGES}
          compileCode={compileCode}
        />
        <OBCodeOutput value={output} />
      </Flex>
    </Flex>
  );
}
