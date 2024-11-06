import { AppBar, IconButton, Toolbar, Typography, Box } from "@mui/material";
import { Code } from "@mui/icons-material";

export default function Header() {
  return (
    <>
      {/* // <HeaderWrapper> */}
      <AppBar position="static">
        <Toolbar>
          <IconButton>
            <Code />
          </IconButton>
          <Typography variant="h3">Nikhil&apos;s Portfolio</Typography>
        </Toolbar>
      </AppBar>
      {/* // </HeaderWrapper> */}
    </>
  );
}
