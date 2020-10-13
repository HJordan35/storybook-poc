import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Meta, Story, Canvas } from "@storybook/addon-docs/blocks";

export default {
  title: "Button",
  argTypes: {
    children: { control: "text" },
  },
};

const Template = () => {
return `<h1>Hello World</h1>`;
};

export const Text = Template.bind({});
Text.args = {
  children: "Button",
};

;
