@extends('layouts.app')

@section('content')
    <div class="box">
      <header class="bg-alizarin text-white">
        <h4>Approve Request</h4>
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
          @foreach($details as $detail)
          {!! Form::open(['action'=>['StaffController@approve_request',$detail->leave_id],'method'=>'POST','class'=>'form-horizontal'])  !!}

          <div class="row">
            <div class="col-md-10">
              <div class="form-group">
                {!! Form::label('label','Staff Name', ['class' => 'col-sm-2 control-label']) !!}
                <div class="col-sm-10">
                  {!! Form::text('txt_name', $detail->person_name,['class'=>'form-control','id'=>'txt_name','placeholder'=>'Enter Staff Name','disabled'=>'disabled']) !!}
                </div>
              </div>

              <div class="form-group">
                {!! Form::label('label','Person Rank', ['class' => 'col-sm-2 control-label']) !!}
                <div class="col-sm-10">
                  {!! Form::text('txt_rank', $detail->category_name,['class'=>'form-control','id'=>'txt_rank','placeholder'=>'Enter Staff Name','disabled'=>'disabled']) !!}
                </div>
              </div>

              <div class="form-group">
                {!! Form::label('label','Days Entitled', ['class' => 'col-sm-2 control-label']) !!}
                <div class="col-sm-10">
                  {!! Form::text('txt_days_entitled', $detail->days_entitled,['class'=>'form-control','id'=>'txt_days_entitled','placeholder'=>'Enter Staff Name','disabled'=>'disabled']) !!}
                </div>
              </div>

              <div class="form-group">
                {!! Form::label('label','Date Requested', ['class' => 'col-sm-2 control-label']) !!}
                <div class="col-sm-10">
                  {!! Form::text('txt_days_requested', $detail->days_requested,['class'=>'form-control','id'=>'txt_days_requested','placeholder'=>'Enter Staff Name','disabled'=>'disabled']) !!}
                </div>
              </div>

              <div class="form-group">
                {!! Form::label('label','Days Remain', ['class' => 'col-sm-2 control-label']) !!}
                <div class="col-sm-10">
                  {!! Form::text('txt_days_remain', $detail->days_remain,['class'=>'form-control','id'=>'txt_days_remain','placeholder'=>'Enter Staff Name','disabled'=>'disabled']) !!}
                </div>
              </div>

              <div class="form-group">
                {!! Form::label('label','Salary Level', ['class' => 'col-sm-2 control-label']) !!}
                <div class="col-sm-10">
                  {!! Form::text('txt_salary_level', $detail->salary_level,['class'=>'form-control','id'=>'txt_salary_level','placeholder'=>'Enter Staff Name','disabled'=>'disabled']) !!}
                </div>
              </div>


              <div class="form-group">
                {!! Form::label('label','Date Of Appointment', ['class' => 'col-sm-2 control-label']) !!}
                <div class="col-sm-10">
                  {!! Form::text('txt_doa', $detail->doa,['class'=>'form-control','id'=>'txt_doa','placeholder'=>'Enter Staff Name','disabled'=>'disabled']) !!}
                </div>
              </div>

              <div class="form-group">
                {!! Form::label('label','Date Of Departure', ['class' => 'col-sm-2 control-label']) !!}
                <div class="col-sm-10">
                  {!! Form::text('txt_dod', $detail->dod,['class'=>'form-control','id'=>'txt_dod','placeholder'=>'Enter Staff Name','disabled'=>'disabled']) !!}
                </div>
              </div>

              <div class="form-group">
                {!! Form::label('label','Destination', ['class' => 'col-sm-2 control-label']) !!}
                <div class="col-sm-10">
                  {!! Form::text('txt_destination', $detail->destination,['class'=>'form-control','id'=>'txt_destination','placeholder'=>'Enter Staff Name','disabled'=>'disabled']) !!}
                </div>
              </div>

              <div class="form-group">
                {!! Form::label('label','Address', ['class' => 'col-sm-2 control-label']) !!}
                <div class="col-sm-10">
                  {!! Form::text('txt_address', $detail->address,['class'=>'form-control','id'=>'txt_address','placeholder'=>'Enter Staff Name','disabled'=>'disabled']) !!}
                </div>
              </div>

              <div class="form-group">
                {!! Form::label('label','Last Leave Return Date', ['class' => 'col-sm-2 control-label']) !!}
                <div class="col-sm-10">
                  {!! Form::text('txt_last_date', $detail->date_last,['class'=>'form-control','id'=>'txt_last_date','placeholder'=>'Enter Staff Name','disabled'=>'disabled']) !!}
                </div>
              </div>

              <div class="form-group">
                {!! Form::label('label','Respect Of', ['class' => 'col-sm-2 control-label']) !!}
                <div class="col-sm-10">
                  {!! Form::text('txt_respect_of', $detail->respect_of,['class'=>'form-control','id'=>'txt_respect_of','placeholder'=>'Enter Staff Name','disabled'=>'disabled']) !!}
                </div>
              </div>

              <div class="form-group">
              <label for="" class="col-sm-2 control-label">Approve Request</label>
              <div class="col-sm-10">
               <select name="sel_approve" id="txt_approve" class="form-control">
               <option value="" selected disabled>Select Option</option>
               <option value="1">Accept</option>
               <option value="0">Reject</option>
               </select>
               </div>
              </div>

              <div class="form-group">
              <label for="" class="col-sm-2 control-label">Reliever Required</label>
              <div class="col-sm-10">
               <select name="sel_reliever" id="txt_approve" class="form-control">
               <option value="" selected disabled>Select Option</option>
               <option value="1">Required</option>
               <option value="0">Not Required</option>
               </select>
               </div>
              </div>

              <div class="form-group">
                {!! Form::label('label','Approved Date Of Departure', ['class' => 'col-sm-2 control-label']) !!}
                <div class="col-sm-10">
                  {!! Form::date('txt_approved_dod','',['class'=>'form-control','id'=>'txt_approved_dod','placeholder'=>'Enter Staff Name','required'=>'requried']) !!}
                </div>
              </div>

              <div class="form-group">
                {!! Form::label('label','Approved Number Of Days', ['class' => 'col-sm-2 control-label']) !!}
                <div class="col-sm-10">
                  {!! Form::text('txt_approved_days', '',['class'=>'form-control','id'=>'txt_approved_days','placeholder'=>'Approved Number Of Days','required'=>'requried']) !!}
                </div>
              </div>

              <div class="form-group">
                {!! Form::label('label','Days Of Resumption', ['class' => 'col-sm-2 control-label']) !!}
                <div class="col-sm-10">
                  {!! Form::date('approved_dor', '',['class'=>'form-control','id'=>'approved_dor','placeholder'=>' ','required'=>'requried']) !!}
                </div>
              </div>


              <input type="hidden" value="{{$detail->person_name}}" name="txt_name">
              <input type="hidden" value="{{$detail->person_rank}}" name="txt_rank">
              <input type="hidden" value="{{$detail->days_entitled}}" name="txt_days_entitled">
              <input type="hidden" value="{{$detail->days_requested}}" name="txt_days_requested">
              <input type="hidden" value="{{$detail->days_remain}}" name="txt_days_remain">
              <input type="hidden" value="{{$detail->salary_level}}" name="txt_salary_level">
              <input type="hidden" value="{{$detail->doa}}" name="txt_doa">
              <input type="hidden" value="{{$detail->dod}}" name="txt_dod">
              <input type="hidden" value="{{$detail->destination}}" name="txt_destination">
              <input type="hidden" value="{{$detail->address}}" name="txt_address">
              <input type="hidden" value="{{$detail->date_last}}" name="txt_last_date">
              <input type="hidden" value="{{$detail->respect_of}}" name="txt_respect_of">




        <br>
          <div style="text-align: center">
          {!! Form::submit('Approve Request',['class'=>'btn btn-primary btn-lg'])!!}
          </div>
        <br>

         {!! form::hidden('_method','PUT')  !!}
         {!! Form::close() !!}
        @endforeach
      </div>
    </div>

    @endsection


