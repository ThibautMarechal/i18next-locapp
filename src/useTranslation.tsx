import React, { useMemo, useContext } from 'react';
import { useTranslation, UseTranslationOptions, UseTranslationResponse, Namespace } from 'react-i18next';
import InContextEditingComponent from './InContextEditingComponent';
import { TFunction } from 'i18next';
import { EditingContext } from './I18nextProvider';

export default (ns?: Namespace, options?: UseTranslationOptions) => {
  const response = useTranslation(ns, options);
  const { translating } = useContext(EditingContext)
  return useMemo<UseTranslationResponse>(() => {
    if(translating){
      const initialT = response.t;
      const wrappedT: TFunction = (key: any, defaultValue?: any, options?: any) => (<InContextEditingComponent i18nKey={key} ns={ns}>{initialT(key, defaultValue, options)}</InContextEditingComponent>);
      response[0] = wrappedT;
      response.t = wrappedT;
      return response;
    } else {
      return response;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, ns, translating, response.t, response.i18n, response.ready]);
} 