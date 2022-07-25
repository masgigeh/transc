import React, { useState } from 'react';
export default function Home() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex bg-white min-h-screen flex-col">
      <header>
        <nav className="bg-[#2F364B] border-gray-200 px-4 lg:px-6 py-12">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" className="flex items-center">
              <span className="mr-3 flex items-center justify-center rounded-full bg-[#00BAC7] w-12 h-12">M</span>
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">The Malaka</span>
            </a>
            <div className="flex items-center lg:order-2">
              <a href="#" className="text-black bg-white font-medium rounded-full text-sm px-5 py-2.5 mr-2 focus:outline-none">Download</a>
              <button onClick={() => setToggleMenu(!toggleMenu)} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-400 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </div>
            <div className={`${toggleMenu === false && 'hidden'} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-16 lg:mt-0">
                <li>
                  <a href="#" className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:p-0 text-white font-normal" aria-current="page">Top</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700 font-normal">For Everyone</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700 font-normal">Benefit</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700 font-normal">Preview</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700 font-normal">Penulis</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="bg-white bg-[url('/section1bg.svg')] bg-no-repeat h-[1075px]">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto lg:col-span-5">
            <h1 className="max-w-2xl mb-4 md:text-4xl xl:text-5xl xl:leading-tight text-white">Sebuah framework CSS untuk developer yang memiliki phobia terhadap CSS</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-sm lg:text-lg lg:leading-relaxed">Buku ini akan mengajarkan kamu konsep utility-first pada CSS dan diakhiri dengan membangun sebuah website yang responsive dengan Tailwind CSS.</p>
            <div className="flex items-center">
              <a href="#" className="inline-flex text-white mr-10 items-center justify-center px-11 py-6 mr-3 text-base font-medium text-center rounded-full bg-[#00BAC7] focus:ring-4 shadow-[0_15px_30px_rgba(0,186,199,0.33)]">
                Beli Sekarang
                <img className="ml-3" src="/arrow-right-circle.svg"/>
              </a>
              <div className="flex self-start mr-10 mt-2">
                <img src="/download-white.svg"/>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-[16px]">SUDAH TERJUAL</p>
                <span className="text-2xl">501,234+</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-7 lg:flex">
            <img className="max-w-[115%] mt-[-80px]" src="/book.png" alt="mockup" />
          </div>                
        </div>
      </section>

      <section className="bg-white text-gray-900">
        <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-36 lg:px-6">
          <div className="grid lg:grid-cols-12">
            <div className="mb-8 lg:mb-16 lg:col-span-6">
              <div className="text-[#00BAC7] text-sm flex">
                <img className="mr-2" src="/marking.svg" /> 
                BUKU INI UNTUK SIAPA
              </div>
              <h2 className="mb-4 text-[32px] text-gray-900 leading-snug">Buku yang cocok dibaca untuk <br /> front-end dan back-end, <br />bahkan UI designer!</h2>
            </div>
            <div className="mb-8 lg:mb-16 lg:col-span-6">
              <p className="text-[#272d3ecc] leading-relaxed text-[18px]">Buku ini bukan hanya untuk front-end developer yang ingin meningkatkan skill, buku ini juga cocok untuk back-end developer dan UI designer agar dapat menulis style tanpa harus menulis kode CSS dan tanpa mengandalkan front-end developer!</p>
            </div>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="flex flex-col justify-center items-center text-center">
              <div className="mb-4">
                <img src="/utility.png"/>
              </div>
              <h3 className="mb-2 text-xl text-gray-900">Utility-First Framework</h3>
              <p className="text-[#272d3ecc]">Tailwind hadir dengan konsep utility-first. Utility-first artinya banyak class-class kecil yang bisa digabung untuk menjadi sebuah UI.</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <div className="mb-4">
                <img src="/jit.png"/>
              </div>
              <h3 className="mb-2 text-xl text-gray-900">Tailwind JIT Engine</h3>
              <p className="text-[#272d3ecc]">JIT engine akan men-generate utility-class yang kita gunakan saja. Ini akan membuat pengalaman pengembangan semakin baik.</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <div className="mb-4">
                <img src="/unipinionated.png"/>  
              </div>
              <h3 className="mb-2 text-xl text-gray-900">Unopinionated-Framework</h3>
              <p className="text-[#272d3ecc]">Tailwind tidak memiliki pra-desain komponen apapun, ini membuat desain website yang kita buat menjadi unik.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#00BAC7] text-white">
        <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-36 lg:px-6">
          <div className="grid lg:grid-cols-12">
            <div className="mb-8 lg:mb-16 lg:col-span-5">
              <div className="text-sm flex">
                <img className="mr-2" src="/marking-white.svg" /> 
                BUKU INI UNTUK SIAPA
              </div>
              <h2 className="mb-4 text-4xl leading-snug">Kata Pengantar Dari <br /> Penulis Buku</h2>
              <hr className="my-6 border-[rgba(255, 255, 255, 0.3)] sm:mx-auto lg:mr-[130px] lg:my-8" />
              <div className="flex">
                <div>
                  <img className="mr-6" src="/profile.png" /> 
                </div>
                <div>
                  <p className="text-lg">Muhamad Nauval Azhar</p>
                  <span className="text-sm">@mhdnauvalazhar</span>
                </div>
              </div>
            </div>
            <div className="mb-8 lg:mb-16 lg:col-span-7">
              <p className="leading-relaxed sm:text-lg">&quot;Tailwind sangat memungkinkan kamu untuk membangun sebuah desain website yang unik dan tanpa kamu perlu menulis kode CSS sedikitpun. Mungkin kamu akan berpikir bahwa kamu akan membutuhkan waktu yang lebih lama ketika membangun sebuah website dengan utility-first framework ketimbang dengan framework UIkit. Ya, benar. Karena kamu harus memikirkan desain dan mengimplementasikan desain tersebut dari awal sendiri. Namun, kamu perlu ingat manfaat-manfaat yang diberikan oleh utility-first framework, sehingga kamu dapat mempertimbangkannya. Dalam buku ini, kita akan mempelajari framework Tailwind CSS. Mulai dari konsep, workflow, hingga membuat sebuah website responsive dengan TailwindCSS. Buku ini tidak untuk semua orang, setidaknya kamu memahami cara mengoperasikan komputer, memahami HTML, memahami CSS, atau bisa dibilang kamu sudah pernah membangun website sebelumnya dan ingin mempelajari hal baru untuk meningkatkan skill.&quot;</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EDFCFD] text-gray-900">
        <div className="py-6 px-4 mx-auto max-w-screen-xl lg:pb-18 lg:pt-36 lg:px-6">
          <div className="grid lg:grid-cols-12">
            <div className="mb-8 lg:mb-16 lg:col-span-6">
              <div className="text-sm flex text-[#00BAC7]">
                <img className="mr-2" src="/marking.svg" /> 
                MANFAAT BUKU
              </div>
              <h2 className="mb-4 text-4xl leading-snug">Manfaat yang kamu dapatkan ketika membeli buku Tailwind CSS ini</h2>
              <p className="leading-relaxed sm:text-lg">&quot;Buku itu seperti cermin: kalau yang berkaca padanya adalah seorang yang bodoh, engkau tak bisa berharap yang terpantul adalah seorang yang jenius.&quot; - J.K Rowling</p>
              <div className="my-6">
                <div className="flex items-center my-4">
                  <img className="mr-4" src="/check.png" /> 
                  Buku ini cocok untuk seorang yang ingin memperdalam front-end development agar tidak hanya sekadar Bootstrap
                </div>
                <div className="flex items-center my-4">
                  <img className="mr-4" src="/check.png" /> 
                  Buku ini ditulis berdasarkan dari dokumentasi Tailwind CSS langsung, agar meminimalisir terjadinya miskonsepsi
                </div>
                <div className="flex items-center my-4">
                  <img className="mr-4" src="/check.png" /> 
                  Sangat ramah untuk back-end developer yang phobia terhadap CSS dan mudah dipahami bagi UI designer
                </div>
                <div className="flex items-center my-4">
                  <img className="mr-4" src="/check.png" /> 
                  Studi kasus membangun sebuah website responsive dengan Tailwind CSS tanpa ngoding CSS
                </div>
              </div>
            </div>
            <div className="mb-8 lg:mb-16 lg:col-span-6">
              <img src="/manfaat.png" /> 
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EDFCFD] text-gray-900">
        <div className="py-6 px-4 mx-auto max-w-screen-xl lg:pt-18 lg:pb-[150px] lg:px-6">
          <div className="grid lg:grid-cols-12">
            <div className="mb-8 lg:mb-16 lg:col-span-6">
              <img src="/manfaat2.png" /> 
            </div>
            <div className="mb-8 lg:mb-16 lg:col-span-6 flex flex-col justify-center">
              <div className="text-sm flex text-[#00BAC7]">
                <img className="mr-2" src="/marking.svg" /> 
                SELAIN ITU
              </div>
              <h2 className="mb-4 text-4xl leading-snug">Buku dengan studi kasus nyata, juga komunitas yang ramah</h2>
              <p className="leading-[32px] text-[#272d3ecc] text-[18px]">Buku ini diakhiri dengan membangun website yang responsive dengan Tailwind. Selain itu kamu juga kamu dapat bergabung ke komunitas untuk bertanya ketika mengalami kesulitan.</p>
              <div className="my-6">
                <div className="bg-white rounded-[15px] flex items-center my-[30px] py-[20px] px-[33px] shadow-[0_15px_30px_rgba(2,40,43,0.1)]">
                  <div className="mr-[20px]">
                    <img src="/layout.png" /> 
                  </div>
                  <div className="mr-[15px]">
                    <p className="text-[#00BAC7]">Live Demo Project</p>
                    <span className="text-[#272d3ecc] text-[16px]">Lihat live demo project yang akan kamu buat di akhir buku ini.</span>
                  </div>
                  <div className="ml-auto">
                    <img src="/arrow-right-circle-color.png" /> 
                  </div>
                </div>
                <div className="bg-white rounded-[15px] flex items-center my-[30px] py-[20px] px-[33px] shadow-[0_15px_30px_rgba(2,40,43,0.1)]">
                  <div className="mr-[20px]">
                    <img src="/comment.png" /> 
                  </div>
                  <div className="mr-[15px]">
                    <p className="text-[#00BAC7]">Dukungan Komunitas</p>
                    <span className="text-[#272d3ecc] text-[16px]">Sebuah server Discord berisi teman-teman yang akan membantu kamu.</span>
                  </div>
                  <div className="ml-auto">
                    <img src="/arrow-right-circle-color.png" /> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    <section className="text-white bg-[url('/pricingbg.png')] mt-[-135px] bg-no-repeat min-h-[1625px]">
      <div className="py-16 px-4 flex items-center justify-center mx-auto max-w-screen-xl lg:pt-[329px] lg:px-6">
        <div className="max-w-screen-lg text-center sm:text-lg mx-auto leading-relaxed">
          <a className="mr-3 rounded-full bg-[#c6f4f81a] text-[#00BAC7] py-[10px] px-[20px]">HARGA BUKU</a>
          <h2 className="mb-4 mt-6 text-4xl">Kamu dapat membeli buku fisik atau buku <br />elektronik untuk dibaca di perangkat kamu</h2>
          <p className="mb-[80px] text-[#ffffffcc] text-[18px]">Dilarang memperjualbelikan atau memperbanyak tanpa seizin <br />penulis. Hak cipta dilindungi undang-undang.</p>
          <div className="grid lg:grid-cols-12 gap-[30px]">
            <div className="bg-white text-left text-gray-900 rounded-[10px] lg:col-span-4 sm:col-span-12 py-[60px] px-[50px] h-[533px]">
              <p className="text-[#00BAC7] text-base mb-[10px]">Buku Digital</p>
              <p className="text-[32px] mb-[30px]">Rp100.000</p>
              <div className="flex items-center my-4 text-base">
                <img className="mr-4 w-[20px] h-[20px]" src="/check.png" /> 
                Buku Lengkap
              </div>
              <div className="flex items-center my-4 text-base">
                <img className="mr-4 w-[20px] h-[20px]" src="/check.png" /> 
                Akses secara digital
              </div>
              <div className="flex items-center my-4 text-base">
                <img className="mr-4 w-[20px] h-[20px]" src="/uncheck.png" /> 
                Buku fisik
              </div>
              <div className="flex items-center my-4 text-base">
                <img className="mr-4 w-[20px] h-[20px]" src="/check.png" /> 
                Mendapat pembaruan
              </div>
              <div className="flex items-center my-4 text-base">
                <img className="mr-4 w-[20px] h-[20px]" src="/check.png" /> 
                Konsultasi
              </div>
              <div className="flex items-center my-4 text-base">
                <img className="mr-4 w-[20px] h-[20px]" src="/check.png" /> 
                Dapat diunduh
              </div>
              <button className="bg-[#00BAC7] rounded-[6px] w-full flex items-center justify-center py-[10px] mt-[40px] text-white text-base shadow-[0_30px_60px_rgba(74,114,255,0.25)]">Beli Sekarang</button>
            </div>
            <div className="bg-white text-left text-gray-900 rounded-[10px] lg:col-span-4 sm:col-span-12 py-[60px] px-[50px] h-[533px]">
              <p className="text-[#00BAC7] text-base mb-[10px]">Buku Fisik</p>
              <p className="text-[32px] mb-[30px]">Rp185.000</p>
              <div className="flex items-center my-4 text-base">
                <img className="mr-4 w-[20px] h-[20px]" src="/check.png" /> 
                Buku Lengkap
              </div>
              <div className="flex items-center my-4 text-base">
                <img className="mr-4 w-[20px] h-[20px]" src="/uncheck.png" /> 
                Akses secara digital
              </div>
              <div className="flex items-center my-4 text-base">
                <img className="mr-4 w-[20px] h-[20px]" src="/check.png" /> 
                Buku fisik
              </div>
              <div className="flex items-center my-4 text-base">
                <img className="mr-4 w-[20px] h-[20px]" src="/uncheck.png" /> 
                Mendapat pembaruan
              </div>
              <div className="flex items-center my-4 text-base">
                <img className="mr-4 w-[20px] h-[20px]" src="/check.png" /> 
                Konsultasi
              </div>
              <div className="flex items-center my-4 text-base">
                <img className="mr-4 w-[20px] h-[20px]" src="/check.png" /> 
                Dapat diunduh
              </div>
              <button className="bg-[#00BAC7] rounded-[6px] w-full flex items-center justify-center py-[10px] mt-[40px] text-white text-base shadow-[0_30px_60px_rgba(74,114,255,0.25)]">Beli Sekarang</button>
            </div>
            <div className="bg-white text-left text-gray-900 rounded-[10px] lg:col-span-4 sm:col-span-12 py-[60px] px-[50px] h-[533px]">
              <p className="text-[#00BAC7] text-base mb-[10px]">Buku Digital + Fisik</p>
              <p className="text-[32px] mb-[30px]">Rp250.000</p>
              <div className="flex items-center my-4 text-base">
                <img className="mr-4 w-[20px] h-[20px]" src="/check.png" /> 
                Buku Lengkap
              </div>
              <div className="flex items-center my-4 text-base">
                <img className="mr-4 w-[20px] h-[20px]" src="/check.png" /> 
                Akses secara digital
              </div>
              <div className="flex items-center my-4 text-base">
                <img className="mr-4 w-[20px] h-[20px]" src="/check.png" /> 
                Buku fisik
              </div>
              <div className="flex items-center my-4 text-base">
                <img className="mr-4 w-[20px] h-[20px]" src="/check.png" /> 
                Mendapat pembaruan
              </div>
              <div className="flex items-center my-4 text-base">
                <img className="mr-4 w-[20px] h-[20px]" src="/check.png" /> 
                Konsultasi
              </div>
              <div className="flex items-center my-4 text-base">
                <img className="mr-4 w-[20px] h-[20px]" src="/check.png" /> 
                Dapat diunduh
              </div>
              <button className="bg-[#00BAC7] rounded-[6px] w-full flex items-center justify-center py-[10px] mt-[40px] text-white text-base shadow-[0_30px_60px_rgba(74,114,255,0.25)]">Beli Sekarang</button>
            </div>
          </div>
          <div className="mt-[80px] text-[#ffffffcc] text-[18px]">
            <p>*Buku digital akan dikirimkan ke alamat email kamu</p>
            <p>*Buku fisik dikirim 7 hari setelah pemesanan</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white text-gray-900">
      <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-36 lg:px-6">
        <div className="grid lg:grid-cols-12">
          <div className="mb-8 lg:mb-16 lg:col-span-5">
            <img className="" src="/profile-big.png" /> 
          </div>
          <div className="mb-8 lg:mb-16 lg:col-span-7 flex flex-col justify-center">
            <div className="text-sm flex text-[#00BAC7]">
              PENULIS BUKU
            </div>
            <h2 className="mb-4 text-4xl leading-snug">Tak kenal maka tak kenal. Berkenalan dengan penulis buku ini</h2>
            <p className="leading-loose text-lg">“Halo, saya Nauval. Mungkin nama ini terdengar asing di telinga kamu. Namun, kedepannya saya berharap nama ini tidak lagi terdengar asing di telinga kamu sebagai orang yang rajin berbagi hal-hal baik untuk masyarakat, khususnya dalam ilmu komputer. Saya seorang web developer yang masuk kategori apa-aja-dikerjain-selagi-ada-manfaat-nya. Meski begitu, saya lebih senang fokus di front-end development, karena --menurut saya-- ini lebih sederhana saja. Di front-end development pada dasarnya hanya perlu menguasai tiga bahasa: HTML, CSS, dan JavaScript. Sudah jelas ini sederhana, yang bikin ribet itu kamu sendiri, sudah tau kamu cocoknya pake jQuery, malah maksa pake React.”</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white">
      <div className="py-16 px-4 flex items-center justify-center mx-auto max-w-screen-xl lg:py-28 lg:px-6">
        <div className="max-w-screen-lg text-center sm:text-lg mx-auto leading-relaxed">
          <a className="mr-3 rounded-full bg-[#EDFCFD] text-[#00BAC7] py-[10px] px-[20px]">Beli Buku</a>
          <h2 className="mb-4 mt-6 text-4xl text-gray-900">Anda ingin segera memesan buku ini?</h2>
          <p className="mb-10 font-light text-gray-900">Otak Kita butuh asupan nutrisi juga, tidak <br /> hanya perut saja. </p>
          <div className="flex items-center justify-center">
            <div className="flex self-start mr-10 mt-2">
              <img src="/download.svg"/>
            </div>
            <div className="text-gray-900 flex flex-col items-start mr-10">
              <p className="text-[16px]">SUDAH TERJUAL</p>
              <span className="text-2xl">501,234+</span>
            </div>
            <a href="#" className="inline-flex items-center justify-center px-11 py-6 mr-3 text-base font-medium text-center rounded-full bg-[#00BAC7] focus:ring-4 shadow-[0_15px_30px_rgba(0,186,199,0.33)]">
              Beli Sekarang
              <img className="ml-3" src="/arrow-right-circle.svg"/>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white bg-[url('/footerbg.svg')] bg-no-repeat">
      <div className="grid lg:grid-cols-12 py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-0">
        <div className="max-w-screen-sm lg:col-span-6">
          <h2 className="mb-4 text-[28px] leading-tight text-white">Sudah siap meningkatkan skill kamu?</h2>
          <p className="font-light text-gray-400 md:text-lg">Mulai belajar hari ini di Multinity, atau dapatkan jawaban atas
pertanyaan kamu di halaman bantuan.</p>
        </div>
        <div className="lg:col-span-6 flex items-center justify-end mt-6">
          <a href="#" className="text-white bg-[#323748] hover:bg-[#323748]-800 focus:ring-4 font-medium rounded-lg text-sm px-[45px] py-[25px] mr-8 mb-2 focus:outline-none">Pusat Bantuan</a>
          <a href="#" className="text-white bg-[#00BAC7] hover:bg-[#00BAC7]-800 focus:ring-4 font-medium rounded-lg text-sm px-[45px] py-[25px] mb-2 focus:outline-none">Mendaftar</a>
        </div>
      </div>
    </section>

    <footer className="p-4 bg-gray-50 sm:px-6 sm:py-14 bg-[#272D3E]">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid lg:grid-cols-12">
          <div className="mb-6 md:mb-0 lg:col-span-6">
            <a href="https://flowbite.com" className="flex flex-col mb-3">
              <span className="mr-3 flex items-center justify-center rounded-full bg-[#00BAC7] w-12 h-12 mb-2">M</span>
              <span className="text-2xl font-semibold whitespace-nowrap text-white">The Malaka</span>
            </a>
              <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-sm lg:text-lg lg:leading-relaxed">Malaka adalah situs penyedia kursus ilmu komputer berbahasa Indonesia,<br />mulai dari pengembangan hingga desain grafis.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 lg:col-span-6">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">PRODUCTS</h2>
                <ul className="text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Courses</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Books</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Freebies</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Classes</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">COMPANY</h2>
                <ul className="text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline ">About Us</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline ">Contact</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline ">Privacy Policy</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline ">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Help</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">GET IN TOUCH</h2>
                <ul className="text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Twitter</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Facebook</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Dribble</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-center">
            <span className="text-xs text-gray-400 sm:text-center">COPYRIGHT © 2022 — DESIGN NAUVAL
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
