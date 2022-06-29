import { useEffect, useState } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { Flex, Icon, Select } from '@chakra-ui/react';
import { BsPlay } from 'react-icons/bs';

type InputProps = {
  theme?: string;
  value?: string;
  languageSelected?: { label?: string; value?: string; id?: string };
  setValue?: any;
  languages: any;
  setLanguage: any;
  compileCode: any;
};

function OBCodeInput({ theme, value, languageSelected, setValue, languages, setLanguage, compileCode }: InputProps) {
  const [state, setState] = useState<any>('python');

  useEffect(() => {
    if (languageSelected === 'python') setState('python');
    if (languageSelected === 'js') setState('js');
    if (languageSelected === 'java') setState('java');
    if (languageSelected === 'csharp') setState('csharp');
  }, [languageSelected]);

  return (
    <Flex direction="column">
      <Flex color="black" width="100%" bg="#FFFFFF" p="15px 20px" justify="space-between">
        <Flex align="center" gap='15px' fontWeight='bold' fontSize="14px">
        Lenguaje
        <Select
          w="fit-content"
          fontSize='14px'
          color="black"
          bg={'#F0F0F3'}
          fontWeight="bold"
          border="none"
          _hover={{ border: 'none' }}
          _focus={{ border: 'none' }}
          value={languageSelected?.value}
          onChange={(event: any) => setLanguage(event.target.value)}
        >
          {languages?.map((language: any) => (
            <option
              style={{ backgroundColor: 'rgba(18, 22, 37, 1)', color: 'white' }}
              value={language?.value}
            >
              {language?.label}
            </option>
          ))}
        </Select>
        </Flex>
        <Flex
          align="center"
          justify="center"
          bg="#121625"
          _hover={{ opacity: 0.7 }}
          cursor="pointer"
          color="white"
          rounded="8px"
          fontSize="13px"
          fontWeight='bold'
          p="10px"
          onClick={compileCode}
        >
          Compile <Icon as={BsPlay} />
        </Flex>
      </Flex>
      <CodeEditor
        language={state}
        value={value}
        placeholder={`Please enter your ${(state === 'csharp' && 'C#') || state.toUpperCase()} code.`}
        padding={15}
        onChange={(evn) => setValue(evn.target.value)}
        style={{
          fontSize: 12,
          backgroundColor: '#F8F8F9',
          height: '753px',
          width: '492.5px',
          color: 'black',
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />
    </Flex>
  );
}

export default OBCodeInput;
