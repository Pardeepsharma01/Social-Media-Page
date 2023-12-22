import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

const Timeline = () => {
  return (
    <Box flex={4} pr={2}>
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Timeline;
