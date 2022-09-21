import React from 'react';
import { Box, Grid } from '@/components/common/Layout';



export const PowerBI  = () => {

  const urlName = "https://app.powerbi.com/view?r=eyJrIjoiODllMGJjZjgtNzkwYi00NTFjLWI0NWQtYjM0NmY3NGJlN2JlIiwidCI6IjA5ZDlkYTM0LTY3ZjEtNGYyNC04MGQyLTc3NTgxNWFhMGM0NiJ9&pageName=ReportSection"
  const filter = "?filter=Sheet1/SerialNo eq "
  const  serialNo = 2;
 
  return (
    <Grid gap="4" columns={{ '@initial': '1', '@md': '1', '@lg': '1' }}>
      <Box
        css={{
          position: 'relative',
          h: '100%',
          p: 20,
          borderRadius: 6,
          bgColor: '$loContrast',
          boxShadow: '$colors$shadow1',
        }}
      >
      <iframe title="raegent" 
              width="1100" 
              height="540" 
              src="https://app.powerbi.com/view?r=eyJrIjoiNjdjMTAwZDktMDRlOC00N2NiLTg0N2UtOTMxMDcxOGRhYmY2IiwidCI6IjA5ZDlkYTM0LTY3ZjEtNGYyNC04MGQyLTc3NTgxNWFhMGM0NiJ9&pageName=ReportSection" 
              frameBorder="0" 
              allowFullScreen={true}>

      </iframe>


      {/* <iframe title="testOpen" 
                width="1100" 
                height="540" 
                // src= "https://app.powerbi.com/view?r=eyJrIjoiODllMGJjZjgtNzkwYi00NTFjLWI0NWQtYjM0NmY3NGJlN2JlIiwidCI6IjA5ZDlkYTM0LTY3ZjEtNGYyNC04MGQyLTc3NTgxNWFhMGM0NiJ9&pageName=ReportSection"
                src = {urlName + filter + serialNo}  
                frameBorder="0" 
                allowFullScreen={true}>

      </iframe> */}
      </Box>
      <p></p>

    </Grid>
  );
};
