import { fn } from '@storybook/test';
import Search from '../components/Search/Search';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Search',
  component: Search,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    initialSearchQuery: { control: '' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

const Template = (args) => <Search {...args} />;

export const Default = Template.bind({});
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
Default.args = {
  initialSearchQuery: ''
};

