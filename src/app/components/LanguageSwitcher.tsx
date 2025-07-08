import { SegmentedControl } from '@mantine/core'
import { useTranslation } from 'react-i18next'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const onLanguageChange = (value: string) => {
    i18n.changeLanguage(value)
  }

  return (
    <SegmentedControl
      value={i18n.language}
      onChange={onLanguageChange}
      data={[
        { label: 'PT', value: 'pt' },
        { label: 'EN', value: 'en' },
      ]}
      color="blue"
    />
  )
} 