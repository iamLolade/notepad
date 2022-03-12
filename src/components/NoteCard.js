import { Card, CardHeader, CardActions, Collapse, Avatar } from "@mui/material";

const NoteCard = ({note}) => {
    return ( 
        <div>
            { note.title }
        </div>
     );
}
 
export default NoteCard;