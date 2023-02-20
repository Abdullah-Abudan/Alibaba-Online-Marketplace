const centralTheme = {
  colors: {
    transparent: "transparent",
    light: "#FFFFFF",
    dark: "#1C1C1C",
    primary: {
      100: "rgb(247 250 252)",
      500: "#0D6EFD", //btn
      600: "#4267B2", //btncontin
    },
    orange: {
      100: "#FFE6BF",
      500: "#FF9017",
    },
    success: {
      100: "#C4FFCB",
      500: "#00B517",
    },
    danger: {
      100: "#FFE3E3",
      500: "#FA3434",
    },
    secondary: {
      100: "#F7FAFC",
      200: "#EFF2F4",
      300: "#E3E8EE",
      400: "#BBBCBE",
      500: "#8B96A5",
      600: "#505050",
      800: "#606060", //Cbtn
    },
  },
  fonts: {
    h1: {
      size: "72px",
      weight: "600",
      lh: "78px",
      spacing: "-1.6px",
    },
    h2: {
      size: "48px",
      weight: "700",
      lh: "58px",
      spacing: "-1px",
    },
    h3: {
      size: "32px",
      weight: "600",
      lh: "39px",
      spacing: "-0.2px",
    },
    h4: {
      size: "24px",
      weight: "600",
      lh: "32px",
      spacing: "-0.2px",
    },
    h5: {
      size: "20px",
      weight: "600",
      lh: "26px",
      spacing: "-0.2px",
    },
    h6: {
      size: "16px",
      weight: "600",
      lh: "22px;",
      spacing: "-0.1px;",
    },
  },
  screens: {
    xs: "575.98px",
    sm: "767.98px",
    md: "991.98px",
    lg: "1199.98px",
    xl: "1399.98px",
  },
  shadow: {
    none: "none",
    sm: "0px 1px 2px rgba(56, 56, 56, 0.08);",
    CForm: "0px 3px 10px rgba(32, 32, 32, 0.1)",
    Cbtn: " 0px 1px 3px rgba(56, 56, 56, 0.1);",
  },
  fontFamily: {
    sans: ["Graphik", "sans-serif"],
    serif: ["Merriweather", "serif"],
    math: ["math"],
  },
  padding: {
    p1: "2px",
    p2: "4px",
    p3: "8px",
    p4: "16px",
    p5: "32px",
    p6: "40px",
  },
  borders: {
    none: "none",
    btn: "1px solid #0D6EFD",
    Cbtn: "1px solid #E0E0E0",
    xs: "4px",
    sm: "6px",
    md: "8px",
    lg: "16px",
    xl: "32px",
  },
  borderRadius: {
    xs: "4px",
    sm: "6px",
    md: "8px",
    lg: "16px",
    xl: "32px",
    pill: "800px",
  },
  light: {
    backgroundColor: '#FFFFFF',
    textColor: '#333333',
  },
  dark: {
    backgroundColor: '#222222',
    textColor: '#FFFFFF',
  },
};
export default centralTheme;
