import React, { useEffect, useState } from 'react';
import BranchesMenu from './BranchesMenu';
import axios from "axios";
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { FaSpinner } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { formatDate } from 'utils/DateFormarter';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

//context api
import { useAuth } from 'context/AuthContext';
import BASE_URL from 'config/base_url';

const AllBranches = () => {
    const navigate = useNavigate();
    const { user, logout, token, isAuthenticated } = useAuth();
    const [branches, setBranches] = useState([]);
    const [loading, setLoading] = useState(true);

    //get all branches 
    useEffect(() => {
        const fetchBranches = async () => {
            try {
                if (!token) {
                    return;
                }

                const response = await axios.get(`${BASE_URL}/branches`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: "application/json",
                    },
                });

                console.log("branches", response.data.data);
                setBranches(response.data.data);
            } catch (error) {
                console.error("Error fetching branches:", error.response?.data || error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBranches();
    }, [token]);

    // Delete branch function
    const handleDelete = async (id) => {
        //check token 
        if (!token) {
            console.log("No token, cannot fetch branch");
            logout();
            return;
        }

        //confirm alert
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        });

        if (!result.isConfirmed) return;

        try {
            await axios.delete(`${BASE_URL}/branches/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                },
            });

            // Remove deleted branch from state to update UI 
            setBranches(prevBranches => prevBranches.filter(branch => branch._id !== id));
            toast.success("Branch deleted successfully.")

        } catch (error) {
            console.error("Error deleting branch:", error.response?.data || error.message);
            toast.success("Failed to delete branch.")
        }
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

            <BranchesMenu title="View Branches" />

            <div className="overflow-x-auto py-4">
                <div className="overflow-x-auto py-4">
                    <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden">
                        <thead className="bg-navy-950 text-gray-300 uppercase text-sm tracking-wider">
                            <tr>
                                <th className="py-3 px-5 border-b text-start">#</th>
                                <th className="py-3 px-5 border-b text-start">Name</th>
                                <th className="py-3 px-5 border-b text-start">Status</th>
                                <th className="py-3 px-5 border-b text-start">Address</th>
                                <th className="py-3 px-5 border-b text-start">Created On</th>
                                <th className="py-3 px-5 border-b text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {branches.map((branch, index) => (
                                <tr
                                    key={branch._id}
                                    className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                        } hover:bg-gray-100 transition-colors duration-150`}
                                >
                                    <td className="py-3 px-5 border-b font-medium text-gray-800">
                                        {index + 1}
                                    </td>
                                    <td className="py-3 px-5 border-b font-medium text-gray-800">
                                        {branch.branch_name}
                                    </td>
                                    <td className="py-3 px-5 border-b text-gray-800">
                                        {
                                            branch.branch_status == "1" ? (
                                                <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                                                    Active
                                                </span>
                                            ) : (
                                                <span className="inline-block bg-red-400 text-white text-sm font-medium px-3 py-1 rounded-full">
                                                    Inactive
                                                </span>
                                            )
                                        }
                                    </td>
                                    <td className="py-3 px-5 border-b text-gray-800">{branch.branch_address}</td>
                                    <td className="py-3 px-5 border-b text-gray-800">{formatDate(branch.createdAt, true)}</td>

                                    {/* actions  */}
                                    <td className="py-3 px-5 border-b text-center">
                                        <div className="flex justify-center gap-3">
                                            <button
                                                onClick={() => navigate(`/admin/branches/${branch._id}`)}
                                                className="p-2 rounded-full hover:bg-blue-100 transition"
                                                title="View"
                                            >
                                                <FaEye className="text-blue-500 text-lg" />
                                            </button>
                                            <button
                                                onClick={() => navigate(`/admin/branches/edit/${branch._id}`)}
                                                className="p-2 rounded-full hover:bg-yellow-100 transition"
                                                title="Edit"
                                            >
                                                <FaEdit className="text-yellow-500 text-lg" />
                                            </button>
                                            <button
                                                // onClick={deleteBranch}
                                                onClick={() => handleDelete(branch._id)}
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
