import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from '../components/Card';
import { produk } from '../constans/produk';
import Faq from '../components/Faq'
const Home = () => {
  return (
    <div>
      <section className='bg-inherit flex justify-between items-center mx-10 h-96 my-5 p-5'>
        <div className='w-[600px]'>
          <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight my-3">HidroAkuaponik</h2>
          <p>HidroAkuaponik adalah website yang dirancang untuk mendukung para penggemar dan praktisi hidroponik serta akuaponik dalam menghadapi tantangan seperti keterbatasan ruang, perubahan lingkungan, dan masalah kesehatan tanaman.</p>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3">
            Daftar Sekarang!
          </button>
        </div>
        <img src="/src/assets/hydro-icon.png" alt="header-icon" className='w-[500px] my-5' />
      </section>
      <section>
        <div className='justify-center mx-10 my-3'>
          <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight text-center my-5">Produk Hidroponik</h2>
          <p className='text-center mx-3'>
            Hidup sehat dengan produk segar dan berkelanjutan dari sistem hidroponik dan aquaponik kami. Seledri, selada, ikan nila, dan gurame kami dibudidayakan secara ramah lingkungan, tanpa pestisida, dan kaya akan nutrisi.</p>
          <div className='flex'>
          {/* Product Content  */}
          {produk.map(item => (
            <Card image={item.image} title={item.name} description={item.description}  />
          ))}
          </div>
        </div>
      </section>
      <section>
      <div>
          <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight text-center my-3">Produk Aquponik</h2>
      
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <div className="w-full relative">
            <div className="swiper default-carousel swiper-container">
              <div className="swiper-wrapper">
                <SwiperSlide>
                  <div className="bg-indigo-50 rounded-2xl flex m-10">
                    <img src="/src/assets/foto1.jpg" alt="foto" className='w-96 rounded-l-2xl' />
                    <div className='p-10'>
                      <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight my-3">Selada</h2>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi amet doloribus, voluptatibus quas adipisci saepe accusantium odit autem distinctio et id, repudiandae, dicta quia ullam hic sunt corrupti totam eius.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-indigo-50 rounded-2xl flex m-10">
                    <img src="/src/assets/foto4.jpg" alt="foto" className='w-96 rounded-l-2xl' />
                    <div className='p-10'>
                      <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight my-3">Selada</h2>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi amet doloribus, voluptatibus quas adipisci saepe accusantium odit autem distinctio et id, repudiandae, dicta quia ullam hic sunt corrupti totam eius.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-indigo-50 rounded-2xl flex m-10">
                    <img src="/src/assets/foto3.jpg" alt="foto" className='w-96 rounded-l-2xl' />
                    <div className='p-10'>
                      <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight my-3">Selada</h2>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi amet doloribus, voluptatibus quas adipisci saepe accusantium odit autem distinctio et id, repudiandae, dicta quia ullam hic sunt corrupti totam eius.</p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </div>
          </div>
        </Swiper>
        </div>
      </section>
      <section>
        <div class="flex flex-col items-center justify-center text-center mx-1 py-20 bg-green-800">
          <h1 class="text-4xl font-bold  text-white underline">Solusi</h1>
          <p class="text-center  text-white -600 mb-4">
          Optimalkan produktivitas bisnis Anda dengan solusi yang tepat!  
          </p>
          <p class="text-center  text-white -600 mb-4">
          Temukan beragam opsi yang disesuaikan dengan kebutuhan Anda 
          dari teknologi hingga layanan konsultasi. 
          </p>
          <p class="text-center   text-white -600 mb-8">
          Kami hadir untuk memberikan solusi terbaik guna meningkatkan kinerja bisnis Anda.
          </p>
        </div>
      </section>
      <section className='justify-center'>
        <Faq />
      </section>
    </div>
  );
}

export default Home;