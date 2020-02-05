import React from 'react';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import { useTheme } from '@material-ui/core/styles';

export default function UploadItem() {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flex={1}
      width={1}
      maxHeight="70px"
      marginTop={2}
      border={`1px solid ${theme.palette.grey[200]}`}
      borderRadius={4}
    >
      <Paper elevation={0} style={{ heigth: '100%', width: '100%' }}>
        <Box
          display="flex"
          flex={1}
          justifyContent="space-around"
          alignItems="center"
          minHeight={1}
          width={1}
          paddingX={2}
        >
          <Box
            display="flex"
            padding={1}
            borderRadius={6}
            style={{ backgroundColor: theme.palette.common.lightBlue }}
          >
            <InsertDriveFile
              fontSize="large"
              style={{ color: theme.palette.common.white }}
            />
          </Box>
          <Box
            display="flex"
            flex={1}
            flexDirection="column"
            justifyContent="space-around"
            marginX={2}
          >
            <Box display="flex" justifyContent="space-between" marginBottom={2}>
              <Typography variant="body1">File001.pdf</Typography>
              <Typography variant="body1" color="textSecondary">
                0 KB
              </Typography>
            </Box>
            <LinearProgress variant="determinate" value={97} />
          </Box>
          <CheckCircleOutlineIcon
            style={{ color: theme.palette.success.main }}
          />
        </Box>
      </Paper>
    </Box>
  );
}

// style={{ heigth: '100%', width: '100%' }}
