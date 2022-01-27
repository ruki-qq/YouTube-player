import React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Button,
  FormControl,
  InputBase,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";

const YouTubeIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1.5, 0),
  position: "absolute",
  height: "100%",
  display: "flex",
}));

const TextWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1, 4),
}));

const Search = styled("form")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "50%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  display: "flex",
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const Sort = styled(FormControl)(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  anchorOrigin: {
    vertical: "top",
    horizontal: "right",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "right",
  },
  marginLeft: "auto",
  width: "20%",
}));

const SortIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  color: "inherit",
}));

const AppHeader = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} style={{ background: "black" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <YouTubeIconWrapper>
              <YouTubeIcon />
            </YouTubeIconWrapper>
            <TextWrapper>YouTube Player</TextWrapper>
          </Typography>
          <Search onSubmit={(e) => props.getContent(e, props.order)}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
              value={props.value}
              onChange={props.handleInput}
            />
          </Search>
          <StyledButton onClick={(e) => props.getContent(e, props.order)}>Search</StyledButton>
          <Sort size="small">
            <SortIconWrapper>
              <SortIcon />
            </SortIconWrapper>
            <StyledSelect
              value={props.order}
              onChange={(e) => {
                props.handleOrder(e);
              }}
            >
              <MenuItem value={"relevance"}>Relevance</MenuItem>
              <MenuItem value={"date"}>Date</MenuItem>
              <MenuItem value={"rating"}>Rating</MenuItem>
              <MenuItem value={"viewCount"}>View Count</MenuItem>
            </StyledSelect>
          </Sort>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeader;
