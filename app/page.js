'use client'
import Image from 'next/image';
import React, { useState } from 'react';

function HomePage() {

  const [userEmail, setEmail] = useState('');

  let handleNewsletter = () => {
    console.log(userEmail)
  }

  return (
    <div>
      {/* SECTION WITH GRADIENT BG */}
      <section className='bg-gradient-to-b from-lilac to-white px-8 py-16 space-y-16'>
      {/* HERO */}
        <div className='flex flex-col justify-center items-center space-y-4'>
          <Image alt='Morphology' src='/wordmark-white.png' width='380' height='200'/>
          <h3 className='text-white text-center text-xl'>is a fun and easy way to learn your heritage language!</h3>
          <Image alt='tetris blocks' src='/tetris-mobile.svg' width='300' height='300'/>
        </div>

        {/* QUESTION GIRL */}
        <div className='flex flex-col justify-center items-center space-y-8'>
          <h2 className='text-midnight text-center text-3xl'>Okay, so what's a heritage language?</h2>
          <Image alt='question mark illustration' src='/question-girl.svg' width='200' height='200'/>
          <div className='bg-lilac rounded-lg p-4 text-center'>
            <p className='text-white'>A heritage language is a language that is not the dominant one in a given social context, but is familiar to an individual, family, or community.</p>
          </div>
        </div>
      </section>

      {/* SECTION WITH PURPLE BG */}
      <section className='bg-lilac px-8 py-16'>
        {/* EXAMPLE CARDS */}
        <div className='flex flex-col justify-center items-center space-y-8'>
          <h2 className='text-white text-3xl'>For example...</h2>
          <Image alt='reading illustration' src='/reading-girl.svg' width='250' height='250'/>
          <div className='bg-midnight rounded-lg p-4 text-center text-white'>
            <p>Saffia was raised in Vancouver speaking English in her day-to-day life, and learning some French at school; the two “official languages” of Canada.</p>
          </div>
          <Image alt='mosque illustration' src='/mosque.svg' width='250' height='250'/>
          <div className='bg-midnight rounded-lg p-4 text-center text-white'>
            <p> But she always heard her grandparents and other relatives speaking Kutchi in their home and at the local mosque.</p>
          </div>
          <Image alt='family illustration' src='/grandma-girl.svg' width='250' height='250'/>
          <div className='bg-midnight rounded-lg p-4 text-center text-white'>
            <p>She doesn’t speak or understand Kutchi herself, but is familiar with and connected to it through her relatives and their shared heritage.</p>
          </div>
        </div>
      </section>

      {/* SECTION WITH WHITE BG */}
      <section className='bg-white px-8 py-16'>
        {/* BULLET POINTS */}
        <div className='text-midnight flex flex-col justify-center items-center text-center space-y-4'>
          <h2 className='text-midnight text-3xl'>Heritage languages are vital to identity, culture, and belonging.</h2>
          <Image alt='flower illustration' src='/flower-pink.svg' width='50' height='50'/>
          <p className='text-lg'>They help us as individuals understand and make meaning of the connections between ourselves and society - in the past, the present and the future.</p>
          <Image alt='flower illustration' src='/flower-yellow.svg' width='50' height='50'/>
          <p className='text-lg'>They enrich our shared communities with great varieties of sound, conversation, written works, art, and expression of unique concepts and emotions.</p>
          <Image alt='flower illustration' src='/flower-green.svg' width='50' height='50'/>
          <p className='text-lg'>They are a means of feeling safe, connected, and a part of something larger than ourselves.</p>
        </div>
      </section>


      {/* SECTION WITH PURPLE BG */}
      <section className='bg-lilac flex flex-col justify-center items-center text-center px-8 py-16 space-y-4'>
        <h2 className='text-white text-3xl'>Ready to learn?</h2>
        <p className='text-midnight text-lg'>We love to hear it</p>
        <p className='text-midnight text-lg'>We’ve got a great app under development, but you can’t play juust yet. We’d be glad to let you know when you can!</p>
        <p className='text-midnight text-lg'>Drop your email below :)</p>
        <input className='rounded-md px-6 py-2 text-midnight' placeholder='youremail@address.com' onChange={(e) => setEmail(e.target.value)} />
        <button className='bg-salmon rounded-lg text-white text-2xl px-6 py-4' onClick={() => handleNewsletter()}>Join the waitlist</button>
        <p className='text-white text-xs m-8'>Learn Morphology 2023 All rights reserved</p> 
      </section>

    </div>
  )
}

export default HomePage;