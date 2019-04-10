@extends('layouts.app')
@section('content')

<div class="row">
    <div class="col-sm-12">
        <div class="box">
            <header>
                <h3></h3>

            </header>
            <div class="box-body">
                <table data-plugin="datatables" class="table table-striped table-bordered" width="100%" cellspacing="0">
                    <thead style="text-align:center">
                        <tr>
                            <th style="text-align:center">Name</th>
                            <th style="text-align:center">Rank</th>
                            <th style="text-align:center">Days Entitled</th>
                            <th style="text-align:center">Days Requested</th>
                            <th style="text-align:center">Days Remain</th>
                            <th style="text-align:center">Salary Level</th>
                            <th style="text-align:center">Actions</th>
                        </tr>
                    </thead>
                    <tbody style="text-align:center">
                        @foreach ($list as $item)
                        <tr>
                            <td>{{$item->person_name}}</td>
                            <td>{{$item->person_rank}}</td>
                            <td>{{$item->days_entitled}}</td>
                            <td>{{$item->days_requested}}</td>
                            <td>{{$item->days_remain}}</td>
                            <td>{{$item->salary_level}}</td>
                        <td><a href="/staff/print_request/{{$item->leave_id}}" target="_blank"><button class="btn btn-primary"><i class="fa fa-fw fa-print"></i>&nbsp;Print</button></a></td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
