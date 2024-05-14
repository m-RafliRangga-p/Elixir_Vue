<template>
    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg bg-white sticky-top">
        <div class="container">
            <router-link to="/" class="navbar-brand">
                <img src="../../../public/assets/img/logo-dark.svg" alt="logo">
            </router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Service
                </a>
                <ul class="dropdown-menu">
                  <li><router-link to="/service" class="dropdown-item">UI/UX Design</router-link></li>
                  <li><router-link to="/service2" class="dropdown-item">Website Maker</router-link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="portofolio.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Portofolio
                </a>
                <ul class="dropdown-menu">
                  <li><router-link to="/portofolio" class="dropdown-item">Portofolio 1</router-link></li>
                  <li><router-link to="/portofolio2" class="dropdown-item">Portofolio 2</router-link></li>
                  <li><router-link to="/portofolio3" class="dropdown-item">Portofolio 3</router-link></li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="/reviews" class="nav-link">Reviews</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/team" class="nav-link">Teams</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link">Contact</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/blog" class="nav-link active">Blog</router-link>
              </li>
            </ul>
            <a href="#" class="btn btn-brand ms-lg-3">Download</a>
          </div>
        </div>
    </nav>
</template>