import { Button, Dropdown, Link, Navbar, Switch, Text } from '@nextui-org/react';
import React from 'react';
import { ModalLogin } from './modal';
import { icons } from './icons';
import ArroLogo from './logo';
import { useTheme as useNextTheme } from 'next-themes';
import { useTheme } from '@nextui-org/react';
import { GithubIcon } from './GithubIcon';

export const Nav = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const collapseItems = [
    'Features',
    'Customers',
    'Pricing',
    'Company',
    'Legal',
  ];
  return (
    <Navbar
      isBordered
      variant="floating"
      css={{
        'overflow': 'hidden',
        '& .nextui-navbar-container': {
          background: '$background',
          borderBottom: 'none',
          border: 0,
          borderRadius: 30,
        },
      }}
    >
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
        <ArroLogo />
        <Text css={{ marginLeft: 15}} b color="inherit" hideIn="xs">
          Arro Social
        </Text>
        <Navbar.Content
          hideIn="sm"
          css={{
            pl: '6rem',
          }}
        >
          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: 'center',
                  svg: { pe: 'none' },
                }}
                iconRight={icons.chevron}
                ripple={false}
              >
                Features
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="ACME features"
              css={{
                '$$dropdownMenuWidth': '340px',
                '$$dropdownItemHeight': '70px',
                '& .nextui-dropdown-item': {
                  'py': '$4',
                  'svg': {
                    color: '$secondary',
                    mr: '$4',
                  },
                  '& .nextui-dropdown-item-content': {
                    w: '100%',
                    fontWeight: '$semibold',
                  },
                },
              }}
            >
              <Dropdown.Item
                key="autoscaling"
                showFullDescription
                description="ACME scales apps to meet user demand, automagically, based on load."
                icon={icons.scale}
              >
                Autoscaling
              </Dropdown.Item>
              <Dropdown.Item
                key="usage_metrics"
                showFullDescription
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                icon={icons.activity}
              >
                Usage Metrics
              </Dropdown.Item>
              <Dropdown.Item
                key="production_ready"
                showFullDescription
                description="ACME runs on ACME, join us and others serving requests at web scale."
                icon={icons.flash}
              >
                Production Ready
              </Dropdown.Item>
              <Dropdown.Item
                key="99_uptime"
                showFullDescription
                description="Applications stay on the grid with high availability and high uptime guarantees."
                icon={icons.server}
              >
                +99% Uptime
              </Dropdown.Item>
              <Dropdown.Item
                key="supreme_support"
                showFullDescription
                description="Overcome any challenge with a supporting team ready to respond."
                icon={icons.user}
              >
                +Supreme Support
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Link href="#">
            Customers
          </Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
      </Navbar.Brand>

      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
        <Navbar.CollapseItem>
          <Link
            color="inherit"
            css={{
              minWidth: '100%',
            }}
            target="_blank"
            href="https://github.com/Siumauricio/landing-template-nextui"
          >
            <GithubIcon />
          </Link>
        </Navbar.CollapseItem>
      </Navbar.Collapse>
      <Navbar.Content>
        <ModalLogin />

        <Navbar.Item>
          <Button auto>
            Start free trial
          </Button>
        </Navbar.Item>
        <Navbar.Item hideIn={'xs'}>
          <Link
            color="inherit"
            css={{
              minWidth: '100%',
            }}
            target="_blank"
            href="https://github.com/Siumauricio/landing-template-nextui"
          >
            <GithubIcon />
          </Link>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};
