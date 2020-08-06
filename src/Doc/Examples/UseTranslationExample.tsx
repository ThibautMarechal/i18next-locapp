import React from 'react';
import { useTranslation } from '../..';

export default () => {
  const [t] = useTranslation();
  return (
    <>
      <h4>useTranslation hook</h4>
      {t('hello')}
    </>
  );
}