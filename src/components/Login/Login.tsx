import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Box, Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function Login(props) {
    return (
        <Grid container justifyContent="center">
            <Grid mt={4}>
                <Card>
                    <CardContent sx={{ width: '70vw' }}>
                        <Typography sx={{ fontSize: 14, marginBottom: 2 }} color="text.secondary" gutterBottom>
                            Welcome!
                        </Typography>
                        <Box>
                            <TextField sx={{ marginBottom: 2 }} fullWidth id="email" label="Email" variant="outlined" />
                        </Box>
                        <Box>
                            <TextField sx={{ marginBottom: 2 }} fullWidth id="full-name" label="Full name" variant="outlined" />
                        </Box>

                        <CardActions>
                            <Button size="small">Send OTP</Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Login;
