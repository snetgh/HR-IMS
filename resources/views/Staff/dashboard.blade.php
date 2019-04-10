@extends('layouts.app')

@section('content')

<style>

@font-face {
    font-family: 'BebasNeueRegular';
    src: url('BebasNeue-webfont.eot');
    src: url('BebasNeue-webfont.eot?#iefix') format('embedded-opentype'),
         url('BebasNeue-webfont.woff') format('woff'),
         url('BebasNeue-webfont.ttf') format('truetype'),
         url('BebasNeue-webfont.svg#BebasNeueRegular') format('svg');
    font-weight: normal;
    font-style: normal;
}

#clock_holder .container {width: 960px; margin: 0 auto; overflow: hidden;}

#clock_holder .clock {width:800px; margin:0 auto; padding:30px; border:1px solid #333; color:#fff; }

#Date { font-family:'BebasNeueRegular', Arial, Helvetica, sans-serif; font-size: 40px; text-align:center; text-shadow:0 0 5px #00c6ff; }

#clock_holder  ul { width:800px; margin:0 auto; padding:0px; list-style:none; text-align:center; }
#clock_holder  ul li { display:inline; font-size:60px; text-align:center; font-family:'BebasNeueRegular', Arial, Helvetica, sans-serif; text-shadow:0 0 5px #00c6ff; }

#point { position:relative; -moz-animation:mymove 1s ease infinite; -webkit-animation:mymove 1s ease infinite; padding-left:10px; padding-right:10px; }

/* Simple <a href="https://www.jqueryscript.net/animation/">Animation</a> */
@-webkit-keyframes mymove
{
0% {opacity:1.0; text-shadow:0 0 20px #00c6ff;}
50% {opacity:0; text-shadow:none; }
100% {opacity:1.0; text-shadow:0 0 20px #00c6ff; }
}

@-moz-keyframes mymove
{
0% {opacity:1.0; text-shadow:0 0 20px #00c6ff;}
50% {opacity:0; text-shadow:none; }
100% {opacity:1.0; text-shadow:0 0 20px #00c6ff; }
}
</style>

    <div class="box">
        <div class="row">
            <div class="col-xs-12">
              <div class="alert alert-info alert-dismissible fade in" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
                <h4><center>Welcome To Presbyterian Hospital,DonkorKrom Staff Management Application</center></h4>
                <p></p>
              </div>
            </div>
          </div>
          <!-- END: alert -->
          <div class="row">
        <div class="col-md-12">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        <span class="glyphicon glyphicon-bookmark"></span> Quick Shortcuts</h3>
                </div>
                <div class="panel-body">
                    <div class="row" style="margin:20px">
                        <div class="col-xs-6 col-md-12">
                         
                          <a href="/staff/create" class="btn btn-warning btn-lg" role="button"><span class="glyphicon glyphicon-user"></span> <br/>Add Staff</a>
                          <a href="/staff" class="btn btn-primary btn-lg" role="button"><span class="glyphicon glyphicon-eye-open"></span> <br/>View Staff</a>
                          <a href="/staff/manage" class="btn btn-primary btn-lg" role="button"><span class="glyphicon glyphicon-cog"></span> <br/>Manage Staff</a>
                          <a href="/staff/retirement" class="btn btn-primary btn-lg" role="button"><span class="glyphicon glyphicon-retweet"></span> <br/>Retirements</a>
                          <a href="/staff/monitor_leave" class="btn btn-primary btn-lg" role="button"><span class="glyphicon glyphicon-paste"></span> <br/>Monitor Leave</a>
                          <a href="/staff/leave_requests" class="btn btn-primary btn-lg" role="button"><span class="glyphicon glyphicon-log-out"></span> <br/>Leave Requests</a>
                          <a href="/staff/reprint_leave_request" class="btn btn-primary btn-lg" role="button"><span class="glyphicon glyphicon-print"></span> <br/>Print Request</a>


                        </div>
                    </div>

                    <a href="{{url('/logout')}}" class="btn btn-success btn-lg btn-block" role="button"><span class="glyphicon glyphicon-lock"></span> Logout</a>
                </div>
            </div>
        </div>
    </div>

          <!-- END: .row -->
    </div>


    <div class="box">
        <div class="row">
            <div class="col-xs-12">
            <div class="box" id="clock_holder" style="background-color:#202020">
    <br>
    <div class="container">
        <div class="row">
            <div class="clock">
                <div id="Date"></div>
                <ul>
                    <li id="hours"></li>
                    <li id="point">:</li>
                    <li id="min"></li>
                    <li id="point">:</li>
                    <li id="sec"></li>
                </ul>
            </div>
        </div>
        <br><br>
    </div>
</div>
            </div>
          </div>
          <!-- END: alert -->

          <!-- END: .row -->
    </div>

 @endsection


 <script src="{{asset('js/app.js')}}"></script>
 <script type="text/javascript">
$(document).ready(function() {
// Create two variable with the names of the months and days in an array
var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

// Create a newDate() object
var newDate = new Date();
// Extract the current date from Date object
newDate.setDate(newDate.getDate());
// Output the day, date, month and year
$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

setInterval( function() {
	// Create a newDate() object and extract the seconds of the current time on the visitor's
	var seconds = new Date().getSeconds();
	// Add a leading zero to seconds value
	$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
	},1000);

setInterval( function() {
	// Create a newDate() object and extract the minutes of the current time on the visitor's
	var minutes = new Date().getMinutes();
	// Add a leading zero to the minutes value
	$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);

setInterval( function() {
	// Create a newDate() object and extract the hours of the current time on the visitor's
	var hours = new Date().getHours();
	// Add a leading zero to the hours value
	$("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);
});
</script>
