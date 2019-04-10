@extends('layouts.app')

@section('content')
    <div class="box">
      <header class="bg-alizarin text-white">
        <h4>Edit Staff Record</h4>
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
          {!! Form::open(['action'=>['StaffController@update',$detail->staff_id],'method'=>'POST','class'=>'form-horizontal','enctype'=>"multipart/form-data"])  !!}

          <div class="row">
            <div class="col-md-8">
              <div class="form-group">
                {!! Form::label('label','Staff Name', ['class' => 'col-sm-2 control-label']) !!}
                <div class="col-sm-10">
                  {!! Form::text('txt_full_name', $detail->staff_full_name,['class'=>'form-control','id'=>'txt_full_name','placeholder'=>'Enter Staff Name']) !!}
                </div>
              </div>

              <div class="form-group">
                {!! Form::label('label','Staff Date Of Birth', ['class' => 'col-sm-2 control-label']) !!}
                <div class="col-sm-10">
                  {!! Form::text('txt_dob', $detail->staff_dob,['class'=>'form-control','id'=>'txt_dob','placeholder'=>'Enter Date Of Birth']) !!}
                </div>
              </div>

              <div class="form-group">
                {!! Form::label('label','Staff Age', ['class' => 'col-sm-2 control-label']) !!}
                <div class="col-sm-10">
                  {!! Form::text('txt_age', $detail->staff_age,['class'=>'form-control','id'=>'txt_dob','placeholder'=>'Enter Staff Age']) !!}
                </div>
              </div>

              <div class="form-group">
                {!! Form::label('label','Department', ['class' => 'col-sm-2 control-label']) !!}
                <div class="col-sm-10">
                    <select class="form-control" name="sel_department">
                    @foreach ($departments as $department )
                            @if($detail->department_id == $department->department_id)
                    <option value="{{$department->department_id}}" selected='selected'>{{$department->department_name}}</option>
                            @else
                            <option value="{{$department->department_id}}">{{$department->department_name}}</option>
                            @endif
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
            </div>
            <div class="col-md-4">
              <img src="{{asset('storage/'.$detail->staff_image)}}" alt="Profile" height="130px" width="200px">
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

          <div class="row">
            <div class="col-md-8">
              <div class="form-group">
                {!! Form::label('label','Spouse Name', ['class' => 'col-sm-2 control-label']) !!}
                <div class="col-sm-10">
                 {!! Form::text('txt_spouse',$detail->staff_spouse_name,['class'=>'form-control','placeholder'=>'Enter Spouse Name'])!!}
                </div>
              </div>

              <div class="form-group">
                {!! Form::label('label','Spouse NHIS ID', ['class' => 'col-sm-2 control-label']) !!}
                <div class="col-sm-10">
                 {!! Form::text('txt_spouse_id',$detail->staff_spouse_id,['class'=>'form-control','placeholder'=>'Enter Spouse NHIS ID'])!!}
                </div>
              </div>

              <div class="form-group">
                    {!! Form::label('label','Choose Picture', ['class' => 'col-sm-2 control-label']) !!}
                    <div class="col-sm-10">
                      {!! Form::file('image_spouse',['class'=>'form-control']) !!}
                    </div>
                  </div>
            </div>
            <div class="col-md-4">
                <img src="{{asset('storage/'.$detail->spouse_image)}}" alt="Profile" height="130px" width="200px">
            </div>
          </div>



          <div style="text-align: center">
          <hr class="b-s-dashed">
          <span>Children</span>
          <hr class="b-s-dashed">
          </div>

          <div class="row">
            <div class="col-md-8">
                <div class="form-group">
                    {!! Form::label('label','Child (1) Name', ['class' => 'col-sm-4 control-label']) !!}
                    <div class="col-sm-8">
                     {!! Form::text('txt_child_1_name',$detail->child_1_name,['class'=>'form-control','placeholder'=>'Enter Child Name'])!!}
                    </div>
                  </div>


                  <div class="form-group">
                {!! Form::label('label','Child (1) DOB', ['class' => 'col-sm-4 control-label']) !!}
                <div class="col-sm-8">
                 {!! Form::date('txt_child_1_dob',$detail->child_1_dob,['class'=>'form-control','placeholder'=>'Enter Child DOB'])!!}
                </div>
              </div>


                      <div class="form-group">
                    {!! Form::label('label','Child (1) NHIS ID', ['class' => 'col-sm-4 control-label']) !!}
                    <div class="col-sm-8">
                     {!! Form::number('txt_child_1_id',$detail->child_1_id,['class'=>'form-control','placeholder'=>'Enter Child NHIS ID'])!!}
                    </div>
                  </div>



                  <div class="form-group">
                {!! Form::label('label','Child (1) Image', ['class' => 'col-sm-4 control-label']) !!}
                <div class="col-sm-8">
                    {!! Form::file('image_child_1',['class'=>'form-control']) !!}
                </div>
              </div>


            <div class="form-group">
              {!! Form::label('label','Birth Certificate', ['class' => 'col-sm-4 control-label']) !!}
              <div class="col-sm-8">
               {!! Form::file('image_child_1_cert',['class'=>'form-control'])!!}
              </div>
            </div>



            </div>
            <div class="col-md-4">
                <img src="{{asset('storage/'.$detail->child_1_image)}}" alt="Profile" height="200px" width="200px">
            </div>
          </div>

          <hr class="b-s-dashed">

            <div class="row">
              <div class="col-md-8">
                  <div class="form-group">
                      {!! Form::label('label','Child (2) Name', ['class' => 'col-sm-4 control-label']) !!}
                      <div class="col-sm-8">
                       {!! Form::text('txt_child_2_name',$detail->child_2_name,['class'=>'form-control','placeholder'=>'Enter Child Name'])!!}
                      </div>
                    </div>

                    <div class="form-group">
                  {!! Form::label('label','Child (2) DOB', ['class' => 'col-sm-4 control-label']) !!}
                  <div class="col-sm-8">
                   {!! Form::date('txt_child_2_dob',$detail->child_2_dob,['class'=>'form-control','placeholder'=>'Enter Child DOB'])!!}
                  </div>
                </div>

                        <div class="form-group">
                      {!! Form::label('label','Child (2) NHIS ID', ['class' => 'col-sm-4 control-label']) !!}
                      <div class="col-sm-8">
                       {!! Form::number('txt_child_2_id',$detail->child_2_id,['class'=>'form-control','placeholder'=>'Enter Child NHIS ID'])!!}
                      </div>
                    </div>


                    <div class="form-group">
                  {!! Form::label('label','Child (2) Image', ['class' => 'col-sm-4 control-label']) !!}
                  <div class="col-sm-8">
                      {!! Form::file('image_child_2',['class'=>'form-control']) !!}
                  </div>
                </div>

                <div class="form-group">
              {!! Form::label('label','Birth Certificate', ['class' => 'col-sm-4 control-label']) !!}
              <div class="col-sm-8">
               {!! Form::file('image_child_2_cert',['class'=>'form-control'])!!}
              </div>
            </div>


              </div>
              <div class="col-md-4">
                  <img src="{{asset('storage/'.$detail->child_2_image)}}" alt="Profile" height="200px" width="200px">
              </div>
            </div>

            <hr class="b-s-dashed">

            <div class="row">
              <div class="col-md-8">
                  <div class="form-group">
                      {!! Form::label('label','Child (3) Name', ['class' => 'col-sm-4 control-label']) !!}
                      <div class="col-sm-8">
                       {!! Form::text('txt_child_3_name',$detail->child_3_name,['class'=>'form-control','placeholder'=>'Enter Child Name'])!!}
                      </div>
                    </div>


                    <div class="form-group">
                  {!! Form::label('label','Child (3) DOB', ['class' => 'col-sm-4 control-label']) !!}
                  <div class="col-sm-8">
                   {!! Form::date('txt_child_3_dob',$detail->child_3_dob,['class'=>'form-control','placeholder'=>'Enter Child DOB'])!!}
                  </div>
                  </div>


                        <div class="form-group">
                      {!! Form::label('label','Child (3) NHIS ID', ['class' => 'col-sm-4 control-label']) !!}
                      <div class="col-sm-8">
                       {!! Form::number('txt_child_3_id',$detail->child_3_id,['class'=>'form-control','placeholder'=>'Enter Child NHIS ID'])!!}
                      </div>
                    </div>


                    <div class="form-group">
                  {!! Form::label('label','Child (3) Image', ['class' => 'col-sm-4 control-label']) !!}
                  <div class="col-sm-8">
                      {!! Form::file('image_child_3',['class'=>'form-control']) !!}
                  </div>
                </div>

                <div class="form-group">
              {!! Form::label('label','Birth Certificate', ['class' => 'col-sm-4 control-label']) !!}
              <div class="col-sm-8">
               {!! Form::file('image_child_3_cert',['class'=>'form-control'])!!}
              </div>
            </div>


              </div>
              <div class="col-md-4">
                  <img src="{{asset('storage/'.$detail->child_3_image)}}" alt="Profile" height="200px" width="200px">
              </div>
            </div>


      <hr class="b-s-dashed">

      <div class="row">
        <div class="col-md-8">
            <div class="form-group">
                {!! Form::label('label','Child (4) Name', ['class' => 'col-sm-4 control-label']) !!}
                <div class="col-sm-8">
                 {!! Form::text('txt_child_4_name',$detail->child_4_name,['class'=>'form-control','placeholder'=>'Enter Child Name'])!!}
                </div>
              </div>

              <div class="form-group">
            {!! Form::label('label','Child (4) DOB', ['class' => 'col-sm-4 control-label']) !!}
            <div class="col-sm-8">
             {!! Form::date('txt_child_4_dob',$detail->child_4_dob,['class'=>'form-control','placeholder'=>'Enter Child DOB'])!!}
            </div>
          </div>


                  <div class="form-group">
                {!! Form::label('label','Child (4) NHIS ID', ['class' => 'col-sm-4 control-label']) !!}
                <div class="col-sm-8">
                 {!! Form::number('txt_child_4_id',$detail->child_4_id,['class'=>'form-control','placeholder'=>'Enter Child NHIS ID'])!!}
                </div>
              </div>



          <div class="form-group">
            {!! Form::label('label','Child (4) Image', ['class' => 'col-sm-4 control-label']) !!}
            <div class="col-sm-8">
                {!! Form::file('image_child_4',['class'=>'form-control']) !!}
            </div>
          </div>

          <div class="form-group">
              {!! Form::label('label','Birth Certificate', ['class' => 'col-sm-4 control-label']) !!}
              <div class="col-sm-8">
               {!! Form::file('image_child_4_cert',['class'=>'form-control'])!!}
              </div>
            </div>


        </div>
        <div class="col-md-4">
            <img src="{{asset('storage/'.$detail->child_4_image)}}" alt="Profile" height="200px" width="200px">
        </div>
      </div>

      {!! Form::hidden('staff_image',$detail->staff_image)!!}
      {!! Form::hidden('spouse_image',$detail->spouse_image)!!}
      {!! Form::hidden('1_image',$detail->child_1_image)!!}
      {!! Form::hidden('2_image',$detail->child_2_image)!!}
      {!! Form::hidden('3_image',$detail->child_3_image)!!}
      {!! Form::hidden('4_image',$detail->child_4_image)!!}

      {!! Form::hidden('cert_1_image',$detail->child_1_cert)!!}
      {!! Form::hidden('cert_2_image',$detail->child_2_cert)!!}
      {!! Form::hidden('cert_3_image',$detail->child_3_cert)!!}
      {!! Form::hidden('cert_4_image',$detail->child_4_cert)!!}

        <br>
          <div style="text-align: center">
          {!! Form::submit('Update Staff',['class'=>'btn btn-primary btn-lg'])!!}
          <a href="{{url('/staff/manage')}}" class="btn btn-danger btn-lg">Cancel Update</a>
          </div>
        <br>

         {!! form::hidden('_method','PUT')  !!}
         {!! Form::close() !!}
        @endforeach
      </div>
    </div>

    @endsection


