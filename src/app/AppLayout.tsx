import { AppShell, Burger, Group, Image, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';

export function AppLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
      withBorder={false}
    >
      <AppShell.Header withBorder={false}>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <UnstyledButton>
            <Image src="/logo.svg" alt="BeTalent Logo" h={30} />
          </UnstyledButton>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
} 