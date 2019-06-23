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
          <div class="row">
            <div class="col-sm-6">
              <span class="pull-left m-r-15"
                ><img src="img/users/11.jpg" alt="" class="thumb-lg img-circle"
              /></span>
              <div class="media-body">
                <h4 class="m-t-5 m-b-5 ellipsis" contenteditable>
                  Category title
                </h4>
                <p class="font-13" contenteditable>subtitle</p>
                <p class="text-muted m-b-0">
                  <small
                    >{{ host }}?cat=<span contenteditable>slug</span></small
                  >
                </p>
              </div>
              <!-- /media-body -->
            </div>
            <!-- /col-sm-6 -->
            <div class="col-sm-6">
              <div class="text-right">
                <button
                  type="button"
                  class="btn btn-success waves-effect waves-light"
                >
                  Create Category
                </button>
              </div>
              <!-- /text-right -->
            </div>
            <!-- /col-sm-6 -->
          </div>
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
            <ul class="nav nav-tabs" role="tablist" id="myTabs">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  href="#all_categories"
                  role="tab"
                  data-toggle="tab"
                  >Followers</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#following_categories"
                  role="tab"
                  data-toggle="tab"
                  >Following</a
                >
              </li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#my_categories"
                  role="tab"
                  data-toggle="tab"
                  >Following</a
                >
              </li>
            </ul>
            <br />

            <!-- Tab panes -->
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="all_categories">
                <div class="row">
                  <div class="col-12">
                    <div class="card-box widget-user">
                      <div>
                        <div class="wid-u-info">
                          <h4 class="m-t-0 m-b-5 font-600">Michelle Kate</h4>
                          <p class="text-muted m-b-5 font-13">
                            www.themashabrand.com www.themashabrand.com
                          </p>
                          <small class="text-warning"><b>Follow</b></small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- row -->
              </div>
              <!-- tabpanel -->
              <div
                role="tabpanel"
                class="tab-pane fade"
                id="following_categories"
              >
                <div class="row">
                  <div class="col-12">
                    <div class="card-box widget-user">
                      <div>
                        <div class="wid-u-info">
                          <h4 class="m-t-0 m-b-5 font-600">Michelle Kate</h4>
                          <p class="text-muted m-b-5 font-13">
                            www.themashabrand.com
                          </p>
                          <small class="text-warning"><b>Unfollow</b></small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- row -->
              </div>
              <!-- tabpanel -->
              <div role="tabpanel" class="tab-pane fade" id="my_categories">
                <div class="row">
                  <div class="col-12">
                    <div class="card-box widget-user">
                      <div>
                        <div class="wid-u-info">
                          <h4 class="m-t-0 m-b-5 font-600">Michelle Kate</h4>
                          <p class="text-muted m-b-5 font-13">
                            www.themashabrand.com
                          </p>
                          <small class="text-warning"><b>Unfollow</b></small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- row -->
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

<style lang="scss" scoped></style>
