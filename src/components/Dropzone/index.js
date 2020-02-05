import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import Button from '@material-ui/core/Button';

import { useTheme } from '@material-ui/core/styles';

export default function Dropzone({
  acceptMultipleFiles,
  fileMaxSize,
  acceptedFileTypes,
  onDrop
}) {
  const theme = useTheme();

  const {
    getRootProps,
    getInputProps,
    open,
    isDragActive,
    isDragAccept
  } = useDropzone({
    noClick: true,
    noKeyboard: true,
    onDrop,
    accept: acceptedFileTypes,
    multiple: acceptMultipleFiles,
    maxSize: fileMaxSize
  });

  // useMemo helps to avoid calling this function multiple times
  const color = useMemo(() => {
    if (!isDragActive) {
      return theme.palette.primary.main;
    } else if (isDragAccept) {
      return theme.palette.success.main;
    } else {
      return theme.palette.error.main;
    }
  }, [
    isDragAccept,
    isDragActive,
    theme.palette.error.main,
    theme.palette.primary.main,
    theme.palette.success.main
  ]);

  return (
    <Paper elevation={0} style={{ marginBottom: '24px' }}>
      <Box border={`2px dashed ${color}`} borderRadius={4}>
        <Box
          {...getRootProps()}
          display="flex"
          flexDirection="column"
          alignItems="center"
          padding={8}
          paddingBottom={2}
          style={{ outline: 'none' }}
        >
          <CloudUploadOutlinedIcon
            style={{
              fontSize: '64px',
              color: color
            }}
          />
          <input {...getInputProps()} />
          <Typography align="center" variant="h6" color="textPrimary">
            Drag and drop your files here
          </Typography>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          marginX={8}
        >
          <Divider width="30%" />
          <Typography variand="subtitle2" color="textSecondary">
            OR
          </Typography>
          <Divider width="30%" />
        </Box>

        <Box display="flex" justifyContent="center" margin={8} marginTop={2}>
          <Button variant="contained" color="primary" onClick={open}>
            Browse Files
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

Dropzone.propTypes = {
  fileMaxSize: PropTypes.number,
  acceptMultipleFiles: PropTypes.bool,
  acceptedFileTypes: PropTypes.arrayOf(PropTypes.string),
  onDrop: PropTypes.func.isRequired
};

Dropzone.defaultProps = {
  fileMaxSize: null,
  acceptMultipleFiles: true,
  acceptedFileTypes: null
};
