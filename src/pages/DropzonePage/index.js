import React, { useState } from 'react';
import Dropzone from '../../components/Dropzone';
import UploadItem from '../../components/UploadItem';

import Box from '@material-ui/core/Box';

const reader = new FileReader();

export default function DropzonePage() {
  const [files, setFiles] = useState([]);
  // console.log(files);

  reader.onprogress = evt => {
    console.log(evt);
  };

  function onDrop(acceptedFiles) {
    setFiles(acceptedFiles);
    const data = acceptedFiles[0];
    reader.readAsBinaryString(data);
  }

  return (
    <Box
      display="flex"
      flex={1}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minWidth="600px"
    >
      <Dropzone onDrop={onDrop} />
      <UploadItem />
    </Box>
  );
}
