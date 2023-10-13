import { useState } from "react"
import {server} from "../config/index"

export default function SignupNewsletter() {
  //useState to manage state for email address
  const [email,setEmail]  = useState(null) 

    const submitHandler = async(e) => {
      e.preventDefault()
      //validate email address
      //if valid
      if(email != null && email != undefined){
        //submit email address to backend
        const addEmail = await fetch(`${server}/api/newsletter`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({email:email})
        })
        //show success message
        alert("Email address added successfully.Thank you for subscribing to our newsletter.")
      } else {
        //show error message
        alert("Email address is invalid")
        throw new Error("Email address is invalid")
      }

    }
    return (
        <div className="bg-white">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl sm:tracking-tight">
              Sign up for our newsletter
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
            Subscribe to our blog newsletter for the latest articles, satires, and stories   delivered to your inbox.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <form onSubmit={submitHandler} className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs rounded-md"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Notify me
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm text-gray-500">
              We care about the protection of your data. Read our{' '}
              <a href="#" className="font-medium underline">
                Privacy Policy.
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
  