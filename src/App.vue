<template>
  <div id="app">
    <!-- Sample navbar, Replace navbar with your own code -->
    <!-- Header -->
    <div class="container-fluid no-padding-tab">
      <div class="row justify-content-sm-center adjust-header-wrap-tab">
        <div class="col-12 col-lg-10">
          <div class="header text-center-tab">
            <!-- <img src="./images/Site-annonce_logo.svg"> -->
            <img src="../static/images/Site-annonce_logo.svg">
          </div>
        </div>
      </div>
    </div>

    <router-view/>

    <!-- Footer -->
    <footer>
      <div class="container-fluid">
        <div class="row justify-content-sm-center">
          <div class="col-12 col-lg-10">
            <div class="custom-wrapper">
              <div>
                <div class="d-none d-md-block">
                  <div class="float-left">
                    <!-- <img src="./images/Logo_2.svg"> -->
                    <img src="../static/images/Logo_2.svg">
                  </div>
                  <div class="float-left ml-40 d-none d-lg-block">
                    <p class="footer-contact-text mt-2 mb-3">Contactez le Service Client</p>
                    <button class="footer-contact-button">Envoyez un email</button>
                  </div>
                  <div class="float-left ml-40 d-block d-lg-none">
                    <p class="footer-contact-text mt-2 mb-3">
                      <span class="float-left">Contactez le Service Client</span>
                      <button class="footer-contact-button ml-5">Envoyez un email</button>
                    </p>
                  </div>
                  <div class="clearfix"></div>
                </div>
                <div class="text-center d-block d-md-none mb-4">
                  <div>
                    <!-- <img src="./images/Logo_2.svg"> -->
                    <img src="../static/images/Logo_2.svg">
                  </div>
                  <div class>
                    <p class="footer-contact-text mt-2 mb-3">Contactez le Service Client</p>
                  </div>
                  <div>
                    <button class="footer-contact-button">Envoyez un email</button>
                  </div>
                  <div class="clearfix"></div>
                </div>
                <div class="footer-links-wrapper">
                  <label
                    class="copyright-label text-uppercase mr-3 mb-0 show-desktop"
                  >© 2019 COPYRIGHT SITE-ANNONCE.FR PART OF EROWZ SPRL</label>
                  <label class="footer-links ml-3 mb-0 show-desktop">
                    <a href="#">PART OF EROWZ SPRL</a>
                    <label></label>
                    <a href="#">PRESSE</a>
                    <label></label>
                    <a href="#">A PROPOS</a>
                    <label></label>
                    <a href="#">COOKIES</a>
                    <label></label>
                    <a href="#">POLITIQUE DE CONFIDENTIALITÉ</a>
                    <label></label>
                    <a href="#">AIDE</a>
                  </label>
                  <label class="footer-links ml-3 mb-0 d-block d-md-none">
                    <a href="#">PART OF EROWZ SPRL</a>
                    <label></label>
                    <a href="#">PRESSE</a>
                    <label></label>
                    <a href="#">A PROPOS</a>
                    <br>
                    <a href="#">COOKIES</a>
                    <label></label>
                    <a href="#">POLITIQUE DE CONFIDENTIALITÉ</a>
                    <br>
                    <a href="#">AIDE</a>
                  </label>
                  <div class="clearfix"></div>
                </div>
                <div class="text-center d-block d-lg-none">
                  <label
                    class="copyright-label text-uppercase mb-0 mt-3"
                  >© 2019 COPYRIGHT SITE-ANNONCE.FR PART OF EROWZ SPRL</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "App"
};
</script>
<style>
#app {
}
</style>