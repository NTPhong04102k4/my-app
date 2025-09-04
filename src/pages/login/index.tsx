import React from 'react';
import styled from 'styled-components';
import { LoadingSpinner } from 'src/component/loadingSpinner';
import loadingImage from 'src/assets/images/login/loading_page.png';
import logoImage from 'src/assets/images/login/logo.png';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-image: url(${loadingImage});
  background-size: cover;
  background-position: center;
`;

const LoginCard = styled.div`
  width: 100%;
  max-width: 28rem;
  padding: 1.5rem;
  background-color: #181818;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const Logo = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const WelcomeText = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #016afd;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const LoadingText = styled.span`
  color: #FFF;
  margin-left: 0.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  color: white;
  border-radius: 0.375rem;
  transition: background-color 0.3s;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5rem;
  }
`;

const GoogleButton = styled(Button)`
  background-color: transparent;
  border-radius: 25px;
  border-width: 1px;
  border-color: #FFF;
  &:hover {
    background-color: #b91c1c;
  }
`;

const FacebookButton = styled(Button)`
 background-color: transparent;
  border-radius: 25px;
  border-width: 1px;
  border-color: #FFF;
  &:hover {
    background-color: #1d4ed8;
  }
`;

const Login = () => {
  return (
    <LoginContainer>
      <LoginCard>
        <LogoContainer>
          <Logo src={logoImage} alt="Logo" />
          <WelcomeText>Welcome</WelcomeText>
        </LogoContainer>
        
        <LoadingContainer>
          <LoadingSpinner size={24} color="border-gray-500" borderSize={6}/>
          <LoadingText>Loading</LoadingText>
        </LoadingContainer>
        
        <ButtonContainer>
          <GoogleButton>
          <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
              </g>
            </svg>
            Sign in with Google
          </GoogleButton>
          <FacebookButton>
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" />
            </svg>
            Sign in with Facebook
          </FacebookButton>
        </ButtonContainer>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
