import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  IconButton,
  Container,
  Box
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState("home");

  const quiz2 = [
    {
      question: "What hook is used for state in React?",
      options: [
        { text: "useFetch", correct: false },
        { text: "useState", correct: true },
        { text: "useClass", correct: false },
        { text: "useDOM", correct: false }
      ]
    },
    {
      question: "Why use reusable components?",
      options: [
        { text: "Increase code duplication", correct: false },
        { text: "Improve maintainability", correct: true },
        { text: "Reduce performance", correct: false },
        { text: "Avoid styling", correct: false }
      ]
    }
  ];

  const theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
      primary: { main: "#1976d2" }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>

          <Typography className="app-title">
            Quiz Dashboard
          </Typography>

          <Button color="inherit" onClick={() => setDark(!dark)}>
            Toggle Theme
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <List className="sidebar">
          <ListItem button onClick={() => { setPage("home"); setOpen(false); }}>
            <ListItemText primary="Quiz 1" />
          </ListItem>

          <ListItem button onClick={() => { setPage("quiz2"); setOpen(false); }}>
            <ListItemText primary="Quiz 2" />
          </ListItem>
        </List>
      </Drawer>

      <Box className="main-container">
        <Container>
          {page === "home" && <Home />}
          {page === "quiz2" && (
            <Quiz title="Quiz 2: React Concepts" questions={quiz2} />
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
