import { Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

const PageImage = styled('div')(({ theme }) => ({
  backgroundImage: `url("/public/images/main.jpg")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const PrivacyPolicyPage = () => {
  return (
    <Container>
      <PageImage>
        <Typography variant="h4" align="center" gutterBottom>
          О нас
        </Typography>
      </PageImage>
    </Container>
  );
};

export default PrivacyPolicyPage;
