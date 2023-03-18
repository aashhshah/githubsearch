import { AppBar, Box, Container, Divider, IconButton, Toolbar, Typography } from "@mui/material";

export const TittleBar = () => {
  return (
    <Box bgcolor="#e2dddb" >
      <Box mb={9.4} border={1} >
        <AppBar elevation={0} position="fixed" sx={{ bgcolor: "#e2dddb", borderBottom: "2px solid black" }} >
          <Toolbar sx={{ height: "100%", width: '100%' }}>
            <Container>
              <Box display="flex" flexDirection="row" width="100%" alignItems="center" >
                <Box flexGrow={1}>
                  <IconButton href="/">
                    {/* <Card sx={{ width: '250px', alignContent: 'center', alignItems: 'center', justifyContent: 'center', justifyItems: 'center', diplay: 'flex' }}> */}
                    <Box>

                      <Typography>GitHub Repo Search</Typography>
                    </Box>
                    {/* </Card> */}
                  </IconButton>
                </Box>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
        <Divider color="black" />
      </Box>
    </Box >
  );
};
