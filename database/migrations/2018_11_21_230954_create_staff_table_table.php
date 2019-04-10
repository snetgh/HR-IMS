<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateStaffTableTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('staff_table', function(Blueprint $table)
		{
			$table->integer('staff_id', true);
			$table->string('staff_full_name', 50);
			$table->text('staff_image', 16777215);
			$table->integer('staff_department')->index('staff_department');
			$table->string('staff_spouse_name', 50);
			$table->integer('staff_spouse_id');
			$table->text('spouse_image', 16777215);
			$table->string('child_1_name', 50);
			$table->string('child_1_dob', 20)->nullable();
			$table->integer('child_1_id')->nullable();
			$table->text('child_1_image', 16777215)->nullable();
			$table->string('child_2_name', 50);
			$table->string('child_2_dob', 20)->nullable();
			$table->integer('child_2_id')->nullable();
			$table->text('child_2_image', 16777215);
			$table->string('child_3_name', 50);
			$table->string('child_3_dob', 20)->nullable();
			$table->integer('child_3_id')->nullable();
			$table->text('child_3_image', 16777215);
			$table->string('child_4_name', 50);
			$table->string('child_4_dob', 20)->nullable();
			$table->integer('child_4_id')->nullable();
			$table->text('child_4_image', 16777215);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('staff_table');
	}

}
