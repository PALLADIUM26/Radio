'use client';
// import { signIn } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

// export default function Signin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleSignIn = async (p0: string, p1: { email: string; password: string; redirect: boolean; callbackUrl: string; }) => {
//     try {
//       await signIn('credentials', { email, password, redirect: true, callbackUrl: '/' });
//     } catch (error) {
//       console.error("Sign in error:", error);
//     }
//   };


//   return (
//     <>
//     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <img
//             className="mx-auto h-10 w-auto"
//             src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//             alt="Your Company"
//           />
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
//             Sign in to your account
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <div className="space-y-6">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">
//                   Password
//                 </label>
//                 <div className="text-sm">
//                   <div onClick={() => router.push('/forgot-password')} className="cursor-pointer font-semibold text-indigo-400 hover:text-indigo-300">
//                     Forgot password?
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 onClick={() => handleSignIn('credentials', {email, password, redirect: true, callbackUrl: '/'})}
//                 disabled={!email || !password}
//                 className="disabled:opacity-40 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
//               >
//                 Sign in
//               </button>
//             </div>
//           </div>

//           <p className="mt-10 text-center text-sm text-gray-400">
//             Not a member?{' '}
//             <button onClick={() => router.push('signup')} className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
//               Signup
//             </button>
//           </p>
//         </div>
//       </div>
//     </>
//   )
// }


// 'use client';
// import { signIn } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

// export default function Signin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleSignIn = async () => {
//     const result = await signIn('credentials', {
//       redirect: false,
//       email,
//       password,
//     });
//     if (result?.error) {
//       console.error(result.error);
//     } else {
//       router.push('/');
//     }
//   };

//   const handleForgotPassword = () => {
//     router.push('/forgot-password');
//   };

//   const handleSignUp = () => {
//     router.push('/signup');
//   };

//   return (
//     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//         <img
//           className="mx-auto h-10 w-auto"
//           src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//           alt="Your Company"
//         />
//         <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
//           Sign in to your account
//         </h2>
//       </div>

//       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//         <div className="space-y-6">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
//               Email address
//             </label>
//             <div className="mt-2">
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           <div>
//             <div className="flex items-center justify-between">
//               <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">
//                 Password
//               </label>
//               <div className="text-sm">
//                 <div onClick={handleForgotPassword} className="cursor-pointer font-semibold text-indigo-400 hover:text-indigo-300">
//                   Forgot password?
//                 </div>
//               </div>
//             </div>
//             <div className="mt-2">
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               onClick={handleSignIn}
//               disabled={!email || !password}
//               className="disabled:opacity-40 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
//             >
//               Sign in
//             </button>
//           </div>
//         </div>

//         <p className="mt-10 text-center text-sm text-gray-400">
//           Not a member?{' '}
//           <button onClick={handleSignUp} className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
//             Sign Up
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }



'use client';
import { signIn } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const router = useRouter();

  const handleSignIn =  () => {
    console.log('Attempting to sign in with:', { email, password });
    
      const result =  signIn('credentials', {
        redirect: false,
        // email,
        password,
      });
      // let result = "test"
      console.log('Sign in result:', result);      
      // router.push('/');
    }
  

  const handleForgotPassword = () => {
    router.push('/forgot-password');
  };

  const handleSignUp = () => {
    router.push('/signup');
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">
                Password
              </label>
              <div className="text-sm">
                <div onClick={handleForgotPassword} className="cursor-pointer font-semibold text-indigo-400 hover:text-indigo-300">
                  Forgot password?
                </div>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={handleSignIn}
              disabled={!email || !password}
              className="disabled:opacity-40 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Sign in
            </button>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-gray-400">
          Not a member?{' '}
          <button onClick={handleSignUp} className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}





// import { useState } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import { auth } from '../firebase';

// const LoginComponent: React.FC = () => {
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [error, setError] = useState<string | null>(null);

//   const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
    
//       const userCredential = firebase.auth().signInWithEmailAndPassword(email, password);
//       const user = userCredential.user;
//       // Handle successful login (e.g., redirect, update UI)
    
    
//   };

//   return (
//     <div>
//       <form onSubmit={handleLogin}>Property 'auth' does not exist on type 'typeof import
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default LoginComponent;
