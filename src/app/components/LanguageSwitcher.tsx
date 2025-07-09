import { SegmentedControl } from '@mantine/core'
import { useTranslation } from 'react-i18next'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const onLanguageChange = (value: string) => {
    i18n.changeLanguage(value)
  }

  // Normalise the detected language to its base code (e.g. "pt-BR" -> "pt") so
  // it matches one of the SegmentedControl options below. Otherwise nothing
  // appears selected on first load.
  return (
    <SegmentedControl
      value={i18n.language.split('-')[0]}
      onChange={onLanguageChange}
      data={[
        { label: 'PT', value: 'pt' },
        { label: 'EN', value: 'en' },
      ]}
      color="blue"
    />
  )
} 