<template>
  <div class="container">
    <div
      class="row vh-100 justify-content-center align-items-center"
      id="rowSignIn"
    >
      <div class="col justify-content-center" style="max-width: 34em">
        <div class="card text-left p-5">
          <form>
            <h3>Sign Up</h3>
            <div class="form-group my-2">
              <label for="exampleInputName1">Name</label
              ><input type="text" class="form-control" id="exampleInputName1" />
            </div>
            <div class="form-group my-2">
              <label for="exampleInputEmail1">Email address</label
              ><input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group my-2">
              <label for="exampleInputPassword1">Password</label
              ><input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <!----><button type="submit" class="btn btn-danger">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
