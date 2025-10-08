import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Divider,
  LinearProgress,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Work,
  School,
  Code,
  Language,
  GitHub,
  LinkedIn,
  Twitter,
} from '@mui/icons-material';
import { BreakpointService } from 'src/services/breakpoint.service';

export interface IProps {
  breakpointService: BreakpointService;
}

export const Profile = (props: IProps) => <Component {...props} />;

const Component: React.FunctionComponent<IProps> = (props) => {
  // Profile data based on your professional information
  const profileData = {
    name: 'Kent Adrian Sato',
    title: 'Senior Full Stack Software Engineer',
    avatar: 'https://github.com/adriankentsato.png', // GitHub profile picture
    bio: 'Seasoned Full Stack Software Engineer with 8+ years of experience in enterprise application development and system modernization. Proven track record in leading technical migrations, including legacy PHP and Mule code to AWS serverless architecture. Strong background in full-stack development with Angular, PHP, and AWS services.',
    contact: {
      email: 'adriankentsato@gmail.com',
      phone: '(+63) 968 872 7968',
      location: 'Cebu, Philippines',
    },
    social: {
      github: 'https://github.com/adriankentsato',
      linkedin: 'https://linkedin.com/in/kentscientist',
      twitter: 'https://twitter.com/adriankentsato',
    },
    skills: [
      { name: 'JavaScript/TypeScript', level: 95 },
      { name: 'Angular', level: 90 },
      { name: 'Node.js/Express.js', level: 85 },
      { name: 'AWS Services', level: 90 },
      { name: 'Java/PHP', level: 85 },
      { name: 'Database Design', level: 80 },
      { name: 'DevOps/CI/CD', level: 85 },
      { name: 'React (Learning)', level: 60 },
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
        description: 'Spearheaded migration of legacy PHP and Mule applications to AWS Lambda architecture. Led development and maintenance of portal software integrated with SAP TM. Architected and implemented frontend solutions using Angular. Developed comprehensive onboarding documentation, reducing new developer ramp-up time by 40%.',
      },
      {
        title: 'Senior Software Developer & DevOps Lead',
        company: 'AboveDigital.co',
        period: 'October 2018 - March 2023',
        description: 'Architected and developed comprehensive ERP solution using MEAN stack. Led and mentored a team of 6 developers. Established coding standards and best practices. Designed and implemented CI/CD pipelines using CircleCI. Managed cloud infrastructure on AWS including EC2, RDS.',
      },
      {
        title: 'Freelance Web Developer',
        company: 'Remote',
        period: 'February 2017 - October 2018',
        description: 'Maintained WordPress and Shopify e-commerce websites. Performed SEO optimization and image editing for product listings. Managed product data entry and inventory. Optimized website performance and user experience.',
      },
      {
        title: 'Web Developer Intern',
        company: 'Neso Technical Solutions Inc',
        period: 'March 2018 - September 2018',
        description: 'Designed mockups, sitemaps, and wireframes with focus on responsiveness and user experience. Implemented designs using plain HTML, CSS, and JavaScript. Collaborated with team by providing updates and meeting project timelines.',
      },
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Engineering',
        school: 'Cebu Institute of Technology - University',
        period: '2014 - 2018',
        additional: 'Member of Institute of Computer Engineers of the Philippines (ICpEP)',
      },
    ],
    projects: [
      {
        title: 'Logistics Portal Modernization',
        technologies: 'Angular, AWS Lambda, Node.js, SAP TM',
        description: 'Led the frontend development of a logistics management portal using Angular. Integrated with SAP TM for real-time shipment tracking and management. Implemented responsive design ensuring optimal performance across devices.',
      },
      {
        title: 'Legacy System Migration',
        technologies: 'AWS Serverless, MuleSoft, Java, Python',
        description: 'Architected and executed migration of legacy PHP/Mule applications to AWS Lambda. Reduced operational costs by 60% through serverless implementation. Improved system reliability with automated scaling and monitoring.',
      },
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Profile Header */}
        <Grid item xs={12}>
          <Card elevation={3}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={3} flexWrap="wrap">
                <Avatar
                  src={profileData.avatar}
                  sx={{ width: 120, height: 120 }}
                  alt={profileData.name}
                >
                  {profileData.name.split(' ').map(n => n[0]).join('')}
                </Avatar>
                <Box flex={1}>
                  <Typography variant="h3" component="h1" gutterBottom>
                    {profileData.name}
                  </Typography>
                  <Typography variant="h5" color="primary" gutterBottom>
                    {profileData.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {profileData.bio}
                  </Typography>
                  <Box display="flex" gap={1} flexWrap="wrap">
                    {profileData.technologies.slice(0, 5).map((tech) => (
                      <Chip key={tech} label={tech} variant="outlined" size="small" />
                    ))}
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Contact & Social */}
        <Grid item xs={12} md={4}>
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <Email color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={profileData.contact.email} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Phone color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={profileData.contact.phone} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocationOn color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={profileData.contact.location} />
                </ListItem>
              </List>
              
              <Divider sx={{ my: 2 }} />
              
              <Typography variant="h6" gutterBottom>
                Social Links
              </Typography>
              <List dense>
                <ListItem component="a" href={profileData.social.github} target="_blank">
                  <ListItemIcon>
                    <GitHub color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="GitHub" />
                </ListItem>
                <ListItem component="a" href={profileData.social.linkedin} target="_blank">
                  <ListItemIcon>
                    <LinkedIn color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="LinkedIn" />
                </ListItem>
                <ListItem component="a" href={profileData.social.twitter} target="_blank">
                  <ListItemIcon>
                    <Twitter color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Twitter" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Skills & Technologies */}
        <Grid item xs={12} md={8}>
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Technical Skills
              </Typography>
              <Grid container spacing={2}>
                {profileData.skills.map((skill) => (
                  <Grid item xs={12} sm={6} key={skill.name}>
                    <Box>
                      <Box display="flex" justifyContent="space-between" mb={1}>
                        <Typography variant="body2">{skill.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{ height: 8, borderRadius: 4 }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
              
              <Divider sx={{ my: 3 }} />
              
              <Typography variant="h6" gutterBottom>
                Technologies & Tools
              </Typography>
              <Box display="flex" gap={1} flexWrap="wrap">
                {profileData.technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    color="primary"
                    variant="outlined"
                    size="small"
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Experience */}
        <Grid item xs={12} md={6}>
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <Work sx={{ mr: 1, verticalAlign: 'middle' }} />
                Experience
              </Typography>
              {profileData.experience.map((exp, index) => (
                <Box key={index} mb={3}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {exp.title}
                  </Typography>
                  <Typography variant="subtitle2" color="primary">
                    {exp.company}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {exp.period}
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    {exp.description}
                  </Typography>
                  {index < profileData.experience.length - 1 && <Divider sx={{ mt: 2 }} />}
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Education */}
        <Grid item xs={12} md={6}>
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <School sx={{ mr: 1, verticalAlign: 'middle' }} />
                Education
              </Typography>
              {profileData.education.map((edu, index) => (
                <Box key={index} mb={2}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {edu.degree}
                  </Typography>
                  <Typography variant="subtitle2" color="primary">
                    {edu.school}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" display="block">
                    {edu.period}
                  </Typography>
                  {edu.additional && (
                    <Typography variant="body2" color="text.secondary" mt={1}>
                      {edu.additional}
                    </Typography>
                  )}
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Projects */}
        <Grid item xs={12}>
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <Code sx={{ mr: 1, verticalAlign: 'middle' }} />
                Key Projects
              </Typography>
              <Grid container spacing={3}>
                {profileData.projects.map((project, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
                      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                        {project.title}
                      </Typography>
                      <Box mb={2}>
                        <Typography variant="caption" color="primary" fontWeight="medium">
                          Technologies: 
                        </Typography>
                        <Typography variant="body2" component="span" ml={1}>
                          {project.technologies}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
