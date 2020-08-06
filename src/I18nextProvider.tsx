import React, { useMemo } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

export const EditingContext = React.createContext({ translating: false });

type Props = {
  children: React.ReactNode;
  translating?: boolean
}

export default ({ children, translating = false }: Props) => {
  const EditingContextvalue = useMemo(() => ({ translating }), [translating]);
  return (
    <EditingContext.Provider value={EditingContextvalue}>
      <I18nextProvider i18n={i18next}>
        {children}
      </I18nextProvider>
    </EditingContext.Provider>
  )
};