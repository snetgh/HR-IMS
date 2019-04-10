@include('header.header')

<body>

<div class="container search-table">

<script>window.print();</script>

    <br><br>
                    <table class="table table-bordered" id="myTable">
                        <thead>
                            <tr>
                                <th><center>Details</center></th>
                                <th><center>Values</center></th>
                            </tr>
                        </thead>
                        <tbody>

                        @foreach($details as $detail)


                        <tr>
                            <td>Staff Name</td>
                            <td>{{$detail->person_name}}</td>
                        </tr>
                        <tr>
                            <td>Rank</td>
                            <td>{{$detail->category_name}}</td>
                        </tr>
                        <tr>
                            <td>No Of Days Entitled</td>
                            <td>{{$detail->days_entitled}}</td>
                        </tr>
                        <tr>
                            <td>Number Of Days Requested</td>
                            <td>{{$detail->days_requested}}</td>
                        </tr>
                        <tr>
                            <td>Number Of Days Remain</td>
                            <td>{{$detail->days_remain}}</td>
                        </tr>
                        <tr>
                            <td>Salary Level</td>
                            <td>{{$detail->salary_level}}</td>
                        </tr>
                        <tr>
                            <td>Date Of First Appointment</td>
                            <td>{{date("Y-M-d",strtotime($detail->doa))}}</td>
                        </tr>
                        <tr>
                            <td>Proposed Date Of Departure</td>
                            <td>{{date("Y-M-d",strtotime($detail->dod))}}</td>
                        </tr>
                        <tr>
                            <td>Destination</td>
                            <td>{{$detail->destination}}</td>
                        </tr>
                        <tr>
                            <td>Address While On Leave</td>
                            <td>{{$detail->address}}t</td>
                        </tr>
                        <tr>
                            <td>Date Return From Last Leave</td>
                            <td>{{date("Y-M-d",strtotime($detail->date_last))}}</td>
                        </tr>
                        <tr>
                            <td>Leave Applied In Respect Of</td>
                            <td>{{$detail->respect_of}}</td>
                        </tr>

                        <tr>
                            <td colspan="2">&nbsp;</td>
                        </tr>

                        <tr>
                            <td colspan="2" style="text-align:center"><strong>Administrator Use</strong> </td>
                        </tr>

                        <tr>
                            <td><strong>Have Approved</strong></td>
                            <td>@if($detail->has_approved == '1')Yes @else No @endif</td>
                        </tr>

                        <tr>
                            <td><strong>Reliever Required</strong></td>
                            <td>@if($detail->reliever_required == '1')Yes @else No @endif</td>
                        </tr>

                        <tr>
                            <td><strong>Approved Date Of Departure</strong></td>
                            <td>{{date("Y-M-d",strtotime($detail->approved_dod))}}</td>
                        </tr>

                        <tr>
                            <td><strong>Number Of Days Approved</strong></td>
                            <td>{{$detail->approved_nod}}</td>
                        </tr>

                        <tr>
                            <td><strong>Proposed Date Of Resumption</strong></td>
                            <td>{{date("Y-M-d",strtotime($detail->date_of_resumption))}}</td>
                        </tr>

                @endforeach
                        </tbody>
                    </table>
                         
                        <div class="row">
                            <div class="col-md-4 col-md-sm-4 col-xs-4" style="text-align:center"><strong>Head Of Department</strong> <br><br> <span>..................................</span>  <br> Signature </div>
                            <div class="col-md-4 col-md-sm-4 col-xs-4" style="text-align:center"><strong>General Manager </strong> <br><br> <span>..................................</span>  <br> Signature </div>
                            <div class="col-md-4 col-md-sm-4 col-xs-4" style="text-align:center"><strong>Applicant </strong> <br><br> <span>..................................</span>  <br> Signature </div>
                    
                   
                   
                            
                            </div>


        </div>
</body>

@include('footer.footer')
