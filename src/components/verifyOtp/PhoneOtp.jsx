import React, { useRef } from 'react';
import OtpForm from './OtpForm';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/AxiosInstance';
import toast from 'react-hot-toast';
import { useAuth } from '../../hooks/useAuth';

const PhoneOtp = () => {
  const { updateUser } = useAuth();
  const navigate = useNavigate();
  const inputsRef = useRef([]);

  const getTheOtp = () => {
    let Otp = inputsRef.current?.map((item) => item.value);
    return Otp.join('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/verify-phone', {
        otp: await getTheOtp(),
        userId: window.location.href.split('=')[1],
      });
      console.log(response, 'from the response line 25');
      updateUser(response.data.data);
      toast.success('Phone Verified Success');
      navigate('/user-profile');
    } catch (error) {
      console.log(error, 'from email verification ');
    }
  };
  return (
    <div>
      <OtpForm inputsRef={inputsRef} handleSubmit={handleSubmit} />
    </div>
  );
};

export default PhoneOtp;
