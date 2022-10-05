import Header from 'components/header/Header';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <section style={{ width: '100%', height: '100%' }}>
      <Header />
      <Container>{children}</Container>
    </section>
  );
}

export default Layout;

const Container = styled.div``;
