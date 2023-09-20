import { Box, Grid, Link, Paper, Typography, useTheme } from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import SchoolIcon from '@mui/icons-material/School';
import './About.scss';

const About = () => {
    const theme = useTheme();

    return (
        <Box
            className='About'
            id='About'
            component='section'
            sx={{
                backgroundColor:
                    theme.palette.mode === 'dark'
                        ? theme.palette.background.default
                        : theme.palette.background.paper,
                boxShadow: `inset 0 -1px 1px ${theme.palette.divider}`
            }}
        >
            <Box className='About__content'>
                <Typography
                    variant='body1'
                    fontWeight={700}
                    sx={{ color: theme.palette.primary[600] }}
                >
                    About
                </Typography>
                <Typography variant='h3' fontWeight={700} sx={{ mb: 8 }}>
                    My{' '}
                    <span style={{ color: theme.palette.primary[600] }}>Development Journey</span>
                </Typography>
                <Grid container spacing={3} className='About__grid'>
                    <Grid item xs={6}>
                        <Paper
                            className='About__box'
                            elevation={0}
                            sx={{
                                background: theme.palette.gradients.linearSubtle,
                                borderColor: theme.palette.divider
                            }}
                        >
                            <Paper
                                className='About__icon-box'
                                elevation={0}
                                style={{
                                    backgroundColor:
                                        theme.palette.mode === 'dark'
                                            ? theme.palette.primary[900]
                                            : theme.palette.primary[50],
                                    borderColor:
                                        theme.palette.mode === 'dark'
                                            ? theme.palette.primary[600]
                                            : theme.palette.primary[200],
                                    boxShadow: `0px 1px 6px 0px ${
                                        theme.palette.mode === 'dark'
                                            ? theme.palette.primary[900]
                                            : theme.palette.primary[50]
                                    }`
                                }}
                            >
                                <LaptopMacIcon
                                    className='About__icon'
                                    sx={{ fill: theme.palette.primary.main }}
                                />
                            </Paper>
                            <Typography fontWeight={700} sx={{ mt: 2, mb: 1 }}>
                                Early Exploration
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                I've been fascinated by the internet for as long as I can remember.
                                When I was younger, I would spend hours building websites on
                                WordPress––amazed by the fact that the websites I once thought were
                                summoned by magic could be created by <i>anyone</i>, even <i>me</i>.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper
                            className='About__box'
                            elevation={0}
                            xs={6}
                            sx={{
                                background: theme.palette.gradients.linearSubtle,
                                borderColor: theme.palette.divider
                            }}
                        >
                            <Paper
                                className='About__icon-box'
                                elevation={0}
                                style={{
                                    backgroundColor:
                                        theme.palette.mode === 'dark'
                                            ? theme.palette.primary[900]
                                            : theme.palette.primary[50],
                                    borderColor:
                                        theme.palette.mode === 'dark'
                                            ? theme.palette.primary[600]
                                            : theme.palette.primary[200],
                                    boxShadow: `0px 1px 6px 0px ${
                                        theme.palette.mode === 'dark'
                                            ? theme.palette.primary[900]
                                            : theme.palette.primary[50]
                                    }`
                                }}
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    version='1.1'
                                    viewBox='0 0 64 50'
                                    className='About__icon'
                                    style={{ fill: theme.palette.primary.main }}
                                >
                                    <path
                                        clipRule='evenodd'
                                        d='m 13.223321,10.08395 c 0.542736,0 0.902115,0.396051 0.902115,0.938786 0,0.465727 -0.359379,0.861776 -0.902115,0.861776 -0.502397,0 -0.898446,-0.396049 -0.898446,-0.861776 0,-0.542735 0.396049,-0.938786 0.898446,-0.938786 M 6.9561926,22.838236 C 7.1996494,21.536814 8.2213528,19.273785 8.7567551,18.40834 8.2213528,17.469555 7.3522428,16.604112 6.5931463,16.604112 6.9561926,15.668993 8.4670505,14.550517 8.217686,13.758418 7.8216358,13.002988 7.238561,13.109335 5.658027,12.247558 6.1934281,11.23543 7.3522428,10.590016 8.1076724,10.480001 9.0464586,10.37365 8.8890695,9.0098448 10.377626,8.2833894 11.866183,7.556934 13.236261,7.2103365 15.383262,7.4179462 c 2.147001,0.2076097 9.083487,2.0169233 7.279258,10.0516088 3.960503,8.034688 17.97995,-2.666005 22.842568,-2.666005 -0.902114,1.800562 -2.163608,3.60479 -3.102394,5.368682 1.334836,0.865443 3.102394,0 4.506906,0 -1.404512,4.470234 -4.107189,6.270797 -6.26713,8.034687 2.159941,7.13624 10.447661,4.360219 17.829598,3.604791 -0.858108,2.376302 -3.890828,2.666006 -5.291672,4.433563 2.559657,2.666005 5.291672,6.267129 7.099568,9.835249 -3.311421,-2.163607 -10.194627,-4.503238 -12.464583,-5.368681 -4.470234,-1.800563 -13.546386,-1.800563 -17.979951,0 0.865444,1.800561 2.666007,2.666004 4.070518,3.568119 -2.306625,4.466568 -6.809865,1.800562 -9.439199,0.898447 -2.306625,1.767557 -6.523829,1.947247 -7.675309,0.902115 0,0 0,-1.118476 1.404513,-2.053593 0.861775,-1.261495 -2.702676,-1.514527 -3.674466,-3.315088 0,-1.694216 1.760223,0 2.776019,-1.800563 C 14.990879,34.477716 5.658027,33.542597 6.9561926,22.838236 z'
                                    />
                                </svg>
                            </Paper>
                            <Typography fontWeight={700} sx={{ mt: 2, mb: 1 }}>
                                McGill
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                I followed my passion for development to McGill University, where I
                                majored in Software Engineering. I used the theory learned in my
                                computer science classes to teach myself the basics of web
                                development, learing any technology I could get my hands on and
                                creating any projects I could think of.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper
                            className='About__box'
                            elevation={0}
                            xs={6}
                            sx={{
                                background: theme.palette.gradients.linearSubtle,
                                borderColor: theme.palette.divider
                            }}
                        >
                            <Paper
                                className='About__icon-box'
                                elevation={0}
                                style={{
                                    backgroundColor:
                                        theme.palette.mode === 'dark'
                                            ? theme.palette.primary[900]
                                            : theme.palette.primary[50],
                                    borderColor:
                                        theme.palette.mode === 'dark'
                                            ? theme.palette.primary[600]
                                            : theme.palette.primary[200],
                                    boxShadow: `0px 1px 6px 0px ${
                                        theme.palette.mode === 'dark'
                                            ? theme.palette.primary[900]
                                            : theme.palette.primary[50]
                                    }`
                                }}
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    version='1.1'
                                    viewBox='0 0 43 43'
                                    className='About__icon'
                                    style={{ fill: theme.palette.primary.main }}
                                >
                                    <path
                                        d='M17.59 20.38L4.638 12.748l12.955-8.257-.001 15.889zM3.82 29.383l13.772-5.818.001 13.729L3.82 29.383zm6.793 11.461l-6.889-9.252 13.21 7.544-6.32 1.708zM3.2 14.143l13.28 7.796-14.386 6.085L3.2 14.143zm9.707-12.01l3.423.844-9.255 5.886 5.832-6.73zm5.845-.576L12.918.037a1.23 1.23 0 00-1.219.382L1.655 12.069a1.42 1.42 0 00-.333.795L.004 29.397c-.025.31.071.645.258.898L9.323 42.52a1.199 1.199 0 001.277.437l8.162-2.27c.51-.14.866-.605.866-1.133l-.002-16.789.002-20.075c0-.532-.36-.998-.877-1.133zM26.15 21.94l13.28-7.797 1.105 13.881L26.15 21.94zm5.865 18.904l-6.32-1.708 13.21-7.544-6.89 9.252zm-6.978-17.28l13.772 5.819-13.773 7.91.001-13.728zm12.954-10.816L25.037 20.38l-.001-15.889 12.955 8.257zm-8.27-10.614l5.833 6.73-9.255-5.887 3.423-.843zm11.252 9.935L30.929.42A1.232 1.232 0 0029.71.037l-5.833 1.52A1.172 1.172 0 0023 2.69l.002 20.075L23 39.555c0 .527.356.992.866 1.131l8.162 2.271a1.2 1.2 0 001.277-.437l9.06-12.225a1.38 1.38 0 00.26-.898l-1.319-16.533a1.424 1.424 0 00-.333-.795z'
                                        fillRule='evenodd'
                                    />
                                </svg>
                            </Paper>
                            <Typography fontWeight={700} sx={{ mt: 2, mb: 1 }}>
                                BrainStation
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                From there, I attended BrainStation's intensive web development
                                bootcamp, where I was introduced to full-stack development and
                                worked with leading technologies and methodologies in the field.
                                Spending months learning, creating, and collaborating, I fell in
                                love with development all over again.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper
                            className='About__box'
                            elevation={0}
                            xs={6}
                            sx={{
                                background: theme.palette.gradients.linearSubtle,
                                borderColor: theme.palette.divider
                            }}
                        >
                            <Paper
                                className='About__icon-box'
                                elevation={0}
                                style={{
                                    backgroundColor:
                                        theme.palette.mode === 'dark'
                                            ? theme.palette.primary[900]
                                            : theme.palette.primary[50],
                                    borderColor:
                                        theme.palette.mode === 'dark'
                                            ? theme.palette.primary[600]
                                            : theme.palette.primary[200],
                                    boxShadow: `0px 1px 6px 0px ${
                                        theme.palette.mode === 'dark'
                                            ? theme.palette.primary[900]
                                            : theme.palette.primary[50]
                                    }`
                                }}
                            >
                                <SchoolIcon
                                    className='About__icon'
                                    sx={{ fill: theme.palette.primary.main }}
                                />
                            </Paper>
                            <Typography fontWeight={700} sx={{ mt: 2, mb: 1 }}>
                                Freelance
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                Since graduating, I've spent my time working on a diverse range of
                                freelance and{' '}
                                <Link href='#Projects' sx={{ display: 'inline' }}>
                                    personal projects
                                </Link>
                                . On the rare occasions when I'm not developing something, I'm
                                usually <s>winning</s> <s>breaking even</s> losing in hold'em,
                                statistically analyzing reality tv and gameshows, or playing an
                                instrument.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default About;
