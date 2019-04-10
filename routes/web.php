<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/','LoginController@login');
Route::get('/login','LoginController@login');
Route::get('/logout','LoginController@logout');
Route::post('/process','LoginController@check_login');

Route::get('/dashboard', function(){
    return view('Staff.dashboard');
});

Route::get('/staff/password','StaffController@password');

Route::put('/staff/change_password','StaffController@change_password');

Route::get('/staff/retirement','StaffController@retirement');
Route::get('/staff/birth_cert','StaffController@birth_cert_view');

Route::get('/staff/{staff_id}/birth_cert','StaffController@birth_cert');

Route::get('/leave','StaffController@leave_view');

Route::get('/staff/monitor_leave','StaffController@monitor_leave');

Route::put('/staff/add_leave', 'StaffController@add_leave');

Route::get('/staff/leave_requests', 'StaffController@leave_requests');

Route::get('/staff/view_request/{request_id}', 'StaffController@view_request');

Route::put('/staff/approve_request/{request_id}', 'StaffController@approve_request');


Route::get('/staff/print_request/{request_id}','StaffController@print_request');

Route::get('/staff/reprint_leave_request','StaffController@reprint_request');


Route::get('/staff/{staff}/delete','StaffController@del_staff');
Route::get('/staff/{staff}/view','StaffController@view');
Route::get('/staff/manage','StaffController@manage');
Route::resource('staff','StaffController');
