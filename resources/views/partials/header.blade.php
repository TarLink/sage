<header>
	<div class="d-flex d-inline d-md-none bg-dark">
	  <a class="navbar-brand mx-auto" href="#">
			<img src="@asset('images/Logo.png')" width="64" height="55" class="d-inline-block" alt="">
	  </a>
	</div>
	<nav class="navbar navbar-expand-md  navbar-dark bg-dark"><!--
	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="navbar-nav text-center mx-auto">
		  <li class="nav-item ">
			<a class="nav-link " href="#">PORTFOLIO</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">ABOUT</a>
		  </li>
		  <a class="navbar-brand d-none d-sm-inline" href="#">
			<img src="@asset('images/Logo.png')" width="64" height="55" class="d-inline-block" alt="">
		  </a>
		  <li class="nav-item">
			<a class="nav-link" href="#">BLOG</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">GET IN TOUCH</a>
		  </li>
	  </div>
	  <button class="navbar-toggler mx-auto" type="button" data-toggle="collapse"
		  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
		  aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	  </button> -->
		@php wp_nav_menu( array(
				'theme_location'  => 'primary_navigation',
				'depth'	          => 1, // 1 = no dropdowns, 2 = with dropdowns.
				'container'       => 'div',
				'container_class' => 'collapse navbar-collapse',
				'container_id'    => 'navbarSupportedContent',
				'menu_class'      => 'navbar-nav text-center mx-auto',
				'fallback_cb'     => 'WP_Bootstrap_Navwalker::fallback',
				'walker'          => new WP_Bootstrap_Navwalker(),
			) );
	 @endphp
	 <button class="navbar-toggler mx-auto" type="button" data-toggle="collapse"
		 data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
		 aria-expanded="false" aria-label="Toggle navigation">
	 <span class="navbar-toggler-icon"></span>
	 </button>
	</nav>
	<!-- arrow css -->
	<div class="d-flex mx-auto arrow-down"></div>
</header>
