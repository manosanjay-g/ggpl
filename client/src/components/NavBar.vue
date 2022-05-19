<template>
  <nav class="navbar navbar-dark navbar-expand-lg bg-danger">
    <div class="container-fluid">
      <a class="navbar-brand">Fantasy Cricket League</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse text-center" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Teams</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              >Create Prediction</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link">Log out</a>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Make a Prediction
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="BatsmanLabel" class="form-label">Batsman</label>
              <input type="text" class="form-control" id="BatsmanInput" />
            </div>
            <div class="mb-3">
              <label for="BowlerLabel" class="form-label">Bowler</label>
              <input type="text" class="form-control" id="BowlerInput" />
            </div>

            <div class="mb-3">
              <label for="BatsmanInput" class="form-label">PP1 Score</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="mb-3">
              <label for="BatsmanInput" class="form-label">PP2 Score</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="mb-3">
              <label for="BatsmanInput" class="form-label"
                >1st Innings Score</label
              >
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="mb-3">
              <label for="BatsmanInput" class="form-label">Win</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Clear
            </button>
            <button type="button" class="btn btn-success">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {},
};
</script>
