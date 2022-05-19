<script>
import PredictionCard from "../components/PredictionCard.vue";
export default {
  components: {
    PredictionCard,
  },
};
</script>

<template>
  <div class="container-fluid my-3">
    <!-- <div class="row">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://wallpapercave.com/wp/wp4322404.jpg"
              class="d-block w-100"
              height="1080"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://wallpapercave.com/wp/wp4322404.jpg"
              class="d-block w-100"
              alt="..."
              height="1080"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://wallpapercave.com/wp/wp4322404.jpg"
              class="d-block w-100"
              height="1080px"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div> -->
    <div class="row">
      <h3 class="text-center">Current Prediction</h3>
    </div>
    <div class="row justify-content-center">
      <div class="col">
        <prediction-card />
      </div>
      <div class="col">
        <prediction-card />
      </div>
      <div class="col">
        <prediction-card />
      </div>
    </div>
  </div>
</template>
