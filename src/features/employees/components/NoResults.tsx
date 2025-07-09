import { Box, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';

interface NoResultsProps {
  searchTerm: string;
}

export function NoResults({ searchTerm }: NoResultsProps) {
  const { t } = useTranslation('common');

  return (
    <Box p="xl" style={{ textAlign: 'center' }}>
      <Text size="lg">{t('employees.empty.title')}</Text>
      <Text c="dimmed">
        {t('employees.empty.message', { searchTerm })}
      </Text>
    </Box>
  );
} 