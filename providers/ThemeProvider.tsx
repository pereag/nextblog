'use client';
import React, { ReactElement } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
interface IProps extends ThemeProviderProps {
  children: ReactElement;
}

export default function ThemeProvider(props: IProps) {
  const { children, ...nextThemeProps } = props;
  return <NextThemeProvider {...nextThemeProps}>{children}</NextThemeProvider>;
}
