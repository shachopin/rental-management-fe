import React from "react";
import { ListItem, ListItemText, Button } from "@material-ui/core";
import { db } from "./firebase_config";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

export default function TodoListItem({ todo, inprogress, id, link }) {

  function toggleInProgress() {
    db.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  }

  function deleteTodo() {
    db.collection("todos").doc(id).delete();
  }

  const handleChange = ({ target: { value, name } }) => {
    db.collection("todos")
      .doc(id)
      .update({
        [name]: value,
      });
  };

  return (
    <div style={{ display: "flex" }}>
      <ListItem>
        <ListItemText
          primary={
            inprogress ? (
              <>
                <TextField
                  id="standard-basic"
                  placeholder="modify content"
                  value={todo}
                  name="todo"
                  onChange={handleChange}
                  style={{ width: "30vw", maxWidth: "600px" }}
                />
                <br/>
                <TextField
                  id="standard-basic"
                  placeholder="add a link"
                  value={link}
                  name="link"
                  onChange={handleChange}
                  style={{ width: "30vw", maxWidth: "600px" }}
                />
              </>
            ) : (
              <>
                <Typography variant="h6" style={{paddingBottom: 15}}>{todo}</Typography>
                <a href={link} target="_blank">{link}</a>
              </>
            )
          }
          secondary={inprogress ? "In Progress" : "Completed"}
        />
      </ListItem>

      <Button onClick={toggleInProgress}>
        {inprogress ? "Done" : "UnDone"}
      </Button>
      <Button onClick={deleteTodo}>X</Button>
    </div>
  );
}
