import { useEffect, useState } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { Flex } from '@chakra-ui/react';

type InputProps = {
  theme?: string;
  value?: string;
  languageSelected?: { label?: string; value?: string; id?: string };
  setValue?: any;
};

function OBCodeInput({ theme, value, languageSelected, setValue }: InputProps) {
  const [state, setState] = useState<any>('python');

  useEffect(() => {
    if (languageSelected === 'python') setState('python');
    if (languageSelected === 'js') setState('js');
    if (languageSelected === 'java') setState('java');
    if (languageSelected === 'csharp') setState('csharp');
  }, [languageSelected]);

  return (
    <Flex direction="column">
      <Flex
        color="black"
        width="100%"
        bg={theme === 'dark' ? 'rgba(39, 39, 39, 1)' : 'rgba(203, 203, 203, 1)'}
        rounded="20px 20px 0px 0px"
      >
        <Flex
          bg="rgba(58, 58, 58, 1)"
          color="white"
          p="5px 8px"
          rounded="10px"
          fontSize="12px"
          align="center"
          justify="center"
          mt="10px"
          ml="10px"
        >
          {state}
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
          backgroundColor: theme === 'dark' ? 'rgba(39, 39, 39, 1)' : 'rgba(203, 203, 203, 1)',
          height: '483px',
          width: '549px',
          borderRadius: '0px 0px 20px 20px',
          color: theme === 'dark' ? 'white' : 'black',
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />
    </Flex>
  );
}

export default OBCodeInput;
