@include('header.header')
<body>

    <table class="table table-bordered">
        @foreach ($details as $detail)
        
        <thead>
         
        </thead>

        <tbody>
            <tr>
              <td colspan="2" style="text-align:center"><strong>Staff</strong></td>  
            </tr>

            <tr>
            <td style="text-align:right" width="50%"> <strong>Staff ID : {{$detail->staff_id}} </strong>   <br><br> <strong>Staff Name: {{$detail->staff_full_name}}</strong>   <br><br> <strong>Staff Department : {{$detail->department_name}}</strong>  </td> 
            <td width="50%">@if($detail->staff_image == "") @else <img src="{{asset('storage/'.$detail->staff_image)}}"  width="100px" height="100px">@endif</td> 
            </tr>

            <tr>
                    <td colspan="2"  style="text-align:center"><strong>Spouse</strong></td>  
            </tr>

            <tr>
                    <td style="text-align:right"> <strong>Name : {{$detail->staff_spouse_name}} </strong>   <br><br>   <strong>NHIS ID: {{$detail->staff_spouse_id}}</strong>  </td> 
                    <td>@if($detail->spouse_image == "")@else<img src="{{asset('storage/'.$detail->spouse_image)}}"  width="100px" height="100px">@endif</td>
            </tr>

            <tr>
                    <td colspan="2" style="text-align:center"><strong>Children</strong></td>  
            </tr>

            <tr>
            <td style="text-align:right"><strong>Name : {{$detail->child_1_name}}</strong>     <br><br> <strong>NHIS ID: {{$detail->child_1_id}}</strong>   <br><br>  <strong>Birthday: {{$detail->child_1_dob}}</strong> </td> 
            <td>@if($detail->child_1_image == "")@else<img src="{{asset('storage/'.$detail->child_1_image)}}"  width="100px" height="100px">@endif</td>
            </tr>

            <tr >
              <td style="text-align:right"> <strong>Name : {{$detail->child_2_name}}</strong>       <br><br><strong>NHIS ID: {{$detail->child_2_id}}</strong>   <br><br>  <strong>Birthday: {{$detail->child_2_dob}}</strong> </td> 
              <td>@if($detail->child_2_image == "")@else<img src="{{asset('storage/'.$detail->child_2_image)}}"  width="100px" height="100px">@endif</td> 
            </tr>

            <tr>
              <td  style="text-align:right"><strong>Name : {{$detail->child_3_name}} </strong>    <br><br>  <strong>NHIS ID: {{$detail->child_3_id}}</strong>   <br><br>  <strong>Birthday: {{$detail->child_3_dob}}</strong> </td> 
              <td>@if($detail->child_3_image == "")@else <img src="{{asset('storage/'.$detail->child_3_image)}}"  width="100px" height="100px">@endif</td>
            </tr>

            <tr>
               <td style="text-align:right"> <strong>Name : {{$detail->child_4_name}}</strong>     <br><br>  <strong>NHIS ID: {{$detail->child_4_id}}</strong>   <br><br> <strong>Birthday: {{$detail->child_4_dob}}</strong>  </td> 
               <td>@if($detail->child_4_image == "")@else<img src="{{asset('storage/'.$detail->child_4_image)}}"  width="100px" height="100px">@endif</td>
            </tr>


        </tbody>

        @endforeach

    </table>
    
</body>
</html>
@include('footer.footer')