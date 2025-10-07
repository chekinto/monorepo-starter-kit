import { recipe } from "@vanilla-extract/recipes";

import { themeContract } from "../../contract/theme-contract.css";

export const buttonStyles = recipe({
  variants: {
    size: {
      sm: {
        padding: `${themeContract.spacing.sm} ${themeContract.spacing.lg}`,
      },
      md: { padding: themeContract.components.button.size.md },
      lg: { padding: themeContract.components.button.size.lg },
    },
    variant: {
      primary: {
        backgroundColor: themeContract.components.button.bg.primary.normal,
        color: themeContract.components.button.text.primary.normal,
        ":disabled": {
          backgroundColor: themeContract.components.button.bg.primary.disabled,
          color: themeContract.components.button.text.primary.disabled,
        },
        ":hover": {
          backgroundColor: themeContract.components.button.bg.primary.hover,
          color: themeContract.components.button.text.primary.hover,
        },
      },
      secondary: {
        backgroundColor: themeContract.components.button.bg.secondary.normal,
        color: themeContract.components.button.text.secondary.normal,
        ":disabled": {
          color: themeContract.components.button.text.secondary.disabled,
          backgroundColor:
            themeContract.components.button.bg.secondary.disabled,
        },
        ":hover": {
          color: themeContract.components.button.text.secondary.hover,
          backgroundColor: themeContract.components.button.bg.secondary.hover,
        },
      },
    },
  },
});
