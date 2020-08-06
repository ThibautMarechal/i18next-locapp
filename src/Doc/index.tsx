import React, { Suspense, useState } from 'react';
import { I18nextProvider } from '..';
import i18next from 'i18next';
import packageJson from '../../package.json';
import UseTranslationExample from './Examples/UseTranslationExample';
import TransExample from './Examples/TransExample';
import TranslationExample from './Examples/TranslationExample';
import WithtranslationExmaple from './Examples/WithtranslationExmaple';

export default () => {
  const [translating, setTranslating] = useState(false);
  return (
    <Suspense fallback={null}>
      <I18nextProvider translating={translating}>
        <h1>{packageJson.name}</h1>
        <button className="btn btn-default" onClick={() => i18next.changeLanguage('en')}>EN</button>
        <button className="btn btn-default" onClick={() => i18next.changeLanguage('de')}>DE</button>
        <button className="btn btn-default" onClick={() => i18next.changeLanguage('fr')}>FR</button>
        <br />
        <button onClick={() => setTranslating(!translating)}>Translating</button>: {JSON.stringify(translating)}
        <br/>
        <UseTranslationExample />
        <TransExample/>
        <TranslationExample/>
        <WithtranslationExmaple />
      </I18nextProvider>
    </Suspense>
  )
}