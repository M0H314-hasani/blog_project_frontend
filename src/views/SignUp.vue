<template>
  <div class="main">
    <section class="signup">
      <div class="container">
        <div class="signup-content">
          <div class="signup-form">
            <h2 class="form-title">Sign up</h2>
            <form method="POST" class="register-form" id="register-form">
              <div class="form-group">
                <label for="first_name"
                  ><i class="zmdi zmdi-account material-icons-name"></i
                ></label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Your First Name"
                />
              </div>
              <div class="form-group">
                <label for="last_name"
                  ><i class="zmdi zmdi-account material-icons-name"></i
                ></label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Your Last Name"
                />
              </div>
              <div class="form-group">
                <label for="username"
                  ><i class="zmdi zmdi-account-circle"></i
                ></label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Your Username"
                />
              </div>
              <div class="form-group">
                <label for="email"><i class="zmdi zmdi-email"></i></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div class="form-group">
                <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  placeholder="Password"
                />
              </div>
              <div class="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  class="form-submit"
                  value="Register"
                />
              </div>
            </form>
          </div>
          <div class="signup-image">
            <figure>
              <img
                src="~@/assets/signup_signin/images/signup-image.jpg"
                alt="sing up image"
              />
            </figure>
            <a href="/signin" class="signup-image-link">I am already member</a>
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
