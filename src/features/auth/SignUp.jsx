// import React from "react";
// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Link } from "react-router";

// const SignUpSchema = z.object({
//   name: z.string().min(2, "Name is required"),
//   email: z.string().email("Invalid email address"),
//   password: z.string().min(6, "Password must be at least 6 characters"),
//   confirmPassword: z.string("Please confirm your password"),
// }).refine((data) => data.password === data.confirmPassword, {
//   message: "Passwords do not match",
//   path: ["confirmPassword"],
// });;

// export default function SignUp() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: zodResolver(SignUpSchema) });

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="mt-20 flex flex-col gap-5 mx-auto w-100 md-300 px-4 sm:px-10"
//     >
//       <input
//         {...register("name")}
//         placeholder="name"
//         className="border  px-3 py-2"
//       />
//       <input
//         {...register("email")}
//         placeholder="example@gmail.com"
//         className="border px-3 py-2"
//       />
//       {errors.email && <p className="text-red-700">{errors.email.message}</p>}

//       <input
//         {...register("password")}
//         type="password"
//         placeholder="Password"
//         className="border px-3 py-2"
//       />
//       {errors.password && (
//         <p className="text-red-700">{errors.password.message}</p>
//       )}

//       <input
//         {...register("confirmPassword", {
//         })}
//         type="password"
//         placeholder="Confirm Password"
//         className="border px-3 py-2"
//       />
//       {errors.confirmPassword && (
//         <p className="text-red-700">{errors.confirmPassword.message}</p>
//       )}

//     <p className="text-center">I have Already account |<Link to="/login" className="text-amber-600"> Login</Link></p>
//       <input
//         type="submit"
//         className="bg-gray-600 text-white p-4 hover:bg-gray-500 transition-colors"
//       />
//     </form>
//   );
// }


import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router";

const SignUpSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(1, "Please confirm your password"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm({ 
    resolver: zodResolver(SignUpSchema) 
  });

  const onSubmit = (data) => console.log(data);

  return (
    <section className="min-h-screen flex items-center justify-center bg-cream dark:bg-[#050505] px-6 py-20 transition-colors duration-500">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-dustyRose mb-4">Join Us</h2>
          <h1 className="text-4xl font-heading text-charcoal dark:text-white uppercase tracking-widest">Create Account</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
          <div className="space-y-1">
            <input
              {...register("name")}
              placeholder="Full Name"
              className="w-full bg-transparent border-b border-charcoal/10 dark:border-white/10 py-3 px-1 outline-none focus:border-dustyRose dark:focus:border-softGold transition-colors text-charcoal dark:text-white placeholder:text-charcoal/30 dark:placeholder:text-white/20"
            />
            {errors.name && <p className="text-[10px] uppercase tracking-wider text-red-500 mt-1">{errors.name.message}</p>}
          </div>

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

          <div className="space-y-1">
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirm Password"
              className="w-full bg-transparent border-b border-charcoal/10 dark:border-white/10 py-3 px-1 outline-none focus:border-dustyRose dark:focus:border-softGold transition-colors text-charcoal dark:text-white placeholder:text-charcoal/30 dark:placeholder:text-white/20"
            />
            {errors.confirmPassword && <p className="text-[10px] uppercase tracking-wider text-red-500 mt-1">{errors.confirmPassword.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-5 bg-charcoal  text-white  uppercase text-xs font-bold tracking-[0.3em] hover:bg-dustyRose dark:bg-dustyRose dark:hover:bg-softGold transition-all duration-500"
          >
            Register
          </button>

          <p className="text-center text-xs tracking-widest text-charcoal/60 dark:text-gray-400 uppercase">
            Already have an account? 
            <Link to="/login" className="ml-2 text-dustyRose dark:text-softGold font-bold hover:underline">Login</Link>
          </p>
        </form>
      </div>
    </section>
  );
}