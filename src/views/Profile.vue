<template>
  <!-- ==============================================
     Posts Section
     =============================================== -->

  <section class="posts-2">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <div class="card widget-info-one">
            <div class="widget-avatar-img">
              <img
                class="card-img-top img-fluid"
                src="/img/2.6591d7d0.jpg"
                alt=""
              />
            </div>
            <!-- /.avatar-img -->
            <div class="card-block">
              <div class="inner">
                <h5>Alex Grantte</h5>
                <span class="subtitle"
                  >Praesent magna nunc, tincidunt pretium.</span
                >
              </div>
              <!-- /.inner -->
            </div>
            <div class="card-footer">
              <ul class="post-view">
                <li>
                  <a href="#"><i class="fa fa-users"></i></a>1.5k
                </li>
                <li class="active">
                  <a href="#"><i class="fa fa-user-plus"></i></a>100
                </li>
                <li>
                  <a href="#"><i class="fa fa-edit"></i></a>34
                </li>
              </ul>
              <!-- /.post-view -->
            </div>
            <!-- /.card-footer -->
          </div>
          <!-- /.panel -->

          <div class="card widget-info-two">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <i class="fa fa-map-marker"></i>&nbsp; New York
              </li>
              <li class="list-group-item">
                <i class="fa fa-users"></i>&nbsp; Group1, Group2
              </li>
              <li class="list-group-item">
                <i class="fa fa-calendar"></i>&nbsp; Joined 2009
              </li>
              <li class="list-group-item">
                <i class="fa fa-globe"></i>&nbsp;
                <a href="http://www.themashabrand.com/" target="_blank"
                  >www.themashabrand.com</a
                >
              </li>
            </ul>
          </div>
        </div>
        <!-- /.col-md-4 -->

        <div class="col-md-6">
          <div v-for="n in 3" :key="n" class="tr-section feed">
            <div class="tr-post">
              <div class="entry-header">
                <div class="entry-thumbnail">
                  <a href="#"
                    ><img class="img-fluid" src="img/blog/5.jpg" alt="Image"
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
                      src="img/users/5.jpg"
                      alt="Image"
                  /></a>
                </div>
                <!-- /author -->
                <div class="entry-meta">
                  <ul>
                    <li><a href="#">Kyle Murray</a></li>
                    <li>2 months ago</li>
                    <li><i class="fa fa-align-left"></i>&nbsp;10 Min Read</li>
                  </ul>
                </div>
                <!-- /.entry-meta -->
                <h2>
                  <a href="#" class="entry-title"
                    >What it’s like to travel to Greece right now</a
                  >
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div class="read-more">
                  <div class="feed pull-left">
                    <ul>
                      <li><i class="fa fa-comments"></i>500</li>
                      &nbsp;
                      <li><i class="fa fa-heart-o"></i>143</li>
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
        <!-- /.col-md-6 -->

        <div class="col-md-3">
          <section class="box-typical" style="border: 0px;">
            <header class="box-typical-header-sm">Followers</header>
            <div class=" example-1 scrollbar-ripe-malinka">
              <div class="people-rel-list">
                <ul class="people-rel-list-photos">
                  <li v-for="n in 200" :key="n">
                    <a href="#"><img src="/img/2.6591d7d0.jpg" alt=""/></a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section class="box-typical" style="border: 0px;">
            <header class="box-typical-header-sm">Followings</header>
            <div class=" example-1 scrollbar-ripe-malinka">
              <div class="people-rel-list">
                <ul class="people-rel-list-photos">
                  <li v-for="n in 200" :key="n">
                    <a href="#"><img src="/img/2.6591d7d0.jpg" alt=""/></a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <!-- /.tr-post -->
        </div>
        <!-- /.col-md-3 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.section -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.scrollbar-ripe-malinka::-webkit-scrollbar {
  width: 0px;
  background-color: #f5f5f5;
}

.example-1 {
  position: relative;
  overflow-y: scroll;
  height: 200px;
}
</style>
