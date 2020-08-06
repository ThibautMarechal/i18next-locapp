import React from 'react';
import { Namespace } from 'react-i18next';

type Props = {
  ns?: Namespace;
  i18nKey?: string;
  children: React.ReactNode;
}

export default ({ ns, i18nKey, children }: Props) => {
  return (
    <span 
      data-translate 
      data-translate-namespace={Array.isArray(ns) ? ns.join('|') : ns} 
      data-translate-key={i18nKey}
      style={{
        backgroundColor: 'red'
      }}
      onClick={() => console.log(ns, i18nKey)}
    >
      {children}
    </span>
  );
}