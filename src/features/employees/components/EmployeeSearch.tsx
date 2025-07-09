// Camada de Apresentação - Responsabilidade: capturar input do usuário
// Dependency Rule: Depende da camada de estado

import { Box, Input, useMantineTheme } from '@mantine/core'
import { useDebouncedValue, useMediaQuery } from '@mantine/hooks'
import { IconSearch } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { colors } from '@/styles/tokens'

interface EmployeeSearchProps {
  onSearch: (value: string) => void
}

export function EmployeeSearch({ onSearch }: EmployeeSearchProps) {
  const [value, setValue] = useState('')
  const [debounced] = useDebouncedValue(value, 300)
  const { t } = useTranslation('common')
  const theme = useMantineTheme()
  const isDesktop = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`)

  useEffect(() => {
    onSearch(debounced)
  }, [debounced, onSearch])

  return (
    <Box style={isDesktop ? { minWidth: '400px' } : {}}>
      <Input
        placeholder={t('employees.search.placeholder')}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        rightSection={<IconSearch size={20} color={colors.neutral[20]} />}
        rightSectionProps={{ style: { paddingRight: '12px' } }}
        radius="md"
      />
    </Box>
  )
}
