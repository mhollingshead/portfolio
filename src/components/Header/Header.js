import { Box, Drawer, IconButton, Link, Stack, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/logo/logo.svg';
import './Header.scss';
import { useEffect, useState } from 'react';

const Header = ({ setMode }) => {
    const theme = useTheme();
    const [mobile, setMobile] = useState(window.innerWidth <= 800);
    const [mobileNavVisible, setMobileNavVisible] = useState(false);

    useEffect(() => {
        const updateMobile = () => {
            setMobile(window.innerWidth <= 800);
        };

        window.addEventListener('resize', updateMobile);

        return () => window.removeEventListener('resize', updateMobile);
    }, []);

    return (
        <>
            {!mobile && (
                <Box
                    className='Header'
                    style={{
                        backgroundColor: theme.palette.background.header,
                        boxShadow: `inset 0 -1px 1px ${theme.palette.divider}`
                    }}
                >
                    <Box className='Header__content'>
                        <img className='Header__logo' src={logo} alt='Michael Hollingshead' />
                        <Stack
                            className='Header__nav'
                            component='nav'
                            direction='row'
                            spacing={1}
                            sx={{ ml: 'auto' }}
                        >
                            <Link
                                className='Header__link'
                                href='#About'
                                color='inherit'
                                variant='body2'
                                sx={{ '::before': { color: theme.palette.primary.main } }}
                            >
                                About
                            </Link>
                            <Link
                                className='Header__link'
                                href='#Technology'
                                color='inherit'
                                variant='body2'
                                sx={{ '::before': { color: theme.palette.primary.main } }}
                            >
                                Technology
                            </Link>
                            <Link
                                className='Header__link'
                                href='#Projects'
                                color='inherit'
                                variant='body2'
                                sx={{ '::before': { color: theme.palette.primary.main } }}
                            >
                                Projects
                            </Link>
                            <Link
                                className='Header__link'
                                href='#Contact'
                                color='inherit'
                                variant='body2'
                                sx={{ '::before': { color: theme.palette.primary.main } }}
                            >
                                Contact
                            </Link>
                        </Stack>
                        <Stack className='Header__nav' component='nav' direction='row' spacing={1}>
                            <IconButton
                                color='primary'
                                component='a'
                                href='https://github.com/mhollingshead'
                                target='_blank'
                            >
                                <GitHubIcon fontSize='small' />
                            </IconButton>
                            <IconButton
                                color='primary'
                                component='a'
                                href='https://www.linkedin.com/in/michael-hollingshead/'
                                target='_blank'
                            >
                                <LinkedInIcon fontSize='small' />
                            </IconButton>
                            <IconButton
                                color='primary'
                                onClick={() =>
                                    setMode((mode) => (mode === 'dark' ? 'light' : 'dark'))
                                }
                            >
                                {theme.palette.mode === 'dark' ? (
                                    <LightModeIcon fontSize='small' />
                                ) : (
                                    <DarkModeIcon fontSize='small' />
                                )}
                            </IconButton>
                        </Stack>
                    </Box>
                </Box>
            )}
            {mobile && (
                <Box
                    className='MobileHeader'
                    style={{
                        backgroundColor: theme.palette.background.header,
                        boxShadow: `inset 0 -1px 1px ${theme.palette.divider}`
                    }}
                >
                    <Box className='MobileHeader__content'>
                        <img className='Header__logo' src={logo} alt='Michael Hollingshead' />
                        <IconButton color='primary' onClick={() => setMobileNavVisible(true)}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Drawer
                        anchor='right'
                        open={mobileNavVisible}
                        onClose={() => setMobileNavVisible(false)}
                    >
                        <Box
                            className='MobileNav__head'
                            sx={{ boxShadow: `inset 0 -1px 1px ${theme.palette.divider}` }}
                        >
                            <img className='Header__logo' src={logo} alt='Michael Hollingshead' />
                            <IconButton color='primary' onClick={() => setMobileNavVisible(false)}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <Box
                            className='MobileNav__content'
                            sx={{ background: theme.palette.background.gradient }}
                        >
                            <Stack className='MobileNav__nav' component='nav' spacing={2}>
                                <Link
                                    className='MobileNav__link'
                                    href='#About'
                                    color='inherit'
                                    sx={{ '::before': { color: theme.palette.primary.main } }}
                                    onClick={() => setMobileNavVisible(false)}
                                >
                                    About
                                </Link>
                                <Link
                                    className='MobileNav__link'
                                    href='#Technology'
                                    color='inherit'
                                    sx={{ '::before': { color: theme.palette.primary.main } }}
                                    onClick={() => setMobileNavVisible(false)}
                                >
                                    Technology
                                </Link>
                                <Link
                                    className='MobileNav__link'
                                    href='#Projects'
                                    color='inherit'
                                    sx={{ '::before': { color: theme.palette.primary.main } }}
                                    onClick={() => setMobileNavVisible(false)}
                                >
                                    Projects
                                </Link>
                                <Link
                                    className='MobileNav__link'
                                    href='#Contact'
                                    color='inherit'
                                    sx={{ '::before': { color: theme.palette.primary.main } }}
                                    onClick={() => setMobileNavVisible(false)}
                                >
                                    Contact
                                </Link>
                            </Stack>
                            <Stack
                                className='Header__nav'
                                component='nav'
                                direction='row'
                                spacing={1}
                                justifyContent='center'
                                sx={{ mt: 'auto' }}
                            >
                                <IconButton
                                    color='primary'
                                    component='a'
                                    href='https://github.com/mhollingshead'
                                    target='_blank'
                                >
                                    <GitHubIcon fontSize='small' />
                                </IconButton>
                                <IconButton
                                    color='primary'
                                    component='a'
                                    href='https://www.linkedin.com/in/michael-hollingshead/'
                                    target='_blank'
                                >
                                    <LinkedInIcon fontSize='small' />
                                </IconButton>
                                <IconButton
                                    color='primary'
                                    onClick={() =>
                                        setMode((mode) => (mode === 'dark' ? 'light' : 'dark'))
                                    }
                                >
                                    {theme.palette.mode === 'dark' ? (
                                        <LightModeIcon fontSize='small' />
                                    ) : (
                                        <DarkModeIcon fontSize='small' />
                                    )}
                                </IconButton>
                            </Stack>
                        </Box>
                    </Drawer>
                </Box>
            )}
        </>
    );
};

export default Header;
