<template>
  <div class="main">
    <section class="sign-in">
      <div class="container">
        <div class="signin-content">
          <div class="signin-image">
            <figure>
              <img
                src="~@/assets/signup_signin/images/signin-image.jpg"
                alt="sing up image"
              />
            </figure>
            <a href="/signup" class="signup-image-link">Create an account</a>
          </div>

          <div class="signin-form">
            <h2 class="form-title">Sign up</h2>
            <form method="POST" class="register-form" id="login-form">
              <div class="form-group">
                <label for="your_name"
                  ><i class="zmdi zmdi-account material-icons-name"></i
                ></label>
                <input
                  type="text"
                  name="your_name"
                  id="your_name"
                  placeholder="Your Name"
                />
              </div>
              <div class="form-group">
                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                <input
                  type="password"
                  name="your_pass"
                  id="your_pass"
                  placeholder="Password"
                />
              </div>
              <div class="form-group form-button">
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  class="form-submit"
                  value="Log in"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url(~@/assets/signup_signin/fonts/material-icon/css/material-design-iconic-font.min.css);
@import url(~@/assets/signup_signin/css/style.css);

.main {
  background: linear-gradient(to top right, #50666f 0%, #1ab394 100%);
}

.form-submit {
  background: #1ab394;
}
.form-submit:hover {
  background: #107a65;
}
</style>
