import React, { useState, useEffect } from "react";
import AppHeader from "./AppHeader";
import VideoList from "./VideoList";
import Box from "@mui/material/Box";
import VideoPlayer from "./VideoPlayer";
import Grid from "@mui/material/Grid";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [order, setOrder] = useState("rating");
  const [playId, setPlayId] = useState(null);
  const [videos, getContent] = useVideos(inputText, order);
  useEffect(() => {
    videos && setPlayId(videos[0].id);
  }, [videos]);

  const handleInput = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  };

  const handleOrder = (event) => {
    const newValue = event.target.value;
    setOrder(newValue);
    getContent(event, order);
  };
  const handlePlay = (id) => {
    setPlayId(id);
  };
  return (
    <>
      <AppHeader
        value={inputText}
        handleInput={handleInput}
        getContent={getContent}
        order={order}
        handleOrder={handleOrder}
      />

      <Box sx={{ position: "relative", paddingBottom: "75%", height: "0px" }}>
        <Grid container spacing={0}>
          <Grid item xs={8}>
            {playId && <VideoPlayer playId={playId} />}
          </Grid>
          <Grid item xs={4}>
            {videos && <VideoList videos={videos} handlePlay={handlePlay} />}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default App;
