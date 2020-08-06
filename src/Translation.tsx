import { TranslationProps } from 'react-i18next';
import useTranslation from './useTranslation';

export default ({ ns, children, ...options }: TranslationProps) => {
  const [t, i18n, ready] = useTranslation(ns, options);
  return children(
    t,
    {
      i18n,
      lng: i18n.language,
    },
    ready,
  ) as JSX.Element;
}