import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import ShoppingCartIcon from '@mui/icons-material/LocalGroceryStore';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import { useThemeContext } from '../theme/ThemeContextProvider';
import { Banner } from './Banner';

const pages = ['home', 'about', 'product', 'contact'];

export const Header = () => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const { toggleColorMode } = useThemeContext();
  return (
    <AppBar position='static' sx={{ boxShadow: 'none' }}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='#app-bar-with-responsive-menu'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Georgia, serif',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ASION
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={false}
              // onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  // onClick={handleCloseNavMenu}
                >
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant='h5'
            noWrap
            component='a'
            href='#app-bar-with-responsive-menu'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ASION
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                href={ page == "home" ? "/" : page }
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'inherit', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', gap: 1 }}>
            <Button variant='outlined' color='inherit'>
              register
            </Button>
            <Button variant='outlined' color='inherit'>
              login
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <IconButton>
              <IconButton aria-label='shopping'>
                <Badge badgeContent={0} color='secondary'>
                  <ShoppingCartIcon sx={{ color: '#939292' }} />
                </Badge>
              </IconButton>
            </IconButton>
            <Switch
              {...label}
              defaultChecked
              color='default'
              onClick={toggleColorMode}
            />
          </Box>
        </Toolbar>
      </Container>
      <Banner />
    </AppBar>
  );
};
