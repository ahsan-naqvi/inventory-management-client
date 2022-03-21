import React, { useState } from 'react';
import ProductData from '../../components/ProductData/index';
import WarehouseProductForm from '../../components/Form/WarehouseProductForm';
import StoreProductForm from '../../components/Form/StoreProductForm';
import Search from '../../components/Search';
import { Button, ButtonLabel, Header, Icon } from './Styled';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../Theme/Styled';
import Loader from '../../components/Loader';

const HomePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  const btnLogoutClickHandler = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.removeItem('token');
      navigate('/');
    }, 1000);
  }

  return (
    <Container data-layout="row" data-layout-align="space-between start" data-layout-wrap="true">
      <Header>
        <Button onClick={btnLogoutClickHandler}><Icon>arrow_forward</Icon><ButtonLabel>Logout</ButtonLabel></Button>
        {loading && <Loader />}
      </Header>
      <WarehouseProductForm />
      <StoreProductForm />
      <Search />
      <ProductData />

    </Container>
  );
}

export default HomePage;