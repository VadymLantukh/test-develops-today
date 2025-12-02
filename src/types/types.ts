import type { LucideIcon } from 'lucide-react';

export type TToastType = 'success' | 'error' | 'warning' | 'info';

export enum TypeInput {
  PASSWORD = 'password',
  TEXT = 'text',
}

export interface IMenuItem {
  id: string | number;
  label: string;
  icon?: LucideIcon;
  link?: string;
  children?: IMenuItem[];
}
