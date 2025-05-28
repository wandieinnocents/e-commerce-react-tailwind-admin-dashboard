import React, { useEffect, useState } from 'react';
import BranchesMenu from './BranchesMenu';
import axios from "axios";
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { FaSpinner } from 'react-icons/fa';

//context api
import { useAuth } from 'context/AuthContext';

const AllBranches = () => {

    const { user, logout, token, isAuthenticated } = useAuth();
    console.log("user details", user);
    console.log("user token", token);

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch data using Axios
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
                setLoading(false);
            });
    }, []);

    // crud 

    const handleEdit = (user) => {
        alert(`Edit user: ${user.name}`);
    };

    const handleDelete = (user) => {
        alert(`Delete user: ${user.name}`);
    };

    const handleView = (user) => {
        alert(`View details of user: ${user.name}`);
    };


    // if loading data

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="flex flex-col items-center gap-2">
                    <FaSpinner className="animate-spin text-blue-500 text-4xl" />
                    <p className="text-gray-600 text-sm">Loading data, please wait...</p>
                </div>
            </div>
        );
    }


    return (
        <>

            {/* branches menu */}
            {user && (
                <p className="text-sm text-gray-600 mb-4">Logged in as: {user.username}</p>
            )}

            <BranchesMenu title="View Branches" />

            <div className="overflow-x-auto py-4">
                <div className="overflow-x-auto py-4">
                    <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden">
                        <thead className="bg-navy-950 text-gray-300 uppercase text-sm tracking-wider">
                            <tr>
                                <th className="py-3 px-5 border-b text-start">#</th>
                                <th className="py-3 px-5 border-b text-start">Name</th>
                                <th className="py-3 px-5 border-b text-start">Email</th>
                                <th className="py-3 px-5 border-b text-start">Phone</th>
                                <th className="py-3 px-5 border-b text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr
                                    key={user.id}
                                    className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                        } hover:bg-gray-100 transition-colors duration-150`}
                                >
                                    <td className="py-3 px-5 border-b font-medium text-gray-800">
                                        {user.id}
                                    </td>
                                    <td className="py-3 px-5 border-b font-medium text-gray-800">
                                        {user.name}
                                    </td>
                                    <td className="py-3 px-5 border-b text-gray-800">{user.email}</td>
                                    <td className="py-3 px-5 border-b text-gray-800">{user.phone}</td>

                                    {/* actions  */}
                                    <td className="py-3 px-5 border-b text-center">
                                        <div className="flex justify-center gap-3">
                                            <button
                                                onClick={() => handleView(user)}
                                                className="p-2 rounded-full hover:bg-blue-100 transition"
                                                title="View"
                                            >
                                                <FaEye className="text-blue-500 text-lg" />
                                            </button>
                                            <button
                                                onClick={() => handleEdit(user)}
                                                className="p-2 rounded-full hover:bg-yellow-100 transition"
                                                title="Edit"
                                            >
                                                <FaEdit className="text-yellow-500 text-lg" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(user)}
                                                className="p-2 rounded-full hover:bg-red-100 transition"
                                                title="Delete"
                                            >
                                                <FaTrash className="text-red-500 text-lg" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );

};

export default AllBranches;
