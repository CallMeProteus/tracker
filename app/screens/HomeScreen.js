import React, { useContext,useState } from 'react';
import Floating from '../components/FloatingAction';
import Tasks from '../components/Tasks';

export default function HomeScreen() {

  return (
    <>
        <Tasks/>
        <Floating/>
    </>
    
  );
}

