@include('header.header')
<body>

    <table class="table table-bordered">
        @foreach ($details as $detail)

        <thead>

        </thead>

        <tbody>
            <tr>
              <td colspan="3" style="text-align:center" width="50px"><strong>Staff</strong></td>

            </tr>

            @if($detail->staff_image == "") @else
            <tr>

            <td style="text-align:right" width="50%"> <strong>Staff ID : {{$detail->staff_id}} </strong>   <br><br> <strong>Staff Name: {{$detail->staff_full_name}}</strong>   <br><br> <strong>Staff Department : {{$detail->department_name}}</strong>  </td>
            <td width="10px"> <img src="{{asset('storage/'.$detail->staff_image)}}"  width="100px" height="100px"> </td>
            </tr>
            @endif

        </tbody>

        </table>


                    <div style="text-align:center"><strong>Children</strong></div>


            @if($detail->child_1_image == "")@else

            <div style="text-align:center">
            <img src="{{asset('storage/'.$detail->child_1_cert)}}">
        </div>


            @endif


            @if($detail->child_2_image == "")@else
            <div style="text-align:center">
              <img src="{{asset('storage/'.$detail->child_2_cert)}}">
            </div>



            @endif

            @if($detail->child_3_image == "")@else

            <div style="text-align:center">
            <img src="{{asset('storage/'.$detail->child_3_cert)}}" >
        </div>

            @endif

            @if($detail->child_4_image == "")@else
            <div style="text-align:center">
               <img src="{{asset('storage/'.$detail->child_4_cert)}}">
            </div>

            @endif


        @endforeach






</body>
</html>
@include('footer.footer')



