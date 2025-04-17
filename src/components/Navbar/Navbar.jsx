import { IconSearch } from '@tabler/icons-react';
import { Autocomplete, Group, Avatar } from '@mantine/core';
import classes from './Navbar.module.css';
import logo from '/gdrive.svg';

function Navbar() {

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <img src={logo} alt="Logo" className={classes.logo} />
          <h1> Drive </h1>
        </Group>

        <Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={<IconSearch size={16} stroke={1.5} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            visibleFrom="xs"
          />
        </Group>

        <Group>
          <Avatar radius="xl" color="indigo">
              U
          </Avatar>
        </Group>
      </div>
    </header>
  );
}

export default Navbar;