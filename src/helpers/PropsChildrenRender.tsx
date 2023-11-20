import React, { ReactElement } from 'react';

export function childrenRender(
  children: React.ReactNode | React.ReactNode[],
  attribute: string | string[]
): React.ReactNode | React.ReactNode[] {
  const attrArr = Array.isArray(attribute) ? attribute : [attribute];
  const arr = Array.isArray(children) ? children : [children];
  const result = arr.filter((elem) => {
    return attrArr.every((attribute) => {
      if (attribute.startsWith('!')) {
        return elem ? !(elem as ReactElement).props[attribute.substring(1)] : null;
      } else {
        return elem ? (elem as ReactElement).props[attribute] : null;
      }
    });
  });

  return result;
}
