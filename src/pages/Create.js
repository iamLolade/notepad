import { Typography } from "@mui/material";
import { Button, Container } from "@mui/material";

const Create = () => {
    return ( 
        <Container>
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Create a New Note
            </Typography>
            <Button variant="contained" color="primary">Submit</Button>
        </Container>
     );
}
 
export default Create;