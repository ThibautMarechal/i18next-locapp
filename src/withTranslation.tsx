import React, { RefAttributes } from 'react';
import { Namespace, WithTranslation, WithTranslationProps } from 'react-i18next';
import useTranslation from './useTranslation'

export default function withTranslation(ns?: Namespace, options: { withRef?: boolean } = {}) {
  return function Extend<P extends WithTranslation>(WrappedComponent: React.ComponentType<P>) {
    function I18nextWithTranslation({ forwardedRef, ...rest }: { forwardedRef: RefAttributes<any> } & P) {
      const [t, i18n, ready] = useTranslation(ns, rest);

      const passDownProps = {
        ...rest,
        t,
        i18n,
        tReady: ready,
        ref: options.withRef && forwardedRef ? forwardedRef : undefined,
        forwardedRef: !options.withRef && forwardedRef ? forwardedRef : undefined,
      };
      //@ts-ignore
      return React.createElement(WrappedComponent, passDownProps);
    }

    const forwardRef = (props: P, ref: any) =>
      React.createElement(I18nextWithTranslation, Object.assign({}, props, { forwardedRef: ref }));

    return (options.withRef ? React.forwardRef(forwardRef) : I18nextWithTranslation) as unknown as React.ComponentType<Omit<P, keyof WithTranslation> & WithTranslationProps>;
  };
}