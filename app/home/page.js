import Image from 'next/image';


function HomePage() {
  return (
    <div>
      {/* SECTION WITH GRADIENT BG */}
      <section className='bg-gradient-to-b from-lilac to-white p-8'>
      {/* HERO */}
        <div className='flex flex-col justify-center items-center'>
          <Image alt='' src='/wordmark-white.png' width='380' height='200'/>
          <h3 className='text-white text-center'>is a fun and easy way to learn your heritage language!</h3>
          <Image alt='' src='/tetris-mobile.svg' width='300' height='200'/>
        </div>

        {/* QUESTION GIRL */}
        <div className='flex flex-col justify-center items-center'>
          <h2>Okay, so what's a heritage language?</h2>
          <Image alt='' src='/question-girl.svg' width='300' height='200'/>
          <div className='bg-lilac rounded-lg'>
            <p className='text-white'>A heritage language is a language that is not the dominant one in a given social context, but is familiar to an individual, family, or community.</p>
          </div>
        </div>
      </section>

      {/* SECTION WITH PURPLE BG */}
      <section className='bg-lilac p-8'>
        {/* EXAMPLE CARDS */}
        <div className='flex flex-col justify-center items-center'>
          <h2>For example...</h2>
          <Image alt='' src='/reading-girl.svg' width='250' height='250'/>
          <div className='bg-midnight rounded-lg text-white'>
            <p>Saffia was raised in Vancouver speaking English in her day-to-day life, and learning some French at school; the two “official languages” of Canada.</p>
          </div>
          <Image alt='' src='/mosque.svg' width='250' height='250'/>
          <div className='bg-midnight rounded-lg text-white'>
            <p> But she always heard her grandparents and other relatives speaking Kutchi in their home and at the local mosque.</p>
          </div>
          <Image alt='' src='/grandma-girl.svg' width='250' height='250'/>
          <div className='bg-midnight rounded-lg text-white'>
            <p>She doesn’t speak or understand Kutchi herself, but is familiar with and connected to it through her relatives and their shared heritage.</p>
          </div>
        </div>
      </section>

      {/* SECTION WITH WHITE BG */}
      <section className='bg-white p-8'>
        {/* BULLET POINTS */}
        <div className='text-midnight flex flex-col justify-center items-center text-center'>
          <h2>Heritage languages are vital to identity, culture, and belonging.</h2>
          <Image alt='' src='/flower-pink.svg' width='50' height='50'/>
          <p>They help us as individuals understand and make meaning of the connections between ourselves and society - in the past, the present and the future.</p>
          <Image alt='' src='/flower-yellow.svg' width='50' height='50'/>
          <p>They enrich our shared communities with great varieties of sound, conversation, written works, art, and expression of unique concepts and emotions.</p>
          <Image alt='' src='/flower-green.svg' width='50' height='50'/>
          <p>They are a means of feeling safe, connected, and a part of something larger than ourselves.</p>
        </div>
      </section>


      {/* SECTION WITH PURPLE BG */}
      <section className='bg-lilac flex flex-col justify-center items-center text-center p-8'>
          <h2 className='text-white'>Ready to learn?</h2>
          <p className='text-midnight'>We love to hear it</p>
          <p className='text-midnight'>We’ve got a great app under development, but you can’t play juust yet. We’d be glad to let you know when you can!</p>
          <p className='text-midnight'>Drop your email below :)</p>
          <input className='rounded-md' placeholder='youremail@address.com'/>
          <button className='bg-salmon rounded-md text-white'>Join the waitlist</button>
          <p className='text-white'>Learn Morphology 2023 All rights reserved</p>
      </section>

    </div>
  )
}

export default HomePage;