import { Typography } from "@mui/material";
import { Button, Container } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

//Custom styles
// const styles = {
//     fontSize: 90
// }

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
                // sx={styles}
                onClick={() => console.log("You clicked me!")}
                variant="contained" 
                color="primary"
                endIcon={<KeyboardArrowRightIcon />}
            >
                Submit</Button>
        </Container>
     );
}
 
export default Create;


// very simple just define this object
//  const styles = {
//         fontSize= 80
//     }

// then pass this  prop like here in this button 
// <Button
// sx={styles}
// >"This is the prop for styling"</Button>