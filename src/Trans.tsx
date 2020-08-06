import React, { useContext } from 'react';
import { Trans, TransProps } from 'react-i18next';
import InContextCompoenent from './InContextEditingComponent';
import { EditingContext } from './I18nextProvider';

export default (props: TransProps) => {
  const { translating } = useContext(EditingContext)
  if(translating){
    return <InContextCompoenent ns={props.ns} i18nKey={props.i18nKey}><Trans {...props} /></InContextCompoenent>
  }
  return <Trans {...props} />
}