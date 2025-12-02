import { useState } from 'react';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { type IInputProps, Input } from '../components/Input/input.tsx';

const meta: Meta<IInputProps> = {
  title: 'Forms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    clearable: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['text', 'password', 'number'],
    },
    placeholder: { control: 'text' },
    value: { table: { disable: true } },
    onChange: { table: { disable: true } },
    defaultValue: { control: 'text', table: { disable: true } },
  },
  decorators: [
    Story => (
      <div style={{ padding: '20px', maxWidth: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<IInputProps>;

const ControlledInputTemplate: StoryFn<IInputProps> = args => {
  const defaultValue = (args.defaultValue as string) || '';
  const [value, setValue] = useState(defaultValue);
  const { defaultValue: _, ...inputProps } = args;

  return (
    <Input
      {...inputProps}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

export const DefaultText: Story = {
  render: ControlledInputTemplate,
  args: {
    type: 'text',
    placeholder: 'Enter text...',
  },
};

export const ClearableText: Story = {
  render: ControlledInputTemplate,
  args: {
    type: 'text',
    clearable: true,
    defaultValue: 'Text for clear',
    placeholder: 'Enter text...',
  },
};

export const PasswordInput: Story = {
  render: ControlledInputTemplate,
  args: {
    type: 'password',
    placeholder: 'Enter password...',
  },
};

export const ClearablePassword: Story = {
  render: ControlledInputTemplate,
  args: {
    type: 'password',
    clearable: true,
    defaultValue: 'password 123',
    placeholder: 'Enter password...',
  },
};

export const NumberInput: Story = {
  render: ControlledInputTemplate,
  args: {
    type: 'number',
    placeholder: 'Enter numbers...',
  },
};
