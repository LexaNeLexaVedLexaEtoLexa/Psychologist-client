import { Outlet } from 'react-router-dom';
import Header from '@components/Layout/Header';
import Footer from '@components/Layout/Footer';
import ScrollToTop from '@components/ScrollToTop';
import styled from 'styled-components';
import useAuthStore from '@store/authStore';
import { useEffect, useState } from 'react';

const Wrapper = styled.div`
  min-height: 100vh;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Content = styled.div`
  flex: 1;
`;

const App = () => {
  const { user } = useAuthStore();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isPsychologist, setIsPsychologist] = useState<boolean>(false);

  useEffect(() => {
    const checkRole = () => {
      if (user?.role?.name) {
        if (user.role.name === 'ADMIN') {
          setIsAdmin(true);
        } else if (user.role.name === 'PSYCHOLOGIST') {
          setIsPsychologist(true);
        }
      } else {
        setIsAdmin(false);
        setIsPsychologist(false);
      }
    };
    checkRole();
  }, [user]);

  return (
    <>
      <ScrollToTop />
      {!isAdmin && !isPsychologist ? (
        <>
          <Header />
          <Wrapper>
            <Content>
              <Outlet />
            </Content>
          </Wrapper>
          <Footer />
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default App;
