import CodeEditor from '@uiw/react-textarea-code-editor';
import { Flex } from '@chakra-ui/react';

type InputProps = {
  theme?: string;
  value?: string;
};

function OBCodeOutput({ theme, value }: InputProps) {
  return (
    <Flex direction="column">
      <Flex
        color="black"
        width="100%"
        bg='#FFFFFF'
        p='15px 20px'
        h='70px'
        align="center"
        fontSize='14px'
        fontWeight='bold'
      >
        Console
      </Flex>
      <CodeEditor
        readOnly
        language="bat"
        value={value}
        placeholder="Your result."
        padding={15}
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

export default OBCodeOutput;
