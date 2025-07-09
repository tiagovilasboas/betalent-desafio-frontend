// Camada de Apresentação - Responsabilidade: capturar input do usuário
// Dependency Rule: Depende da camada de estado

import { Input } from '@mantine/core'
import { useDebouncedValue } from '@mantine/hooks'
import { IconSearch } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface EmployeeSearchProps {
  onSearch: (value: string) => void
}

export function EmployeeSearch({ onSearch }: EmployeeSearchProps) {
  const [value, setValue] = useState('')
  const [debounced] = useDebouncedValue(value, 300)
  const { t } = useTranslation('common')

  useEffect(() => {
    onSearch(debounced)
  }, [debounced, onSearch])

  return (
    <Input
      placeholder={t('employees.search.placeholder')}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      rightSection={<IconSearch size={20} />}
      rightSectionProps={{ style: { paddingRight: '12px' } }}
      radius="md"
    />
  )
}
