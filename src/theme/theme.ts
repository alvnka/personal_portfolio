import { createTheme } from "@mui/material/styles";

// Palette derived from the "Kinetic Engineering" design reference:
// cream/off-white surfaces, deep navy text, deep maroon/red accent.
export const palette = {
  background: "#FBF4F2",
  backgroundAlt: "#F3ECE9",
  surface: "#FFFFFF",
  navy: "#161C2D",
  navySoft: "#3A4255",
  maroon: "#9C1C32",
  maroonDark: "#7A1526",
  maroonSoft: "#FBE4E8",
  outline: "#E4D9D5",
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: palette.maroon,
      dark: palette.maroonDark,
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: palette.navy,
      contrastText: "#FFFFFF",
    },
    background: {
      default: palette.background,
      paper: palette.surface,
    },
    text: {
      primary: palette.navy,
      secondary: palette.navySoft,
    },
    divider: palette.outline,
  },
  typography: {
    fontFamily: `"Inter", "Helvetica Neue", Arial, sans-serif`,
    h1: { fontFamily: `"Playfair Display", Georgia, serif`, fontWeight: 800 },
    h2: { fontFamily: `"Playfair Display", Georgia, serif`, fontWeight: 800 },
    h3: { fontFamily: `"Playfair Display", Georgia, serif`, fontWeight: 700 },
    h4: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 10,
          paddingBottom: 10,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 500,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default theme;
