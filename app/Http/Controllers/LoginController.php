<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Session;
use App\Login;
use DB;


class LoginController extends Controller
{
    //

    public function login()
    {
        return view('login');
    }

    public function check_login(Request $request)
    {
        $user_name = $request->input('txt_username');
        $user_pass = $request->input('txt_password');

        $get_user = DB::select('SELECT * FROM `users_table` WHERE `user_name` = ? AND `user_pass` = ? LIMIT 1',[$user_name,$user_pass]);
        if(count($get_user)){
        	$get_total_staff = DB::table('staff_table')->count();
            Session::put('user_count',$get_total_staff);
            Session::put('my_name',$user_name);
            return redirect('/dashboard');
        }else{
            return view('login');
        }

    }

    public function logout(){
        Session::forget('my_name');
        Session::forget('user_count');
        return redirect('/');
    }

}
