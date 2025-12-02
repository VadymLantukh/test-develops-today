import { useState, useEffect } from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { type IToastProps, Toast } from '../components/Toast/toast.tsx';

const meta: Meta<IToastProps> = {
  title: 'Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      description: 'The type of notification, which determines color and icon.',
    },
    message: { control: 'text', description: 'The notification message text.' },
    duration: {
      control: 'number',
      description: 'Time (ms) before auto-dismissal. 0 means manual close.',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show the manual close button.',
    },
    onClose: { table: { disable: true } },
  },
  parameters: {
    layout: 'padded',
  },
  decorators: [
    Story => (
      <div
        style={{
          minHeight: '300px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<IToastProps>;

const ToastTemplate: StoryFn<IToastProps> = args => {
  const [shouldShow, setShouldShow] = useState(false);

  const handleClose = () => {
    setShouldShow(false);
  };

  useEffect(() => {
    if (!shouldShow) {
      setShouldShow(true);
    }
  }, [args.type, args.message, args.duration]);

  return (
    <div>
      <button
        onClick={() => setShouldShow(true)}
        style={{
          padding: '10px 15px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Click to view Toast ({args.type.toUpperCase()})
      </button>

      {shouldShow && <Toast {...args} onClose={handleClose} />}
    </div>
  );
};

export const SuccessToast: Story = {
  render: ToastTemplate,
  args: {
    type: 'success',
    message: 'Data successfully saved to the system.',
    duration: 3000,
  },
};

export const ErrorToast: Story = {
  render: ToastTemplate,
  args: {
    type: 'error',
    message: 'Error: Failed to connect to the database.',
    duration: 5000,
  },
};

export const WarningWithManualClose: Story = {
  render: ToastTemplate,
  args: {
    type: 'warning',
    message: 'Your license is expiring. Please renew your subscription.',
    duration: 0,
    showCloseButton: true,
  },
};

export const QuickInfoToast: Story = {
  render: ToastTemplate,
  args: {
    type: 'info',
    message: 'Event was added to your calendar.',
    duration: 1500,
  },
};
