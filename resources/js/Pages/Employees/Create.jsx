// resources/js/Pages/Employees/Create.jsx
import { Head, useForm } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, errors, processing } = useForm({
        name: '',
        email: '',
        phone: '',
        department: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/employees');   // POST to store()
    };

    return (
        <>
            <Head title="Add Employee" />
            <div className="p-6 max-w-lg mx-auto">
                <h1 className="text-2xl font-bold mb-4">Add Employee</h1>

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
                            <option value="">Select Department</option>
                            <option value="IT">IT</option>
                            <option value="HR">HR</option>
                            <option value="Finance">Finance</option>
                        </select>
                        {errors.department && <p className="text-red-500">{errors.department}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-blue-500 text-white px-6 py-2 rounded"
                    >
                        {processing ? 'Saving...' : 'Save Employee'}
                    </button>
                </form>
            </div>
        </>
    );
}