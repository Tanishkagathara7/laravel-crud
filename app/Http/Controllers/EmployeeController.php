<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\models\Employee;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Employees/Index',
        ['employees'=>Employee::latest()->get()]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Employees/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'       =>'required|string|max:255',
            'email'      => 'required|email|unique:employees',
            'phone'      => 'nullable|string|max:15',
            'department' => 'required|string|max:255',
        ]);
        Employee::create($request->all());

        return redirect()->route('employees.index')->with('success', 'Employee created!');
    }

    // /**
    //  * Display the specified resource.
    //  */
    // public function show(string $id)
    // {
    //     //
    // }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
         return Inertia::render('Employees/Edit', [
            'employee' => Employee::findOrFail($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name'       => 'required|string|max:255',
            'email'      => 'required|email|unique:employees,email,' . $id,
            'phone'      => 'nullable|string|max:15',
            'department' => 'required|string|max:255',
        ]);

        Employee::findOrFail($id)->update($request->all());

        return redirect()->route('employees.index')
            ->with('success', 'Employee updated!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
          Employee::findOrFail($id)->delete();

        return redirect()->route('employees.index')
            ->with('success', 'Employee deleted!');
    }
}
