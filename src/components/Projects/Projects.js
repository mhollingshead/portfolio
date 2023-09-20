import { Carousel } from 'react-responsive-carousel';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Link,
    Paper,
    Stack,
    Typography,
    useTheme
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OfflineBoltTwoToneIcon from '@mui/icons-material/OfflineBoltTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import KeyboardAltTwoToneIcon from '@mui/icons-material/KeyboardAltTwoTone';
import PlayCircleFilledTwoToneIcon from '@mui/icons-material/PlayCircleFilledTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import StyleTwoToneIcon from '@mui/icons-material/StyleTwoTone';
import ViewInArTwoToneIcon from '@mui/icons-material/ViewInArTwoTone';
import CropRotateTwoToneIcon from '@mui/icons-material/CropRotateTwoTone';
import DataObjectTwoToneIcon from '@mui/icons-material/DataObjectTwoTone';
import WebTwoToneIcon from '@mui/icons-material/WebTwoTone';
import SportsEsportsTwoToneIcon from '@mui/icons-material/SportsEsportsTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import ApiTwoToneIcon from '@mui/icons-material/ApiTwoTone';
import ExtensionTwoToneIcon from '@mui/icons-material/ExtensionTwoTone';
import BookTwoToneIcon from '@mui/icons-material/BookTwoTone';
import NCubeDemo from '../NCubeDemo';
import projects from '../../common/misc/projects.json';
import clients from '../../common/misc/clients.json';
import explore from '../../assets/image/explore.png';
import liveTV from '../../assets/image/live-tv.png';
import title from '../../assets/image/title.png';
import codelab from '../../assets/image/codelab.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Projects.scss';
import { useEffect, useRef } from 'react';
import { isElementInViewport } from '../../common/utils/graphicUtils';

const Projects = () => {
    const theme = useTheme();
    const scrollerRef = useRef();
    const animationRef = useRef();

    let x = 0;

    const animate = () => {
        if (isElementInViewport(scrollerRef.current)) {
            scrollerRef.current.style.transform = `translateX(-${x}%)`;
            x = +(x + 0.05).toFixed(2);
            if (x === 50) x = 0;
        }

        animationRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        if (scrollerRef.current) {
            animate();
        }

        return () => animationRef.current && cancelAnimationFrame(animationRef.current);
    }, [scrollerRef.current]);

    return (
        <Box
            className='Projects'
            id='Projects'
            component='section'
            sx={{
                backgroundColor:
                    theme.palette.mode === 'dark'
                        ? theme.palette.background.default
                        : theme.palette.background.paper,
                boxShadow: `inset 0 -1px 1px ${theme.palette.divider}`
            }}
        >
            <Box className='Projects__content'>
                <Typography
                    variant='body1'
                    fontWeight={700}
                    sx={{ color: theme.palette.primary[600] }}
                >
                    Projects
                </Typography>
                <Typography variant='h3' fontWeight={700} sx={{ mb: 4 }}>
                    What I've Been{' '}
                    <span style={{ color: theme.palette.primary[600] }}>Working On</span>
                </Typography>
                <Box className='Projects__featured' sx={{ my: 8 }}>
                    <Typography variant='h4' fontWeight={700} sx={{ mb: 2 }}>
                        Michael TV
                    </Typography>
                    <Typography variant='body1' color='text.secondary' sx={{ mb: 4 }}>
                        A mock streaming service with both Live TV and On Demand programming. Built
                        with the goal of creating a large-scale React application with a focus on
                        beautiful design and optimized performance.
                    </Typography>
                    <Box
                        className='Project__featured-sample'
                        sx={{
                            '::before': {
                                background: `radial-gradient(circle, ${theme.palette.primary[600]}22 0%, transparent 50%);`
                            }
                        }}
                    >
                        <Carousel
                            showThumbs={false}
                            showStatus={false}
                            transitionTime={1000}
                            interval={4000}
                            infiniteLoop
                            stopOnHover
                            autoPlay
                            swipeable
                            centerMode
                            centerSlidePercentage={80}
                        >
                            <Paper sx={{ overflow: 'hidden', mx: 1.5, my: 1 }}>
                                <img
                                    className='Projects__image-slide'
                                    src={explore}
                                    alt='Michael TV Explore Page'
                                />
                            </Paper>
                            <Paper sx={{ overflow: 'hidden', mx: 1.5, my: 1 }}>
                                <img
                                    className='Projects__image-slide'
                                    src={liveTV}
                                    alt='Michael TV Live Page'
                                />
                            </Paper>
                            <Paper sx={{ overflow: 'hidden', mx: 1.5, my: 1 }}>
                                <img
                                    className='Projects__image-slide'
                                    src={title}
                                    alt='Michael TV Title Page'
                                />
                            </Paper>
                        </Carousel>
                    </Box>
                    <Box className='Project__features'>
                        <Stack direction='row' spacing={2}>
                            <Paper
                                className='Project__feature-icon'
                                elevation={0}
                                sx={{
                                    backgroundColor: theme.palette.background.primaryMuted
                                }}
                            >
                                <OfflineBoltTwoToneIcon color='primary' />
                            </Paper>
                            <Stack spacing={0}>
                                <Typography variant='body2' fontWeight={700} component='div'>
                                    Performant
                                </Typography>
                                <Typography variant='body2' color='text.secondary' component='div'>
                                    Performance optimized using virtualization and lazy loading to
                                    ensure fast load times and minimal data transfer
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack direction='row' spacing={2}>
                            <Paper
                                className='Project__feature-icon'
                                elevation={0}
                                sx={{
                                    backgroundColor: theme.palette.background.primaryMuted
                                }}
                            >
                                <PersonOutlineTwoToneIcon color='primary' />
                            </Paper>
                            <Stack spacing={0}>
                                <Typography variant='body2' fontWeight={700} component='div'>
                                    User-Oriented
                                </Typography>
                                <Typography variant='body2' color='text.secondary' component='div'>
                                    Custom recommendation algorithm uses user watch history and
                                    weighted randomness to balance relevance and variety
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack direction='row' spacing={2}>
                            <Paper
                                className='Project__feature-icon'
                                elevation={0}
                                sx={{
                                    backgroundColor: theme.palette.background.primaryMuted
                                }}
                            >
                                <StyleTwoToneIcon color='primary' />
                            </Paper>
                            <Stack spacing={0}>
                                <Typography variant='body2' fontWeight={700} component='div'>
                                    Meticulously Styled
                                </Typography>
                                <Typography variant='body2' color='text.secondary' component='div'>
                                    Custom themeing and themed components using Material UI to
                                    ensure a beautiful, consistent user experience
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                    <Stack
                        direction='row'
                        alignItems='center'
                        justifyContent='space-between'
                        sx={{ mt: 3 }}
                    >
                        <Button variant='outlined' startIcon={<GitHubIcon />}>
                            GitHub
                        </Button>
                        <Stack
                            direction='row'
                            spacing={1}
                            sx={{ fontSize: '20px', color: theme.palette.text.secondary }}
                        >
                            <i className='devicon-react-original' title='React'></i>
                            <i className='devicon-redux-original' title='Redux'></i>
                            <i className='devicon-materialui-plain' title='Material UI'></i>
                            <i className='devicon-sass-plain' title='Sass'></i>
                        </Stack>
                    </Stack>
                </Box>
                <Box className='Project' sx={{ my: 8 }}>
                    <Typography variant='h4' fontWeight={700} sx={{ mb: 2 }}>
                        Codelab
                    </Typography>
                    <Typography variant='body1' color='text.secondary' sx={{ mb: 4 }}>
                        A simple IDE/whiteboarding tool that allows users to write, debug, and
                        execute programs collaboratively in several different programming languages.
                    </Typography>
                    <Box className='Project__panels'>
                        <Box
                            className='Project__sample'
                            sx={{
                                '::before': {
                                    background: `radial-gradient(circle, ${theme.palette.primary[600]}33 0%, transparent 50%);`
                                }
                            }}
                        >
                            <Paper sx={{ overflow: 'hidden', display: 'flex' }}>
                                <img src={codelab} alt='Codelab' />
                            </Paper>
                        </Box>
                        <Box className='Project__description'>
                            <Box className='Project__features'>
                                <Stack direction='row' spacing={2}>
                                    <Paper
                                        className='Project__feature-icon'
                                        elevation={0}
                                        sx={{
                                            backgroundColor: theme.palette.background.primaryMuted
                                        }}
                                    >
                                        <PlayCircleFilledTwoToneIcon color='primary' />
                                    </Paper>
                                    <Stack spacing={0}>
                                        <Typography
                                            variant='body2'
                                            fontWeight={700}
                                            component='div'
                                        >
                                            Real-Time Execution
                                        </Typography>
                                        <Typography
                                            variant='body2'
                                            color='text.secondary'
                                            component='div'
                                        >
                                            Uses Socket.io and Node.js child processes to allow
                                            real-time program execution for all active users
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction='row' spacing={2}>
                                    <Paper
                                        className='Project__feature-icon'
                                        elevation={0}
                                        sx={{
                                            backgroundColor: theme.palette.background.primaryMuted
                                        }}
                                    >
                                        <KeyboardAltTwoToneIcon color='primary' />
                                    </Paper>
                                    <Stack spacing={0}>
                                        <Typography
                                            variant='body2'
                                            fontWeight={700}
                                            component='div'
                                        >
                                            Interactive
                                        </Typography>
                                        <Typography
                                            variant='body2'
                                            color='text.secondary'
                                            component='div'
                                        >
                                            Accepts inputs via the command line and STDIN using
                                            Socket.io and Node.js child processes
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction='row' spacing={2}>
                                    <Paper
                                        className='Project__feature-icon'
                                        elevation={0}
                                        sx={{
                                            backgroundColor: theme.palette.background.primaryMuted
                                        }}
                                    >
                                        <PeopleAltTwoToneIcon color='primary' />
                                    </Paper>
                                    <Stack spacing={0}>
                                        <Typography
                                            variant='body2'
                                            fontWeight={700}
                                            component='div'
                                        >
                                            Collaborative
                                        </Typography>
                                        <Typography
                                            variant='body2'
                                            color='text.secondary'
                                            component='div'
                                        >
                                            Provides live chat, collaborator cursors & highlighting,
                                            and custom display names to ensure efficient
                                            collaboration
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                            <Stack
                                direction='row'
                                alignItems='center'
                                justifyContent='space-between'
                                sx={{ mt: 3 }}
                            >
                                <Button variant='outlined' startIcon={<GitHubIcon />}>
                                    GitHub
                                </Button>
                                <Stack
                                    direction='row'
                                    spacing={1}
                                    sx={{ fontSize: '20px', color: theme.palette.text.secondary }}
                                >
                                    <i className='devicon-react-original' title='React'></i>
                                    <i className='devicon-nodejs-plain' title='Node.js'></i>
                                    <i className='devicon-firebase-plain' title='Firebase'></i>
                                    <i className='devicon-socketio-plain' title='Socket.io'></i>
                                    <i className='devicon-sass-plain' title='Sass'></i>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
                <Box className='Project' sx={{ my: 8 }}>
                    <Typography variant='h4' fontWeight={700} sx={{ mb: 2 }}>
                        NCube.js
                    </Typography>
                    <Typography variant='body1' color='text.secondary' sx={{ mb: 4 }}>
                        My fascination with higher-dimensional geometry inspired me to create
                        NCube.js: a JavaScript library that dynamically generates and manipulates
                        n-dimensional hypercube geometries.
                    </Typography>
                    <Box className='Project__panels'>
                        <Box
                            className='Project__sample'
                            sx={{
                                '::before': {
                                    background: `radial-gradient(circle, ${theme.palette.primary[600]}22 0%, transparent 50%);`
                                }
                            }}
                        >
                            <NCubeDemo />
                            <Typography variant='body2' color='text.secondary' sx={{ mt: 2 }}>
                                For another usage example, check out the{' '}
                                <Link
                                    onClick={() => window.scrollTo(0, 0)}
                                    sx={{ cursor: 'pointer' }}
                                >
                                    hero
                                </Link>
                                !
                            </Typography>
                        </Box>
                        <Box className='Project__description'>
                            <Box className='Project__features'>
                                <Stack direction='row' spacing={2}>
                                    <Paper
                                        className='Project__feature-icon'
                                        elevation={0}
                                        sx={{
                                            backgroundColor: theme.palette.background.primaryMuted
                                        }}
                                    >
                                        <ViewInArTwoToneIcon color='primary' />
                                    </Paper>
                                    <Stack spacing={0}>
                                        <Typography
                                            variant='body2'
                                            fontWeight={700}
                                            component='div'
                                        >
                                            Dynamic
                                        </Typography>
                                        <Typography
                                            variant='body2'
                                            color='text.secondary'
                                            component='div'
                                        >
                                            Capable of dynamically generating vertices, edges,
                                            faces, ...any 0 to n-1 facets of any n-dimensional
                                            hypercube
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction='row' spacing={2}>
                                    <Paper
                                        className='Project__feature-icon'
                                        elevation={0}
                                        sx={{
                                            backgroundColor: theme.palette.background.primaryMuted
                                        }}
                                    >
                                        <CropRotateTwoToneIcon color='primary' />
                                    </Paper>
                                    <Stack spacing={0}>
                                        <Typography
                                            variant='body2'
                                            fontWeight={700}
                                            component='div'
                                        >
                                            Mutatable
                                        </Typography>
                                        <Typography
                                            variant='body2'
                                            color='text.secondary'
                                            component='div'
                                        >
                                            Able to perform several geometric operations such as
                                            scalar multiplication, rotations over a list of axes,
                                            and projections into any dimension
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction='row' spacing={2}>
                                    <Paper
                                        className='Project__feature-icon'
                                        elevation={0}
                                        sx={{
                                            backgroundColor: theme.palette.background.primaryMuted
                                        }}
                                    >
                                        <DataObjectTwoToneIcon color='primary' />
                                    </Paper>
                                    <Stack spacing={0}>
                                        <Typography
                                            variant='body2'
                                            fontWeight={700}
                                            component='div'
                                        >
                                            Extendable
                                        </Typography>
                                        <Typography
                                            variant='body2'
                                            color='text.secondary'
                                            component='div'
                                        >
                                            Allows users to abstract complex tasks and maintain
                                            clean and organized projects by enhancing and extending
                                            class functionalities
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                            <Stack
                                direction='row'
                                alignItems='center'
                                justifyContent='space-between'
                                sx={{ mt: 3 }}
                            >
                                <Stack direction='row' spacing={1}>
                                    <Button variant='outlined' startIcon={<PublicIcon />}>
                                        Demo
                                    </Button>
                                    <Button variant='outlined' startIcon={<GitHubIcon />}>
                                        GitHub
                                    </Button>
                                </Stack>
                                <Stack
                                    direction='row'
                                    spacing={1}
                                    sx={{ fontSize: '20px', color: theme.palette.text.secondary }}
                                >
                                    <i className='devicon-javascript-plain' title='JavaScript'></i>
                                    <i className='devicon-threejs-original' title='Three.js'></i>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
                <Typography variant='h4' fontWeight={700} sx={{ mb: 2 }}>
                    Additional Projects
                </Typography>
                <Typography variant='body1' color='text.secondary' sx={{ mb: 4 }}>
                    Feel free to browse my other public projects using the lists below! Projects
                    tagged with <sup className='tag-24'>24</sup> were part of a 24-hour programming
                    challenge.
                </Typography>
                <Box sx={{ mb: 8 }}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Paper
                                    className='Project__category-icon'
                                    elevation={0}
                                    sx={{
                                        backgroundColor: theme.palette.background.primaryMuted
                                    }}
                                >
                                    <WebTwoToneIcon fontSize='small' color='primary' />
                                </Paper>
                                <Typography variant='body2' fontWeight={700}>
                                    Apps
                                </Typography>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                backgroundColor:
                                    theme.palette.mode === 'dark'
                                        ? theme.palette.background.default + '88'
                                        : theme.palette.background.paper + '88'
                            }}
                        >
                            <ul>
                                {projects['apps'].map((project) => (
                                    <li key={project.name}>
                                        <Link href={project.link} target='_blank'>
                                            {project.name}
                                        </Link>{' '}
                                        {project['24hr'] && (
                                            <>
                                                <sup
                                                    className='tag-24'
                                                    style={{
                                                        color: theme.palette.text.secondary
                                                    }}
                                                >
                                                    24
                                                </sup>{' '}
                                            </>
                                        )}
                                        {project.tech.map((technology) => (
                                            <>
                                                <i
                                                    className={`${technology} colored`}
                                                    key={`${project.name}-${technology}`}
                                                />{' '}
                                            </>
                                        ))}
                                    </li>
                                ))}
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Paper
                                    className='Project__category-icon'
                                    elevation={0}
                                    sx={{
                                        backgroundColor: theme.palette.background.primaryMuted
                                    }}
                                >
                                    <SportsEsportsTwoToneIcon fontSize='small' color='primary' />
                                </Paper>
                                <Typography variant='body2' fontWeight={700}>
                                    Games
                                </Typography>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                backgroundColor:
                                    theme.palette.mode === 'dark'
                                        ? theme.palette.background.default + '88'
                                        : theme.palette.background.paper + '88'
                            }}
                        >
                            <ul>
                                {projects['games'].map((project) => (
                                    <li key={project.name}>
                                        <Link href={project.link} target='_blank'>
                                            {project.name}
                                        </Link>{' '}
                                        {project['24hr'] && (
                                            <>
                                                <sup
                                                    className='tag-24'
                                                    style={{
                                                        color: theme.palette.text.secondary
                                                    }}
                                                >
                                                    24
                                                </sup>{' '}
                                            </>
                                        )}
                                        {project.tech.map((technology) => (
                                            <>
                                                <i
                                                    className={`${technology} colored`}
                                                    key={`${project.name}-${technology}`}
                                                />{' '}
                                            </>
                                        ))}
                                    </li>
                                ))}
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Paper
                                    className='Project__category-icon'
                                    elevation={0}
                                    sx={{
                                        backgroundColor: theme.palette.background.primaryMuted
                                    }}
                                >
                                    <VisibilityTwoToneIcon fontSize='small' color='primary' />
                                </Paper>
                                <Typography variant='body2' fontWeight={700}>
                                    Visualizations
                                </Typography>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                backgroundColor:
                                    theme.palette.mode === 'dark'
                                        ? theme.palette.background.default + '88'
                                        : theme.palette.background.paper + '88'
                            }}
                        >
                            <ul>
                                {projects['visualizations'].map((project) => (
                                    <li key={project.name}>
                                        <Link href={project.link} target='_blank'>
                                            {project.name}
                                        </Link>{' '}
                                        {project['24hr'] && (
                                            <>
                                                <sup
                                                    className='tag-24'
                                                    style={{
                                                        color: theme.palette.text.secondary
                                                    }}
                                                >
                                                    24
                                                </sup>{' '}
                                            </>
                                        )}
                                        {project.tech.map((technology) => (
                                            <>
                                                <i
                                                    className={`${technology} colored`}
                                                    key={`${project.name}-${technology}`}
                                                />{' '}
                                            </>
                                        ))}
                                    </li>
                                ))}
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Paper
                                    className='Project__category-icon'
                                    elevation={0}
                                    sx={{
                                        backgroundColor: theme.palette.background.primaryMuted
                                    }}
                                >
                                    <ApiTwoToneIcon fontSize='small' color='primary' />
                                </Paper>
                                <Typography variant='body2' fontWeight={700}>
                                    APIs
                                </Typography>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                backgroundColor:
                                    theme.palette.mode === 'dark'
                                        ? theme.palette.background.default + '88'
                                        : theme.palette.background.paper + '88'
                            }}
                        >
                            <ul>
                                {projects['apis'].map((project) => (
                                    <li key={project.name}>
                                        <Link href={project.link} target='_blank'>
                                            {project.name}
                                        </Link>{' '}
                                        {project['24hr'] && (
                                            <>
                                                <sup
                                                    className='tag-24'
                                                    style={{
                                                        color: theme.palette.text.secondary
                                                    }}
                                                >
                                                    24
                                                </sup>{' '}
                                            </>
                                        )}
                                        {project.tech.map((technology) => (
                                            <>
                                                <i
                                                    className={`${technology} colored`}
                                                    key={`${project.name}-${technology}`}
                                                />{' '}
                                            </>
                                        ))}
                                    </li>
                                ))}
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Paper
                                    className='Project__category-icon'
                                    elevation={0}
                                    sx={{
                                        backgroundColor: theme.palette.background.primaryMuted
                                    }}
                                >
                                    <ExtensionTwoToneIcon fontSize='small' color='primary' />
                                </Paper>
                                <Typography variant='body2' fontWeight={700}>
                                    Extensions
                                </Typography>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                backgroundColor:
                                    theme.palette.mode === 'dark'
                                        ? theme.palette.background.default + '88'
                                        : theme.palette.background.paper + '88'
                            }}
                        >
                            <ul>
                                {projects['extensions'].map((project) => (
                                    <li key={project.name}>
                                        <Link href={project.link} target='_blank'>
                                            {project.name}
                                        </Link>{' '}
                                        {project['24hr'] && (
                                            <>
                                                <sup
                                                    className='tag-24'
                                                    style={{
                                                        color: theme.palette.text.secondary
                                                    }}
                                                >
                                                    24
                                                </sup>{' '}
                                            </>
                                        )}
                                        {project.tech.map((technology) => (
                                            <>
                                                <i
                                                    className={`${technology} colored`}
                                                    key={`${project.name}-${technology}`}
                                                />{' '}
                                            </>
                                        ))}
                                    </li>
                                ))}
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Paper
                                    className='Project__category-icon'
                                    elevation={0}
                                    sx={{
                                        backgroundColor: theme.palette.background.primaryMuted
                                    }}
                                >
                                    <BookTwoToneIcon fontSize='small' color='primary' />
                                </Paper>
                                <Typography variant='body2' fontWeight={700}>
                                    Libraries
                                </Typography>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                backgroundColor:
                                    theme.palette.mode === 'dark'
                                        ? theme.palette.background.default + '88'
                                        : theme.palette.background.paper + '88'
                            }}
                        >
                            <ul>
                                {projects['libraries'].map((project) => (
                                    <li key={project.name}>
                                        <Link href={project.link} target='_blank'>
                                            {project.name}
                                        </Link>{' '}
                                        {project['24hr'] && (
                                            <>
                                                <sup
                                                    className='tag-24'
                                                    style={{
                                                        color: theme.palette.text.secondary
                                                    }}
                                                >
                                                    24
                                                </sup>{' '}
                                            </>
                                        )}
                                        {project.tech.map((technology) => (
                                            <>
                                                <i
                                                    className={`${technology} colored`}
                                                    key={`${project.name}-${technology}`}
                                                />{' '}
                                            </>
                                        ))}
                                    </li>
                                ))}
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                </Box>
                <Typography variant='h4' fontWeight={700} sx={{ mb: 2 }}>
                    Collaborations
                </Typography>
                <Typography variant='body1' color='text.secondary' sx={{ mb: 4 }}>
                    As a freelance full-stack developer, I've had the opportunity to collaborate
                    with several awesome companies and organizations on a diverse range of projects.
                    Interested in collaborating? Feel free to <Link href='#Contact'>reach out</Link>
                    !
                </Typography>
                <Paper>
                    <Box className='Clients'>
                        <Box
                            className='Clients__scroller'
                            sx={{ filter: theme.palette.mode === 'dark' ? 'invert(1)' : '' }}
                            ref={scrollerRef}
                            onMouseEnter={() => cancelAnimationFrame(animationRef.current)}
                            onMouseLeave={() => (animationRef.current = requestAnimationFrame(animate))}
                        >
                            {[...clients, ...clients].map((client, i) => (
                                <img
                                    className='Clients__logo'
                                    src={require(`../../assets/image/${client.logo}`)}
                                    alt={client.name}
                                    style={{
                                        padding: client.margin ? '16px 28px' : '16px 20px',
                                        filter: 'brightness(0)'
                                    }}
                                    key={`${client.name}-${i}`}
                                />
                            ))}
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
};

export default Projects;
