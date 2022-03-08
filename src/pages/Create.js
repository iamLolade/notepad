import { useState } from "react"
import { Typography } from "@mui/material";
import { Button, Container } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { TextField } from "@mui/material";

//Custom styles
const styles = {
    field: {
        marginTop: 5,
        marginBottom: 5,
        display: "block"
    }
}

const Create = () => {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("")
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        setTitleError(false)
        setDetailsError(false)
        
        if(title === "") {
            setTitleError(true)
        }

        if(details === "") {
            setDetailsError(true)
        }

        if(title && details) {
            console.log(title, details)
        }
    }
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

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField 
                    onChange={(e) => setTitle(e.target.value)}
                    sx={styles.field}
                    variant="outlined"
                    label="Note Title"
                    color="primary"
                    fullWidth
                    required
                    error={titleError}
                />
                <TextField 
                    onChange={(e) => setDetails(e.target.value)}
                    sx={styles.field}
                    variant="outlined"
                    label="Details"
                    color="primary"
                    multiline
                    rows={4}
                    fullWidth
                    required
                    error={detailsError}
                />
                <Button 
                    onClick={handleSubmit}
                    variant="contained" 
                    color="primary"
                    endIcon={<KeyboardArrowRightIcon />}
                >
                    Submit
                 </Button>
            </form>
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