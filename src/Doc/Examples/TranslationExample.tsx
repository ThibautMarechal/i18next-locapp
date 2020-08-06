import React from 'react';
import { Translation } from '../..';

export default () => (
  <>
    <h4>Translation component</h4>
    <Translation>
      {
        t => t('hello')
      }
    </Translation>
  </>
)