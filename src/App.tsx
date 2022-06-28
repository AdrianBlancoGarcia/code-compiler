import { ChakraProvider } from '@chakra-ui/react';
import OBCodeMirror from './OBCodeMirror/OBCodeMirror';

export default function App() {
  return (
    <ChakraProvider>
      <div style={{paddingLeft: '100px', paddingTop: '100px'}}>
        <OBCodeMirror />
      </div>
    </ChakraProvider>
  );
}
