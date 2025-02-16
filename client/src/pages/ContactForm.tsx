import React, { useState } from 'react';
import Input from '../components/Input';
import {  z } from 'zod';
import axios from 'axios';

import {
  EnvelopeIcon,
  PhoneArrowDownLeftIcon,
} from '@heroicons/react/24/outline';

const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email' }),
  phone: z.string().optional(),
  companyName: z.string().optional(),
  message: z.string().min(1, { message: 'Message is required' }),
});

const baseUrl = import.meta.env.VITE_BASE_URL;
// const baseUrl = import.meta.env.REACT_APP_API_URL;



const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const result = formSchema.safeParse({
        name,
        email,
        phone,
        companyName,
        message,
      });

      if (!result.success) {
        console.log(result.error);
        return;
      }

      const response = await axios.post(`${baseUrl}/api/v1/user/hireme`, {
        name,
        email,
        phone,
        companyName,
        message,
      } );

      console.log(response.data);
    } catch (error) {
      console.log(error);

    } finally {
      setIsLoading(false);

      setName('');
      setEmail('');
      setPhone('');
      setCompanyName('');
      setMessage('');

    }
    
  };

  return (

    <section>
      <h1 className='text-4xl font-bold text-center mb-16'>Contact</h1>
      <div  className='w-full flex flex-col sm:flex-row gap-4 p-6 mx-auto'>
        <div className='w-1/2 '>
          <h1 className='text-4xl font-medium leading-tight'>
            Let's Talk. <br />
            Tell me about your
            <br /> project.
          </h1>

          <p className='mt-5 mb-10 tracking-wide'>
            Lets build something great together
          </p>

          <div className='bg-primaryWhite rounded-xl py-4 px-8  mt-2 text-olivedark flex flex-col gap-3 w-fit'>
            <p className='flex items-center gap-2'>
              <EnvelopeIcon  className='w-5 h-5 font-medium ' />
              <span className='font-medium'>ravinder50300@gmail.com</span>
            </p>
            <p className='flex items-center gap-2'>
              <PhoneArrowDownLeftIcon className='w-5 h-5 font-medium' />{' '}
              <span className='font-medium'>+91 9541040307</span>
            </p>
          </div>
        </div>

        {/* form */}
        <form onSubmit={onSubmitHandler}>
          <div className='flex flex-col gap-4 sm:gap-6 text-olivedark'>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Input
                type='text'
                name='name'
                value={name}
                placeholder='Full Name'
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type='email'
                name='email'
                value={email}
                placeholder='Email Address'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Input
                type='text'
                name='company'
                value={companyName}
                placeholder='Company Name (optional)'
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <Input
                type='text'
                name='phone'
                value={phone}
                placeholder='Phone Number'
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <textarea
                className='w-full text-sm px-2 py-1'
                placeholder='Tell me about your project...'
                name='textarea'
                cols={30}
                rows={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type='submit'
              className='bg-primaryYellow  text-primaryBlack px-4 py-2 capitalize rounded-3xl w-fit'
            >
             {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
        </div>
      </section>

  );
};

export default ContactForm;
