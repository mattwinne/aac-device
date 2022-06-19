import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const Colors = {
  primary: "#70D6FF",
  primaryLight: "#99E2FF",
  secondary: "#FF70A6",
  secondaryLight: "#FFADCD",
  tertiary: "#FFD670",
  tertiaryLight: "#FFE299",
  success: "#4CAF50",
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#00000080",
  light: "#ffffff80",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  /// ////////////
  // Solid Color
  /// ////////////
  white: "#fff",
  black: "#000",
  background: "#E9FF70",
  backgroundLight: "#F0FF99",
};

export const lightPalette = {
  primary: {
    main: Colors.primary,
    light: Colors.primaryLight,
  },
  secondary: {
    main: Colors.secondary,
    light: Colors.secondaryLight,
  },
  tertiary: {
    main: Colors.tertiary,
    light: Colors.tertiaryLight,
  },
  bg: {
    main: Colors.background,
    light: Colors.backgroundLight,
  },
  colors: Colors,
  txt: Colors.black,
};

export const darkPalette = {
  primary: {
    main: Colors.primary,
    light: Colors.primaryLight,
  },
  secondary: {
    main: Colors.black,
  },
  bg: {
    main: Colors.black,
    light: Colors.dark,
  },
  colors: Colors,
  txt: Colors.white,
};
export const components = {
  MuiButton: {
    defaultProps: {
      variant: "contained",

      size: "medium",
      sx: {
        backgroundColor: "primary.light",
        color: "txt",
        marginTop: "5px",
        width: "160px",
        boxShadow: "0 1px 12px rgba(0, 0, 0, 0.25)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      },
    },
  },
  MuiContainer: {
    defaultProps: {},
  },
  MuiToolbar: {
    defaultProps: {
      sx: {
        backgroundColor: "primary.light",
        color: "txt",
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: "outlined",

      sx: {
        backgroundColor: "white",
        input: { color: "txt" },
        label: { color: "txt" },
      },
    },
  },
  MuiGrid: {
    defaultProps: {},
  },
  MuiCard: {
    defaultProps: {},
  },
  MuiCardGrid: {
    defaultProps: {},
  },

  MuiCardContent: {
    defaultProps: {},
  },
  MuiCardMedia: {
    defaultProps: {
      component: "img",
    },
  },

  MuiBox: {
    defaultProps: {},
  },
  MuiTypography: {
    defaultProps: {
      color: "txt",
      variant: "p",
    },
  },
};

const darkTheme = createTheme({
  root: {
    flexGrow: 1,
  },
  palette: darkPalette,

  components,
});

const atheme = createTheme({
  root: {
    flexGrow: 1,
  },
  palette: lightPalette,

  components,
});
const theme = {
  light: responsiveFontSizes(atheme),
  dark: responsiveFontSizes(darkTheme),
};

export default theme;
