import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Container,
    Grid,
    Card,
    CardContent,
    Chip,
    IconButton,
    Fade,
    Slide,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    List,
    ListItem,
    ListItemText,
    Divider,
    TextField,
    Alert,
    Snackbar,
} from '@mui/material';
import {
    Email,
    Phone,
    LocationOn,
    GitHub,
    LinkedIn,
    KeyboardArrowDown,
    Work,
    School,
    Code,
    Close,
    Business,
    CalendarToday,
    Description,
    Send,
    Person,
    Subject,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { BreakpointService } from 'src/services/breakpoint.service';
import { ThreeScene } from './ThreeScene';

export interface IProps {
    breakpointService: BreakpointService;
}

export const ProfileModern = (props: IProps) => <Component {...props} />;

const Component: React.FunctionComponent<IProps> = (props) => {
    const [currentSection, setCurrentSection] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState<any>(null);
    const [experienceModalOpen, setExperienceModalOpen] = useState(false);
    
    // Contact form state
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formSubmitting, setFormSubmitting] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Profile data based on your professional information
    const profileData = {
        name: 'Kent Adrian Sato',
        title: 'Senior Full Stack Software Engineer',
        subtitle: 'Creative Developer',
        avatar: 'https://github.com/adriankentsato.png',
        bio: 'Seasoned Full Stack Software Engineer with 8+ years of experience in enterprise application development and system modernization.',
        location: 'Cebu, Philippines',
        contact: {
            email: 'adriankentsato@gmail.com',
            phone: '(+63) 968 872 7968',
            location: 'Cebu, Philippines',
        },
        social: {
            github: 'https://github.com/adriankentsato',
            linkedin: 'https://linkedin.com/in/kentscientist'
        },
        skills: [
            'JavaScript/TypeScript', 'Angular', 'Node.js', 'AWS Services',
            'Java/PHP', 'Database Design', 'DevOps/CI/CD', 'React'
        ],
        technologies: [
            'Angular', 'TypeScript', 'JavaScript', 'Node.js', 'Java', 'PHP',
            'AWS Lambda', 'AWS API Gateway', 'AWS S3', 'AWS EC2', 'AWS RDS',
            'MySQL', 'PostgreSQL', 'Docker', 'CircleCI', 'SAP TM', 'MuleSoft'
        ],
        experience: [
            {
                title: 'Full Stack Software Engineer',
                company: 'Radiant Logistics Inc',
                period: 'March 2023 - Present',
                location: 'Remote',
                description: 'Spearheaded migration of legacy PHP and Mule applications to AWS Lambda architecture.',
                responsibilities: [
                    'Led migration of legacy PHP and Mule applications to AWS Lambda serverless architecture',
                    'Developed and maintained logistics management portal using Angular and Node.js',
                    'Integrated with SAP TM for transportation management workflows',
                    'Implemented CI/CD pipelines using AWS services and CircleCI',
                    'Collaborated with cross-functional teams to deliver scalable solutions'
                ],
                technologies: ['Angular', 'Node.js', 'AWS Lambda', 'AWS API Gateway', 'SAP TM', 'PHP', 'MuleSoft', 'CircleCI'],
                achievements: [
                    'Successfully migrated 15+ legacy applications to serverless architecture',
                    'Reduced infrastructure costs by 40% through serverless adoption',
                    'Improved application performance by 60% with optimized Lambda functions'
                ]
            },
            {
                title: 'Senior Software Developer & DevOps Lead',
                company: 'AboveDigital.co',
                period: 'October 2018 - March 2023',
                location: 'Cebu, Philippines',
                description: 'Architected and developed comprehensive ERP solution using MEAN stack.',
                responsibilities: [
                    'Architected and developed comprehensive ERP solution using MEAN stack',
                    'Led DevOps initiatives including CI/CD pipeline setup and cloud infrastructure management',
                    'Mentored junior developers and conducted code reviews',
                    'Designed and implemented RESTful APIs and microservices architecture',
                    'Managed AWS cloud infrastructure and database optimization'
                ],
                technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'AWS EC2', 'AWS RDS', 'Docker', 'Jenkins'],
                achievements: [
                    'Built ERP system serving 500+ users across multiple departments',
                    'Implemented automated testing reducing bugs by 70%',
                    'Established DevOps practices improving deployment frequency by 300%'
                ]
            },
            {
                title: 'Web Developer',
                company: 'Freelance',
                period: 'February 2017 - October 2018',
                location: 'Cebu, Philippines',
                description: 'Provided web development services to various clients, creating responsive websites and web applications.',
                responsibilities: [
                    'Developed custom websites and web applications for diverse clients',
                    'Created responsive designs using modern CSS frameworks',
                    'Implemented content management systems and e-commerce solutions',
                    'Provided technical consultation and project management',
                    'Maintained and updated existing client websites'
                ],
                technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'WordPress', 'Bootstrap', 'jQuery', 'MySQL'],
                achievements: [
                    'Successfully delivered 25+ projects for various industries',
                    'Maintained 95% client satisfaction rate',
                    'Built long-term relationships with repeat clients'
                ]
            },
            {
                title: 'Web Developer Intern',
                company: 'Neso Technical Solutions Inc',
                period: 'March 2018 - September 2018',
                location: 'Cebu, Philippines',
                description: 'Gained hands-on experience in web development, working with HTML, CSS, JavaScript, and PHP.',
                responsibilities: [
                    'Assisted in developing web applications using PHP and JavaScript',
                    'Created responsive user interfaces with HTML5 and CSS3',
                    'Participated in code reviews and team meetings',
                    'Debugged and tested web applications across different browsers',
                    'Collaborated with senior developers on client projects'
                ],
                technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'Git'],
                achievements: [
                    'Completed 3 major client projects during internship',
                    'Received commendation for quick learning and adaptation',
                    'Contributed to team productivity and project delivery'
                ]
            },
        ],
        projects: [
            {
                title: 'Logistics Portal Modernization',
                technologies: 'Angular, AWS Lambda, Node.js, SAP TM',
                description: 'Led the frontend development of a logistics management portal using Angular.',
            },
            {
                title: 'Legacy System Migration',
                technologies: 'AWS Serverless, MuleSoft, Java, Python',
                description: 'Architected and executed migration of legacy PHP/Mule applications to AWS Lambda.',
            },
        ],
    };

    const sections = [
        { id: 'hero', title: 'Home' },
        { id: 'about', title: 'About' },
        { id: 'experience', title: 'Experience' },
        { id: 'work', title: 'Work' },
        { id: 'contact', title: 'Contact' },
    ];

    const scrollToSection = (index: number) => {
        setCurrentSection(index);
        const element = document.getElementById(sections[index].id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleExperienceClick = (experience: any) => {
        setSelectedExperience(experience);
        setExperienceModalOpen(true);
    };

    const handleCloseModal = () => {
        setExperienceModalOpen(false);
        setSelectedExperience(null);
    };

    const handleContactFormChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setContactForm(prev => ({
            ...prev,
            [field]: event.target.value
        }));
    };

    const handleContactFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setFormSubmitting(true);

        try {
            // Simulate form submission (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Reset form
            setContactForm({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            
            setShowSuccessAlert(true);
        } catch (error) {
            setShowErrorAlert(true);
        } finally {
            setFormSubmitting(false);
        }
    };

    const handleCloseAlert = () => {
        setShowSuccessAlert(false);
        setShowErrorAlert(false);
    };

    return (
        <Box sx={{
            minHeight: '100vh',
            position: 'relative',
            background: 'transparent',
            color: 'white',
            overflow: 'hidden'
        }}>
            {/* Three.js Background */}
            <ThreeScene />

            {/* Soft gradient overlay above the blob */}
            <Box
                sx={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 1,
                    pointerEvents: 'none',
                    background: 'radial-gradient(1200px 600px at 50% 20%, rgba(26,26,58,0.6) 0%, rgba(15,15,35,0.9) 60%, rgba(15,15,35,1) 100%)'
                }}
            />

            {/* Foreground content wrapper */}
            <Box sx={{ position: 'relative', zIndex: 2 }}>

                {/* Navigation */}
                <Box sx={{
                    position: 'fixed',
                    top: 20,
                    right: 20,
                    zIndex: 1000,
                    display: 'flex',
                    gap: 2
                }}>
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.id}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Chip
                                label={section.title}
                                onClick={() => scrollToSection(index)}
                                sx={{
                                    backgroundColor: currentSection === index ? '#ff923e' : 'rgba(255, 255, 255, 0.1)',
                                    color: 'white',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        backgroundColor: '#ff923e',
                                    }
                                }}
                            />
                        </motion.div>
                    ))}
                </Box>

                {/* Hero Section */}
                <Box
                    id="hero"
                    sx={{
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        position: 'relative',
                    }}
                >
                    <Container maxWidth="md">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#ff923e',
                                    fontWeight: 300,
                                    letterSpacing: '0.2em',
                                    textTransform: 'uppercase',
                                    mb: 2
                                }}
                            >
                                Portfolio
                            </Typography>

                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '3rem', md: '5rem' },
                                    fontWeight: 700,
                                    lineHeight: 1.2,
                                    mb: 2,
                                    background: 'linear-gradient(45deg, #ffffff, #ff923e)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                {profileData.name}
                            </Typography>

                            <Typography
                                variant="h4"
                                sx={{
                                    fontSize: { xs: '1.5rem', md: '2.5rem' },
                                    fontWeight: 300,
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    mb: 4
                                }}
                            >
                                {profileData.title}
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: { xs: '1rem', md: '1.2rem' },
                                    fontWeight: 300,
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    maxWidth: '600px',
                                    mx: 'auto',
                                    mb: 6
                                }}
                            >
                                {profileData.bio}
                            </Typography>

                            {/* Social Links */}
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 8 }}>
                                {[
                                    { icon: <GitHub />, url: profileData.social.github },
                                    { icon: <LinkedIn />, url: profileData.social.linkedin }
                                ].map((social, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.2, y: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <IconButton
                                            href={social.url}
                                            target="_blank"
                                            sx={{
                                                color: 'white',
                                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                '&:hover': {
                                                    backgroundColor: '#ff923e',
                                                }
                                            }}
                                        >
                                            {social.icon}
                                        </IconButton>
                                    </motion.div>
                                ))}
                            </Box>
                        </motion.div>

                        {/* Scroll Indicator */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            style={{
                                position: 'absolute',
                                bottom: 30,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                cursor: 'pointer'
                            }}
                            onClick={() => scrollToSection(1)}
                        >
                            <KeyboardArrowDown sx={{ fontSize: 40, color: 'rgba(255, 255, 255, 0.6)' }} />
                        </motion.div>
                    </Container>
                </Box>

                {/* About Section */}
                <Box
                    id="about"
                    sx={{
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        py: 8,
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    <Container maxWidth="lg">
                        <Grid container spacing={6} alignItems="center">
                            <Grid item xs={12} md={6}>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    <Typography variant="h6" sx={{ color: '#ff923e', mb: 2, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                                        About Me
                                    </Typography>
                                    <Typography variant="h3" sx={{ mb: 4, fontWeight: 700 }}>
                                        Passionate about creating innovative solutions
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.8 }}>
                                        With 8+ years of experience in enterprise application development and system modernization,
                                        I specialize in leading technical migrations and building scalable solutions using modern technologies.
                                    </Typography>

                                    {/* Skills */}
                                    <Box sx={{ mb: 4 }}>
                                        <Typography variant="h6" sx={{ mb: 2 }}>Technologies I work with</Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            {profileData.skills.map((skill, index) => (
                                                <motion.div
                                                    key={skill}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <Chip
                                                        label={skill}
                                                        sx={{
                                                            backgroundColor: 'rgba(255, 146, 62, 0.2)',
                                                            color: '#ff923e',
                                                            border: '1px solid rgba(255, 146, 62, 0.3)',
                                                        }}
                                                    />
                                                </motion.div>
                                            ))}
                                        </Box>
                                    </Box>
                                </motion.div>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    <Box
                                        component="img"
                                        src={profileData.avatar}
                                        alt={profileData.name}
                                        sx={{
                                            width: '100%',
                                            maxWidth: 400,
                                            height: 400,
                                            objectFit: 'cover',
                                            borderRadius: '20px',
                                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                                        }}
                                    />
                                </motion.div>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                {/* Experience Section */}
                <Box
                    id="experience"
                    sx={{
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        py: 8,
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    <Container maxWidth="lg">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Typography variant="h6" sx={{ color: '#ff923e', mb: 2, textTransform: 'uppercase', letterSpacing: '0.2em', textAlign: 'center' }}>
                                Experience
                            </Typography>
                            <Typography variant="h3" sx={{ mb: 8, fontWeight: 700, textAlign: 'center' }}>
                                Professional Journey
                            </Typography>
                        </motion.div>

                        <Grid container spacing={4}>
                            {profileData.experience.map((exp, index) => (
                                <Grid item xs={12} md={6} key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: index * 0.2 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -10 }}
                                    >
                                        <Card
                                            onClick={() => handleExperienceClick(exp)}
                                            sx={{
                                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                                backdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                borderRadius: '20px',
                                                height: '100%',
                                                transition: 'all 0.3s ease',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(255, 146, 62, 0.1)',
                                                    border: '1px solid rgba(255, 146, 62, 0.3)',
                                                    transform: 'translateY(-5px)',
                                                }
                                            }}
                                        >
                                            <CardContent sx={{ p: 4 }}>
                                                <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, color: 'white' }}>
                                                    {exp.title}
                                                </Typography>
                                                <Typography variant="h6" sx={{ mb: 2, color: '#ff923e', fontWeight: 500 }}>
                                                    {exp.company}
                                                </Typography>
                                                <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.7)', fontStyle: 'italic' }}>
                                                    {exp.period}
                                                </Typography>
                                                <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}>
                                                    {exp.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

                {/* Work Section */}
                <Box
                    id="work"
                    sx={{
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        py: 8,
                    }}
                >
                    <Container maxWidth="lg">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Typography variant="h6" sx={{ color: '#ff923e', mb: 2, textTransform: 'uppercase', letterSpacing: '0.2em', textAlign: 'center' }}>
                                Portfolio
                            </Typography>
                            <Typography variant="h3" sx={{ mb: 8, fontWeight: 700, textAlign: 'center' }}>
                                Some things I've worked on
                            </Typography>
                        </motion.div>

                        <Grid container spacing={4}>
                            {profileData.projects.map((project, index) => (
                                <Grid item xs={12} md={6} key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: index * 0.2 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -10 }}
                                    >
                                        <Card
                                            sx={{
                                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                                backdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                borderRadius: '20px',
                                                height: '100%',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(255, 146, 62, 0.1)',
                                                    border: '1px solid rgba(255, 146, 62, 0.3)',
                                                }
                                            }}
                                        >
                                            <CardContent sx={{ p: 4 }}>
                                                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: 'white' }}>
                                                    {project.title}
                                                </Typography>
                                                <Typography variant="body2" sx={{ mb: 3, color: '#ff923e', fontWeight: 500 }}>
                                                    {project.technologies}
                                                </Typography>
                                                <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}>
                                                    {project.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

                {/* Contact Section */}
                <Box
                    id="contact"
                    sx={{
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        py: 8,
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    <Container maxWidth="md">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Box sx={{ textAlign: 'center', mb: 6 }}>
                                <Typography variant="h6" sx={{ color: '#ff923e', mb: 2, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                                    Get In Touch 📧
                                </Typography>
                                <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
                                    Let's Work Together
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '600px', mx: 'auto' }}>
                                    Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life.
                                </Typography>
                            </Box>

                            <Card
                                sx={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '20px',
                                    p: 4,
                                }}
                            >
                                <Box component="form" onSubmit={handleContactFormSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                fullWidth
                                                label="Your Name"
                                                value={contactForm.name}
                                                onChange={handleContactFormChange('name')}
                                                required
                                                InputProps={{
                                                    startAdornment: <Person sx={{ color: '#ff923e', mr: 1 }} />,
                                                }}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        color: 'white',
                                                        '& fieldset': {
                                                            borderColor: 'rgba(255, 255, 255, 0.3)',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: '#ff923e',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: '#ff923e',
                                                        },
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        color: 'rgba(255, 255, 255, 0.7)',
                                                        '&.Mui-focused': {
                                                            color: '#ff923e',
                                                        },
                                                    },
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                fullWidth
                                                label="Your Email"
                                                type="email"
                                                value={contactForm.email}
                                                onChange={handleContactFormChange('email')}
                                                required
                                                InputProps={{
                                                    startAdornment: <Email sx={{ color: '#ff923e', mr: 1 }} />,
                                                }}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        color: 'white',
                                                        '& fieldset': {
                                                            borderColor: 'rgba(255, 255, 255, 0.3)',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: '#ff923e',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: '#ff923e',
                                                        },
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        color: 'rgba(255, 255, 255, 0.7)',
                                                        '&.Mui-focused': {
                                                            color: '#ff923e',
                                                        },
                                                    },
                                                }}
                                            />
                                        </Grid>
                                    </Grid>

                                    <TextField
                                        fullWidth
                                        label="Subject"
                                        value={contactForm.subject}
                                        onChange={handleContactFormChange('subject')}
                                        required
                                        InputProps={{
                                            startAdornment: <Subject sx={{ color: '#ff923e', mr: 1 }} />,
                                        }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                color: 'white',
                                                '& fieldset': {
                                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: '#ff923e',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#ff923e',
                                                },
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: 'rgba(255, 255, 255, 0.7)',
                                                '&.Mui-focused': {
                                                    color: '#ff923e',
                                                },
                                            },
                                        }}
                                    />

                                    <TextField
                                        fullWidth
                                        label="Message"
                                        multiline
                                        rows={6}
                                        value={contactForm.message}
                                        onChange={handleContactFormChange('message')}
                                        required
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                color: 'white',
                                                '& fieldset': {
                                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: '#ff923e',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#ff923e',
                                                },
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: 'rgba(255, 255, 255, 0.7)',
                                                '&.Mui-focused': {
                                                    color: '#ff923e',
                                                },
                                            },
                                        }}
                                    />

                                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                size="large"
                                                disabled={formSubmitting}
                                                startIcon={<Send />}
                                                sx={{
                                                    backgroundColor: '#ff923e',
                                                    color: 'white',
                                                    px: 6,
                                                    py: 2,
                                                    borderRadius: '30px',
                                                    fontSize: '1.1rem',
                                                    fontWeight: 600,
                                                    textTransform: 'none',
                                                    boxShadow: '0 8px 25px rgba(255, 146, 62, 0.3)',
                                                    '&:hover': {
                                                        backgroundColor: '#e8831f',
                                                        boxShadow: '0 12px 35px rgba(255, 146, 62, 0.4)',
                                                    },
                                                    '&:disabled': {
                                                        backgroundColor: 'rgba(255, 146, 62, 0.5)',
                                                    }
                                                }}
                                            >
                                                {formSubmitting ? 'Sending...' : 'Send Message'}
                                            </Button>
                                        </motion.div>
                                    </Box>
                                </Box>
                            </Card>

                            {/* Contact Info */}
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 6, flexWrap: 'wrap' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'rgba(255, 255, 255, 0.8)' }}>
                                    <Email sx={{ color: '#ff923e' }} />
                                    <Typography variant="body2">{profileData.contact.email}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'rgba(255, 255, 255, 0.8)' }}>
                                    <LocationOn sx={{ color: '#ff923e' }} />
                                    <Typography variant="body2">{profileData.contact.location}</Typography>
                                </Box>
                            </Box>
                        </motion.div>
                    </Container>
                </Box>
            </Box>

            {/* Experience Detail Modal */}
            <Dialog
                open={experienceModalOpen}
                onClose={handleCloseModal}
                maxWidth="md"
                fullWidth
                TransitionComponent={Fade}
                transitionDuration={400}
                PaperProps={{
                    sx: {
                        backgroundColor: 'rgba(15, 15, 35, 0.95)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 146, 62, 0.3)',
                        borderRadius: '20px',
                        color: 'white',
                    }
                }}
            >
                {selectedExperience && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <DialogTitle sx={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            pb: 2,
                            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                            <Box>
                                <Typography variant="h4" sx={{ fontWeight: 700, color: 'white', mb: 1 }}>
                                    {selectedExperience.title}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Business sx={{ color: '#ff923e', fontSize: 20 }} />
                                        <Typography variant="h6" sx={{ color: '#ff923e' }}>
                                            {selectedExperience.company}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <CalendarToday sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 20 }} />
                                        <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                            {selectedExperience.period}
                                        </Typography>
                                    </Box>
                                    {selectedExperience.location && (
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <LocationOn sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 20 }} />
                                            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                                {selectedExperience.location}
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>
                            </Box>
                            <IconButton onClick={handleCloseModal} sx={{ color: 'white' }}>
                                <Close />
                            </IconButton>
                        </DialogTitle>

                        <DialogContent sx={{ pt: 3 }}>
                            {/* Description */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                            >
                                <Box sx={{ mb: 4 }}>
                                    <Typography variant="h6" sx={{ color: '#ff923e', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Description /> Overview
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.7 }}>
                                        {selectedExperience.description}
                                    </Typography>
                                </Box>
                            </motion.div>

                            {/* Responsibilities */}
                            {selectedExperience.responsibilities && (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                >
                                    <Box sx={{ mb: 4 }}>
                                        <Typography variant="h6" sx={{ color: '#ff923e', mb: 2 }}>
                                            Key Responsibilities
                                        </Typography>
                                        <List sx={{ pl: 0 }}>
                                            {selectedExperience.responsibilities.map((responsibility: string, index: number) => (
                                                <ListItem key={index} sx={{ pl: 0, py: 0.5 }}>
                                                    <ListItemText 
                                                        primary={`• ${responsibility}`}
                                                        sx={{ 
                                                            '& .MuiListItemText-primary': { 
                                                                color: 'rgba(255, 255, 255, 0.8)',
                                                                lineHeight: 1.6
                                                            }
                                                        }}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>
                                </motion.div>
                            )}

                            {/* Technologies */}
                            {selectedExperience.technologies && (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.3 }}
                                >
                                    <Box sx={{ mb: 4 }}>
                                        <Typography variant="h6" sx={{ color: '#ff923e', mb: 2 }}>
                                            Technologies Used
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            {selectedExperience.technologies.map((tech: string, index: number) => (
                                                <Chip
                                                    key={index}
                                                    label={tech}
                                                    sx={{
                                                        backgroundColor: 'rgba(255, 146, 62, 0.2)',
                                                        color: '#ff923e',
                                                        border: '1px solid rgba(255, 146, 62, 0.3)',
                                                        '&:hover': {
                                                            backgroundColor: 'rgba(255, 146, 62, 0.3)',
                                                        }
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Box>
                                </motion.div>
                            )}

                            {/* Achievements */}
                            {selectedExperience.achievements && (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.4 }}
                                >
                                    <Box sx={{ mb: 2 }}>
                                        <Typography variant="h6" sx={{ color: '#ff923e', mb: 2 }}>
                                            Key Achievements
                                        </Typography>
                                        <List sx={{ pl: 0 }}>
                                            {selectedExperience.achievements.map((achievement: string, index: number) => (
                                                <ListItem key={index} sx={{ pl: 0, py: 0.5 }}>
                                                    <ListItemText 
                                                        primary={`🏆 ${achievement}`}
                                                        sx={{ 
                                                            '& .MuiListItemText-primary': { 
                                                                color: 'rgba(255, 255, 255, 0.8)',
                                                                lineHeight: 1.6,
                                                                fontWeight: 500
                                                            }
                                                        }}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>
                                </motion.div>
                            )}
                        </DialogContent>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.5 }}
                        >
                            <DialogActions sx={{ p: 3, pt: 0 }}>
                                <Button 
                                    onClick={handleCloseModal}
                                    sx={{
                                        backgroundColor: '#ff923e',
                                        color: 'white',
                                        px: 4,
                                        py: 1,
                                        borderRadius: '25px',
                                        '&:hover': {
                                            backgroundColor: '#e8831f',
                                        }
                                    }}
                                >
                                    Close
                                </Button>
                            </DialogActions>
                        </motion.div>
                    </motion.div>
                )}
            </Dialog>

            {/* Success/Error Alerts */}
            <Snackbar
                open={showSuccessAlert}
                autoHideDuration={6000}
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleCloseAlert}
                    severity="success"
                    sx={{
                        backgroundColor: 'rgba(76, 175, 80, 0.9)',
                        color: 'white',
                        '& .MuiAlert-icon': {
                            color: 'white'
                        }
                    }}
                >
                    Message sent successfully! I'll get back to you soon.
                </Alert>
            </Snackbar>

            <Snackbar
                open={showErrorAlert}
                autoHideDuration={6000}
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleCloseAlert}
                    severity="error"
                    sx={{
                        backgroundColor: 'rgba(244, 67, 54, 0.9)',
                        color: 'white',
                        '& .MuiAlert-icon': {
                            color: 'white'
                        }
                    }}
                >
                    Failed to send message. Please try again or contact me directly.
                </Alert>
            </Snackbar>
        </Box>
    );
};
