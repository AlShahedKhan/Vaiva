import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FlashMessageProps {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
}

const FlashMessage: React.FC<FlashMessageProps> = ({ type, message }) => {
  useEffect(() => {
    toast[type](message);
  }, [type, message]);

  return <ToastContainer />;
};

export default FlashMessage;
