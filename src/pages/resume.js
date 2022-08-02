import React from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resume from '../assets/resume.pdf';

export default function Resume() {
  return (
      <Document file={ resume }>
          <Page pageNumber={1}/>
      </Document>
  )
}
