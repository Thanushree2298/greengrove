import React from 'react';
import { Button } from './ui/button';



const Contact = () => {
  return (
    <div className='flex items-center justify-center'>
    <div id="contact" className="contactform-box">
      <section className="text-3xl text-center font-bold py-5">Get in Touch</section>
      <div className='text-center font-medium text-medium'>You can reach us anytime</div>
      
      {/* <form
        action="#"
        method="POST"
        className="mx-auto mt-5 max-w-xl sm:mt-20"
      >
        <div className="grid  gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder='Name'
                className="block w-full rounded border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          
          
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder='example@mail.com'
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="Phone number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone Number
            </label>
            <div className="mt-2.5">
              <input
                type="telephone"
                name="telephone"
                id="telephone"
                autoComplete="telephone"
                placeholder='1234456789'
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2 lg:row-span-3">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <input
                type="message"
                name="message"
                id="message"
                autoComplete="message"
                placeholder='Type your message here'
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          
          
    </div>
    <div className="mt-10">
      <button type="submit" className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-gray-300 ">Let's talk</button>
    </div>
    </form> */}
            <form className='form flex items-center justify-center mt-5'>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                placeholder='Name'
                className='input'
              />
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="given-email"
                placeholder='Your email'
                className='input'
              />
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="given-number"
                placeholder='Your phone number'
                className='input'
              />
              <input
                type="text"
                name="message"
                id="message"
                autoComplete="message"
                placeholder='Leave your message here...'
                className='inputmessage'
              />
             <Button className='button w-3/4'>Submit</Button>
              <p className='text-small'>By Submiiting this form you agree to our privacy and policy</p>
            </form>
</div>

</div>             
                  
  )}

  export default Contact;