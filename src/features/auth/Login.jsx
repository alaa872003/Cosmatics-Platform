import React from 'react'
import { z } from "zod";
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router';

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Invalid password"),
});

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = (data) => console.log(data);

  return (
    <section className="min-h-screen flex items-center justify-center bg-cream dark:bg-[#050505] px-6 py-20 transition-colors duration-500">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-dustyRose mb-4">Welcome Back</h2>
          <h1 className="text-4xl font-heading text-charcoal dark:text-white uppercase tracking-widest">Login</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
          <div className="space-y-1">
            <input 
              {...register("email")} 
              placeholder="Email Address" 
              className="w-full bg-transparent border-b border-charcoal/10 dark:border-white/10 py-3 px-1 outline-none focus:border-dustyRose dark:focus:border-softGold transition-colors text-charcoal dark:text-white placeholder:text-charcoal/30 dark:placeholder:text-white/20"
            />
            {errors.email && <p className="text-[10px] uppercase tracking-wider text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          <div className="space-y-1">
            <input 
              {...register("password")} 
              type="password" 
              placeholder="Password" 
              className="w-full bg-transparent border-b border-charcoal/10 dark:border-white/10 py-3 px-1 outline-none focus:border-dustyRose dark:focus:border-softGold transition-colors text-charcoal dark:text-white placeholder:text-charcoal/30 dark:placeholder:text-white/20"
            />
            {errors.password && <p className="text-[10px] uppercase tracking-wider text-red-500 mt-1">{errors.password.message}</p>}
          </div>

          <button 
            type="submit" 
            className="w-full py-5 bg-charcoal  text-white  uppercase text-xs font-bold tracking-[0.3em] hover:bg-dustyRose dark:bg-dustyRose dark:hover:bg-softGold transition-all duration-500"
          >
            Sign In
          </button>

          <p className="text-center text-xs tracking-widest text-charcoal/60 dark:text-gray-400 uppercase">
            New here? 
            <Link to="/signUp" className="ml-2 text-dustyRose dark:text-softGold font-bold hover:underline">Register</Link>
          </p>
        </form>
      </div>
    </section>
  );
}