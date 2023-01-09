import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser, uptadeUser, createUserWithGoogle} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');

    const googleProvider = new GoogleAuthProvider();

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handlegoogleSignUp = () => {
        createUserWithGoogle(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true})
            toast.success('User Created Successfully');
        })
        .catch(error => {
            console.log(error);
            toast.error(error.message);
        })
    }

    const handleSignup = data => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
            navigate(from, {replace: true})
            toast.success('User Created Successfully');
            const userInfo = {
                displayName: data.name
            }
            uptadeUser(userInfo)
                .then(() => { })
                .catch(err => console.log(err));
        })
        .catch(error => {
            console.log(error)
            setSignUpError(error.message)
        });
    }

    return (
        <div className='w-1/3 mx-auto shadow-lg rounded-md p-10 my-16'>
            <h1 className='text-2xl font-semibold text-accent  mb-5 text-center'>Signup</h1>
            <form onSubmit={handleSubmit(handleSignup)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl">Name</span>
                    </label>
                    <input type="text" {...register("name", { required: 'Name is required' })} className="input input-bordered w-full" />
                    {errors.name && <p className='text-red-600 mt-1'>{errors.name.message}</p>}
                    <label className="label">
                        <span className="label-text text-xl">Email</span>
                    </label>
                    <input type="email" {...register('email', { required: 'Email is required' })} className="input input-bordered w-full" />
                    {errors.email && <p className='text-red-600 mt-1'>{errors.email.message}</p>}
                    <label className="label">
                        <span className="label-text text-xl">Password</span>
                    </label>
                    <input type="password" {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'password must be 6 charecter' }, pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'password must be strong' } })} className="input input-bordered w-full" />
                    {errors.password && <p className='text-red-600 mt-1'>{errors.password.message}</p>}
                    <label className="label">
                        <span className="label-text"><Link to='/'>Forgot Password</Link></span>
                    </label>
                </div>
                <input className='btn mt-3 w-full btn-accent justify-center' type="submit" value='SignUp' />
            </form>
            <h1 className='text-center mt-4'>Already Have Account? <Link className='
        text-primary' to='/login'>Login</Link></h1>
            <div className="divider">OR</div>
            <button onClick={handlegoogleSignUp} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
    );
};

export default SignUp;