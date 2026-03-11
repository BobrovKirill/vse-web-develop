import type { Meta, StoryObj } from '@storybook/react';
import MovieCard from './MovieCard';

const meta: Meta<typeof MovieCard> = {
  title: 'Components/MovieCard',
  component: MovieCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    posterUrl: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof MovieCard>;

export const Default: Story = {
  args: {
    title: 'Интерстеллар',
    posterUrl: 'https://image.tmdb.org/t/p/w500/...',
    year: 2014,
  },
};import type { Meta, StoryObj } from '@storybook/react';
import MovieCard from './MovieCard';

const meta: Meta<typeof MovieCard> = {
  title: 'Components/MovieCard',
  component: MovieCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    posterUrl: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof MovieCard>;

export const Default: Story = {
  args: {
    title: 'Интерстеллар',
    posterUrl: 'https://image.tmdb.org/t/p/w500/...',
    year: 2014,
  },
};