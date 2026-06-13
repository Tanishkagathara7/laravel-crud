// resources/js/Pages/Employees/Index.jsx
import { Head, Link, router } from '@inertiajs/react';

export default function Index({ employees }) {  // ← destructure here

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this employee?')) {
            router.delete(`/employees/${id}`);
        }
    };

    return (
        <>
            <Head title="Employees" />
            <div style={{ padding: '30px' }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>
                        Employee List
                    </h1>
                    <Link
                        href="/employees/create"
                        style={{
                            backgroundColor: '#3b82f6',
                            color: 'white',
                            padding: '8px 16px',
                            borderRadius: '6px',
                            textDecoration: 'none'
                        }}
                    >
                        + Add Employee
                    </Link>
                </div>

                {/* Safety check — always guard against empty/undefined */}
                {employees && employees.length > 0 ? (
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f3f4f6' }}>
                                <th style={thStyle}>ID</th>
                                <th style={thStyle}>Name</th>
                                <th style={thStyle}>Email</th>
                                <th style={thStyle}>Phone</th>
                                <th style={thStyle}>Department</th>
                                <th style={thStyle}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((emp) => (
                                <tr key={emp.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                                    <td style={tdStyle}>{emp.id}</td>
                                    <td style={tdStyle}>{emp.name}</td>
                                    <td style={tdStyle}>{emp.email}</td>
                                    <td style={tdStyle}>{emp.phone ?? '—'}</td>
                                    <td style={tdStyle}>{emp.department}</td>
                                    <td style={tdStyle}>
                                        <Link
                                            href={`/employees/${emp.id}/edit`}
                                            style={{ color: '#3b82f6', marginRight: '12px' }}
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(emp.id)}
                                            style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer' }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p style={{ color: '#6b7280' }}>
                        No employees found. <Link href="/employees/create" style={{ color: '#3b82f6' }}>Add one!</Link>
                    </p>
                )}
            </div>
        </>
    );
}

// Styles
const thStyle = {
    border: '1px solid #d1d5db',
    padding: '10px',
    textAlign: 'left',
    fontWeight: 'bold'
};

const tdStyle = {
    border: '1px solid #d1d5db',
    padding: '10px'
};