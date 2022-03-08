import { Typography } from "@mui/material";
import { Button, Container } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


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
            <Button 
                variant="contained" 
                color="primary"
                endIcon={<KeyboardArrowRightIcon />}
            >
                Submit</Button>
        </Container>
     );
}
 
export default Create;