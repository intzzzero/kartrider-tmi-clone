import React, { memo, useState, useEffect } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';

const Main = memo(() => {
  return (
    <>
      <Navigation />
      <Footer />
    </>
  );
});

export default Main;
