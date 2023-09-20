import {
    Box,
    Button,
    Link,
    Paper,
    Stack,
    TextField,
    Typography,
    styled,
    useTheme
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import SendIcon from '@mui/icons-material/Send';
import './Contact.scss';
import { ValidationError, useForm } from '@formspree/react';

const Contact = () => {
    const theme = useTheme();
    const [state, handleSubmit] = useForm('xrgwyppk');

    console.log(state);

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1
    });

    return (
        <Box
            className='Contact'
            id='Contact'
            component='section'
            sx={{
                background: theme.palette.background.gradient,
                boxShadow: `inset 0 -1px 1px ${theme.palette.divider}`
            }}
        >
            <Box className='Contact__content'>
                <Typography
                    variant='body1'
                    fontWeight={700}
                    sx={{ color: theme.palette.primary[600] }}
                >
                    Contact
                </Typography>
                <Typography variant='h3' fontWeight={700} sx={{ mb: 8 }}>
                    How to <span style={{ color: theme.palette.primary[600] }}>Get in Touch</span>
                </Typography>
                <Typography variant='body1' color='text.secondary' sx={{ mb: 4 }}>
                    I love talking development and am always open to freelance, full-time, or
                    non-commercial opportunities. If you'd like to reach out for any reason at all,{' '}
                    <b style={{ color: theme.palette.text.primary }}>
                        don't hesitate to contact me
                    </b>
                    !
                </Typography>
                <Box className='Contact__methods' direction='row' spacing={2} sx={{ mb: 4 }}>
                    <a
                        href='https://github.com/mhollingshead'
                        target='_blank'
                        className='Contact__method-link'
                    >
                        <Box
                            className='Contact__method'
                            sx={{
                                p: 2,
                                ':hover': {
                                    backgroundColor:
                                        theme.palette.mode === 'dark'
                                            ? 'rgba(0, 58, 117, 0.3)'
                                            : '#fff',
                                    borderColor:
                                        theme.palette.mode === 'dark'
                                            ? theme.palette.primary[700]
                                            : theme.palette.primary[300],
                                    boxShadow:
                                        theme.palette.mode == 'dark'
                                            ? `0px 1px 6px ${theme.palette.primary[800]},inset 0px 2px 8px ${theme.palette.primaryDark[800]}`
                                            : `0px 1px 6px ${theme.palette.primary[100]},inset 0px 2px 8px ${theme.palette.grey[50]}`
                                }
                            }}
                        >
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Paper
                                    className='Contact__method-icon'
                                    elevation={0}
                                    sx={{
                                        backgroundColor: theme.palette.background.primaryMuted
                                    }}
                                >
                                    <GitHubIcon color='primary' />
                                </Paper>
                                <Stack spacing={0}>
                                    <Typography variant='body1' fontWeight={700} component='div'>
                                        GitHub
                                    </Typography>
                                    <Typography variant='body2'>
                                        <Link className='Contact__method-link' component='span'>
                                            @mhollingshead
                                        </Link>
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </a>
                    <a
                        href='https://www.linkedin.com/in/michael-hollingshead/'
                        target='_blank'
                        className='Contact__method-link'
                    >
                        <Box
                            className='Contact__method'
                            sx={{
                                p: 2,
                                ':hover': {
                                    backgroundColor:
                                        theme.palette.mode === 'dark'
                                            ? 'rgba(0, 58, 117, 0.3)'
                                            : '#fff',
                                    borderColor:
                                        theme.palette.mode === 'dark'
                                            ? theme.palette.primary[700]
                                            : theme.palette.primary[300],
                                    boxShadow:
                                        theme.palette.mode == 'dark'
                                            ? `0px 1px 6px ${theme.palette.primary[800]},inset 0px 2px 8px ${theme.palette.primaryDark[800]}`
                                            : `0px 1px 6px ${theme.palette.primary[100]},inset 0px 2px 8px ${theme.palette.grey[50]}`
                                }
                            }}
                        >
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Paper
                                    className='Contact__method-icon'
                                    elevation={0}
                                    sx={{
                                        backgroundColor: theme.palette.background.primaryMuted
                                    }}
                                >
                                    <LinkedInIcon color='primary' />
                                </Paper>
                                <Stack spacing={0}>
                                    <Typography variant='body1' fontWeight={700} component='div'>
                                        LinkedIn
                                    </Typography>
                                    <Typography variant='body2'>
                                        <Link className='Contact__method-link' component='span'>
                                            @michael-hollingshead
                                        </Link>
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </a>
                    <a
                        href='mailto:michael.hollingshead@mail.mcgill.ca'
                        target='_blank'
                        className='Contact__method-link'
                    >
                        <Box
                            className='Contact__method'
                            sx={{
                                p: 2,
                                ':hover': {
                                    backgroundColor:
                                        theme.palette.mode === 'dark'
                                            ? 'rgba(0, 58, 117, 0.3)'
                                            : '#fff',
                                    borderColor:
                                        theme.palette.mode === 'dark'
                                            ? theme.palette.primary[700]
                                            : theme.palette.primary[300],
                                    boxShadow:
                                        theme.palette.mode == 'dark'
                                            ? `0px 1px 6px ${theme.palette.primary[800]},inset 0px 2px 8px ${theme.palette.primaryDark[800]}`
                                            : `0px 1px 6px ${theme.palette.primary[100]},inset 0px 2px 8px ${theme.palette.grey[50]}`
                                }
                            }}
                        >
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Paper
                                    className='Contact__method-icon'
                                    elevation={0}
                                    sx={{
                                        backgroundColor: theme.palette.background.primaryMuted
                                    }}
                                >
                                    <MailIcon color='primary' />
                                </Paper>
                                <Stack spacing={0}>
                                    <Typography variant='body1' fontWeight={700} component='div'>
                                        Email
                                    </Typography>
                                    <Typography variant='body2'>
                                        <Link className='Contact__method-link' component='span'>
                                            michael.hollingshead@mail.mcgill.ca
                                        </Link>
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </a>
                </Box>
                <Typography variant='h6' fontWeight={700} sx={{ mb: 4 }}>
                    Send Me a Message
                </Typography>
                {!state.succeeded ? (
                    <form onSubmit={handleSubmit} className='Form'>
                        <Box className='Form__row'>
                            <TextField
                                id='name'
                                name='name'
                                label='Name'
                                variant='outlined'
                                fullWidth
                                required
                            />
                            <TextField
                                id='email'
                                name='email'
                                type='email'
                                label='Email'
                                variant='outlined'
                                fullWidth
                                required
                            />
                        </Box>
                        <TextField
                            id='message'
                            name='message'
                            label='Message'
                            variant='outlined'
                            multiline
                            rows={4}
                            fullWidth
                            required
                        />
                        <Box className='Form__submit-wrapper'>
                            <Button
                                className='Form__button'
                                component='label'
                                variant='contained'
                                endIcon={<SendIcon />}
                                disabled={state.submitting}
                            >
                                Send
                                <VisuallyHiddenInput type='submit' />
                            </Button>
                        </Box>
                    </form>
                ) : (
                    <Box className='Form__success'>
                        <Typography variant='h1' component='div'>
                            💌
                        </Typography>
                        <Typography variant='h4' fontWeight={700} sx={{ mb: 2 }}>
                            Message Received
                        </Typography>
                        <Typography variant='body1' color='text.secondary'>
                            I'll try to get back to you as soon as possible!
                        </Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default Contact;
