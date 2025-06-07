import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import { useAuth } from '../../../context/AuthContext';
import BranchesMenu from './BranchesMenu';

const EditBranch = () => {
    const { id } = useParams();
    console.log("Branch id : ", id)
    const navigate = useNavigate();
    const { token } = useAuth();

    const [branch_name, setBranchName] = useState("");
    const [branch_status, setBranchStatus] = useState("");
    const [branch_address, setBranchAddress] = useState("");
    const [error, setError] = useState("");

    // Load existing branch data
    useEffect(() => {
        const fetchBranch = async () => {
            try {
                const response = await axios.get(`http://localhost:4001/api/branches/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                });

                const { branch_name, branch_status, branch_address } = response.data.data;
                console.log("branch status", branch_status, "branch name", branch_address);

                //set the data to current instance
                setBranchName(branch_name);
                setBranchStatus(branch_status);
                setBranchAddress(branch_address);
            } catch (error) {
                const errorMessage = error.response?.data?.message || "Failed to load branch.";
                toast.error(errorMessage);
                console.error(error);
            }
        };

        fetchBranch();
    }, [id, token]);


    //update branch
    const handleUpdate = async (e) => {
        e.preventDefault();

        //if not token
        if (!token) {
            return;
        }

        //prepare the payload
        const payload = { branch_name, branch_status, branch_address };

        try {
            const response = await axios.put(`http://localhost:4001/api/branches/${id}`, payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            toast.success(response.data.message || "Branch updated successfully.");
            navigate("/admin/branches");
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error updating branch.";
            toast.error(errorMessage);
            setError(errorMessage);
        }
    };

    return (
        <>
            <BranchesMenu title="Edit Branch" />

            <form onSubmit={handleUpdate}>
                <div className="flex h-full w-full mt-20 items-center justify-center">
                    <div className="w-full max-w-full flex-col items-center xl:max-w-[420px] ">
                        <div className="bg-white shadow-md rounded-lg py-20 px-10 w-full">
                            <p className="text-md py-1">Name</p>
                            <input
                                type="text"
                                value={branch_name}
                                onChange={(e) => setBranchName(e.target.value)}
                                className="mb-3 border rounded px-3 py-2 w-full"
                            />

                            <p className="text-md py-1">Status</p>
                            <select
                                value={branch_status}
                                onChange={(e) => setBranchStatus(Number(e.target.value))}
                                className="mb-3 border rounded px-3 py-2 w-full"
                            >
                                <option value="">Select</option>
                                <option value={1}>Active</option>
                                <option value={0}>Inactive</option>
                            </select>

                            <p className="text-md py-1">Address</p>
                            <input
                                type="text"
                                value={branch_address}
                                onChange={(e) => setBranchAddress(e.target.value)}
                                className="mb-3 border rounded px-3 py-2 w-full"
                            />

                            <button
                                type="submit"
                                className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600"
                            >
                                Update
                            </button>

                            {error && <p className="text-red-500 mt-2">{error}</p>}
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default EditBranch;
