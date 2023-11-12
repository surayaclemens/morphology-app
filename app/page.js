'use client'
import Image from 'next/image';
import React, { useState } from 'react';

function HomePage() {

  const [userEmail, setEmail] = useState('');
  const [message, setMessage] = useState([]);

  let handleNewsletterSubmit = async () => {
    console.log(userEmail)

    const res = await fetch('api/newsletterSubscriber', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        userEmail
      })
    });

    const { msg } = await res.json();
    setMessage(msg);
    console.log(message)
  }

  return (
    <div>
      {/* SECTION WITH GRADIENT BG */}
      <section className='bg-gradient-to-b from-lilac to-white px-8 py-16 md:py-24 space-y-16'>
      {/* HERO */}
        <div className='flex flex-col justify-center items-center space-y-6'>
          <Image className='' alt='Morphology' src='/wordmark-white.png' width='960' height='300'/>
          <h3 className='text-white text-center text-3xl lg:text-3xl'>is a fun and easy way to learn your heritage language!</h3>
          {/* Mobile Image */}
          <div className="md:hidden">
            <Image src="/tetris-mobile.png" alt="Mobile Tetris Blocks" width={320} height={300} />
          </div>
          {/* Desktop Image */}
          <div className="hidden md:block">
            <Image src="/tetris-desktop.png" alt="Desktop Tetris Blocks" width={800} height={360} />
          </div>
        </div>

        {/* QUESTION GIRL  */}
        <div className='flex flex-col justify-center items-center space-y-8 relative lg:py-8'>
          <h2 className='text-midnight text-center md:text-left text-3xl lg:text-5xl md:w-1/3 md:relative right-32'>Okay, so what is a heritage language?</h2>
          <Image className='md:absolute right-16 lg:right-72 xl:right-1/4' alt='question mark illustration' src='/question-girl.svg' width='250' height='300'/>
          <div className='bg-lilac rounded-lg p-6 text-center md:w-1/2 md:relative md:right-20 lg:right-32 xl:right-48 lg:w-1/3 xl:w-1/4'>
            <p className='text-white text-lg lg:text-xl'>A heritage language is a language that is not the dominant one in a given social context, but is familiar to an individual, family, or community.</p>
          </div>
        </div>
      </section>

      {/* SECTION WITH PURPLE BG */}
      <section className='bg-lilac flex flex-col justify-center items-center space-y-16 px-8 py-16 md:py-32'>
        {/* EXAMPLE CARDS */}
        <h2 className='text-white text-3xl lg:text-5xl'>For example...</h2>
        {/* container holding cards */}
        <div className='flex flex-col lg:flex-row justify-center space-y-16 md:space-y-0 lg:space-x-16 xl:space-x-24'>

          <div className='flex flex-col justify-start items-center space-y-8'>
            <Image alt='reading illustration' src='/reading-girl.png' width='250' height='250'/>
            <div className='bg-midnight rounded-lg p-4 flex justify-center items-center text-center text-white w-72 h-48'>
              <p>Saffia was raised in Vancouver speaking English in her day-to-day life, and learning some French at school; the two “official languages” of Canada.</p>
            </div>
          </div>

          <div className='flex flex-col justify-start items-center space-y-8'>
            <Image alt='mosque illustration' src='/mosque.png' width='250' height='250'/>
            <div className='bg-midnight rounded-lg p-4 flex justify-center items-center text-center text-white w-72 h-48'>
              <p> But she always heard her grandparents and other relatives speaking Kutchi in their home and at the local mosque.</p>
            </div>
          </div>

          <div className='flex flex-col justify-start items-center space-y-8'>
            <Image alt='family illustration' src='/grandma-girl.png' width='250' height='250'/>
            <div className='bg-midnight rounded-lg p-4 flex justify-center items-center text-center text-white w-72 h-48'>
              <p>She doesn’t speak or understand Kutchi herself, but is familiar with and connected to it through her relatives and their shared heritage.</p>
            </div>
          </div>

        </div>

      </section>

      {/* SECTION WITH WHITE BG */}
      <section className='bg-white text-midnight flex flex-col justify-center items-center text-center space-y-4 md:space-y-8 px-8 py-16 md:py-32'>
          <h2 className='text-midnight text-3xl md:w-3/4 lg:w-1/2 lg:text-5xl'>Heritage languages are vital to identity, culture, and belonging.</h2>

          <div className='flex flex-col space-y-4 md:space-y-8'>
            <div className='flex flex-col justify-center items-center space-y-4 md:space-x-4 md:flex-row'>
              <Image alt='flower illustration' src='/flower-pink.svg' width='50' height='50'/>
              <p className='text-lg lg:text-xl md:w-3/4 md:text-start lg:w-1/2'>They help us as individuals understand and make meaning of the connections between ourselves and society - in the past, the present and the future.</p>
            </div>

            <div className='flex flex-col justify-center items-center space-y-4 md:space-x-4 md:flex-row'>
              <Image alt='flower illustration' src='/flower-yellow.svg' width='50' height='50'/>
              <p className='text-lg lg:text-xl md:w-3/4 md:text-start lg:w-1/2'>They enrich our shared communities with great varieties of sound, conversation, written works, art, and expression of unique concepts and emotions.</p>
            </div>

            <div className='flex flex-col justify-center items-center space-y-4 md:space-x-4 md:flex-row'>
              <Image alt='flower illustration' src='/flower-green.svg' width='50' height='50'/>
              <p className='text-lg lg:text-xl md:w-3/4 md:text-start lg:w-1/2'>They are a means of feeling safe, connected, and a part of something larger than ourselves.</p>
            </div>
          </div>

      </section>


      {/* SECTION WITH PURPLE BG */}
      <section className='bg-lilac flex flex-col justify-center items-center text-center px-8 pt-24 pb-8 space-y-4'>
        <h2 className='text-white text-3xl lg:text-5xl'>Ready to learn?</h2>
        <div className='w-full py-6 flex flex-col justify-center items-center space-y-4'>
          <p className='text-midnight text-lg lg:text-xl'>We love to hear it.</p>
          <p className='text-midnight text-lg lg:text-xl md:w-2/3'>The app is under development, so you can't play it juust yet.</p>
          <p className='text-midnight text-lg lg:text-xl md:w-2/3'>But we’d be glad to let you know when you can!</p>
          <p className='text-midnight text-lg lg:text-xl'>Drop your email below :)</p>
        </div>
        <div className='py-4 flex flex-col space-y-4'>
          <input className='rounded-md px-6 py-2 text-midnight' placeholder='youremail@address.com' onChange={(e) => setEmail(e.target.value)} />
          <button className='bg-salmon rounded-lg text-white text-2xl px-6 py-4' onClick={() => handleNewsletterSubmit()}>Join the waitlist</button>
          <h2 className='text-midnight'>{message}</h2>
        </div>

        <p className='text-white text-xs pt-8'>© Learn Morphology 2023 All rights reserved</p> 
      </section>
    </div>
  )
}

export default HomePage;

