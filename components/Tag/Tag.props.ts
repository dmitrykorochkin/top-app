import { ReactNode } from 'react';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm';
  children: ReactNode;
  color?: 'ghost' | 'red' | 'green' | 'gray' | 'primary';
  href?: string
}