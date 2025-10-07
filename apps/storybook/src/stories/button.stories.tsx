import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "@repo/ui/atoms";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: "md",
    children: <span>Test</span>,
    variant: "primary",
  },
};
