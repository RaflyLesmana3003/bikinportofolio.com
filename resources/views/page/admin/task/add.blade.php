@extends('layouts.app')

@section('title','Add Task')
@section('content')

<div class="header bg-gradient-info pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
              <h6 class="h2 text-white d-inline-block mb-0">Task</h6>
              <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                  <li class="breadcrumb-item"><a href="#"><i class="fas fa-book"></i></a></li>
                  <li class="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
              </nav>
            </div>
            <div class="col-lg-6 col-5 text-right">
              <a href="#" class="btn btn-md btn-neutral text-info"><i class="fa fa-plus"></i> add Task</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid mt--6">
      <div class="row justify-content-center">
        <div class="col-xl-8">
          <div class="card">
            <!-- Card header -->
            <div class="card-header">
              <h3 class="mb-0">Add Task</h3>
            </div>
            <div class="card-body">
                <form id="form">
                  <div class="form-row">
                    <div class="col-md-6 mb-3">
                      <label class="form-control-label" for="title">Title</label>
                      <input type="text" class="form-control" id="title" placeholder="buat website" required>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-4 mb-3">
                      <label class="form-control-label" for="skill">Skill</label>
                      <input type="text" class="form-control" id="skill" placeholder="php, mysql" required>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-12 mb-3">
                      <label class="form-control-label" for="desc">Deskripsi</label>
                      <div class="focused" data-toggle="quill" id="desc"  data-quill-placeholder="pada hari minggu itu"></div>
                    </div>
                  </div>
                  <button class="btn btn-info">add</button>
                </form>
              </div>
          </div>
        </div>
      </div>



        <!-- NOTE script -->
        <script src="//cdn.quilljs.com/1.3.6/quill.js"></script>
        <script src="//cdn.quilljs.com/1.3.6/quill.min.js"></script>
        <script src="{{ asset('assets/vendor/jquery/dist/jquery.min.js') }}"></script>
        <script src="{{ asset('assets/tag/fm.tagator.jquery.js') }}"></script>
        <script>
        $('#skill').tagator({
            autocomplete: ['php', 'javascript', 'ui/ux']
        });
        var $quill = new Quill('[data-toggle="quill"]', {
            modules: {
            toolbar: [
                    ['bold', 'italic'],
                    ['link', 'blockquote'],
                    [{
                    'list': 'ordered'
                    }, {
                    'list': 'bullet'
                    }]
                ]
            },
            theme: 'snow'
        });
        </script>

        <script>
        $("#form").submit(function(e) {
            e.preventDefault();
            
            var content;
            var delta = $quill.getContents();
            console.log(delta);

            content = JSON.stringify(delta);
            var formData = new FormData();

            formData.append("title",$('#title').val());
            formData.append("desc",content);
            formData.append("skill",$('#skill').val());

            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });



            $.ajax({
            type:'POST',
            processData: false,
            contentType: false,
            fileElementId: "customFile",
            url: "/task/add",
            data:formData,
            success:function(data){
            },
            error: function(file, response){
            }

            });
        });
        </script>

@endsection
