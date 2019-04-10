@extends('layouts.app')

@section('content')
    <div class="box">
      <header class="bg-alizarin text-white">
        <h4>Add New Staff Record</h4>
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
          {!! Form::open(['action'=>'StaffController@store','method'=>'POST','class'=>'form-horizontal','enctype'=>"multipart/form-data"])  !!}
          <div class="form-group">
            {!! Form::label('label','Enter Staff Name', ['class' => 'col-sm-2 control-label']) !!}
            <div class="col-sm-10">
              {!! Form::text('txt_full_name', '',['class'=>'form-control','id'=>'txt_full_name','placeholder'=>'Enter Staff Name']) !!}
            </div>
          </div>

          <div class="form-group">
            {!! Form::label('label','Department', ['class' => 'col-sm-2 control-label']) !!}
            <div class="col-sm-10">
                <select class="form-control" name="sel_department">
                        @foreach ($departments as $department )
                <option value="{{$department->department_id}}">{{$department->department_name}}</option>
                        @endforeach
                </select>
            </div>
          </div>

          <div class="form-group">
                {!! Form::label('label','Choose Picture', ['class' => 'col-sm-2 control-label']) !!}
                <div class="col-sm-10">
                  {!! Form::file('image_staff',['class'=>'form-control']) !!}
                </div>
              </div>

              <div class="form-group">
                {!! Form::label('label','Date Of Birth', ['class' => 'col-sm-2 control-label']) !!}
              <div class="col-sm-10">
               {!! Form::date('txt_dob_staff','',['class'=>'form-control','placeholder'=>'Staff Date Of Birth'])!!}
                </div>
              </div>

              

          <div style="text-align: center;font-weight: bold">
          <hr class="b-s-dashed">
          <span>BENEFICIARIES</span>
          <hr class="b-s-dashed">
          </div>

          <div style="text-align: center">
          <hr class="b-s-dashed">
          <span>Spouse</span>
          <hr class="b-s-dashed">
          </div>

          <div class="form-group">
            {!! Form::label('label','Spouse Name', ['class' => 'col-sm-2 control-label']) !!}
            <div class="col-sm-10">
             {!! Form::text('txt_spouse','',['class'=>'form-control','placeholder'=>'Enter Spouse Name'])!!}
            </div>
          </div>

          <div class="form-group">
            {!! Form::label('label','Spouse NHIS ID', ['class' => 'col-sm-2 control-label']) !!}
            <div class="col-sm-10">
             {!! Form::text('txt_spouse_id','',['class'=>'form-control','placeholder'=>'NHIS ID Number'])!!}
            </div>
          </div>

          <div class="form-group">
                {!! Form::label('label','Choose Picture', ['class' => 'col-sm-2 control-label']) !!}
                <div class="col-sm-10">
                  {!! Form::file('image_spouse',['class'=>'form-control']) !!}
                </div>
              </div>

          <div style="text-align: center">
          <hr class="b-s-dashed">
          <span>Children</span>
          <hr class="b-s-dashed">
          </div>

          <div class="row">
                <div class="col-md-6">
                      <div class="form-group">
                    {!! Form::label('label','Child (1) Name', ['class' => 'col-sm-4 control-label']) !!}
                    <div class="col-sm-8">
                     {!! Form::text('txt_child_1_name','',['class'=>'form-control','placeholder'=>'Enter Child Name'])!!}
                    </div>
                  </div>
              </div>

                <div class="col-md-6">
                  <div class="form-group">
                {!! Form::label('label','Child (1) DOB', ['class' => 'col-sm-4 control-label']) !!}
                <div class="col-sm-8">
                 {!! Form::date('txt_child_1_dob','',['class'=>'form-control','placeholder'=>'Enter Child DOB'])!!}
                </div>
              </div>
            </div>


        </div>

          <div class="row">
                <div class="col-md-6">
                      <div class="form-group">
                    {!! Form::label('label','Child (1) NHIS ID', ['class' => 'col-sm-4 control-label']) !!}
                    <div class="col-sm-8">
                     {!! Form::number('txt_child_1_id','',['class'=>'form-control','placeholder'=>'NHIS ID Number'])!!}
                    </div>
                  </div>
              </div>

                <div class="col-md-6">
                  <div class="form-group">
                {!! Form::label('label','Child (1) Image', ['class' => 'col-sm-4 control-label']) !!}
                <div class="col-sm-8">
                    {!! Form::file('image_child_1',['class'=>'form-control']) !!}
                </div>
              </div>
            </div>

            <div class="col-md-6">
                <div class="form-group">
              {!! Form::label('label','Birth Certificate', ['class' => 'col-sm-4 control-label']) !!}
              <div class="col-sm-8">
               {!! Form::file('image_child_1_cert',['class'=>'form-control'])!!}
              </div>
            </div>
          </div>

        </div>

          <hr class="b-s-dashed">

            <div class="row">
                <div class="col-md-6">
                      <div class="form-group">
                    {!! Form::label('label','Child (2) Name', ['class' => 'col-sm-4 control-label']) !!}
                    <div class="col-sm-8">
                     {!! Form::text('txt_child_2_name','',['class'=>'form-control','placeholder'=>'Enter Child Name'])!!}
                    </div>
                  </div>
              </div>

                <div class="col-md-6">
                  <div class="form-group">
                {!! Form::label('label','Child (2) DOB', ['class' => 'col-sm-4 control-label']) !!}
                <div class="col-sm-8">
                 {!! Form::date('txt_child_2_dob','',['class'=>'form-control','placeholder'=>'Enter Child DOB'])!!}
                </div>
              </div>
            </div>

        </div>

          <div class="row">
                <div class="col-md-6">
                      <div class="form-group">
                    {!! Form::label('label','Child (2) NHIS ID', ['class' => 'col-sm-4 control-label']) !!}
                    <div class="col-sm-8">
                     {!! Form::number('txt_child_2_id','',['class'=>'form-control','placeholder'=>'NHIS ID Number'])!!}
                    </div>
                  </div>
              </div>

                <div class="col-md-6">
                  <div class="form-group">
                {!! Form::label('label','Child (2) Image', ['class' => 'col-sm-4 control-label']) !!}
                <div class="col-sm-8">
                    {!! Form::file('image_child_2',['class'=>'form-control']) !!}
                </div>
              </div>
            </div>

            <div class="col-md-6">
                <div class="form-group">
              {!! Form::label('label','Birth Certificate', ['class' => 'col-sm-4 control-label']) !!}
              <div class="col-sm-8">
               {!! Form::file('image_child_2_cert',['class'=>'form-control'])!!}
              </div>
            </div>
          </div>

        </div>

          <hr class="b-s-dashed">

            <div class="row">
                <div class="col-md-6">
                      <div class="form-group">
                    {!! Form::label('label','Child (3) Name', ['class' => 'col-sm-4 control-label']) !!}
                    <div class="col-sm-8">
                     {!! Form::text('txt_child_3_name','',['class'=>'form-control','placeholder'=>'Enter Child Name'])!!}
                    </div>
                  </div>
              </div>

                <div class="col-md-6">
                  <div class="form-group">
                {!! Form::label('label','Child (3) DOB', ['class' => 'col-sm-4 control-label']) !!}
                <div class="col-sm-8">
                 {!! Form::date('txt_child_3_dob','',['class'=>'form-control','placeholder'=>'Enter Child DOB'])!!}
                </div>
              </div>
            </div>

        </div>

          <div class="row">
                <div class="col-md-6">
                      <div class="form-group">
                    {!! Form::label('label','Child (3) NHIS ID', ['class' => 'col-sm-4 control-label']) !!}
                    <div class="col-sm-8">
                     {!! Form::number('txt_child_3_id','',['class'=>'form-control','placeholder'=>'NHIS ID Number'])!!}
                    </div>
                  </div>
              </div>

                <div class="col-md-6">
                  <div class="form-group">
                {!! Form::label('label','Child (3) Image', ['class' => 'col-sm-4 control-label']) !!}
                <div class="col-sm-8">
                    {!! Form::file('image_child_3',['class'=>'form-control']) !!}
                </div>
              </div>
            </div>

            <div class="col-md-6">
                <div class="form-group">
              {!! Form::label('label','Birth Certificate', ['class' => 'col-sm-4 control-label']) !!}
              <div class="col-sm-8">
               {!! Form::file('image_child_3_cert',['class'=>'form-control'])!!}
              </div>
            </div>
          </div>

        </div>

      <hr class="b-s-dashed">

            <div class="row">
                <div class="col-md-6">
                      <div class="form-group">
                    {!! Form::label('label','Child (4) Name', ['class' => 'col-sm-4 control-label']) !!}
                    <div class="col-sm-8">
                     {!! Form::text('txt_child_4_name','',['class'=>'form-control','placeholder'=>'Enter Child Name'])!!}
                    </div>
                  </div>
              </div>

                <div class="col-md-6">
                  <div class="form-group">
                {!! Form::label('label','Child (4) DOB', ['class' => 'col-sm-4 control-label']) !!}
                <div class="col-sm-8">
                 {!! Form::date('txt_child_4_dob','',['class'=>'form-control','placeholder'=>'Enter Child DOB'])!!}
                </div>
              </div>
            </div>

        </div>

          <div class="row">
                <div class="col-md-6">
                      <div class="form-group">
                    {!! Form::label('label','Child (4) NHIS ID', ['class' => 'col-sm-4 control-label']) !!}
                    <div class="col-sm-8">
                     {!! Form::number('txt_child_4_id','',['class'=>'form-control','placeholder'=>'NHIS ID Number'])!!}
                    </div>
                  </div>
              </div>

                <div class="col-md-6">
                  <div class="form-group">
                {!! Form::label('label','Child (4) Image', ['class' => 'col-sm-4 control-label']) !!}
                <div class="col-sm-8">
                    {!! Form::file('image_child_4',['class'=>'form-control']) !!}
                </div>
              </div>
            </div>

            <div class="col-md-6">
                <div class="form-group">
              {!! Form::label('label','Birth Certificate', ['class' => 'col-sm-4 control-label']) !!}
              <div class="col-sm-8">
               {!! Form::file('image_child_4_cert',['class'=>'form-control'])!!}
              </div>
            </div>
          </div>


        </div>

        <br>
          <div style="text-align: center">
          {!! Form::submit('Submit',['class'=>'btn btn-primary btn-lg'])!!}
          </div>
        <br>

        {!! Form::close() !!}
      </div>
    </div>

    @endsection


