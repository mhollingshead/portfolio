import { Box, Stack, Typography, useTheme } from '@mui/material';
import portraitLayer1 from '../../assets/image/portrait-layer-1.png';
import portraitLayer2 from '../../assets/image/portrait-layer-2.png';
import portraitLayer3 from '../../assets/image/portrait-layer-3.png';
import './Hero.scss';
import { useEffect, useRef } from 'react';
import { handleMouseMove, init, rotate } from '../../common/utils/graphicUtils';

const Hero = () => {
    const theme = useTheme();
    const particleRef = useRef();
    const eyeRef = useRef();
    const animationRef = useRef();

    useEffect(() => {
        if (particleRef.current) {
            const nCube = init();

            let angle = 0;

            const animate = () => {
                angle = rotate(nCube, angle, particleRef.current);
                animationRef.current = requestAnimationFrame(animate);
            };

            animate();
        }
        if (eyeRef.current) {
            document.addEventListener('mousemove', (e) => handleMouseMove(e, eyeRef.current));
        }

        return () => animationRef.current && cancelAnimationFrame(animationRef.current);
    }, [particleRef, eyeRef]);

    return (
        <Box
            className='Hero'
            component='section'
            sx={{
                background: theme.palette.background.gradient,
                boxShadow: `inset 0 -1px 1px ${theme.palette.divider}`
            }}
        >
            <Box className='Hero__content'>
                <Box className='Hero__panels'>
                    <Box className='Hero__panel'>
                        <Stack className='Hero__text' spacing={0.5}>
                            <Typography variant='h5' color='text.secondary'>
                                👋 Hi! I'm
                            </Typography>
                            <Typography variant='h3' fontWeight={700}>
                                <span
                                    className='Hero__display-text'
                                    style={{
                                        background: `linear-gradient(to right, ${theme.palette.primary[400]}, ${theme.palette.primary[800]})`
                                    }}
                                >
                                    Michael Hollingshead
                                </span>
                                <span
                                    style={{ color: theme.palette.text.secondary, fontWeight: 400 }}
                                >
                                    ,
                                </span>
                            </Typography>
                            <Typography
                                variant='h5'
                                color='text.secondary'
                                sx={{ maxWidth: '360px' }}
                            >
                                a{' '}
                                <span style={{ color: theme.palette.text.primary }}>
                                    Full-Stack Developer
                                </span>{' '}
                                located in{' '}
                                <span style={{ color: theme.palette.text.primary }}>
                                    Toronto, Ontario, Canada
                                </span>
                                .
                            </Typography>
                        </Stack>
                    </Box>
                    <Box className='Hero__panel'>
                        <Box className='Graphic'>
                            <Box className='Graphic__inner'>
                                <Box
                                    className={`Portrait ${
                                        theme.palette.mode === 'light' ? 'Portrait--light' : ''
                                    }`}
                                >
                                    <img
                                        className='Portrait__layer Portrait__layer--1'
                                        src={portraitLayer1}
                                        alt='Portrait - Layer 1'
                                    />
                                    <img
                                        className='Portrait__layer Portrait__layer--2'
                                        src={portraitLayer2}
                                        ref={eyeRef}
                                        alt='Portrait - Layer 2'
                                    />
                                    <img
                                        className='Portrait__layer Portrait__layer--3'
                                        src={portraitLayer3}
                                        alt='Portrait - Layer 3'
                                    />
                                </Box>
                                <div className='Particles' ref={particleRef} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <a href='#About' className='ScrollIndicator' style={{borderColor: theme.palette.primary[600]}} />
        </Box>
    );
};

export default Hero;
