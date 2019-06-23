<template>
  <nav
    class="navbar navbar-light navbar-toggleable-sm bg-faded justify-content-between"
    id="mainNav-2"
  >
    <button
      class="navbar-toggler navbar-toggler-right"
      type="button"
      data-toggle="collapse"
      data-target="#collapsingNavbar2"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <a href="index.html" class="navbar-brand mr-0"> BLOG_PROJECT</a>
    <div
      class="navbar-collapse collapse justify-content-between"
      id="collapsingNavbar2"
    >
      <div>
        <!--placeholder to evenly space flexbox items and center links-->
      </div>

      <ul class="nav navbar-nav">
        <li class="nav-item dropdown mega-avatar">
          <a
            class="nav-link dropdown-toggle clear"
            data-toggle="dropdown"
            aria-expanded="true"
          >
            <span class="avatar w-32"
              ><img
                src="~@/assets/blog_template/img/users/2.jpg"
                class="w-full rounded"
                width="25"
                height="25"
                alt="..."
            /></span>
            <!-- hidden-xs hides the username on small devices so only the image appears. -->
            <span class="hidden-xs">
              Alex Grantte
            </span>
          </a>
          <div class="dropdown-menu w dropdown-menu-scale pull-right">
            <a class="dropdown-item" href="#"><span>New Story</span></a>
            <a class="dropdown-item" href="#"><span>Become a Member</span></a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="profile.html"
              ><span>Profile</span></a
            >
            <a class="dropdown-item" href="#"><span>Settings</span></a>
            <a class="dropdown-item" href="#">Need help?</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Sign out</a>
          </div>
        </li>
        <!-- /navbar-item -->
      </ul>
      <!-- /navbar-nav -->
    </div>
    <!-- /navbar-collapse -->
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
