import React, { FC } from 'react';

export interface LayoutDefaultProps {
  children: React.ReactNode;
}

export const LayoutDefault: FC<LayoutDefaultProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};
