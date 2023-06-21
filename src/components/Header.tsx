import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Avatar,
  Menu,
  ActionIcon,
} from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { useDisclosure } from '@mantine/hooks';
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { selectAuth, setUser } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from 'tabler-icons-react';
import { useMemo } from 'react';
import { LocalStorageKeys } from '../constants';

const useStyles = createStyles((theme) => ({
  header: {
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

export function DoubleHeader() {
  const { classes, theme } = useStyles();
  const auth = useSelector(selectAuth);


  const userInitials = useMemo(() => {
    const { user, isLoggedIn } = auth;

    if (!isLoggedIn || !user) {
      return null;     
    }

    const initials = `${user?.firstName.charAt(0).toLocaleUpperCase()}${user?.lastName.charAt(0).toLocaleUpperCase()}`;
    return (
      <Menu.Target>
        <ActionIcon variant="transparent">
          <Avatar color="cyan" radius="xl">{initials}</Avatar>
        </ActionIcon>
      </Menu.Target>

    )
  }, [auth]);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(setUser(null));
    localStorage.removeItem(LocalStorageKeys.authorization);
  }

  return (
    <Box>
      <Header height={60} px="md" className={classes.header}>
        <Group position="apart" sx={{ height: '100%' }}>
          <MantineLogo size={30} />

          <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
            {auth.isLoggedIn && <Link to="/my-cvs" className={classes.link}>
              <Button variant='light'>My CVs</Button>
            </Link>}
          </Group>

          <Group className={classes.hiddenMobile}>
            {auth.isLoggedIn &&
              <Menu shadow="md" width={150} offset={0}>
                {userInitials}
                <Menu.Dropdown>
                  <Menu.Item icon={<Logout size={14} />} onClick={handleLogOut}>Log Out</Menu.Item>
                </Menu.Dropdown>
              </Menu>}
          </Group>
        </Group>
      </Header>
    </Box>
  );
}