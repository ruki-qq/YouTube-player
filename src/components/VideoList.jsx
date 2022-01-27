import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";

export default function VideoList({ videos, handlePlay }) {
  const [list, setList] = useState(videos);
  useEffect(() => {
    setList(videos);
  }, [videos]);
  const renderVideos = () => {
    return list.map((elem) => {
      return (
        <ListItem
          alignItems="flex-start"
          key={elem.id}
          onClick={() => handlePlay(elem.id)}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <ListItemAvatar sx={{ marginRight: "10px" }}>
            <img alt={elem.id} src={elem.thumb} />
          </ListItemAvatar>
          <ListItemText
            primary={elem.title}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {elem.channel}
                </Typography>
                {` — ${elem.description}`}
              </React.Fragment>
            }
          />
        </ListItem>
      );
    });
  };
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {renderVideos()}
    </List>
  );
}
