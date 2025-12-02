import { Fragment, useState } from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import {
  Home,
  User,
  Settings,
  Package,
  PieChart,
  LogOut,
  Tag,
  type LucideIcon,
} from 'lucide-react';
import SidebarMenu, {
  type ISidebarMenuProps,
} from '../components/SidebarMenu/sidebar-menu.tsx';
import type { IMenuItem } from '../types/types.ts';

interface SidebarStoryArgs extends ISidebarMenuProps {
  defaultOpen?: boolean;
}

const meta: Meta<ISidebarMenuProps> = {
  title: 'Navigation/SidebarMenu',
  component: SidebarMenu,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean', table: { disable: true } },
    onClose: { table: { disable: true } },
    items: { table: { disable: true } },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<ISidebarMenuProps>;

const simpleItems: IMenuItem[] = [
  { id: 1, label: 'Home', link: '/', icon: Home as LucideIcon },
  { id: 2, label: 'Profile', link: '/profile', icon: User as LucideIcon },
  {
    id: 3,
    label: 'Settings',
    link: '/settings',
    icon: Settings as LucideIcon,
  },
];

const nestedItems: IMenuItem[] = [
  {
    id: 10,
    label: 'Product',
    icon: Package as LucideIcon,
    children: [
      { id: 11, label: 'Category А', link: '/products/a' },
      {
        id: 12,
        label: 'Category B',
        icon: Tag as LucideIcon,
        children: [
          { id: 13, label: 'Categorys 1', link: '/b/1' },
          { id: 14, label: 'Categorys 2', link: '/b/2' },
        ],
      },
      { id: 15, label: 'Category В', link: '/products/c' },
    ],
  },
  {
    id: 20,
    label: 'Reports',
    icon: PieChart as LucideIcon,
    children: [
      { id: 21, label: 'Daily', link: '/reports/daily' },
      { id: 22, label: 'Annual', link: '/reports/annual' },
    ],
  },
  { id: 30, label: 'Logout', link: '/logout', icon: LogOut as LucideIcon },
];

const SidebarTemplate: StoryFn<SidebarStoryArgs> = args => {
  const { defaultOpen, ...sidebarProps } = args;

  const [isOpen, setIsOpen] = useState(defaultOpen || false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <Fragment>
      <div
        style={{
          padding: '20px',
          border: '1px solid #ccc',
          minHeight: '150px',
        }}
      >
        <button
          onClick={handleOpen}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {isOpen ? 'The menu is open' : 'Open Menu'}
        </button>
        <p>
          Click on a button or click on a gray background to see the logic
          closing.
        </p>
      </div>

      <SidebarMenu {...sidebarProps} isOpen={isOpen} onClose={handleClose} />
    </Fragment>
  );
};

export const ClosedState: Story = {
  render: SidebarTemplate as StoryFn<SidebarStoryArgs>,
  args: {
    items: simpleItems,
    defaultOpen: false,
  } as SidebarStoryArgs,
};

export const OpenedSimpleMenu: Story = {
  render: SidebarTemplate as StoryFn<SidebarStoryArgs>,
  args: {
    items: simpleItems,
    defaultOpen: true,
  } as SidebarStoryArgs,
};

export const OpenedNestedMenu: Story = {
  render: SidebarTemplate as StoryFn<SidebarStoryArgs>,
  args: {
    items: nestedItems,
    defaultOpen: true,
  } as SidebarStoryArgs,
};
