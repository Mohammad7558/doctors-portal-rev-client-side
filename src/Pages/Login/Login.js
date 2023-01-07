import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);

    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true})
                toast.success('User Login Successfully')
            })
            .catch(error => {
                console.log(error.message)
                toast.error(error.message)
                setLoginError('Wrong Password')
            });
    }

    return (
        <div className='w-1/3 mx-auto shadow-lg rounded-md p-10 my-16'>
            <h1 className='text-2xl font-semibold text-accent  mb-5 text-center'>Login</h1>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl">Email</span>
                    </label>
                    <input {...register("email", {
                        required: "Email is required"
                    })}
                        type="email" className="input input-bordered w-full" />
                    {errors.email && <p className='text-red-600 mt-1'>{errors.email?.message}</p>}
                    <label className="label">
                        <span className="label-text text-xl">Password</span>
                    </label>
                    <input {...register("password", { required: "Password is required", minLength: { value: 6, message: 'Password should be min 6 charecter' } })} type="password" className="input input-bordered w-full" />
                    {errors.password && <p className='text-red-600 mt-1'>{errors.password.message}</p>}
                    <p className='text-red-600'>{loginError}</p>
                    <label className="label">
                        <span className="label-text"><Link to='/'>Forgot Password</Link></span>
                    </label>
                </div>
                <input className='btn mt-3 w-full btn-accent justify-center' type="submit" value='Login' />
            </form>
            <h1 className='text-center mt-4'>New to Doctors Portal? <Link className='
            text-primary' to='/signup'>Create new account</Link></h1>
            <div className="divider">OR</div>
            <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
    );
};

export default Login;