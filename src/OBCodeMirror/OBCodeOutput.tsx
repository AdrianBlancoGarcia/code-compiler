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
          console
        </Flex>
      </Flex>
      <CodeEditor
        readOnly
        language="bat"
        value={value}
        placeholder="Your result."
        padding={15}
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

export default OBCodeOutput;
