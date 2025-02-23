import { Button } from 'flowbite-react';
import React from 'react';
import { CustomInput } from '../../components';
import { PiCashRegisterThin } from 'react-icons/pi';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <PiCashRegisterThin className="text-5xl" />
        <h1 className="text-2xl font-bold mb-10">Register</h1>
      </div>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <CustomInput
            label={'Username'}
            type="text"
            name="username"
            placeholder="jhon st."
          />
        </div>
        <div>
          <CustomInput
            label={'Email'}
            type="email"
            name="email"
            placeholder="example@gmil.com"
          />
        </div>
        <div>
          <CustomInput
            label={'Password'}
            type="password"
            name="password"
            placeholder="password"
          />
        </div>
        <div>
          <CustomInput
            label={'Repeat Password'}
            type="Confirm Password"
            name="confirmPassword"
            placeholder="password"
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
      <div className="text-center pt-5">
        <span>
          You already have account ? <Link to="/login">Sign in</Link>
        </span>
      </div>
    </>
  );
}

export default RegisterPage;
