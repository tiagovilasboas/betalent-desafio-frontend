import { Box, Button, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';

interface ApiErrorProps {
  message: string;
  onRetry: () => void;
}

export function ApiError({ message, onRetry }: ApiErrorProps) {
  const { t } = useTranslation('common');

  return (
    <Box p="xl" style={{ textAlign: 'center' }}>
      <Text c="red" size="lg">
        {t('employees.error.title')}
      </Text>
      <Text c="dimmed">{message}</Text>
      <Button onClick={onRetry} mt="md">
        {t('retry')}
      </Button>
    </Box>
  );
} 