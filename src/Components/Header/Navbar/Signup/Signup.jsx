import { useForm } from "react-hook-form";

const Signup = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = data=>{
        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">StudentId</span>
                        </label>
                        <input type="text" {...register("studentid",{required:true})} placeholder="Student Id" className="input input-bordered" />
                        {errors.studentid && <span className="text-red-600">**This field is required**</span>}
                        
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" {...register("email",{required:true})} placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-red-600">**This field is required**</span>}
                        
                    </div>
                    <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-red-600">**This field is required**</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600">**Password must be 6 characters**</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600">**Password must have one uppercase,one lowercase one number and one special character**</span>}

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                
                </form>
                   
                </div>
            </div>
        </div>
    );
};

export default Signup;