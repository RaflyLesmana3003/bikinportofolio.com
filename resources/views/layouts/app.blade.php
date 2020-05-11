<!-- =========================================================
* Argon Dashboard PRO v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 -->
 <!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="_token" content="{{csrf_token()}}" />
    <meta name="description" content="Start your development with a Dashboard for Bootstrap 4.">

    <meta name="author" content="Creative Tim">
    <title>jadifreelancer - @yield('title')</title>
    <!-- Favicon -->
    <link rel="icon" href="{{ asset('assets/img/favicon.png') }}" type="image/png">
    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700">
    <!-- Icons -->
    <link rel="stylesheet" href="{{ asset('assets/vendor/nucleo/css/nucleo.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('assets/vendor/@fortawesome/fontawesome-free/css/all.min.css') }}" type="text/css">
    <!-- Page plugins -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="{{ asset('assets/vendor/datatables.net-bs4/css/dataTables.bootstrap4.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/vendor/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/vendor/datatables.net-select-bs4/css/select.bootstrap4.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/vendor/select2/dist/css/select2.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/vendor/quill/dist/quill.core.css') }}">
    <!-- Argon CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/argon.css?v=1.1.0') }}" type="text/css">
    <link rel="stylesheet" href="https://cdn.plyr.io/3.5.6/plyr.css" />
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/loadingio/ldbutton@v1.0.1/dist/ldbtn.min.css"/>
    <link rel="stylesheet" href="{{ asset('assets/tag/fm.tagator.jquery.css') }}">


</head>

<body>

    <!-- NOTE sidebar -->
    
    <nav class="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white" id="sidenav-main">
        <div class="scrollbar-inner">
            <!-- Brand -->
            <div class="sidenav-header d-flex align-items-center">
                <a class="navbar-brand" href="{{url('/')}}">
                    <img src="{{ asset('assets/img/favicon.png') }}" class="navbar-brand-img" alt="...">
                </a>
                <div class="ml-auto">
                    <!-- Sidenav toggler -->
                    <div class="sidenav-toggler d-none d-xl-block " data-action="sidenav-unpin" data-target="#sidenav-main">
                        <div class="sidenav-toggler-inner">
                            <i class="sidenav-toggler-line "></i>
                            <i class="sidenav-toggler-line"></i>
                            <i class="sidenav-toggler-line"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="navbar-inner">
                <!-- Collapse -->
                <div class="collapse navbar-collapse" id="sidenav-collapse-main">

                    <!-- NOTE Nav items -->
                    
                    @if (Auth::user()->level == "0")
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link {{ request()->routeIs('home') ? 'active' : '' }}"  href="{{url('/home')}}" >
                            <i class="fa fa-dashboard text-info"></i>
                            <span class="nav-link-text">Home</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ request()->routeIs('task') ? 'active' : '' }}"  href="{{url('/task/index')}}" >
                            <i class="fa fa-book text-info"></i>
                            <span class="nav-link-text">Task</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">
                            <i class="fa fa-user text-info"></i>
                            <span class="nav-link-text">User</span>
                        </a>
                    </li>
                    </ul>
                    @else
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="{{ url('f27fc78ffa140e97e0c535374a2a2213') }}">
                                <i class="fa fa-home text-info"></i>
                                <span class="nav-link-text">Home</span>
                            </a>
                        </li>
                    </ul>
                    @endif

                    <hr class="my-3">
                    <ul class="navbar-nav mb-md-3">
                        <li class="nav-item">
                        <a class="nav-link" href="#" target="_blank">

                            <span class="nav-link-text text-muted">tips</span>
                        </a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#" target="_blank">

                            <span class="nav-link-text text-muted">tentang kami</span>
                        </a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#" target="_blank">
                            <span class="nav-link-text text-muted">bantuan</span>
                        </a>
                        </li>
                    </ul>


                </div>
            </div>
        </div>
    </nav>

    <!-- NOTE main content -->
    <div class="main-content  " id="panel">

        <!-- NOTE Topnav -->
        <nav class="navbar navbar-top navbar-expand navbar-dark bg-gradient-info border-bottom">
            <div class="container-fluid">
            @if (null == Auth::user())
                <div class="row d-none d-lg-block mr-3">
                    <div class="col-6 ">
                    <a href="{{ url('/') }}">
                        <img src="{{ asset('assets/img/favicon.png') }}" class="avatar avatar-sm">
                    </a>
                    </div>
                    <div class="col-6 ">
                    </div>
                </div>

            @endif
                <div class="collapse navbar-collapse ml-md-auto" id="navbarSupportedContent" style="float:left;">
                <ul class="navbar-nav align-items-center  text-dark">
                    <li class="nav-item d-xl-none">
                    <!-- Sidenav toggler -->
                    <div class="pr-3 sidenav-toggler" data-action="sidenav-pin" data-target="#sidenav-main">
                        <div class="sidenav-toggler-inner ">
                        <i class="sidenav-toggler-line"></i>
                        <i class="sidenav-toggler-line"></i>
                        <i class="sidenav-toggler-line"></i>
                        </div>
                    </div>
                    </li>
                </ul>
                <!-- Search form -->
                <form action="/da5e6997913d68b2b6a59381a94e664a" method="post"  enctype="multipart/form-data" class="navbar-search navbar-search-light form-inline mr-sm-3" id="navbar-search-main">
                {{ csrf_field() }}
                    <div class="form-group mb-0">
                        <div class="input-group input-group-alternative input-group-merge">
                            <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-search"></i></span>
                            </div>
                            <input class="form-control" name="key" id="key" placeholder="cari task" type="text" required>
                        </div>
                    </div>
                    <button type="button" class="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </form>

                <!-- Navbar links -->
                


            @if (null == Auth::user())
                <div class="row  d-sm-block d-lg-none  ">
                    <div class="col-6 collapse-brand">
                    <a href="{{ url('/') }}">
                        <img src="{{ asset('assets/img/favicon.png') }}" class="avatar avatar-sm">
                    </a>
                    </div>
                    <div class="col-6 collapse-close">
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                    </button>
                    </div>
                </div>
            @endif

                    <ul class="navbar-nav align-items-center ml-auto mr-md-0" style="float:right;">
                        <li class="nav-item d-lg-none">
                            <a class="nav-link" href="#" data-action="search-show" data-target="#navbar-search-main">
                                <i class="fa fa-search text-dark"></i>
                            </a>
                        </li>
                        
                        <li class="nav-item d-none d-lg-block text-dark">
                            <a class="nav-link text-dark" href="{{url('/8f8fe8570a6fca0299bce1c90079cbe6/1')}}" >
                                <button class="btn btn-info">gabung jadi kreator</button>
                            </a>
                        </li>
                        @if (null !== Auth::user())

                        <li class="nav-item dropdown ">
                            <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div class="media align-items-center">


                                <!-- <span class="avatar avatar-sm rounded-circle"> -->
                                @if(Auth::user()->photo != "")
                                    <img alt="Image placeholder" src="{{ url('storage/file/pp/'.Auth::user()->photo) }}" class="avatar avatar-sm rounded-circle">

                                    @else
                                    <img alt="Image placeholder" src="{{ asset('assets/img/theme/team-1.png') }} " class="avatar avatar-sm rounded-circle">

                                    @endif
                                <!-- </span> -->

                                <div class="media-body ml-2 d-none d-lg-block text-white">
                                    <span class="mb-0 text-sm  font-weight-bold"> {{ Auth::user()->name }}</span>
                                </div>

                                </div>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <div class="dropdown-header noti-title">
                                    <h6 class="text-overflow m-0">list kreator!</h6>
                                </div>

                                <a href="{{url('b84dc340d0bd103ac5a157ce6387ee21/')}}" class="dropdown-item">
                                <i class="fa fa-users text-info"></i>
                                <span>dukungan</span>
                                </a>

                                <a href="{{ url('6d2f2f9fc3eb0b0d0ebf36653ad7015e') }}" class="dropdown-item">
                                <i class="ni ni-single-02 text-info"></i>
                                <span>diikuti</span>
                                </a>

                                <div class="dropdown-divider"></div>

                                <a href="{{ url('106a6c241b8797f52e1e77317b96a201') }}" class="dropdown-item">
                                <i class="fa fa-home text-info"></i>
                                <span>home user</span>
                                </a>

                                <a href="{{ url('de95b43bceeb4b998aed4aed5cef1ae7/user') }}" class="dropdown-item">
                                <i class="fa fa-cog text-info"></i>
                                <span>pengaturan profil</span>
                                </a>

                                <div class="dropdown-divider"></div>

                                @if(Auth::user()->level == 0)
                                <a href="{{ url('8f8fe8570a6fca0299bce1c90079cbe6/1') }}" class="dropdown-item">
                                    <span class="text-info">gabung jadi kreator</span>
                                </a>
                                @endif
                                <a href="#!" class="dropdown-item" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                    <i class="ni ni-user-run "></i>
                                    <span>Logout</span>
                                </a>
                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    @csrf
                                </form>
                            </div>
                        </li>
                    @else
                    <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                    </ul>
                    @endif
                    </ul>
                </div>
            </div> 
      </nav>

        <!-- NOTE content -->
        @yield('content')

        <!-- NOTE Footer -->
        <footer class="footer pt-0" style=" ">
            <div class="row align-items-center justify-content-lg-between">
                <div class="col-lg-6">
                    <div class="copyright text-center text-lg-left text-muted">
                        &copy; 2019 <a href="https://www.buataja.id" class="font-weight-bold ml-1" target="_blank">jadifreelancer.com</a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                        <li class="nav-item">
                            <a href="https://www.creative-tim.com" class="nav-link" target="_blank">jadifreelancer.com</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://www.creative-tim.com/presentation" class="nav-link" target="_blank">tentang kami</a>
                        </li>
                        <li class="nav-item">
                            <a href="http://blog.creative-tim.com" class="nav-link" target="_blank">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://www.creative-tim.com/license" class="nav-link" target="_blank">License</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>

    
    <!-- Argon Scripts -->
    <!-- Core -->
    <script src="{{ asset('assets/vendor/jquery/dist/jquery.min.js') }}"></script>
    <script src="{{ asset('assets/vendor/js-cookie/js.cookie.js') }}"></script>
    <script src="{{ asset('assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js') }}"></script>
    <script src="{{ asset('assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js') }}"></script>
    <!-- Optional JS -->
    <script src="{{ asset('assets/vendor/chart.js/dist/Chart.min.js') }}"></script>
    <script src="{{ asset('assets/vendor/chart.js/dist/Chart.extension.js') }}"></script>
    <script src="{{ asset('assets/vendor/select2/dist/js/select2.min.js') }}"></script>
    <script src="{{ asset('assets/vendor/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js') }}"></script>
    <script src="{{ asset('assets/vendor/nouislider/distribute/nouislider.min.js') }}"></script>
    <script src="{{ asset('assets/vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js') }}"></script>
    <!-- <script src="{{ asset('assets/vendor/dropzone/dist/min/dropzone.min.js') }}"></script> -->

    <script src="{{ asset('assets/vendor/datatables.net/js/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('assets/vendor/datatables.net-bs4/js/dataTables.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('assets/vendor/datatables.net-buttons/js/dataTables.buttons.min.js') }}"></script>
    <script src="{{ asset('assets/vendor/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('assets/vendor/datatables.net-buttons/js/buttons.html5.min.js') }}"></script>
    <script src="{{ asset('assets/vendor/datatables.net-buttons/js/buttons.flash.min.js') }}"></script>
    <script src="{{ asset('assets/vendor/datatables.net-buttons/js/buttons.print.min.js') }}"></script>
    <script src="{{ asset('assets/vendor/datatables.net-select/js/dataTables.select.min.js') }}"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.min.js"></script>
    <!-- Argon JS -->
    <script src="{{ asset('assets/js/argon.js') }}"></script>
    <!-- Demo JS - remove this in your project -->
    <!-- <script src="{{ asset('assets/js/demo.min.js') }}"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="https://cdn.rawgit.com/igorescobar/jQuery-Mask-Plugin/1ef022ab/dist/jquery.mask.min.js"></script> -->

</body>
</html>
