<template>
  <div>
    <!-- ==============================================
	 Header
	 =============================================== -->
    <header class="masthead" style="">
      <a href="#"
        ><font-awesome-icon
          icon="edit"
          size="4x"
          style="color: white; margin: 10px;"
        />
      </a>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <div class="post-heading text-center">
              <h1 contenteditable="true">
                What it’s like to travel to Greece right now
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- ==============================================
	 Post Content
	 =============================================== -->
    <article>
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-md-1">
            <div class="white-blogpage">
              <div class="row post-top-sec">
                <div class="col-lg-3">
                  <h5>Status</h5>
                  <p>Draft</p>
                </div>
                <!-- /.col-lg-3 -->
                <div class="col-lg-3">
                  <h5>Accessebility</h5>
                  <p>Public</p>
                </div>
                <!-- /.col-lg-3 -->
                <div class="col-lg-3">
                  <h5>Category</h5>
                  <p data-toggle="modal" data-target="#exampleModalCenter">
                    cat1
                  </p>
                </div>
                <!-- /.col-lg-3 -->
                <div class="col-lg-3">
                  <!-- Button trigger modal -->
                  <button type="button" class="btn btn-primary">
                    Publish
                  </button>
                </div>
                <!-- /.col-lg-3 -->

                <div class="col-lg-12">
                  <hr class="small-hr" />
                </div>
                <!-- /.col-lg-12 -->
              </div>
              <!-- /.row -->

              <p>{{ host }}/post/<span contenteditable></span></p>

              <div class="col-lg-12">
                <hr class="small-hr" />
              </div>

              <div class="row post-top-sec">
                <div class="col-lg-12">
                  <p contenteditable>Draft</p>
                </div>

                <div class="col-lg-12">
                  <hr class="small-hr" />
                </div>
                <!-- /.col-lg-12 -->
              </div>

              <p>
                Lorem ipsum dolor sit amet, lorem quaestio similique has at,
                possit vivendum ne nam. Unum saepe ea vim, ius sensibus volutpat
                et, eum legere nostrum explicari ei. Sed ex legere hendrerit. Ei
                saperet officiis has, eu usu prompta mandamus. Vix dicat
                electram ei, ne sea aeterno ornatus perpetua, ne cum omnis
                voluptua iracundia.
              </p>
              <p>
                Pro munere assueverit id, debitis scaevola omittantur vim ex,
                qui meis tantas et. Vivendo ponderum id pro. Vidit offendit
                quaerendum est et, no eos prima tamquam, eu duo ludus noster
                praesent. Sea cu quod illum. Affert munere ut vis, ponderum
                gubergren sit ne. Nam at magna homero feugait.
              </p>
              <blockquote>
                Odio laoreet vivendum ex vis. At mentitum assueverit nam, mel ex
                dolorem tacimates praesent. Saepe nemore duo te, no nec cetero
                eligendi mnesarchum.<br />
                Ne congue similique eloquentiam has. Wisi omittantur
                definitiones vis in. Pro munere assueverit id, debitis scaevola
                omittantur vim ex, qui meis tantas et.<br />
                Vivendo ponderum id pro. Vidit offendit quaerendum est et, no
                eos prima tamquam, eu duo ludus noster praesent. <br />
                Sea cu quod illum. Affert munere ut vis, ponderum gubergren sit
                ne. Nam at magna homero feugait.
              </blockquote>

              <h4>Good design goes to heaven, bad design goes everywhere.</h4>
              <br />
              <p>
                <img
                  src="img/blog/5.jpg"
                  class="img-fluid"
                  width="100%"
                  height="500"
                  alt="..."
                />
              </p>
              <p>
                Odio laoreet vivendum ex vis. At mentitum assueverit nam, mel ex
                dolorem tacimates praesent. Saepe nemore duo te, no nec cetero
                eligendi mnesarchum. Ne congue similique eloquentiam has. Wisi
                omittantur definitiones vis in.
              </p>
              <p>
                Pertinacia neglegentur vix ne. Illum accusata id quo, vis ex
                mucius iisque aliquid. Eos meliore interesset id. Ne has
                fabellas elaboraret.
              </p>
              <p>
                Ne iriure reprimique vel. Ex alii pericula pri, idque veritus
                ius id. Etiam doctus aperiam cu mea, vel cibo dicunt ad, vim
                luptatum delicatissimi eu. Diam mentitum explicari no vim,
                tantas nominavi eos in. Ei pri omnis verterem antiopam.
              </p>

              <h4>Lorem ipsum</h4>
              <ul class="square">
                <li>
                  Lorem ipsum dolor sit amet, lorem quaestio similique has at,
                  possit vivendum ne nam.
                </li>
                <li>
                  Pro munere assueverit id, debitis scaevola omittantur vim ex,
                  qui meis tantas et.
                </li>
                <li>
                  Pertinacia neglegentur vix ne. Illum accusata id quo, vis ex
                  mucius iisque aliquid.
                </li>
                <li>
                  Pertinacia neglegentur vix ne. Illum accusata id quo, vis ex
                  mucius iisque aliquid.
                </li>
              </ul>

              <h4>Lorem ipsum</h4>
              <ul class="square">
                <li>
                  Lorem ipsum dolor sit amet, lorem quaestio similique has at,
                  possit vivendum ne nam.
                </li>
                <li>
                  Pro munere assueverit id, debitis scaevola omittantur vim ex,
                  qui meis tantas et.
                </li>
                <li>
                  Pertinacia neglegentur vix ne. Illum accusata id quo, vis ex
                  mucius iisque aliquid.
                </li>
                <li>
                  Pertinacia neglegentur vix ne. Illum accusata id quo, vis ex
                  mucius iisque aliquid.
                </li>
              </ul>
            </div>
            <!-- /.col-lg-8 -->
          </div>
        </div>
      </div>
    </article>

    <!-- Modal -->
    <div
      ref="modal"
      class="modal fade sc"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Categories</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <section class="box-typical" style="border: 0px;">
              <div class=" example-1 scrollbar-ripe-malinka">
                <div class="people-rel-list">
                  <div class="card-body">
                    <p
                      v-for="n in 20"
                      :key="n"
                      href="#"
                      class="list-group-item sidebar-link"
                    >
                      Lorem ipsum Lorem ipsum Lorem
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */

export default {
  mounted() {
    $(this.$refs.modal).on("shown.bs.modal", function() {});
  },
  computed: {
    host() {
      return location.host;
    }
  }
};
</script>

<style lang="scss">
header.masthead {
  background: linear-gradient(rgba(34, 34, 34, 0.7), rgba(34, 34, 34, 0.7)),
    url(/img/5.304937b2.jpg) no-repeat center center;
}

.scrollbar-ripe-malinka::-webkit-scrollbar {
  width: 0px;
  background-color: #f5f5f5;
}

.example-1 {
  position: relative;
  overflow-y: scroll;
  height: 300px;
}

.sidebar-link:hover {
  cursor: pointer;
  background: #1ab394;
  color: #ffffff !important;
}
</style>
