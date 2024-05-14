<template>
     <!-- CAROUSEL -->
     <div id="myCarousel" class="carousel slide min-vh-100" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div id="hero-1" class="carousel-item active">
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
                  <h1 data-aos="fade-left"class="text-uppercase text-white fw-semibold display-1">Welcome to Elixir</h1>
                  <h5 class="text-uppercase text-white mt-3 mb-4" data-aos="fade-right">We are team of talented designer making websites with bootstrap</h5>
                  <div data-aos="fade-up" data-aos-delay="50">
                    <router-link to="/" class="btn btn-brand me-2 mt-3">Get Started</router-link>
                    <router-link to="/portofolio" class="btn btn-light ms-2 mt-3">Our Portofolio</router-link>
                  </div>
              </div>
          </div>
          <div id="hero-2" class="carousel-item">
            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
              <h1 data-aos="fade-left"class="text-uppercase text-white fw-semibold display-1">Welcome to Elixir</h1>
              <h5 class="text-uppercase text-white mt-3 mb-4" data-aos="fade-right">We are team of talented designer making websites with bootstrap</h5>
              <div data-aos="fade-up" data-aos-delay="50">
                <router-link to="/" class="btn btn-brand me-2 mt-3">Get Started</router-link>
                <router-link to="/portofolio" class="btn btn-light ms-2 mt-3">Our Portofolio</router-link>
              </div>
          </div>
          </div>
          <div id="hero-3" class="carousel-item">
            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
              <h1 data-aos="fade-left"class="text-uppercase text-white fw-semibold display-1">Welcome to Elixir</h1>
              <h5 class="text-uppercase text-white mt-3 mb-4" data-aos="fade-right">We are team of talented designer making websites with bootstrap</h5>
              <div data-aos="fade-up" data-aos-delay="50">
                <router-link to="/" class="btn btn-brand me-2 mt-3">Get Started</router-link>
                <router-link to="/portofolio" class="btn btn-light ms-2 mt-3">Our Portofolio</router-link>
              </div>
          </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
  
      <!-- ABOUT -->
      <section id="about" class="section-padding">
          <div class="container">
              <div class="row">
                  <div class="col-12 text-center" data-aos="fade-down" data-aos-delay="50">
                      <div class="section-title">
                          <h1 class="display-4 fw-semibold">About us</h1>
                          <div class="line"></div>
                          <p>We love to craft digital experiences for brands rather than crap and more lorem ipsums and do crazy skills</p>
                      </div>
                  </div>
              </div>
              <div class="row justify-content-between align-items-center">
                  <div class="col-lg-6" data-aos="fade-down" data-aos-delay="50">
                      <img src="../../public/assets/img/about.jpg" alt="about">
                  </div>
                  <div class="col-lg-5" data-aos="fade-down" data-aos-delay="150">
                      <h1 class="pt-4">About Elixir</h1>
                      <p class="mt-3 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nihil? Id vel nam aut accusamus, quasi iste rem molestiae voluptatibus eum libero nesciunt ut officia inventore, tempora magnam alias voluptas?</p>
                      <div class="d-flex pt-4 mb-3">
                          <div class="iconbox me-4">
                              <i class="ri-mail-send-fill"></i>
                          </div>
                          <div>
                              <h5>We are Awesome</h5>
                              <p>Consectetur adipisicing elit. Quaerat amet repudiandae voluptatem?</p>
                          </div>
                      </div>
                      <div class="d-flex mb-3">
                          <div class="iconbox me-4">
                              <i class="ri-user-5-fill"></i>
                          </div>
                          <div>
                              <h5>We are Awesome</h5>
                              <p>Consectetur adipisicing elit. Quaerat amet repudiandae voluptatem?</p>
                          </div>
                      </div>
                      <div class="d-flex">
                          <div class="iconbox me-4">
                              <i class="ri-rocket-2-fill"></i>
                          </div>
                          <div>
                              <h5>We are Awesome</h5>
                              <p>Consectetur adipisicing elit. Quaerat amet repudiandae voluptatem?</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  
      <!-- THE ELIXIR -->
      <section id="carou" class="section-padding bg-light">
        <div class="container">
            <div class="row">
              <div class="col-12 text-center" data-aos="fade-down" data-aos-delay="50">
                  <div class="section-title">
                      <h1 class="display-4 fw-semibold">The Elixir's</h1>
                      <div class="line"></div>
                      <p>We love to craft digital experiences for brands rather than crap and more lorem ipsums and do crazy skills</p>
                  </div>
              </div>
          </div>
          <div class="row">
            <div class="col-lg-10 m-auto" data-aos="fade-down" data-aos-delay="150">
              <div class="book-table-img-slider" id="icon">
                  <div class="swiper-wrapper">
                      <a href="../../public/assets/img/car-1.jpg" data-fancybox="table-slider"
                          class="book-table-img back-img swiper-slide"
                          style="background-image: url(../../public/assets/img/car-1.jpg)"></a>
                      <a href="../../public/assets/img/car-2.jpg" data-fancybox="table-slider"
                          class="book-table-img back-img swiper-slide"
                          style="background-image: url(../../public/assets/img/car-2.jpg)"></a>
                      <a href="../../public/assets/img/car-3.jpg" data-fancybox="table-slider"
                          class="book-table-img back-img swiper-slide"
                          style="background-image: url(../../public/assets/img/car-3.jpg)"></a>
                      <a href="../../public/assets/img/car-4.jpg" data-fancybox="table-slider"
                          class="book-table-img back-img swiper-slide"
                          style="background-image: url(../../public/assets/img/car-4.jpg)"></a>
                      <a href="../../public/assets/img/car-5.jpg" data-fancybox="table-slider"
                          class="book-table-img back-img swiper-slide"
                          style="background-image: url(../../public/assets/img/car-5.jpg)"></a>
                      <a href="../../public/assets/img/car-6.jpg" data-fancybox="table-slider"
                          class="book-table-img back-img swiper-slide"
                          style="background-image: url(../../public/assets/img/car-6.jpg)"></a>
                      <a href="../../public/assets/img/car-7.jpg" data-fancybox="table-slider"
                          class="book-table-img back-img swiper-slide"
                          style="background-image: url(../../public/assets/img/car-7.jpg)"></a>
                      <a href="../../public/assets/img/car-8.jpg" data-fancybox="table-slider"
                          class="book-table-img back-img swiper-slide"
                          style="background-image: url(../../public/assets/img/car-8.jpg)"></a>
                  </div>
              </div>
          </div>
          </div>
        </div>
      </section>
  
      <!-- FEATURES -->
      <section id="features" class="section-padding mb-5">
          <div class="container">
              <div class="row">
                  <div class="col-12 text-center" data-aos="fade-down" data-aos-delay="50">
                      <div class="section-title">
                          <h1 class="display-4 fw-semibold">Features</h1>
                          <div class="line"></div>
                          <p>We love to craft digital experiences for brands rather than crap and more lorem ipsums and do crazy skills</p>
                      </div>
                  </div>
              </div>
              <div class="row justify-content-between">
                  <div class="card ms-lg-3 mt-3" style="width: 23rem;" data-aos="fade-down" data-aos-delay="150">
                      <dotlottie-player src="../../public/assets/img/Animation - 1714355779066.lottie" class="card-img-top bg-white w-100" data-aos="zoom-in" data-aos-delay="200" background="transparent" speed="1" direction="1" playMode="normal" loop  autoplay></dotlottie-player>
                      <div class="card-body bg-dark">
                        <h5 class="card-title text-white text-center">UI/UX Design</h5>
                        <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <router-link to="/service" class="btn btn-brand">Services</router-link>
                      </div>
                    </div>
                    <div class="card ms-lg-3 mt-3" style="width: 23rem;" data-aos="fade-down" data-aos-delay="250">
                      <dotlottie-player src="../../public/assets/img/thecode.lottie" class="card-img-top bg-white w-100" data-aos="zoom-in" data-aos-delay="300" background="transparent" speed="1" direction="1" playMode="normal" loop  autoplay></dotlottie-player>
                      <div class="card-body bg-dark">
                        <h5 class="card-title text-white text-center">Website Maker</h5>
                        <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <router-link to="/service#services-2" class="btn btn-brand">Services</router-link>
                      </div>
                    </div>
                    <div class="card ms-lg-3 mt-3" style="width: 23rem;" data-aos="fade-down" data-aos-delay="350">
                      <dotlottie-player src="../../public/assets/img/portofolio.lottie" class="card-img-top bg-white w-100" data-aos="zoom-in" data-aos-delay="400" background="transparent" speed="1" direction="1" playMode="normal" loop  autoplay></dotlottie-player>
                      <div class="card-body bg-dark">
                        <h5 class="card-title text-white text-center">Our Portofolio</h5>
                        <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <router-link to="/portofolio" class="btn btn-brand">Portofolio</router-link>
                      </div>
                    </div>
                    <div class="card ms-lg-3 mt-3" style="width: 23rem;" data-aos="fade-down" data-aos-delay="450">
                      <dotlottie-player src="../../public/assets/img/review.lottie" class="card-img-top bg-white w-100" data-aos="zoom-in" data-aos-delay="500" background="transparent" speed="1" direction="1" playMode="normal" loop  autoplay></dotlottie-player>
                      <div class="card-body bg-dark">
                        <h5 class="card-title text-white text-center">Check Review</h5>
                        <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <router-link to="/reviews" class="btn btn-brand">Reviews</router-link>
                      </div>
                    </div>
                    <div class="card ms-lg-3 mt-3" style="width: 23rem;" data-aos="fade-down" data-aos-delay="550">
                      <dotlottie-player src="../../public/assets/img/email.lottie" class="card-img-top bg-white w-100" data-aos="zoom-in" data-aos-delay="600" background="transparent" speed="1" direction="1" playMode="normal" loop  autoplay></dotlottie-player>
                      <div class="card-body bg-dark">
                        <h5 class="card-title text-white text-center">Get in Touch</h5>
                        <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <router-link to="/contact" class="btn btn-brand">Contact</router-link>
                      </div>
                    </div>
                    <div class="card ms-lg-3 mt-3" style="width: 23rem;" data-aos="fade-down" data-aos-delay="650">
                      <dotlottie-player src="../../public/assets/img/news.lottie" class="card-img-top bg-white w-100" data-aos="zoom-in" data-aos-delay="700" background="transparent" speed="1" direction="1" playMode="normal" loop  autoplay></dotlottie-player>
                      <div class="card-body bg-dark">
                        <h5 class="card-title text-white text-center">Check Our News</h5>
                        <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <router-link to="/blog" class="btn btn-brand">Blog</router-link>
                      </div>
                    </div>
              </div>
          </div>
      </section>
</template>