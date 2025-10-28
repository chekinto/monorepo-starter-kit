import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../styles/sprinkles.css";
import { tokens as t } from "../../styles/theme-contract.css";

const primaryStyles = style([
  sprinkles({
    backgroundColor: {
      lightMode: "bg_hero",
      darkMode: "bg_secondary",
    },
    color: {
      lightMode: "text_primary",
      darkMode: "text_secondary",
    },
    font: "font_body_1",
  }),
  {
    // ":active": {
    //   backgroundColor: t.button.primary_active,
    //   color: "blue",
    // },
    // ":disabled": {
    //   backgroundColor: t.button.disabled,
    //   color: t.button.disabled_text,
    // },
    ":hover": {
      backgroundColor: "black",
    },
  },
]);

const secondaryStyles = style([
  sprinkles({
    backgroundColor: "btn_secondary",
    color: "text_secondary",
  }),
  {
    ":hover": {
      background: t.button.secondary,
    },
  },
]);

export const button = recipe({
  base: { border: t.spacing.none },
  variants: {
    variant: {
      primary: primaryStyles,
      secondary: secondaryStyles,
    },
    size: {
      sm: sprinkles({
        paddingX: "spacing_sm",
        paddingY: "spacing_xxs",
      }),
      md: sprinkles({
        paddingX: "spacing_md",
        paddingY: "spacing_xs",
      }),
      lg: sprinkles({
        paddingX: "spacing_lg",
        paddingY: "spacing_sm",
      }),
    },
    rounded: {
      true: { borderRadius: 999 },
    },
  },
});
