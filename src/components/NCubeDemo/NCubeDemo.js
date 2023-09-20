import { useEffect, useRef, useState } from 'react';
import { Paper, Slider, Stack, Typography, useTheme } from '@mui/material';
import './NCubeDemo.scss';
import { init, rotate } from '../../common/misc/nCubeDemo';

const NCubeDemo = () => {
    const theme = useTheme();
    const demoRef = useRef();
    const animationRef = useRef();

    const [n, setN] = useState(5);

    useEffect(() => {
        if (demoRef.current) {
            const { cube, svg } = init(n, demoRef.current);

            const animate = () => {
                rotate(cube, svg, demoRef.current);
                animationRef.current = requestAnimationFrame(animate);
            };

            animate();

            return () => animationRef.current && cancelAnimationFrame(animationRef.current);
        }
    }, [demoRef, n]);

    return (
        <div className={theme.palette.mode}>
            <Stack spacing={2} direction='row' alignItems='center' mb={1.5}>
                <Typography variant='body1' color='text.secondary'>
                    n
                </Typography>
                <Slider
                    aria-label='n'
                    value={n}
                    min={2}
                    max={7}
                    step={1}
                    onChange={(_, value) => setN(value)}
                    marks={[{ value: 3 }, { value: 4 }, { value: 5 }, { value: 6 }]}
                />
            </Stack>
            <Paper>
                <pre
                    className='NCube__code'
                >
                    <span className='pl-k'>const</span> <span className='pl-s1'>n</span>{' '}
                    <span className='pl-c1'>=</span>{' '}
                    <span className='pl-c1' id='n-value'>
                        {n}
                    </span>
                    <span className='pl-kos'>;</span>
                    <br />
                    <span className='pl-k'>const</span> <span className='pl-s1'>cube</span>{' '}
                    <span className='pl-c1'>=</span> <span className='pl-k'>new</span>{' '}
                    <span className='pl-v'>NCube</span>
                    <span className='pl-kos'>{'('}</span>
                    <span className='pl-s1'>n</span>
                    <span className='pl-kos'>{')'}</span>
                    <span className='pl-kos'>;</span>
                    <br />
                    <br />
                    <span className='pl-en'>setInterval</span>
                    <span className='pl-kos'>{'('}</span>
                    <span className='pl-kos'>{'('}</span>
                    <span className='pl-kos'>{')'}</span> <span className='pl-c1'>=&gt;</span>{' '}
                    <span className='pl-kos'>{'{'}</span>
                    <br />
                    &nbsp;&nbsp;<span className='pl-s1'>cube</span>
                    <span className='pl-kos'>.</span>
                    <span className='pl-en'>rotate</span>
                    <span className='pl-kos'>{'('}</span>
                    <span className='pl-c1'>1</span> <span className='pl-c1'>/</span>{' '}
                    <span className='pl-v'>Math</span>
                    <span className='pl-kos'>.</span>
                    <span className='pl-c1'>PI</span>
                    <span className='pl-c1'>**</span>
                    <span className='pl-c1'>4</span>
                    <span className='pl-kos'>{')'}</span>
                    <span className='pl-kos'>;</span>
                    <br />
                    &nbsp;&nbsp;<span className='pl-s1'>cube</span>
                    <span className='pl-kos'>.</span>
                    <span className='pl-c1'>edges</span>
                    <span className='pl-kos'>.</span>
                    <span className='pl-en'>forEach</span>
                    <span className='pl-kos'>{'('}</span>
                    <span className='pl-s1'>edge</span> <span className='pl-c1'>=&gt;</span>{' '}
                    <span className='pl-en'>draw</span>
                    <span className='pl-kos'>{'('}</span>
                    <span className='pl-s1'>edge</span>
                    <span className='pl-kos'>{')'}</span>
                    <span className='pl-kos'>{')'}</span>
                    <span className='pl-kos'>;</span>
                    <br />
                    <span className='pl-kos'>{'}'}</span>
                    <span className='pl-kos'>,</span> <span className='pl-c1'>25</span>
                    <span className='pl-kos'>{')'}</span>
                    <span className='pl-kos'>;</span>
                    <br />
                </pre>
            </Paper>
            <Paper className='NCube__demo-wrapper'>
                <div
                    className='NCube__demo'
                    ref={demoRef}
                ></div>
            </Paper>
        </div>
    );
};

export default NCubeDemo;
