import React from "react";
import { Favorite, FavoriteBorder, MoreVert, ThumbUp } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

const Post = () => {
  return (
    <>
      <Box pb={2} pt={2}>
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                P
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="Pardeep Sharma"
            subheader="December 22, 2023"
          />
          <CardMedia
            component="img"
            height="350"
            image="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
             
              <Checkbox
                icon={<ThumbUp />}
                checkedIcon={<ThumbUp sx={{ color: "primary" }} />}
              />
              
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default Post;
