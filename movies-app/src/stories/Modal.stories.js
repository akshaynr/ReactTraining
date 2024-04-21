import { fn } from '@storybook/test';
import MovieModal from '../components/MovieModal/MovieModal';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/MovieModal',
  component: MovieModal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

const Template = (args) => <MovieModal {...args} />;

export const AddMovieModal = Template.bind({});
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
AddMovieModal.args = {
  modalHeader: 'Add Movie',
};

export const EditMovieModal = Template.bind({});
EditMovieModal.args = {
  modalHeader: 'Edit Movie',
};

