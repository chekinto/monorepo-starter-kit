import { createThemeContract } from "@vanilla-extract/css";
import { color } from "./color.css.ts";
import { font } from "./font.css.ts";
import { spacing } from "./spacing.css.ts";
import { text } from "./text.css.ts";
// components
import { button } from "./components/buttons.css.ts";

export const themeContract = createThemeContract({
  color: { ...color },
  font: { ...font },
  spacing: { ...spacing },
  text: { ...text },
  components: {
    button: { ...button },
  },
});
