@include('header.header')
<!-- begin .app-main -->

<body>
    <!-- begin .app -->
    <div class="app">
        <!-- begin .app-wrap -->
        <div class="app-wrap">
<!-- begin .app-container -->
<div class="app-container">
<div class="app-main">

    <!-- begin .main-heading -->

    <!-- END: .main-heading -->

    <!-- begin .main-content -->
    <div class="main-content bg-clouds">

        <!-- begin .container-fluid -->
        <div class="container-fluid p-t-15">

<div class="box">
    <header class="bg-alizarin text-white">
        <h4 style="text-align:center">ANNUAL LEAVE FORM</h4>
        <!-- begin box-tools -->
        <div class="box-tools">
            <a class="fa fa-fw fa-minus" href="#" data-box="collapse"></a>
            <a class="fa fa-fw fa-square-o" href="#" data-fullscreen="box"></a>
            <a class="fa fa-fw fa-refresh" href="#" data-box="refresh"></a>
            <a class="fa fa-fw fa-times" href="#" data-box="close"></a>
        </div>
        <!-- END: box-tools -->
    </header>
    <div class="box-body collapse in">

        {!! Form::open(['action'=>'StaffController@add_leave','method'=>'POST','class'=>'form-horizontal','enctype'=>"multipart/form-data"])
        !!}
        <div class="form-group">
            {!! Form::label('label','Enter Staff Name', ['class' => 'col-sm-2 control-label']) !!}
            <div class="col-sm-10">
                {!! Form::text('txt_full_name', '',['class'=>'form-control','id'=>'txt_full_name','placeholder'=>'Enter Staff Name','required'=>'required']) !!}
            </div>
        </div>

        <div class="form-group">
            {!! Form::label('label','Select Rank', ['class' => 'col-sm-2 control-label']) !!}
            <div class="col-sm-10">
                <select name="sel_rank" id="my_rank" class="form-control">
                    <option value="" selected disabled=true>Select Rank</option>
                    @foreach ($ranks as $rank)
                        <option value="{{$rank->staff_category_id}}">{{$rank->category_name}}</option>
                    @endforeach()
                </select>
            </div>
        </div>

        <div class="form-group">
            {!! Form::label('label','Days Entitled', ['class' => 'col-sm-2 control-label']) !!}
            <div class="col-sm-10">
                {!! Form::text('txt_days_entitled', '',['class'=>'form-control','id'=>'txt_days_entitled','placeholder'=>'Days Entitled','disabled'=>'disabled']) !!}
            </div>
        </div>

        <div class="form-group">
            {!! Form::label('label','Enter Request Days', ['class' => 'col-sm-2 control-label']) !!}
            <div class="col-sm-10">
                {!! Form::text('txt_request_days', '',['class'=>'form-control','id'=>'txt_request_days','placeholder'=>'Enter Number Of Days To Spend','required'=>'required']) !!}
            </div>
        </div>
            
            <div class="form-group">
            {!! Form::label('label','Salary Level', ['class' => 'col-sm-2 control-label']) !!}
            <div class="col-sm-10">
                {!! Form::text('sel_salary', '',['class'=>'form-control','id'=>'txt_salary_level','placeholder'=>'Salary Level','disabled'=>'disabled'])
                !!}
            </div>
        </div>
            
            <input type="hidden" name="sel_salary" value="" id = "txt_hidden_salary">
            

        <div class="form-group">
            {!! Form::label('label','Select Date Of Your Appointment', ['class' => 'col-sm-2 control-label']) !!}
            <div class="col-sm-10">
                {!! Form::date('txt_appointment_date', '',['class'=>'form-control','id'=>'txt_appointment_date','placeholder'=>'Select Your Day Of Appointment','required'=>'required'])
                !!}
            </div>
        </div>

        <div class="form-group">
            {!! Form::label('label','Select Departure Date', ['class' => 'col-sm-2 control-label']) !!}
            <div class="col-sm-10">
                {!! Form::date('txt_departure', '',['class'=>'form-control','id'=>'txt_departure','placeholder'=>'Enter Departure Date','required'=>'required'])
                !!}
            </div>
        </div>


        <div class="form-group">
            {!! Form::label('label','Destination', ['class' => 'col-sm-2 control-label']) !!}
            <div class="col-sm-10">
                {!! Form::text('txt_destination', '',['class'=>'form-control','id'=>'txt_destination','placeholder'=>'Enter Destination','required'=>'required'])
                !!}
            </div>
        </div>

        <div class="form-group">
            {!! Form::label('label','Address', ['class' => 'col-sm-2 control-label']) !!}
            <div class="col-sm-10">
                {!! Form::text('txt_address', '',['class'=>'form-control','id'=>'txt_address','placeholder'=>'Enter Address Of Your Destination','required'=>'required']) !!}
            </div>
        </div>

        <div class="form-group">
            {!! Form::label('label','Date Returned On Last Leave', ['class' => 'col-sm-2 control-label']) !!}
            <div class="col-sm-10">
                {!! Form::date('txt_date_return', '',['class'=>'form-control','id'=>'txt_date_return','placeholder'=>'Date returned on last leave','required'=>'required']) !!}
            </div>
        </div>

        <div class="form-group">
            {!! Form::label('label','In Respect Of', ['class' => 'col-sm-2 control-label']) !!}
            <div class="col-sm-10">
                {!! Form::text('txt_respect_of', '',['class'=>'form-control','id'=>'txt_respect_of','placeholder'=>'In Respect Of ','required'=>'required']) !!}
            </div>
        </div>
        <input type="hidden" name="txt_hidden" id="txt_hidden" >

            {!! form::hidden('_method','PUT') !!}
<br>
        <div style="text-align: center">
            {!! Form::submit('Submit',['class'=>'btn btn-primary btn-lg'])!!}
        </div>
        <br> {!! Form::close() !!}
    </div>
</div>
@include('footer.footer')

<script>
$(document).on('change','#my_rank',function(){
    var getting_selected = $(this).val()

   $.ajax({ type: 'post',
    url: '{{asset("/ajax.php")}}',
    dataType: 'JSON',
     data: { item_id: getting_selected, item_details: '' },
     success: function
(response) {
     if (response.done == true) {
         console.log("success");
        $("#txt_days_entitled").val(response.days);
        $("#txt_hidden").val(response.days);
        $("#txt_salary_level").val(response.salary_level);
        $("#txt_hidden_salary").val(response.salary_level);
         } else {
console.log(response); } } });
})


</script>
