import { useEffect, useState } from "react";
import { Container, Grid, Paper } from "@mui/material";

const Notes = () => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/notes")
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])

    return (
        <Container> 
            <div>
                {notes.map(note => (
                    <p key={note.id}>{ note.title }</p>
                ))}
            </div>
        </Container>
     );
}
 
export default Notes;