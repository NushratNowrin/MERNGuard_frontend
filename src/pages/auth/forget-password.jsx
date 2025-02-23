import { Button } from 'flowbite-react';
import React from 'react';
import { SiFusionauth } from 'react-icons/si';
import { CustomInput } from '../../components';
import { Link } from 'react-router-dom';

function ForgetPasswordPage() {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <SiFusionauth className="text-5xl" />
        <h1 className="text-2xl font-bold mb-10">Forget Password</h1>
      </div>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <CustomInput
            type="email"
            name="email"
            placeholder="example@gmil.com"
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
      <div className="text-center pt-5">
        <span>
          You don't have account ? <Link to="/login">Sign in</Link>
        </span>
      </div>
    </>
  );
}

export default ForgetPasswordPage;
