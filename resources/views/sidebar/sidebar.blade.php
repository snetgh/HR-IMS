@if(Session::get('my_name') == null)
<script>window.location="{{URL('/')}}"</script>
@endif

<body>
  <!-- begin .app -->
  <div class="app">
    <!-- begin .app-wrap -->
    <div class="app-wrap">
      <!-- begin .app-heading -->
      <header class="app-heading">
        <header class="canvas is-fixed is-top bg-white p-v-15 shadow-4dp" id="top-search">

          <div class="container-fluid">
            <div class="input-group input-group-lg icon-before-input">
              <input type="text" class="form-control input-lg b-0" placeholder="Search for...">
              <div class="icon z-3">
                <i class="fa fa-fw fa-lg fa-search"></i>
              </div>
              <span class="input-group-btn">
                <button data-target="#top-search" data-toggle="canvas" class="btn btn-danger btn-line b-0">
                  <i class="fa fa-fw fa-lg fa-times"></i>
                </button>
              </span>
            </div>
            <!-- /input-group -->
          </div>

        </header>
        <!-- begin .navbar -->
        <nav class="navbar navbar-default navbar-static-top shadow-2dp">
          <!-- begin .navbar-header -->
          <div class="navbar-header">
            <!-- begin .navbar-header-left with image -->
            <div class="navbar-header-left b-r" style="text-aligned:center">
              <!--begin logo-->
              <a class="logo" href="{{URL('/dashboard')}}">
                <div><h2 style="margin-left: 5px;font-weight: bold;text-transform: uppercase;" id="my_title">Donkorkrom </h2> <h4 style="margin-left: 70px"> Hospital</h4></div>
              </a>
              <!--end logo-->
            </div>
            <!-- END: .navbar-header-left with image -->
            <nav class="nav navbar-header-nav">

              <a class="visible-xs b-r" href="#" data-side=collapse>
                <i class="fa fa-fw fa-bars"></i>
              </a>

              <a class="hidden-xs b-r" href="#" data-side=mini>
                <i class="fa fa-fw fa-bars"></i>
              </a>

              <form class="navbar-form hidden-xs b-r">
                <div class="icon-after-input">
                  <input type="text" class="form-control" placeholder="Search">
                  <div class="icon">
                    <a href="#">
                      <i class="fa fa-fw fa-search"></i>
                    </a>
                  </div>
                </div>
              </form>

            </nav>

            <ul class="nav navbar-header-nav m-l-a">
              <li class="visible-xs b-l">
                <a href="#top-search" data-toggle="canvas">
                  <i class="fa fa-fw fa-search"></i>
                </a>
              </li>

              <li class="dropdown b-l">
                <a class="dropdown-toggle profile-pic" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <img class="img-circle" src="{{asset('/images/')}}/w1.svg" alt="{{Session::get('my_name')}}">
                  <b class="hidden-xs hidden-sm">{{Session::get('my_name')}}</b>
                </a>
                <ul class="dropdown-menu animated flipInY pull-right">

                  <li>
                    <a href="{{url('/logout')}}">
                      <i class="fa fa-fw fa-sign-out"></i>
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <!-- END: .navbar-header -->
        </nav>
        <!-- END: .navbar -->
      </header>
      <!-- END:  .app-heading -->

      <!-- begin .app-container -->
      <div class="app-container">

        <!-- begin .app-side -->
        <aside class="app-side">
          <!-- begin .side-content -->
          <div class="side-content">
            <!-- begin user-panel -->
            <div class="user-panel">
              <div class="user-image">
                <a href="">
                  <img class="img-circle" src="{{asset('/images/')}}/m1.svg" alt="{{Session::get('my_name')}}">
                </a>
              </div>
              <div class="user-info">
                <h5>{{Session::get('my_name')}}</h5>
                <ul class="nav">
                  <li class="dropdown">
                    <a href="#" class="text-turquoise small dropdown-toggle bg-transparent" data-toggle="dropdown">
                      <i class="fa fa-fw fa-circle">
                      </i> Online
                    </a>
                    <ul class="dropdown-menu animated flipInY pull-right">

                      <li role="separator" class="divider"></li>
                      <li>
                        <a href="{{url('/logout')}}">
                          <i class="fa fa-fw fa-sign-out"></i> Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <!-- END: user-panel -->
            <!-- begin .side-nav -->
            <nav class="side-nav">
              <!-- BEGIN: nav-content -->
              <ul class="metismenu nav nav-inverse nav-bordered nav-stacked" data-plugin="metismenu">

              <li class="{{Request::is('dashboard') ? 'active' : ''}}">
                  <a href="/dashboard">
                    <span class="nav-icon">
                      <i class="fa fa-fw fa-dashboard"></i>
                    </span>
                    <span class="nav-title">Dashboard</span>
                  </a>
                </li>

                <li class="{{Request::is('staff') ? 'active' : ''}}">
                  <a href="/staff">
                    <span class="nav-icon">
                      <i class="fa fa-fw fa-eye"></i>
                    </span>
                    <span class="nav-title">View Staff</span>
                  </a>
                </li>

                <li class="{{Request::is('staff/retirement') ? 'active' : ''}}">
                    <a href="/staff/retirement">
                      <span class="nav-icon">
                        <i class="fa fa-fw fa-eye"></i>
                      </span>
                      <span class="nav-title">Retirements</span>
                    </a>
                  </li>

                  <li class="{{Request::is('staff/birth_cert') ? 'active' : ''}}">
                    <a href="/staff/birth_cert">
                      <span class="nav-icon">
                        <i class="fa fa-fw fa-eye"></i>
                      </span>
                      <span class="nav-title">Birth Certificates</span>
                    </a>
                  </li>

                <li class="{{Request::is('staff/create') ? 'active' : ''}}">
                  <a href="/staff/create">
                    <span class="nav-icon">
                      <i class="fa fa-fw fa-user-plus"></i>
                    </span>
                    <span class="nav-title">Add Staff</span>
                  </a>
                </li>

                <li class="{{Request::is('staff/manage') ? 'active' : ''}}">
                  <a href="/staff/manage">
                    <span class="nav-icon">
                      <i class="fa fa-fw fa-cogs"></i>
                    </span>
                    <span class="nav-title">Manage Staff</span>
                  </a>
                </li>
              
               <li class="{{Request::is('staff/monitor_leave') ? 'active' : ''}}">
                  <a href="/staff/monitor_leave">
                    <span class="nav-icon">
                      <i class="fa fa-fw fa-address-book"></i>
                    </span>
                    <span class="nav-title">Monitor Staff Leave</span>
                  </a>
                </li>

                <li class="{{Request::is('staff/leave_requests') ? 'active' : ''}}">
                  <a href="/staff/leave_requests">
                    <span class="nav-icon">
                      <i class="fa fa-fw fa-address-book"></i>
                    </span>
                    <span class="nav-title">Pending Leave Requests</span>
                  </a>
                </li>

                <li class="{{Request::is('staff/reprint_leave_request') ? 'active' : ''}}">
                  <a href="/staff/reprint_leave_request">
                    <span class="nav-icon">
                      <i class="fa fa-fw fa-print"></i>
                    </span>
                    <span class="nav-title">Print Leave Requests</span>
                  </a>
                </li>

                <li class="{{Request::is('staff/password') ? 'active' : ''}}">
                  <a href="/staff/password">
                    <span class="nav-icon">
                      <i class="fa fa-fw fa-recycle"></i>
                    </span>
                    <span class="nav-title">Change Password</span>
                  </a>
                </li>

                <li>
                  <a href="{{url('/logout')}}">
                    <span class="nav-icon">
                      <i class="fa fa-fw fa-lock"></i>
                    </span>
                    <span class="nav-title">Logout</span>
                  </a>
                </li>
              </ul>
              <!-- END: nav-content -->
            </nav>
            <!-- END: .side-nav -->
          </div>
          <!-- END: .side-content -->
        </aside>
        <!-- END: .app-side -->

        <!-- begin side-collapse-visible bar -->
        <div class="side-visible-line hidden-xs" data-side="collapse">
          <i class="fa fa-caret-left"></i>
        </div>
        <!-- begin side-collapse-visible bar -->

        <!-- begin .app-main -->
        <div class="app-main">

          <!-- begin .main-heading -->

          <!-- END: .main-heading -->

           <!-- begin .main-content -->
           <div class="main-content bg-clouds">

        <!-- begin .container-fluid -->
        <div class="container-fluid p-t-15">
