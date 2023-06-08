import { Page, Document } from '@react-pdf/renderer';
import { Button, Text} from '@mantine/core';

const CustomComponent = () => (
  <div>
    <Text >Custom Component</Text>
    <Text >This is a custom React component using Mantine.</Text>
    <Button>Hello</Button>
  </div>
);

const CVDocument = () => (
  <Document>
    <Page>
    <div>
      <Text >Custom Component</Text>
      <Text >This is a custom React component using Mantine.</Text>
      <Button>Hello</Button>
    </div>
    </Page>
  </Document>
);

export default CVDocument;