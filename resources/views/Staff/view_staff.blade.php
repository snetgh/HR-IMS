@extends('layouts.app')

@section('content')

<div class="row">
    <div class="col-sm-12">
      <div class="box">
        <header>
          <h3></h3>

        </header>
        <div class="box-body">
          <table data-plugin="datatables" class="table table-striped table-bordered" width="100%" cellspacing="0">
            <thead style="text-align:center">
              <tr>
                <th>Staff ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                @foreach ($staffs as $staff)
                    <tr>
                    <td>{{$staff->staff_id}}</td>
                    <td>{{$staff->staff_full_name}}</td>
                    <td>{{$staff->department_name}}</td>
                    <td style="text-align:center"><a href="/staff/{{$staff->staff_id}}/view" class="btn btn-warning" target="_blank"><i class="fa fa fw fa-eye"></i>&nbsp;View</a></td>
                    </tr>
                @endforeach
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>


 @endsection


