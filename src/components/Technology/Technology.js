import { Box, Typography, useTheme } from '@mui/material';
import './Technology.scss';

const Technology = () => {
    const theme = useTheme();

    return (
        <Box
            className='Technology'
            id='Technology'
            component='section'
            sx={{
                background: theme.palette.background.gradient,
                boxShadow: `inset 0 -1px 1px ${theme.palette.divider}`
            }}
        >
            <Box className='Technology__content'>
                <Typography
                    variant='body1'
                    fontWeight={700}
                    sx={{ color: theme.palette.primary[600] }}
                >
                    Technology
                </Typography>
                <Typography variant='h3' fontWeight={700} sx={{ mb: 8 }}>
                    What I Love{' '}
                    <span style={{ color: theme.palette.primary[600] }}>Working With</span>
                </Typography>
                <Box className='Technology__panels Technology__panels--3-col' sx={{ mb: 4 }}>
                    <Box className='Technology__panel'>
                        <Typography
                            variant='body2'
                            textAlign='center'
                            fontWeight={400}
                            color='text.secondary'
                        >
                            Markup & Styling
                        </Typography>
                        <Box className='Technology__icon-group'>
                            <i className='Technology__icon devicon-html5-plain colored'></i>
                            <i className='Technology__icon devicon-css3-plain colored'></i>
                            <i className='Technology__icon devicon-sass-plain colored'></i>
                            <i className='Technology__icon devicon-markdown-plain'></i>
                            <i className='Technology__icon devicon-latex-original'></i>
                        </Box>
                    </Box>
                    <Box className='Technology__panel'>
                        <Typography
                            variant='body2'
                            textAlign='center'
                            fontWeight={400}
                            color='text.secondary'
                        >
                            Programming
                        </Typography>
                        <Box className='Technology__icon-group'>
                            <i className='Technology__icon devicon-javascript-plain colored'></i>
                            <i className='Technology__icon devicon-typescript-plain colored'></i>
                            <i className='Technology__icon devicon-python-plain colored'></i>
                            <i className='Technology__icon devicon-c-plain colored'></i>
                            <i className='Technology__icon devicon-cplusplus-plain colored'></i>
                            <i className='Technology__icon devicon-java-plain colored'></i>
                            <i className='Technology__icon devicon-lua-plain'></i>
                            <i className='Technology__icon devicon-ocaml-plain colored'></i>
                            <i className='Technology__icon devicon-php-plain colored'></i>
                            <i className='Technology__icon devicon-bash-plain'></i>
                        </Box>
                    </Box>
                    <Box className='Technology__panel'>
                        <Typography
                            variant='body2'
                            textAlign='center'
                            fontWeight={400}
                            color='text.secondary'
                        >
                            Frameworks
                        </Typography>
                        <Box className='Technology__icon-group'>
                            <i className='Technology__icon devicon-react-plain colored'></i>
                            <i className='Technology__icon devicon-vuejs-plain colored'></i>
                            <i className='Technology__icon devicon-express-original'></i>
                            <i className='Technology__icon devicon-django-plain'></i>
                            <i className='Technology__icon devicon-bootstrap-plain colored'></i>
                        </Box>
                    </Box>
                </Box>
                <Box className='Technology__panels Technology__panels--4-col'>
                    <Box className='Technology__panel'>
                        <Typography
                            variant='body2'
                            textAlign='center'
                            fontWeight={400}
                            color='text.secondary'
                        >
                            Libraries
                        </Typography>
                        <Box className='Technology__icon-group'>
                            <i className='Technology__icon devicon-socketio-plain'></i>
                            <i className='Technology__icon devicon-redux-original colored'></i>
                            <i className='Technology__icon devicon-jquery-plain colored'></i>
                        </Box>
                    </Box>
                    <Box className='Technology__panel'>
                        <Typography
                            variant='body2'
                            textAlign='center'
                            fontWeight={400}
                            color='text.secondary'
                        >
                            Databases
                        </Typography>
                        <Box className='Technology__icon-group'>
                            <i className='Technology__icon devicon-firebase-plain colored'></i>
                            <i className='Technology__icon devicon-graphql-plain colored'></i>
                            <i className='Technology__icon devicon-mysql-plain colored'></i>
                        </Box>
                    </Box>
                    <Box className='Technology__panel'>
                        <Typography
                            variant='body2'
                            textAlign='center'
                            fontWeight={400}
                            color='text.secondary'
                        >
                            Project Management
                        </Typography>
                        <Box className='Technology__icon-group'>
                            <i className='Technology__icon devicon-git-plain colored'></i>
                            <i className='Technology__icon devicon-docker-plain colored'></i>
                            <i className='Technology__icon devicon-jira-plain colored'></i>
                        </Box>
                    </Box>
                    <Box className='Technology__panel'>
                        <Typography
                            variant='body2'
                            textAlign='center'
                            fontWeight={400}
                            color='text.secondary'
                        >
                            Deployment
                        </Typography>
                        <Box className='Technology__icon-group'>
                            <i className='Technology__icon devicon-github-plain'></i>
                            <i className='Technology__icon devicon-heroku-plain colored'></i>
                            <i className='Technology__icon devicon-amazonwebservices-plain colored'></i>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Technology;
