import React from 'react'
import { Link } from 'react-router'
import { useForm } from 'react-hook-form'
import Social from '../components/socialBtn/Social'
function Login() {

  const { register, handleSubmit } = useForm()
  const onSubmit = data =>{
    console.log(data)
  }
  return (
    <div>
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
              <input type="email" name="email" {...register('email')} id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">Password</label>
                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
              </div>
              <input type="password" name="password" {...register('password')} id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button type="submit" className="w-full bg-[#CAEB66] px-8 py-3 font-bold rounded-md ">Sign in</button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
              <Link to='/register'> Register</Link>
            </p>
          </div>
        </form>
        <Social></Social>
      </div>
    </div>
  )
}

export default Login