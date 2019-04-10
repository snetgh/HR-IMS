@extends('layouts.app')

@section('content')
    <div class="box">
      <header class="bg-alizarin text-white">
        <h4>Change Password</h4>
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
          {!! Form::open(['action'=>['StaffController@change_password'],'method'=>'POST','class'=>'form-horizontal'])  !!}

        <div class="row">
                <div class="col-md-12">
                        <div class="form-group">
                          {!! Form::label('label','Enter Old Password', ['class' => 'col-sm-2 control-label']) !!}
                          <div class="col-sm-10">
                            {!! Form::password('txt_old_password',['class'=>'form-control','id'=>'txt_old_pass','placeholder'=>'Enter Old Password']) !!}
                          </div>
                        </div>
        </div>
           
<div class="row">
        <div class="col-md-12">
                <div class="form-group">
                  {!! Form::label('label','Enter New Password', ['class' => 'col-sm-2 control-label']) !!}
                  <div class="col-sm-10">
                    {!! Form::password('txt_new_password',['class'=>'form-control','id'=>'txt_new_pass','placeholder'=>'Enter New Password']) !!}
                  </div>
                </div>
</div>
              

<div class="row">
        <div class="col-md-12">
                <div class="form-group">
                  {!! Form::label('label','Re-Enter New Password', ['class' => 'col-sm-2 control-label']) !!}
                  <div class="col-sm-10">
                    {!! Form::password('txt_re_password',['class'=>'form-control','id'=>'txt_re_pass','placeholder'=>'Re-Enter New Password']) !!}
                  </div>
                </div>
</div>
                    
                     
              
        <br> 
          <div style="text-align: center">
          {!! Form::submit('Change Password',['class'=>'btn btn-primary btn-lg'])!!}
          </div>
        <br>
            
         {!! form::hidden('_method','PUT')  !!} 
         {!! Form::close() !!}
    
      </div>
    </div>
</div>

    @endsection


