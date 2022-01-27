import React from "react";
import { styled } from "@mui/material/styles";

const VideoPlayer = (props) => {
  const Iframe = styled("iframe")(({ theme }) => ({
    position: "absolute",
    top: "0px",
    left: "0px",
    frameborder: "0",
    [theme.breakpoints.up("sm")]: {
      width: "65%",
      height: "45%"
    },
  }));

  return (
    <Iframe
      title="Youtube"
      allowFullScreen
      src={"https://www.youtube.com/embed/" + props.playId}
    ></Iframe>
  );
};

export default VideoPlayer;
