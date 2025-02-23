import { Button, Checkbox, Label } from 'flowbite-react';
import React from 'react';
import { SiFusionauth } from 'react-icons/si';
import { CustomInput } from '../../components';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <SiFusionauth className="text-5xl" />
        <h1 className="text-2xl font-bold mb-10">Login</h1>
      </div>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <CustomInput
            label={'Your Email'}
            type="email"
            name="email"
            placeholder="example@gmil.com"
          />
        </div>
        <div>
          <CustomInput
            label={'Your Password'}
            type="password"
            name="password"
            placeholder="password"
          />
        </div>
        <div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Link to="/forget-password" className="text-cyan-700 text-sm">
              Forget Password
            </Link>
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
      <div className="text-center pt-5">
        <span>
          You don't have account ? <Link to="/register">Sign up</Link>
        </span>
      </div>
    </>
  );
}

export default LoginPage;
