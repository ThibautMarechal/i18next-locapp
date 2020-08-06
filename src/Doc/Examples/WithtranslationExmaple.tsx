import React from 'react'
import { withTranslation } from '../..'
import { WithTranslationProps } from 'react-i18next'
import { TFunction } from 'i18next'

type Props = WithTranslationProps & { t: TFunction }

export default withTranslation()(({ t }: Props) => {
  return (
    <>
      <h4>withTranslation HOC</h4>
      {t('hello')}
    </>
  )
})