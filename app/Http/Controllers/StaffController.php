<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\staff;
use Session;
use DB;

class StaffController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $getlist = DB::select("SELECT * FROM staff_table JOIN staff_departments ON `staff_table`.`staff_department` = `staff_departments`.`department_id` ");
        return view('Staff.view_staff')->with('staffs',$getlist);
    }

	public function monitor_leave(){
    
    $get_list = DB::select("SELECT * from leave_requests join leave_forms on leave_requests.person_rank = leave_forms.staff_category_id where leave_requests.approved = 1 and leave_requests.proccessed = 1 ORDER BY leave_requests.date_of_resumption");
    return view('Staff.monitor_leave')->with('staffs',$get_list);
    
    }

    public function retirement()
    {
        //
        $getlist = DB::select("SELECT * FROM staff_table JOIN staff_departments ON `staff_table`.`staff_department` = `staff_departments`.`department_id` where `staff_table`.staff_age >= 50 ");
        return view('Staff.view_retirements')->with('staffs',$getlist);
    }

    public function birth_cert_view()
    {
        //
        $getlist = DB::select("SELECT * FROM staff_table JOIN staff_departments ON `staff_table`.`staff_department` = `staff_departments`.`department_id` ");
        return view('Staff.view_birth_cert')->with('staffs',$getlist);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $get_departments = DB:: select("SELECT * FROM `staff_departments`");
        return view('Staff.add_staff')->with('departments',$get_departments);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       $staff_name = $request->input('txt_full_name');
       $staff_department = $request->input('sel_department');

       $staff_leave_date = $request->input('txt_leave_date');
       $staff_resume_date = $request->input('txt_resume_date');
       $staff_dob_staff = $request->input('txt_dob_staff');

       $spouse_name =  $request->input('txt_spouse');
       $spouse_id =  $request->input('txt_spouse_id');
       $child_1_name = $request->input('txt_child_1_name');
       $child_1_id = $request->input('txt_child_1_id');
       $child_1_dob = $request->input('txt_child_1_dob');
       $child_2_name = $request->input('txt_child_2_name');
       $child_2_id = $request->input('txt_child_2_id');
       $child_2_dob = $request->input('txt_child_2_dob');
       $child_3_name = $request->input('txt_child_3_name');
       $child_3_id = $request->input('txt_child_3_id');
       $child_3_dob = $request->input('txt_child_3_dob');
       $child_4_name = $request->input('txt_child_4_name');
       $child_4_id = $request->input('txt_child_4_id');
       $child_4_dob = $request->input('txt_child_4_dob');

       $staff_age = date('Y')- date('Y',strtotime($staff_dob_staff));



        if($child_1_id == ""){
            $child_1_id = 'NULL';
        }elseif($child_2_id == ""){
            $child_2_id = 'NULL';
        }elseif($child_3_id == ""){
            $child_3_id = 'NULL';
        }elseif($child_4_id == ""){
            $child_4_id ='NULL';
        }elseif($spouse_id == ""){
            $spouse_id = 'NULL';
        }elseif($spouse_name == ""){
        	$spouse_name = 'NULL';
        }else{}

        



       if($request->hasFile('image_staff')){
        $staff_image_temp = $request->file('image_staff')->store('public/upload');
        $staff_image = substr($staff_image_temp, 7);
         }else{ $staff_image = ""; }

    if($request->hasFile('image_spouse')){
        $spouse_image_temp = $request->file('image_spouse')->store('public/upload');
        $spouse_image = substr($spouse_image_temp, 7);
        }else{ $spouse_image = ""; }

    if($request->hasFile('image_child_1')){
        $child_1_image_temp = $request->file('image_child_1')->store('public/upload');
        $child_1_image = substr($child_1_image_temp, 7);
        }else{ $child_1_image = ""; }

    if($request->hasFile('image_child_2')){
        $child_2_image_temp = $request->file('image_child_2')->store('public/upload');
    	$child_2_image = substr($child_2_image_temp, 7);
        }else{ $child_2_image = ""; }

    if($request->hasFile('image_child_3')){
        $child_3_image_temp = $request->file('image_child_3')->store('public/upload');
     	$child_3_image = substr($child_3_image_temp, 7);
        }else{ $child_3_image = ""; }

    if($request->hasFile('image_child_4')){
        $child_4_image_temp  = $request->file('image_child_4')->store('public/upload');
    	$child_4_image = substr($child_4_image_temp, 7);
        }else{ $child_4_image = ""; }

    if($request->hasFile('image_child_1_cert')){
        $child_1_cert_temp = $request->file('image_child_1_cert')->store('public/upload');
        $child_1_cert = substr($child_1_cert_temp, 7);
       }else{ $child_1_cert = ""; }

       if($request->hasFile('image_child_2_cert')){
        $child_2_cert_temp = $request->file('image_child_2_cert')->store('public/upload');
        $child_2_cert = substr($child_2_cert_temp, 7);
       }else{ $child_2_cert = ""; }

       if($request->hasFile('image_child_3_cert')){
        $child_3_cert_temp = $request->file('image_child_3_cert')->store('public/upload');
        $child_3_cert = substr($child_3_cert_temp, 7);
       }else{ $child_3_cert = ""; }

       if($request->hasFile('image_child_4_cert')){
        $child_4_cert_temp = $request->file('image_child_4_cert')->store('public/upload');
        $child_4_cert = substr($child_4_cert_temp, 7);
       }else{ $child_4_cert = ""; }


       $add_staff = DB::insert("INSERT INTO `staff_table`
      (`staff_id`, `staff_full_name`, `staff_image`,
       `staff_department`, `staff_dob`,`staff_age`, `staff_spouse_name`,
       `staff_spouse_id`, `spouse_image`,
       `child_1_name`,`child_1_dob`, `child_1_id`, `child_1_image`,`child_1_cert`,
        `child_2_name`, `child_2_dob`,`child_2_id`, `child_2_image`, `child_2_cert`,
       `child_3_name`, `child_3_dob`, `child_3_id`, `child_3_image`,`child_3_cert`,
       `child_4_name`, `child_4_dob`, `child_4_id`,`child_4_image`, `child_4_cert`)
       VALUES
       (NULL, '$staff_name',
       '$staff_image', '$staff_department', '$staff_dob_staff','$staff_age', '$spouse_name',
       '$spouse_id', '$spouse_image',
       '$child_1_name','$child_1_dob', '$child_1_id', '$child_1_image','$child_1_cert',
        '$child_2_name', '$child_2_dob', '$child_2_id','$child_2_image','$child_2_cert',
        '$child_3_name', '$child_3_dob', '$child_3_id','$child_3_image','$child_3_cert',
        '$child_4_name', '$child_4_dob', '$child_4_id', '$child_4_image','$child_4_cert')");

    	 $getlist = DB::select("SELECT * FROM staff_table JOIN staff_departments ON `staff_table`.`staff_department` = `staff_departments`.`department_id` ");
        return view('Staff.view_staff')->with('staffs',$getlist);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $get_departments = DB::select("SELECT * FROM `staff_departments`");
        $getlist = DB::select("SELECT * FROM staff_table JOIN staff_departments ON `staff_table`.`staff_department` = `staff_departments`.`department_id`  WHERE `staff_id` = ? LIMIT 1",[$id]);
        return view('Staff.edit_staff')->with(array('details' => $getlist,'departments'=>$get_departments));
    }

    public function view($id)
    {
        //
        $getlist = DB::select("SELECT * FROM staff_table JOIN staff_departments ON `staff_table`.`staff_department` = `staff_departments`.`department_id`  WHERE `staff_id` = ? LIMIT 1",[$id]);
        return view('Staff.record_view')->with('details',$getlist);
    }

    public function birth_cert($id)
    {
        //
        $details = DB::select("SELECT * FROM staff_table JOIN staff_departments ON `staff_table`.`staff_department` = `staff_departments`.`department_id`  WHERE `staff_id` = ? LIMIT 1",[$id]);
        return view('Staff.birth_certificate')->with('details',$details);
    }

    public function manage()
    {
        //
        $getlist = DB::select("SELECT * FROM staff_table JOIN staff_departments ON `staff_table`.`staff_department` = `staff_departments`.`department_id` ");
        return view('Staff.manage_staff')->with('staffs',$getlist);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $staff_name = $request->input('txt_full_name');
        $staff_department = $request->input('sel_department');
        $staff_dob_staff = $request->input('txt_dob');
        $spouse_name =  $request->input('txt_spouse');
        $spouse_id =  $request->input('txt_spouse_id');
        $child_1_name = $request->input('txt_child_1_name');
        $child_1_id = $request->input('txt_child_1_id');
        $child_1_dob = $request->input('txt_child_1_dob');
        $child_2_name = $request->input('txt_child_2_name');
        $child_2_id = $request->input('txt_child_2_id');
        $child_2_dob = $request->input('txt_child_2_dob');
        $child_3_name = $request->input('txt_child_3_name');
        $child_3_id = $request->input('txt_child_3_id');
        $child_3_dob = $request->input('txt_child_3_dob');
        $child_4_name = $request->input('txt_child_4_name');
        $child_4_id = $request->input('txt_child_4_id');
        $child_4_dob = $request->input('txt_child_4_dob');
    
    
 $staff_age = date('Y')- date('Y',strtotime($staff_dob_staff));


        //spare image values
        $staff_img = $request->input('staff_image');
        $spouse_img = $request->input('spouse_image');
        $child_1_img = $request->input('1_image');
        $child_2_img = $request->input('2_image');
        $child_3_img = $request->input('3_image');
        $child_4_img = $request->input('4_image');

        $child_1_cert = $request->input("cert_1_image");
        $child_2_cert = $request->input("cert_2_image");
        $child_3_cert = $request->input("cert_3_image");
        $child_4_cert = $request->input("cert_4_image");


        if($request->hasFile('image_staff')){
            $staff_image_1 = $request->file('image_staff')->store('public/upload');
            $staff_image = substr($staff_image_1, 7);
        }else{
            $staff_image = $staff_img;
        }

        if($request->hasFile('image_spouse')){
            $spouse_image_1 = $request->file('image_spouse')->store('public/upload');
            $spouse_image = substr($spouse_image_1, 7);
        }else{
            $spouse_image = $spouse_img;
        }

        if($request->hasFile('image_child_1')){
            $child_1_image_1 = $request->file('image_child_1')->store('public/upload');
            $child_1_image = substr($child_1_image_1, 7);
        }else{
            $child_1_image = $child_1_img;
        }

        if($request->hasFile('image_child_2')){
            $child_2_image_1 = $request->file('image_child_2')->store('public/upload');
            $child_2_image = substr($child_2_image_1, 7);
        }else{
            $child_2_image = $child_2_img;
        }

        if($request->hasFile('image_child_3')){
            $child_3_image_1 = $request->file('image_child_3')->store('public/upload');
            $child_3_image = substr($child_3_image_1, 7);
        }else{
            $child_3_image = $child_3_img;
        }

        if($request->hasFile('image_child_4')){
            $child_4_image_1  = $request->file('image_child_4')->store('public/upload');
            $child_4_image = substr($child_4_image_1, 7);
        }else{
            $child_4_image = $child_4_img;
        }

           if($request->hasFile('image_child_1_cert')){
            $child_1_cert_temp = $request->file('image_child_1_cert')->store('public/upload');
            $child_1_cert = substr($child_1_cert_temp, 7);
           }else{ $child_1_cert = ""; }

           if($request->hasFile('image_child_2_cert')){
            $child_2_cert_temp = $request->file('image_child_2_cert')->store('public/upload');
            $child_2_cert = substr($child_2_cert_temp, 7);
           }else{ $child_2_cert = ""; }

           if($request->hasFile('image_child_3_cert')){
            $child_3_cert_temp = $request->file('image_child_3_cert')->store('public/upload');
            $child_3_cert = substr($child_3_cert_temp, 7);
           }else{ $child_3_cert = ""; }

           if($request->hasFile('image_child_4_cert')){
            $child_4_cert_temp = $request->file('image_child_4_cert')->store('public/upload');
            $child_4_cert = substr($child_4_cert_temp, 7);
           }else{ $child_4_cert = ""; }

        $update_query = DB::update("UPDATE `staff_table` SET
        `staff_full_name` = '$staff_name',
        `staff_image` = '$staff_image',
        `staff_department` = '$staff_department',
        `staff_dob` = '$staff_dob_staff',
        `staff_age` = '$staff_age',
        `staff_spouse_name` = '$spouse_name',
        `staff_spouse_id` = '$spouse_id',
        `spouse_image` = '$spouse_image',
        `child_1_name` = '$child_1_name',
        `child_1_dob` = '$child_1_dob',
        `child_1_id` = '$child_1_id',
        `child_1_image` = '$child_1_image',
        `child_1_cert` = '$child_1_cert',
        `child_2_name` = '$child_2_name',
        `child_2_dob` = '$child_2_dob',
        `child_2_id` = '$child_2_id',
        `child_2_image` = '$child_2_image',
        `child_2_cert` = '$child_2_cert',
        `child_3_name` = '$child_3_name',
        `child_3_dob` = '$child_3_dob',
        `child_3_id` = '$child_3_id',
        `child_3_image` = '$child_3_image',
        `child_3_cert` = '$child_3_cert',
        `child_4_name` = '$child_4_name',
        `child_4_dob` = '$child_4_dob',
        `child_4_id` = '$child_4_id',
        `child_4_image` = '$child_4_image',
        `child_4_cert` = '$child_4_cert'
        WHERE
        `staff_table`.`staff_id` = '$id'");

         return redirect('/staff/manage');
    }

    public function del_staff($id)
    {
        //
        $get_departments = DB::select("SELECT * FROM `staff_departments`");
        $getlist = DB::select("SELECT * FROM staff_table JOIN staff_departments ON `staff_table`.`staff_department` = `staff_departments`.`department_id`  WHERE `staff_id` = ? LIMIT 1",[$id]);
        return view('Staff.delete_staff')->with(array('details' => $getlist,'departments'=>$get_departments));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $delete_staff = DB::delete("DELETE FROM `staff_table` WHERE `staff_table`.`staff_id`=?",[$id]);
        return redirect('/staff/');
    }

    public function password()
    {
        return view('Staff.change_pass');
    }

    public function change_password(Request $request){

        $user_new_pass = $request->input('txt_new_password');
        $user_re_pass = $request->input('txt_re_password');
        $user_old_pass = $request->input('txt_old_password');
        $user_name = Session::get('my_name');

        if($user_new_pass == $user_re_pass){
            $check = DB::select("SELECT * FROM `users_table` WHERE `user_name` = ? AND `user_pass` = ? LIMIT 1",[$user_name,$user_old_pass]);
            if(count($check)){
            $update = DB::update("UPDATE `users_table` SET `user_pass` = ? WHERE `user_name` = ? AND `user_pass` = ?",[$user_new_pass,$user_name,$user_old_pass]);
        return redirect('/');
        }else{
            return view('Staff.change_pass');
        }
        }else{
            return view('Staff.change_pass');
        }

    }


    public function leave_view(){
            $get_list = DB::select("SELECT * FROM `leave_forms`");
            return view('Staff.leave')->with('ranks',$get_list);

    }


    public function add_leave(Request $request)
    {
        $full_name = $request->input('txt_full_name');
        $rank = $request->input('sel_rank');
        $days_entitled = $request->input('txt_hidden');
        $days_requested = $request->input('txt_request_days');
        $salary_level = $request->input('sel_salary');
        $doa = $request->input('txt_appointment_date');
        $dod = $request->input('txt_departure');
        $destination = $request->input('txt_destination');
        $address = $request->input('txt_address');
        $last_leave = $request->input('txt_date_return');
        $respect_of = $request->input('txt_respect_of');


        $check_user_existence = DB::select("SELECT * FROM `leave_requests` WHERE `person_name` LIKE '%$full_name%' AND `person_rank` = '$rank' LIMIT 1");
          if(count($check_user_existence)>= 1){
             foreach ($check_user_existence as $item) {
                $get_days_remain = $item->days_remain;
             }
             if($get_days_remain < $days_requested){
                 exit();
             }else{
             
         $new_days_remain = $get_days_remain - $days_requested;
             
            $update_query = DB::update("UPDATE `leave_requests` SET
            `person_name` = '$full_name', 
           `days_requested` = '$days_requested', 
           `days_remain` = '$get_days_remain', 
           `doa` = '$doa', 
           `dod` = '$dod', 
           `destination` = '$destination',
           `address` = '$address',
           `date_last` = '$last_leave', 
           `respect_of` = '$respect_of',
           `has_approved` = '0', 
           `reliever_required` = '0',
           `approved_dod` = '0', 
           `approved_nod` = '0',
           `date_of_resumption` = '0', 
           `approved` = '0',
           `proccessed` = '0' WHERE 
           `leave_requests`.`person_rank` = '$rank' AND `leave_requests`.`person_name` LIKE '%$full_name%'");
             
             
             
             }
          
          
          
          
          }else{

            $insert_leave = DB::insert("INSERT INTO `leave_requests`
            (`leave_id`, `person_name`, `person_rank`, `days_entitled`,
            `days_requested`, `days_remain`, `salary_level`, `doa`, `dod`,
              `destination`, `address`, `date_last`, `respect_of`,`has_approved`,
              `reliever_required`, `approved_dod`, `approved_nod`, `date_of_resumption`,`approved`,`proccessed`)
              VALUES
               (NULL, '$full_name', '$rank', '$days_entitled', '$days_requested',
                '$days_entitled', '$salary_level', '$doa', '$dod', '$destination',
                '$address', '$last_leave', '$respect_of', '0', '0', '', '0', '','0','0')");

            $get_list = DB::select("SELECT * FROM `leave_forms` where `staff_category_id`");
            return redirect('/')->with('ranks', $get_list);
          }
    }


    public function leave_requests(){
        $get_list = DB::select("SELECT * FROM `leave_requests` WHERE `approved` = '0' and `proccessed` = '0'");
        return view("Staff.leave_requests")->with('list',$get_list);
    }

    public function view_request($id){
        $get_details = DB::select("SELECT * FROM leave_requests JOIN leave_forms on leave_requests.person_rank = leave_forms.staff_category_id WHERE `leave_id` = '$id'");
        return view("Staff.view_request")->with('details',$get_details);
    }


    public function approve_request(Request $request, $id){

        $get_approved = $request->input('sel_approve');
        $get_reliever_required = $request->input('sel_reliever');
        $get_approved_dod = $request->input('txt_approved_dod');
        $get_approved_nod = $request->input('txt_approved_days');
        $get_approved_dor = $request->input('approved_dor');

        $get_days_remain = $request->input('txt_days_remain');

        $remaining_days = $get_days_remain - $get_approved_nod;

        if($get_approved == "1"){
            $request_approved = '1';
        }else{
            $request_approved = "0";
        }

        if($get_approved == "1"){

            $update_request = DB::update("UPDATE `leave_requests` SET
            `days_remain` = '$remaining_days',
            `has_approved` = '$get_approved',
            `reliever_required` = '$get_reliever_required',
            `approved_dod` = '$get_approved_dod',
            `approved_nod` = '$get_approved_nod',
            `date_of_resumption` = '$get_approved_dor',
            `approved` = '$request_approved',
            `proccessed` = '1' WHERE
            `leave_requests`.`leave_id` = '$id'");
        }else{

            $update_request = DB::update("UPDATE `leave_requests` SET
            `approved` = '$request_approved',
            `proccessed` = '1' WHERE
            `leave_requests`.`leave_id` = '$id'");

        }



        return redirect("staff/print_request/$id");


    }

    public function print_request($id){
        $get_details = DB::select("SELECT * FROM leave_requests JOIN leave_forms on leave_requests.person_rank = leave_forms.staff_category_id WHERE `leave_id` = '$id'");
        return view("Staff.print_request")->with('details',$get_details);
    }

    public function reprint_request(){
        $get_list = DB::select("SELECT * FROM `leave_requests` WHERE `proccessed` = '1'");
        return view("Staff.reprint_requests")->with('list',$get_list);
    }



}
