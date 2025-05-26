import React, { useState } from 'react';

const AllBranches = () => {
    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Role' },
        { key: 'action ', label: 'Action' },
    ];

    const initialData = [
        { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
        { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor' },
        { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Viewer' },
        { id: 4, name: 'Diana Prince', email: 'diana@example.com', role: 'Admin' },
        { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com', role: 'Editor' },
        { id: 6, name: 'Wandie INno Hunt', email: 'ethan@example.com', role: 'Editor' },
    ];

    const [sortColumn, setSortColumn] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSort = (key) => {
        const order = sortColumn === key && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortColumn(key);
        setSortOrder(order);
    };

    const sortedData = [...initialData].sort((a, b) => {
        if (!sortColumn) return 0;
        const valA = a[sortColumn];
        const valB = b[sortColumn];
        return sortOrder === 'asc'
            ? String(valA).localeCompare(String(valB))
            : String(valB).localeCompare(String(valA));
    });

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">User Table</h2>
            <div className="overflow-x-auto border rounded-lg shadow">
                <table className="min-w-full table-auto text-sm text-left text-gray-700">
                    <thead className="bg-gray-100">
                        <tr>
                            {columns.map((col) => (
                                <th
                                    key={col.key}
                                    className="px-4 py-2 font-semibold cursor-pointer"
                                    onClick={() => handleSort(col.key)}
                                >
                                    {col.label}
                                    {sortColumn === col.key && (
                                        <span className="ml-1">
                                            {sortOrder === 'asc' ? '↑' : '↓'}
                                        </span>
                                    )}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((row) => (
                            <tr key={row.id} className="border-t hover:bg-gray-50">
                                {columns.map((col) => (
                                    <td key={col.key} className="px-4 py-2">
                                        {row[col.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBranches;
