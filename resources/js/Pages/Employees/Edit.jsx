// resources/js/Pages/Employees/Edit.jsx
import { Head, useForm } from '@inertiajs/react';

export default function Edit({ employee }) {
    const { data, setData, put, errors, processing } = useForm({
        name: employee.name,
        email: employee.email,
        phone: employee.phone || '',
        department: employee.department,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/employees/${employee.id}`);   // PUT to update()
    };

    return (
        <>
            <Head title="Edit Employee" />
            <div className="p-6 max-w-lg mx-auto">
                <h1 className="text-2xl font-bold mb-4">Edit Employee</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label>Name</label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            className="w-full border p-2 rounded"
                        />
                        {errors.name && <p className="text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            className="w-full border p-2 rounded"
                        />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                        <label>Phone</label>
                        <input
                            type="text"
                            value={data.phone}
                            onChange={e => setData('phone', e.target.value)}
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    <div>
                        <label>Department</label>
                        <select
                            value={data.department}
                            onChange={e => setData('department', e.target.value)}
                            className="w-full border p-2 rounded"
                        >
                            <option value="IT">IT</option>
                            <option value="HR">HR</option>
                            <option value="Finance">Finance</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-green-500 text-white px-6 py-2 rounded"
                    >
                        {processing ? 'Updating...' : 'Update Employee'}
                    </button>
                </form>
            </div>
        </>
    );
}