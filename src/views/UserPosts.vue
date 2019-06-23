<template>
  <div>
    <!-- ==============================================
	 Header
	 =============================================== -->
    <header style="height: 100px;"></header>

    <!-- ==============================================
	 User Section
	 =============================================== -->
    <section class="user-section">
      <div class="container">
        <div class="profile-user-box">
          <button
            style="background: #44b393;"
            type="button"
            class="btn btn-primary btn-lg btn-block"
          >
            Create New Post
          </button>

          <!-- /text-right -->

          <!-- /col-sm-6 -->

          <!-- /row -->
        </div>
        <!--/ profile-user-box -->
      </div>
      <!-- /container -->
    </section>
    <!-- /section -->

    <!-- ==============================================
     Posts Section
     =============================================== -->

    <section class="posts-2 following">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <br />

            <!-- Tab panes -->
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active">
                <a v-for="n in 10" :key="n" href="#">
                  <div class="card card-profile">
                    <div class="card-block">
                      <div class="media">
                        <div class="media-left"></div>
                        <div class="media-body">
                          <img
                            class="img-thumbnail"
                            src="/img/5.304937b2.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <!-- media -->
                      <ul class="card-options">
                        <li>
                          <a
                            class="tooltips"
                            href="#"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="View Options"
                          >
                          </a>
                        </li>
                      </ul>

                      <div class="people-info">
                        <div class="row">
                          <div class="col-12">
                            <h1 class="text-center">Blog Title</h1>
                          </div>
                        </div>
                        <!-- row -->
                        <div class="row">
                          <div class="col-sm-12">
                            <p class="subtitle">
                              subtitle subtitle subtitle subtitle subtitle
                              subtitle subtitle subtitle subtitle subtitle
                              subtitle subtitle subtitle subtitle subtitle
                              subtitle subtitle subtitle subtitle
                            </p>
                          </div>
                        </div>
                        <!-- row -->
                      </div>
                      <!-- panel-info -->
                    </div>
                    <!-- card-block -->
                  </div>
                  <!-- card -->
                </a>
              </div>
              <!-- tabpanel -->
            </div>
          </div>
        </div>
        <!--/ row -->
      </div>
      <!--/ container -->
    </section>
    <!--/ section -->
  </div>
</template>

<script>
export default {
  computed: {
    host() {
      return location.host;
    }
  }
};
</script>

<style lang="scss" scoped>
.subtitle {
  font-family: "Abhaya Libre", serif;
  line-height: 1.5;
  margin: 30px 0;
  color: #858686;
  font-size: 17px;
}
</style>
