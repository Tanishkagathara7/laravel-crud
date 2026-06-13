<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController;

// Root URL → redirect to employees list
Route::get('/', function () {
    return redirect()->route('employees.index');
});

Route::resource('employees', EmployeeController::class);