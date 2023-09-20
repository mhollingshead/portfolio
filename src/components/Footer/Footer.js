import { Typography, useTheme } from '@mui/material';
import './Footer.scss';

const Footer = () => {
    const theme = useTheme();

    return (
        <footer
            className='Footer'
            style={{
                backgroundColor:
                    theme.palette.mode === 'dark' ? theme.palette.background.default : '#fff'
            }}
        >
            <Typography variant='caption' color='text.tertiary' fontWeight={400}>
                Made with ❤️ by{' '}
                <span style={{ color: theme.palette.text.secondary, fontWeight: 500 }}>
                    Michael Hollingshead
                </span>{' '}
                with help from{' '}
                <span style={{ color: theme.palette.text.secondary, fontWeight: 500 }}>
                    React.js
                </span>{' '}
                and{' '}
                <span style={{ color: theme.palette.text.secondary, fontWeight: 500 }}>
                    Material UI
                </span>
            </Typography>
        </footer>
    );
};

export default Footer;
