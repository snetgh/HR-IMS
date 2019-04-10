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
            <thead style="text-align:center" >
              <tr>
                <th style="text-align:center">Staff ID</th>
                <th style="text-align:center">Name</th>
                <th style="text-align:center">Department</th>
                <th style="text-align:center">Date Of Birth</th>
                <th style="text-align:center">Current Age</th>
              </tr>
            </thead>
            <tbody style="text-align:center">
                @foreach ($staffs as $staff)
                    <tr>
                    <td>{{$staff->staff_id}}</td>
                    <td>{{$staff->staff_full_name}}</td>
                    <td>{{$staff->department_name}}</td>
                    <td >{{$staff->staff_dob}}</td>

            @if($staff->staff_age >= 50 && $staff->staff_age <= 54)
            <td><span style="color:green;font-weight:bold">{{$staff->staff_age}}</span></td>

            @elseif($staff->staff_age >= 55 && $staff->staff_age <=58 )
            <td><span style="color:lightcoral;font-weight:bold">{{$staff->staff_age}}</span></td>

            @elseif($staff->staff_age >= 59 && $staff->staff_age <=60 )
            <td><span style="color:red;font-weight:bold">{{$staff->staff_age}}</span></td>
                    @endif
                @endforeach
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>


 @endsection

