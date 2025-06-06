import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BranchesMenu from './BranchesMenu';
import InputField from "components/fields/InputField";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../../context/AuthContext';
import { useParams } from "react-router-dom";
import { FaSpinner } from 'react-icons/fa';
import { formatDate } from 'utils/DateFormarter';


const ViewBranchDetails = () => {

    //get branch id
    const { id } = useParams();
    // console.log(id);


    const navigate = useNavigate();
    const { user, logout, token, isAuthenticated } = useAuth();
    const [branch, setBranch] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBranch = async () => {
            if (!token) {
                console.log("No token, cannot fetch branch");
                logout();
                return;
            }

            try {
                const response = await axios.get(`http://localhost:4001/api/branches/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: "application/json",
                    },
                });

                setBranch(response.data.data);
            } catch (error) {
                console.error("Error fetching branch:", error.response?.data || error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBranch();
    }, [token, id]);


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


    if (!branch) {
        return <div className="text-center mt-20 text-red-500">Branch not found</div>;
    }



    return (
        <>
            <BranchesMenu title="Branch Details" />

            <div className="flex items-center justify-center py-20 bg-gray-50 px-4">
                <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8 space-y-3">
                    <h2 className="text-2xl font-bold text-center text-gray-800">Branch Details</h2>

                    <div>
                        <p className="text-sm text-gray-500">Code</p>
                        <p className="text-lg font-medium text-gray-800">{branch.branch_code || "N/A"}</p>
                    </div>

                    <hr className="border-gray-200 " />

                    <div>
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="text-lg font-medium text-gray-800">{branch.branch_name || "N/A"}</p>
                    </div>

                    <hr className="border-gray-200" />

                    <div>
                        <p className="text-sm text-gray-500">Status</p>
                        <div>

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

                        </div>

                    </div>

                    <hr className="border-gray-200" />

                    <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="text-lg font-medium text-gray-800">{branch.branch_address || "N/A"}</p>
                    </div>

                    <hr className="border-gray-200" />

                    <div>
                        <p className="text-sm text-gray-500">Created On</p>
                        <p className="text-lg font-medium text-gray-800">
                            {formatDate(branch.createdAt, true)}
                        </p>
                    </div>

                </div>
            </div>



        </>

    );
};

export default ViewBranchDetails;
