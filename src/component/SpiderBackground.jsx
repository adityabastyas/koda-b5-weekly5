function SpiderBackground() {
  return (
    <>
      <section>
        <div className="h-screen w-full bg-[url('/SpiderDevice.png')] bg-cover"></div>
        <img className='relative mt-[141px]' src='/spiderSm.png' alt='poster' />

        <div className='mt-6 sm:mt-8'>
          <h2 className='text-lg sm:text-xl font-bold text-gray-800 mb-3'>
            Synopsis
          </h2>
          <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
            Thrilled by his experience with the Avengers, Peter returns home,
            where he lives with his Aunt May, under the watchful eye of his new
            mentor Tony Stark. Peter tries to fall back into his normal daily
            routine - distracted by thoughts of proving himself to be more than
            just your friendly neighborhood Spider-Man - but when the Vulture
            emerges as a new villain, everything that Peter holds most important
            will be threatened.
          </p>
        </div>
      </section>
    </>
  );

  //   // Container utama dengan background gradient biru-pink
  //   <div className='min-h-screen bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 p-4'>
  //     {/* Card putih untuk konten utama - responsive dengan max-width */}
  //     <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden'>
  //       {/* Section atas - Gambar hero dengan poster */}
  //       <div className='relative h-48 sm:h-64 md:h-80 bg-gradient-to-r from-blue-400 to-pink-400'>
  //         {/* Gambar Spider-Man besar di background */}
  //         <img
  //           src='https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800'
  //           alt='Spider-Man'
  //           className='w-full h-full object-cover opacity-90'
  //         />

  //         {/* Overlay gelap agar teks lebih jelas */}
  //         <div className='absolute inset-0 bg-black bg-opacity-30'></div>
  //       </div>

  //       {/* Section konten dengan poster dan informasi */}
  //       <div className='relative px-4 sm:px-6 md:px-8 pb-8'>
  //         {/* Poster film - posisi overlap dengan gambar hero */}
  //         <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 -mt-16 sm:-mt-20'>
  //           {/* Poster gambar */}
  //           <div className='flex-shrink-0 mx-auto sm:mx-0'>
  //             <img
  //               src='https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300'
  //               alt='Spider-Man Homecoming Poster'
  //               className='w-32 h-48 sm:w-40 sm:h-60 md:w-48 md:h-72 rounded-lg shadow-xl object-cover border-4 border-white'
  //             />
  //           </div>

  //           {/* Informasi film di sebelah kanan poster */}
  //           <div className='flex-1 mt-4 sm:mt-8'>
  //             {/* Judul film */}
  //             <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2'>
  //               Spider-Man: Homecoming
  //             </h1>

  //             {/* Genre tags */}
  //             <div className='flex flex-wrap gap-2 mb-4'>
  //               <span className='px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs sm:text-sm font-medium'>
  //                 Action
  //               </span>
  //               <span className='px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-medium'>
  //                 Adventure
  //               </span>
  //             </div>

  //             {/* Grid informasi detail film */}
  //             <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4'>
  //               {/* Release Date */}
  //               <div>
  //                 <p className='text-xs sm:text-sm text-gray-500 mb-1'>
  //                   Release date
  //                 </p>
  //                 <p className='text-sm sm:text-base font-semibold text-gray-800'>
  //                   June 28, 2017
  //                 </p>
  //               </div>

  //               {/* Director */}
  //               <div>
  //                 <p className='text-xs sm:text-sm text-gray-500 mb-1'>
  //                   Directed by
  //                 </p>
  //                 <p className='text-sm sm:text-base font-semibold text-gray-800'>
  //                   Jon Watts
  //                 </p>
  //               </div>

  //               {/* Duration */}
  //               <div>
  //                 <p className='text-xs sm:text-sm text-gray-500 mb-1'>
  //                   Duration
  //                 </p>
  //                 <p className='text-sm sm:text-base font-semibold text-gray-800'>
  //                   2 hrs 13 minutes
  //                 </p>
  //               </div>

  //               {/* Cast */}
  //               <div>
  //                 <p className='text-xs sm:text-sm text-gray-500 mb-1'>Cast</p>
  //                 <p className='text-sm sm:text-base font-semibold text-gray-800'>
  //                   Tom Holland, Michael Keaton, Robert Downey Jr
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>

  //         {/* Synopsis section */}
  //         <div className='mt-6 sm:mt-8'>
  //           <h2 className='text-lg sm:text-xl font-bold text-gray-800 mb-3'>
  //             Synopsis
  //           </h2>
  //           <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
  //             Thrilled by his experience with the Avengers, Peter returns home,
  //             where he lives with his Aunt May, under the watchful eye of his
  //             new mentor Tony Stark. Peter tries to fall back into his normal
  //             daily routine - distracted by thoughts of proving himself to be
  //             more than just your friendly neighborhood Spider-Man - but when
  //             the Vulture emerges as a new villain, everything that Peter holds
  //             most important will be threatened.
  //           </p>
  //         </div>

  //       </div>
  //     </div>
  //   </div>
  // );
}

export default SpiderBackground;
