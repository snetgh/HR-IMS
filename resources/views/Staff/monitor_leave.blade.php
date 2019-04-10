@extends('layouts.app')

@section('content')

<div class="row">
    <div class="col-sm-12">
      <div class="box">
        <header>
          <h3></h3>

        </header>
        <div class="box-body">
<div style="text-align:right"><button class="btn btn-primary btn-md" id="btn_clear">Clear This Table</button></div><br><br>
          <table data-plugin="datatables" class="table table-striped table-bordered" width="100%" cellspacing="0">
            <thead style="text-align:center">
              <tr>
                <th>Leave ID</th>
                <th>Name</th>
                <th>Rank</th>
                <th>Days Entitled</th>
				<th>Days Approved</th>
				<th>Departure Date</th>
				<th>Resume Date</th>

	
              </tr>
            </thead>
            <tbody>
                @foreach ($staffs as $staff)
                    <tr>
                    <td>{{$staff->leave_id}}</td>
                    <td>{{$staff->person_name}}</td>
                    <td>{{$staff->category_name}}</td>
<td>{{$staff->days_entitled}}</td>
<td>{{$staff->approved_nod}}</td>
<td>{{ date("Y-M-d",strtotime($staff->approved_dod))}}</td>
<td>@if(date("Y-M-d",strtotime($staff->date_of_resumption)) >= date("Y-M-d")) 
<span style="color:red;font-weight:bold">{{date("Y-M-d",strtotime($staff->date_of_resumption))}}</span>
@else
<span style="font-weight:bold">{{date("Y-M-d",strtotime($staff->date_of_resumption))}}</span>
@endif</td>
                    
                    </tr>
                @endforeach
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>



 @endsection

<script src="{{asset('js/app.js')}}"></script>
 <script type="text/javascript">
$(document).on('click','#btn_clear',function(){

$.ajax({ type: 'post',
    url: '{{asset("/ajax.php")}}',
    dataType: 'JSON',
     data: { truncate_me: '' },
     success: function
(response) {
     if (response.done == true) {
       alert("Tables Restored Successfully");
     window.location.reload();
         } else {
console.log(response); } } });
});

</script>




