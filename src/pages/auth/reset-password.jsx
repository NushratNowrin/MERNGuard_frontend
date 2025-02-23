import { Button } from 'flowbite-react';
import React from 'react';
import { CustomInput } from '../../components';
import { PiCashRegisterThin } from 'react-icons/pi';

function ResetPasswordPage() {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <PiCashRegisterThin className="text-5xl" />
        <h1 className="text-2xl font-bold mb-10">Reset Password</h1>
      </div>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <CustomInput
            label={'Your Passowrd'}
            type="password"
            name="password"
            placeholder="password"
          />
        </div>
        <div>
          <CustomInput
            label={'Repeat Passowrd'}
            type="Confirm Password"
            name="confirmPassword"
            placeholder="password"
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}

export default ResetPasswordPage;
