<script>
import PredictionCard from "../components/PredictionCard.vue";
import Scorecard from "../components/Scorecard.vue";
export default {
  components: {
    PredictionCard,
    Scorecard,
  },
};
</script>

<template>
  <div class="container-fluid my-3">
    <!-- <div class="row">
      <h3 class="text-center">Scorecard</h3>
    </div>
    <div class="justify-content-center">
      <scorecard />
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
