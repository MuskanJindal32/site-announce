<template>
  <div>
    <div class="container-fluid">
      <div class="row justify-content-sm-center">
        <div class="col-12 col-lg-1"></div>
        <div class="col-12 col-lg-5">
          <div class="custom-wrapper">
            <h1 class="text-center-tab">Top Second Hand Shops in {{selectedCity}}</h1>
            <div class="mt-3">
              <nav aria-label="breadcrumb" class="breadcrumb-tab">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="#">Second Hand Shops</a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">{{selectedCity}}</li>
                </ol>
              </nav>
            </div>
            <div>
              <p class="mt-40 mb-40 text-center-tab">
                Dicant patrioque intellegebat eam ea, vim menandri expetendis ex. Possit viderer pri no,
                no mel case mazim. Amet cibo sensibus vix in. Te ludus qualisque sed, per et vocent
                detraxit deterruisset. Noluisse invidunt torquatos ex usu, in qui nisl deserunt
                sapientem. Solet dicam pertinax ad vim, eu quodsi moderatius quo. Qui eu admodum
                accumsan maiestatis..
              </p>
              <div class="text-center">
                <span @click="open = !open" v-if="!open">Read More...</span>
              </div>
              <VueSlideToggle :open="open" tag="section" :duration="500">
                <h2 class="text-center-tab">Subtitle Paragraph</h2>
                <p class="mb-40 text-center-tab">
                  Ridens latine laboramus sed eu, per malorum graecis in, per an melius adversarium.
                  Ubique maiestatis cotidieque vel ut. Id est tale munere nominavi, ius temporibus
                  cotidieque ne, quidam feugait deserunt ius cu. Usu ea mollis impetus appellantur. Pri an
                  tollit abhorreant, vim purto fabellas ea. Ludus bonorum cu sed, te est elaboraret
                  neglegentur.
                </p>
                <h2 class="text-center-tab">Subtitle Paragraph</h2>
                <p class="text-center-tab">
                  Usu ubique aliquando an, doctus repudiare ea sea. Eos cu utamur offendit dissentias, eum
                  equidem oporteat inimicus at. Vel cu tation oportere. Noster nonumes has no, cu lobortis
                  assueverit eum. Ex nec verear voluptua expetenda. Libris iracundia constituto qui at, no
                  vis dolores consetetur.
                </p>
              </VueSlideToggle>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6" id="mapWrapper">
          <!-- <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5533.388199907136!2d-77.03862947354166!3d38.896401960809925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bcdecbb1df%3A0x715969d86d0b76bf!2sThe+White+House!5e0!3m2!1sen!2sin!4v1556961437598!5m2!1sen!2sin"
            frameborder="0"
            allowfullscreen
            class="map-wrapper"
          ></iframe>-->
          <!-- <GmapMap class="map-wrapper" ref="mapRef" ...></GmapMap> -->
          <GmapMap
            :center="{lat:lat, lng:lng}"
            :zoom="zoom"
            map-type-id="roadmap"
            class="map-wrapper"
          >
            <GmapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="false"
              :draggable="false"
              @click="checkLocation(m)"
            />
            <!-- @click="center=m.position" -->
          </GmapMap>
          <!-- <GmapMarker ref="myMarker" :position="google && new google.maps.LatLng(1.38, 103.8)"/> -->
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-sm-center">
        <div class="col-12 col-lg-10">
          <div class="custom-wrapper mt-3 pb-0 image-btn-wrapper">
            <label class="text-uppercase mr-3 mb-0 cities-label">Check other cities:</label>
            <button
              class="image-button"
              @click="changeCity('Berlin')"
              v-scroll-to="'#shopsList'"
              style="background-image:url('../../static/images/stuttgart.png')"
              v-if="selectedCity !== 'Berlin'"
            >Berlin</button>
            <button
              class="image-button"
              @click="changeCity('Hamburg')"
              v-scroll-to="'#shopsList'"
              style="background-image:url('../../static/images/hamburg.png')"
              v-if="selectedCity !== 'Hamburg'"
            >Hamburg</button>
            <button
              class="image-button"
              @click="changeCity('Leipzig')"
              v-scroll-to="'#shopsList'"
              style="background-image:url('../../static/images/leipzig.png')"
              v-if="selectedCity !== 'Leipzig'"
            >Leipzig</button>
            <button
              class="image-button"
              @click="changeCity('Stuttgart')"
              v-scroll-to="'#shopsList'"
              style="background-image:url('../../static/images/stuttgart.png')"
              v-if="selectedCity !== 'Stuttgart'"
            >Stuttgart</button>
            <button
              class="image-button"
              @click="changeCity('Dortmund')"
              v-scroll-to="'#shopsList'"
              style="background-image:url('../../static/images/dortmund.png')"
              v-if="selectedCity !== 'Dortmund'"
            >Dortmund</button>
          </div>
        </div>
      </div>
    </div>
    <div class="seprator">&nbsp;</div>
    <div class="container-fluid" id="shopsList">
      <div class="row justify-content-sm-center">
        <div class="col-12 col-lg-10">
          <div class="custom-wrapper pt-0">
            <div class="row">
              <div class="col-12 mb-40">
                <h1 class="text-center-tab" style="margin-left: -15px;">Second Hand Shops</h1>
              </div>
              <div class="col-12 col-lg-10">
                <div class="row justify-content-sm-center" v-if="totalRecords">
                  <div
                    class="col-12 col-md-6 col-lg-12"
                    v-for="(data, index) in listData"
                    :key="index"
                  >
                    <div class="custom-card" v-if="index >= startIndex && index <= endIndex">
                      <div class="row">
                        <div
                          class="col-12 col-lg-4 custom-card-image"
                          style="background-image:url('../../static/images/erik-odiin-453075-unsplash.png')"
                        >
                          <img
                            src="../../static/images/erik-odiin-453075-unsplash.png"
                            class="d-block d-lg-none"
                          >
                        </div>
                        <div class="col-12 col-lg-6">
                          <div class="custom-card-content">
                            <h2>{{data.store}}</h2>
                            <p>
                              Usu ubique aliquando an, doctus repudiare ea sea. Eos cu
                              utamur offendit dissentias, eum equidem oporteat inimicus
                              at. Vel cu tation oportere. Noster nonumes has no, cu
                              lobortis assueverit eum. Ex nec verear voluptua expetenda.
                              Libris iracundia constituto qui at, no vis dolores
                              consetetur.
                            </p>
                            <div class="d-block d-lg-none">
                              <div class="row mb-2">
                                <div class="col-6 text-center">
                                  <label
                                    class="card-links"
                                    @click="getLocationCoordinates(data.address)"
                                    v-scroll-to="'#mapWrapper'"
                                  >
                                    <img src="../../static/images/address icon.svg">
                                    View on map
                                  </label>
                                </div>
                                <div class="col-6 text-center">
                                  <label
                                    class="card-links"
                                    v-tooltip.bottom-start="data.reviews.split('\n')[1]"
                                  >
                                    <img src="../../static/images/star icon.svg">
                                    {{data.reviews.split('\n')[0]}}
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="custom-modal-relative-wrapper">
                              <button class="card-detail-btn" @click="toggleDetail(index)">
                                See all
                                details
                              </button>
                              <div class="all-details-wrapper" v-if="index === selectedIndex">
                                <i
                                  class="fa fa-times close-all-details-wrapper"
                                  @click="closeDetail()"
                                ></i>
                                <div class="all-details-content pb-3">
                                  <h2 style="color: #e27537;">{{data.store}}</h2>
                                </div>
                                <div class="seprator mt-0 mb-0" style="height: 5px;"></div>
                                <div class="all-details-content pb-3">
                                  <div class="row">
                                    <div class="col-12 col-md-6">
                                      <p>
                                        <!-- Alte Schönhauzer Straße 30
                                        <br>10119 Berlin
                                        <br>Quarter:
                                        <br>Mitte-->
                                        {{data.address}}
                                        <br v-if="data.city">
                                        {{data.city}}
                                      </p>

                                      <h3>Info:</h3>
                                      <p v-if="data.phone">{{data.phone}}</p>
                                      <p v-if="data.email">{{data.email}}</p>
                                      <p v-if="data.website">{{data.website}}</p>
                                      <p v-if="data.facebook">{{data.facebook}}</p>
                                    </div>
                                    <div class="col-12 col-md-6">
                                      <h3>Approach:</h3>
                                      <p class="mb-0">Driving</p>
                                      <p class="mb-0">Walking</p>
                                      <p>Biking</p>

                                      <h3>Openning hours:</h3>
                                      <p v-if="data.worktime">{{data.worktime}}</p>
                                      <p v-else>-</p>

                                      <h3>Extra information:</h3>
                                      <p>
                                        Price Level: Vintage by Kilo according
                                        to price categorie 25,00 - 85,00 euro/kg
                                      </p>
                                      <p>Parking: Difficult</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-lg-2 d-none d-lg-block">
                          <div class="custom-card-content pl-0 pr-0">
                            <div>
                              <label
                                class="card-links mt-3"
                                @click="getLocationCoordinates(data.address)"
                                v-scroll-to="'#mapWrapper'"
                              >
                                <img src="../../static/images/address icon.svg">
                                View on map
                              </label>
                            </div>
                            <label class="card-links" v-tooltip="data.reviews.split('\n')[1]">
                              <img src="../../static/images/star icon.svg">
                              {{data.reviews.split('\n')[0]}}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 text-center">
                    <paginate
                      :page-count="totalPages"
                      :page-range="5"
                      :margin-pages="2"
                      :click-handler="pageChange"
                      :prev-text="'Prev'"
                      :next-text="'Next'"
                      :container-class="'pagination my-custom-pagination'"
                      :page-class="'page-item'"
                      v-scroll-to="'#shopsList'"
                    ></paginate>
                  </div>
                </div>
                <div class="row justify-content-sm-center" v-else>
                  <div class="col-12 col-md-6 col-lg-12">
                    <h3>No records found.</h3>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-2 d-none d-lg-block">
                <img src="../../static/images/slack.png">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="seprator">&nbsp;</div>
    <div class="container-fluid">
      <div class="row justify-content-sm-center">
        <div class="col-12 col-md-10 col-lg-10">
          <div class="custom-wrapper pt-0 text-center-tab">
            <h1>Know More About the Second Hand Shops</h1>
            <div>
              <p class="mt-40 mb-40">
                Dicant patrioque intellegebat eam ea, vim menandri expetendis ex. Possit viderer pri no,
                no mel case mazim. Amet cibo sensibus vix in. Te ludus qualisque sed, per et vocent
                detraxit deterruisset. Noluisse invidunt torquatos ex usu, in qui nisl deserunt
                sapientem. Solet dicam pertinax ad vim, eu quodsi moderatius quo. Qui eu admodum
                accumsan maiestatis..
              </p>
              <h2>Question 1</h2>
              <p class="mb-40">
                Ridens latine laboramus sed eu, per malorum graecis in, per an melius adversarium.
                Ubique maiestatis cotidieque vel ut. Id est tale munere nominavi, ius temporibus
                cotidieque ne, quidam feugait deserunt ius cu. Usu ea mollis impetus appellantur. Pri an
                tollit abhorreant, vim purto fabellas ea. Ludus bonorum cu sed, te est elaboraret
                neglegentur.
              </p>
              <h2>Question 2</h2>
              <p class="mb-40">
                Usu ubique aliquando an, doctus repudiare ea sea. Eos cu utamur offendit dissentias, eum
                equidem oporteat inimicus at. Vel cu tation oportere. Noster nonumes has no, cu lobortis
                assueverit eum. Ex nec verear voluptua expetenda. Libris iracundia constituto qui at, no
                vis dolores consetetur.
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-10">
          <div class="custom-wrapper pt-0 text-center-tab categories-link-wrapper-mobile">
            <div class="categories-link-tab">
              <label class="text-uppercase mr-3 mb-0">Check the categories:</label>
              <button
                class="image-button"
                style="background-image:url('../../static/images/clothing.png')"
                @click="changeCategory('clothing')"
                v-scroll-to="'#shopsList'"
              >Clothing</button>
              <button
                class="image-button"
                style="background-image:url('../../static/images/vintage.png')"
                @click="changeCategory('vintage')"
                v-scroll-to="'#shopsList'"
              >Vintage</button>
              <button
                class="image-button"
                style="background-image:url('../../static/images/bikes.png')"
                @click="changeCategory('bikes')"
                v-scroll-to="'#shopsList'"
              >Bikes</button>
              <button
                class="image-button"
                style="background-image:url('../../static/images/video-games.png')"
                @click="changeCategory('videogames')"
                v-scroll-to="'#shopsList'"
              >
                Video
                Games
              </button>
              <button
                class="image-button"
                style="background-image:url('../../static/images/antiques.png')"
                @click="changeCategory('antiques')"
                v-scroll-to="'#shopsList'"
              >Antiques</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../axios.config";
import newAxios from "axios";
import { gmapApi } from "vue2-google-maps";

export default {
  name: "home",
  data() {
    return {
      selectedCity: "Berlin",
      selectedCategory: "clothing",
      page: 0,
      totalRecords: 0,
      totalPages: 0,
      recordsPerPage: 5,
      startIndex: 0,
      endIndex: 4,
      listData: [],
      selectedIndex: -1,
      markers: [],
      lat: 52.5065133,
      lng: 13.1445498,
      zoom: 8,
      open: false
    };
  },
  methods: {
    changeCity(city) {
      this.selectedCity = city;
      this.startIndex = 0;
      this.endIndex = 4;
      this.getShopsList();
    },
    changeCategory(category) {
      this.selectedCategory = category;
      this.page = 0;
      this.startIndex = 0;
      this.endIndex = 4;
      this.getShopsList();
    },
    toggleDetail(index) {
      if (this.selectedIndex === index) {
        this.selectedIndex = -1;
      } else {
        this.selectedIndex = index;
      }
    },
    closeDetail() {
      this.selectedIndex = -1;
    },
    pageChange(page) {
      this.endIndex = page * this.recordsPerPage - 1;
      this.startIndex = this.endIndex - 4;
    },
    getShopsList() {
      axios()
        // .get(
        //   "getShopsList?limit=" +
        //     this.itemsPerPage +
        //     "&page=" +
        //     this.page +
        //     "&category=" +
        //     this.selectedCategory +
        //     "&city=" +
        //     this.selectedCity
        // )
        .get(
          "getShopsList?category=" +
            this.selectedCategory +
            "&city=" +
            this.selectedCity
        )
        .then(response => {
          this.listData = response.data.data;
          this.totalRecords = response.data.count;
          this.totalPages = Math.ceil(this.totalRecords / this.recordsPerPage);
        });
    },
    getLocationCoordinates(locationName) {
      console.log("location name", locationName);
      newAxios
        .get(
          "https://maps.googleapis.com/maps/api/geocode/json?address=" +
            locationName +
            "&key=AIzaSyBSupWJjJWJ6EKWoc-P553rD_UBWb8fZX8"
        )
        .then(response => {
          this.markers = [];
          this.zoom = 15;
          var data = {};
          data.position = {};
          data.position = response.data.results[0].geometry.location;
          this.markers.push(data);
          this.lat = data.position.lat;
          this.lng = data.position.lng;
          console.log(
            "this.markers",
            data,
            data.position.lat,
            data.position.lng
          );
        });
    },
    checkLocation(location) {
      console.log("check location", location);
    }
  },
  mounted() {
    this.getShopsList();
    this.markers.position = {};
    if (window.innerWidth < 768) {
      this.open = false;
    } else {
      this.open = true;
    }
  },
  computed: {
    google: gmapApi
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>