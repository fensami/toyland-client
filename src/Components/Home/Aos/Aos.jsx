import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Aos() {
  useEffect(() => {
    AOS.init({
      duration: 10, // Animation duration in milliseconds
      once: true, // Only animate elements once
      easing: 'ease-out', // Easing function for animations
    });
  }, []);

  return (
    <section className="aos-section">
      <div className="flex justify-center items-center">
        <div
          className="image-container mx-2 p-4"
          data-aos="slide-left"
          data-aos-easing="ease-out"
          data-aos-duration="1000"
        >
          <img src="https://www.teddybearland.co.uk/media/catalog/product/cache/86dddfd393b777798914a332f5eab1fe/t/u/tumbnail_f728ae95-4382-4fcd-ad7d-89bd2236527b.webp" alt="Image 1" className="w-52" />
        </div>
        <div
          className="image-container mx-2 p-4"
          data-aos="slide-left"
          data-aos-easing="ease-out"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <img src="https://i.etsystatic.com/5359392/r/il/a71ac2/253038947/il_1080xN.253038947.jpg" alt="Image 2" className="w-52 rounded-lg" />
        </div>
        <div
          className="image-container mx-2 p-4"
          data-aos="slide-left"
          data-aos-easing="ease-out"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <img src="https://ae01.alicdn.com/kf/H0a2194774cca43b4b2d3c01e09bae7f5s/1pc-22-26CM-Kawaii-Baby-Cow-Plush-Toys-Stuffed-Soft-Animal-Cute-Cattle-Dolls-for-Kids.jpg_Q90.jpg_.webp" alt="Image 3" className="w-52" />
        </div>
      </div>
    </section>
  );
}

export default Aos;
