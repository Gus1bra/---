import { Card, ICardProps } from "./Card";
import { Meta, StoryFn } from '@storybook/react';

// Стандартная история с базовыми параметрами
export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["default", "outline"],
      },
    },
    role: {
      control: {
        type: "text",
      },
    },
    ariaLabel: {
      control: {
        type: "text",
      },
    },
    className: {
      control: {
        type: "text",
      },
    },
  },
} as Meta;

// Типизация для args с использованием StoryFn
const Template: StoryFn<ICardProps> = (args) => <Card {...args} />;

// История для компонента Card с default стилем
export const Default = Template.bind({});
Default.args = {
  title: "Default Card",
  children: <p>This is a default card with some content.</p>,
  variant: "default",
  role: undefined,
  ariaLabel: undefined,
  className: "",
};

// История для компонента Card с outline стилем
export const Outline = Template.bind({});
Outline.args = {
  title: "Outline Card",
  children: <p>This is an outline card with some content.</p>,
  variant: "outline",
  role: undefined,
  ariaLabel: undefined,
  className: "",
};

// История для компонента Card без заголовка
export const NoTitle = Template.bind({});
NoTitle.args = {
  children: <p>This is a card without a title.</p>,
  variant: "default",
  role: undefined,
  ariaLabel: undefined,
  className: "",
};

// История для компонента Card с дополнительным классом
export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  title: "Card with Custom Class",
  children: <p>This card has a custom class applied.</p>,
  variant: "default",
  role: undefined,
  ariaLabel: undefined,
  className: "bg-blue-100", // Здесь добавляется кастомный класс
};
