<template>
  <!-- ==============================================
     Posts Section
     =============================================== -->
  <section class="posts-2">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="row">
            <div v-for="n in 8" :key="n" class="col-sm-6">
              <div class="tr-section">
                <div class="tr-post">
                  <div class="entry-header">
                    <div class="entry-thumbnail">
                      <a href="#"
                        ><img
                          class="img-fluid"
                          src="img/blog/12.jpg"
                          alt="Image"
                      /></a>
                    </div>
                    <!-- /entry-thumbnail -->
                  </div>
                  <!-- /entry-header -->
                  <div class="post-content">
                    <div class="author-post">
                      <a href="#"
                        ><img
                          class="img-fluid rounded-circle"
                          src="img/users/12.jpg"
                          alt="Image"
                      /></a>
                    </div>
                    <!-- /author -->
                    <div class="entry-meta">
                      <ul>
                        <li><a href="#">Sean Hanity</a></li>
                        <li>10 min ago</li>
                        <li>
                          <i class="fa fa-align-left"></i>&nbsp;7 Min Read
                        </li>
                      </ul>
                    </div>
                    <!-- /.entry-meta -->
                    <h2>
                      <a href="#" class="entry-title"
                        >Family values you can teach your children</a
                      >
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div class="read-more">
                      <div class="feed pull-left">
                        <ul>
                          <li><i class="fa fa-comments"></i>200</li>
                          &nbsp;
                          <li><i class="fa fa-heart-o"></i>30</li>
                        </ul>
                      </div>
                      <!-- /feed -->
                      <div class="continue-reading pull-right">
                        <a href="#"
                          >Continue Reading <i class="fa fa-angle-right"></i
                        ></a>
                      </div>
                      <!-- /continue-reading -->
                    </div>
                    <!-- /read-more -->
                  </div>
                  <!-- /.post-content -->
                </div>
                <!-- /.tr-post -->
              </div>
              <!-- /.tr-post -->
            </div>
            <!-- /col-sm-6 -->

            <!-- /col-sm-6 -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.col-lg-8 -->

        <div class="col-lg-4">
          <div class="card example-1 scrollbar-ripe-malinka">
            <div class="card-body">
              <a
                v-for="n in 20"
                :key="n"
                href="#"
                class="list-group-item sidebar-link"
              >
                Lorem ipsum Lorem ipsum Lorem
              </a>
            </div>
          </div>
          <!-- /.col-lg-4 -->
        </div>
        <!-- /.row -->
      </div>
    </div>
  </section>
  <!-- /.section -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.scrollbar-ripe-malinka::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  border-radius: 10px;
}

.scrollbar-ripe-malinka::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

.scrollbar-ripe-malinka::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-image: -webkit-linear-gradient(330deg, #a4c8c1 0%, #1ab394 100%);
  background-image: linear-gradient(120deg, #a4c8c1 0%, #1ab394 100%);
}

.example-1 {
  position: relative;
  overflow-y: scroll;
  height: 500px;
}

.sidebar-link {
  color: #88898a;
}

.sidebar-link:hover {
  background: #1ab394;
  color: #ffffff !important;
}
</style>
