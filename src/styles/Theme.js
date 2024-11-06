// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1b1b1b",
      paper: "#2b2b2b",
    },
    primary: {
      main: "#f5f5f5", // White or light gray for highlights and text
    },
    secondary: {
      main: "#d1d1d1", // Subtle gray color for text and details
    },
    text: {
      primary: "#f5f5f5",
      secondary: "#d1d1d1",
    },
  },
  typography: {
    fontFamily: "'Montserrat', 'Poppins', sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: 1.6,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#d1d1d1",
    },
    button: {
      fontSize: "1rem",
      fontWeight: 700,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'Montserrat', sans-serif",
          borderRadius: "8px",
          padding: "10px 20px",
          transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "#ffffff33", // Subtle overlay on hover
          },
        },
        containedPrimary: {
          backgroundColor: "#f5f5f5",
          color: "#1b1b1b",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
        },
        containedSecondary: {
          backgroundColor: "#d1d1d1",
          color: "#1b1b1b",
          "&:hover": {
            backgroundColor: "#bfbfbf",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#2b2b2b",
          color: "#f5f5f5",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#2b2b2b",
          color: "#f5f5f5",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          color: "#d1d1d1",
          "&.Mui-selected": {
            color: "#f5f5f5",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#f5f5f5",
          "&:hover": {
            color: "#d1d1d1",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: "ease 0.3s",
          "&:hover": {
            color: "#d1d1d1",
            transform: "scale(1.05)",
            transition: "ease 0.3s",
          },
        },
      },
    },
  },
  customStyles: {
    boxStyle: {
      width: "100%",
      height: "50vh",
      backgroundColor: "primary.main",
      padding: 2,
      borderRadius: 2,
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  spacing: 8, // Default spacing unit, used for padding/margin adjustments
});

export default theme;
