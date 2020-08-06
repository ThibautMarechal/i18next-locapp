import React from 'react';
import Trans from '../../Trans';

const name = 'Thibaut'
export default () => {
  return (
    <>
      <h4>Trans component</h4>
      <Trans i18nKey="welcomeUser">
        Hello <strong>{{name}}</strong>.
      </Trans>
    </>
  );
}