<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToStaffTableTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('staff_table', function(Blueprint $table)
		{
			$table->foreign('staff_department', 'staff_table_ibfk_1')->references('department_id')->on('staff_departments')->onUpdate('RESTRICT')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('staff_table', function(Blueprint $table)
		{
			$table->dropForeign('staff_table_ibfk_1');
		});
	}

}
