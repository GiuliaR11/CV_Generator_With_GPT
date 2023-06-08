import React from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import CVDocument from './CVDocument';

const CVPage = () => (
  <div>
    {/* CV content goes here */}
    <PDFViewer>
      <CVDocument />
    </PDFViewer>
    <PDFDownloadLink document={<CVDocument />} fileName="cv.pdf">
      Download PDF
    </PDFDownloadLink>
  </div>
);

export default CVPage;