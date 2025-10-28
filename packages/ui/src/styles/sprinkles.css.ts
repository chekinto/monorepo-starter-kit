import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import {
  background,
  border,
  borderRadius,
  brand,
  button,
  drag_handle,
  icons,
  pagination,
  pill,
  separator,
  skeleton_shimmer,
  spacing,
  status,
  text,
  toast,
} from "./properties.css.ts";

const backgroundColors = {
  ...background,
  ...brand,
  ...button,
  ...drag_handle,
  ...icons,
  ...pagination,
  ...pill,
  ...separator,
  ...skeleton_shimmer,
  ...status,
  ...toast,
};

// const modeConditions = {
//   conditions: {
//     lightMode: {
//       "@media": "(prefers-color-scheme: light)",
//     },
//     darkMode: {
//       "@media": "(prefers-color-scheme: dark)",
//     },
//   },
//   defaultCondition: "lightMode",
// }

const borderProperties = defineProperties({
  conditions: {
    lightMode: {
      "@media": "(prefers-color-scheme: light)",
    },
    darkMode: {
      "@media": "(prefers-color-scheme: dark)",
    },
  },
  defaultCondition: "lightMode",
  properties: {
    borderColor: border,
    borderTopColor: border,
    borderBottomColor: border,
    borderLeftColor: border,
    borderRightColor: border,
    borderRadius: borderRadius,
    borderTop: borderRadius,
    borderBottom: borderRadius,
    borderLeft: borderRadius,
    borderRight: borderRadius,
  },
});

const colorProperties = defineProperties({
  conditions: {
    lightMode: { "@media": "(prefers-color-scheme: light)" },
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    background: { ...backgroundColors },
    backgroundColor: { ...backgroundColors },
    color: { ...backgroundColors, ...text },
  },
});

const spacingProperties = defineProperties({
  conditions: {
    lightMode: { "@media": "(prefers-color-scheme: light)" },
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    marginTop: spacing,
    marginBottom: spacing,
    marginLeft: spacing,
    marginRight: spacing,
    paddingTop: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
  },
  shorthands: {
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
  },
});

const typographyProperties = defineProperties({
  properties: {
    font: {
      title_display: {
        fontWeight: "normal",
        fontSize: 48,
      },
      title_1: {
        fontWeight: "normal",
        fontSize: 32,
      },
      title_1_meta: {
        fontWeight: "semi-bold",
        fontSize: 32,
      },
      title_2: {
        fontWeight: "normal",
        fontSize: 28,
      },
      title_2_meta: {
        fontWeight: "semi-bold",
        fontSize: 28,
      },
      title_3: {
        fontWeight: "normal",
        fontSize: 24,
      },
      title_4: {
        fontWeight: "normal",
        fontSize: 20,
      },
      title_5: {
        fontWeight: "normal",
        fontSize: 18,
      },
      title_5_meta: {
        fontWeight: "semi-bold",
        fontSize: 18,
      },
      title_6: {
        fontWeight: "normal",
        fontSize: 16,
      },
      title_7: {
        fontWeight: "normal",
        fontSize: 14,
      },
      font_body_large: {
        fontWeight: "normal",
        fontSize: 18,
      },
      font_body_large_strong: {
        fontWeight: "semi-bold",
        fontSize: 18,
      },
      font_body_1: {
        fontWeight: "normal",
        fontSize: 16,
      },
      font_body_1_strong: {
        fontWeight: "semi-bold",
        fontSize: 16,
      },
      font_body_2: {
        fontWeight: "normal",
        fontSize: 14,
      },
      font_body_2_strong: {
        fontWeight: "semi-bold",
        fontSize: 14,
      },
      font_caption_1: {
        fontWeight: "normal",
        fontSize: 12,
      },
      font_caption_1_strong: {
        fontWeight: "semi-bold",
        fontSize: 12,
      },
      font_caption_2: {
        fontWeight: "normal",
        fontSize: 11,
      },
      font_caption_2_strong: {
        fontWeight: "semi-bold",
        fontSize: 11,
      },
      font_label: {
        fontWeight: "semi-bold",
        fontSize: 32,
      },
      font_label_small: {
        fontWeight: "semi-bold",
        fontSize: 12,
      },
    },
  },
});

export const sprinkles = createSprinkles(
  borderProperties,
  colorProperties,
  spacingProperties,
  typographyProperties
);
