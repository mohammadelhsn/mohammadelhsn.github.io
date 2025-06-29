import { Link } from 'react-router-dom';
import { NAME, EMAIL } from '../data/Data';
import { Box, Typography, Button } from '@mui/material';

const Home = () => {
	return (
		<Box
			sx={{
				height: '100vh',
				width: '100%',
				backgroundImage: `url(/hero.jpg)`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				position: 'relative',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				color: '#fff',
				textAlign: 'center',
				px: 3,
				'&::before': {
					content: '""',
					position: 'absolute',
					inset: 0,
					bgcolor: 'rgba(0, 0, 0, 0.5)', // stronger overlay for max contrast
					zIndex: 1,
				},
			}}
		>
			<Box
				sx={{
					position: 'relative',
					zIndex: 2,
					maxWidth: 600,
					animation: 'fadeInUp 1s ease forwards',
					'@keyframes fadeInUp': {
						'0%': { opacity: 0, transform: 'translateY(20px)' },
						'100%': { opacity: 1, transform: 'translateY(0)' },
					},
				}}
			>
				<Typography
					variant="h1"
					sx={{
						fontWeight: '900',
						mb: 2,
						fontSize: { xs: '2.5rem', sm: '4rem' },
						letterSpacing: '0.05em',
						textShadow: '0 2px 6px rgba(0,0,0,0.8)',
					}}
				>
					Hi, I'm {NAME}
				</Typography>

				<Typography
					variant="h6"
					sx={{
						mb: 4,
						fontWeight: '400',
						fontSize: { xs: '1rem', sm: '1.25rem' },
						lineHeight: 1.6,
						textShadow: '0 1px 4px rgba(0,0,0,0.7)',
					}}
				>
					Computer Science & Psychology student building modern, user-focused
					web apps — passionate about tech & human understanding.
				</Typography>

				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						gap: 3,
						flexWrap: 'wrap',
					}}
				>
					<Button
						component={Link}
						to="/projects"
						variant="contained"
						size="large"
						sx={{
							px: 5,
							fontWeight: 700,
							borderRadius: 3,
							transition: 'all 0.3s ease',
							color: '#fff',
							'&:hover': {
								bgcolor: 'primary.main', // change background color on hover
								transform: 'translateY(-3px)',
							},
						}}
					>
						View My Work
					</Button>

					<Button
						component="a"
						href={`mailto:${EMAIL}`}
						variant="contained"
						size="large"
						sx={{
							px: 5,
							fontWeight: 700,
							borderRadius: 3,
							borderColor: '#fff',
							color: '#fff',
							'&:hover': {
								bgcolor: 'primary.main', // change background color on hover
								transform: 'translateY(-3px)',
							},
						}}
					>
						Contact Me
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
