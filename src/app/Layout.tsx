import {
  AppShell,
  Burger,
  Container,
  Group,
  Image,
  Stack,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';

import { LanguageSwitcher } from './components/LanguageSwitcher';

export function Layout() {
  const [opened, { toggle }] = useDisclosure();
  const theme = useMantineTheme();

  return (
    <AppShell header={{ height: 60 }} padding="md" withBorder={false}>
      <AppShell.Header
        withBorder={false}
        style={{ boxShadow: theme.shadows.sm }}
      >
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Image src="/logo.svg" alt="BeTalent Logo" h={30} w="auto" />
          </Group>
          <LanguageSwitcher />
        </Group>
      </AppShell.Header>

      <AppShell.Main
        style={{
          backgroundColor: theme.colors.gray[1],
        }}
      >
        <Container size="xl" py="lg">
          <Stack gap="lg">
            <Outlet />
          </Stack>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
} 