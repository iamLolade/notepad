import { useState } from "react";
import { DeleteOutlined, ExpandMore } from "@mui/icons-material";
import { Card, CardHeader, CardActions, CardContent, Collapse, Avatar, Typography, IconButton } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const NoteCard = ({ note, handleDelete}) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return ( 
        <Card elevation={1}>
            <CardHeader
                action={
                    <IconButton>
                        <DeleteOutlined onClick={() => handleDelete(note.id)} />
                    </IconButton>
                }
                title={ note.title }
                subheader={ note.category }
            />
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        { note.details }
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
     );
}
 
export default NoteCard;