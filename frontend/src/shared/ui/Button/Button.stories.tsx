import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Save, Loader2 } from "lucide-react"; // пример иконок (lucide-react)

const meta: Meta<typeof Button> = {
  title: "Shared/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: "Save",
    icon: <Save size={16} />,
  },
};

export const WithRightIcon: Story = {
  args: {
    children: "Next",
    iconRight: <Save size={16} />,
  },
};

export const Loading: Story = {
  args: {
    children: "Saving...",
    isLoading: true,
    loadingIndicator: <Loader2 className="animate-spin" size={16} />,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width",
    fullWidth: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-60">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
