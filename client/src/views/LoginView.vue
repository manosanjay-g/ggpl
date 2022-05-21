<template>
  <div class="container">
    <div
      class="row justify-content-center vh-100 align-items-center"
      id="rowSignIn"
    >
      <div class="col justify-content-center" style="max-width: 34em">
        <div class="card text-left p-5">
          <form>
            <h3>Sign In</h3>
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
            <button type="submit" class="btn btn-danger my-2">Submit</button
            ><br />
            <p class="my-2">
              Don't have an account?
              <a href="/signup" class="">Create an account</a>
            </p>

            <!---->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      login: { email: "", password: "" },
      data: {},
      err: "",
      isLoginProcessing: false,
      showAlert: false,
      isLoading: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        console.log(this.login);
        if (this.login.email == "" || this.login.password == "") {
          alert("All inputs are required");
        } else {
          this.isLoading = true;
          let response = await axios
            .post("http://localhost:3030/auth/login", this.login)
            .then((res) => {
              this.data = res.data;
              this.$router.replace("/");
            });
        }
      } catch (err) {
        this.err = err.response.data.error;
        console.log(err.response);
      }
    },
  },
};
</script>
