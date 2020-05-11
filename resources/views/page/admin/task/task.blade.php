@extends('layouts.app')

@section('title','Task')
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
              <a  href="{{url('/task/add')}}" class="btn btn-md btn-neutral text-info"><i class="fa fa-plus"></i> add Task</a>
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
              <h3 class="mb-0">Task</h3>
            </div>
            <div class="table-responsive py-4">
              <table class="table table-flush" id="datatable-basic">
                <thead class="thead-light">
                  <tr>
                    <th>Title</th>
                    <th>Skill</th>
                    <th>Created at</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Title</th>
                    <th>Skill</th>
                    <th>Created at</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                @if(isset($task))
                  @foreach ($task as $tasks)
                    <tr>
                      <td>{{ $tasks->title }}</td>
                      <?php
                        $skill = explode(",",$tasks->keahlian);
                      ?>
                      <td>
                      @foreach ($skill as $skills)
                        <span class="badge badge-info">
                          {{$skills}}
                        </span>
                      @endforeach
                      </td>
                      <td>{{ $tasks->created_at}}</td>
                      <td>
                        <a href="{{ url('/task/delete/'.$tasks->id) }}" class="btn btn-danger">hapus</a>
                      </td>
                    </tr>
                  @endforeach
                @endif
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

@endsection
