import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BranchesMenu from './BranchesMenu';
import InputField from "components/fields/InputField";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../../context/AuthContext';

const AddBranch = () => {

    const navigate = useNavigate();

    const { login, token, isAuthenticated } = useAuth();
    const [branch_name, setBranchName] = useState("");
    const [branch_status, setBranchStatus] = useState(1);
    const [branch_address, setBranchAddress] = useState("");
    const [error, setError] = useState("");

    // submit form data
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!token) {
            return;
            console.log("Token not found or invalid")
        }

        const payload = {
            branch_name,
            branch_status,
            branch_address,
        };

        try {
            const response = await axios.post("http://localhost:4001/api/branches", payload, {
                headers: {
                    Authorization: `Bearer ${token}`, // if using token
                    "Content-Type": "application/json",
                },
            });

            console.log("Branch created:", response.data);
            // clear form
            setBranchName("");
            setBranchStatus("");
            setBranchAddress("");

            // redirect
            toast.success(response.data.message)
            navigate("/admin/branches");

        } catch (error) {
            const errorMessage = error.response?.data?.message || error.response?.data?.error || "Error creating branch.";
            console.error("Error creating branch:", error.response?.data.error);
            setError(toast.error(errorMessage));

        }
    };



    return (
        <>
            <BranchesMenu title="Add Branch" />

            <form onSubmit={handleSubmit}>

                <div className="flex h-full w-full mt-20 items-center justify-center  md:mx-0 md:px-0  lg:items-center lg:justify-center">
                    <div className="w-full max-w-full flex-col items-center lg:pl-0 xl:max-w-[420px] ">
                        <div className="bg-white shadow-md rounded-lg py-20 px-10 w-full">


                            {/* branch name */}
                            <p className="text-md py-1">Name</p>
                            <input
                                type="text"
                                id="branch_name"
                                placeholder="Enter branch name"
                                value={branch_name}
                                // onChange={handleChange}
                                onChange={(e) => setBranchName(e.target.value)}
                                className="mb-3 border rounded px-3 py-2 w-full"
                            />

                            {/* branch status */}
                            <p className="text-md py-1">Status</p>
                            <select
                                id="branch_status"
                                value={branch_status}
                                onChange={(e) => setBranchStatus(Number(e.target.value))}
                                className="mb-3 border rounded px-3 py-2 w-full"
                            >
                                <option value="">Select</option>
                                <option value={1} >Active</option>
                                <option value={0}>Inactive</option>
                            </select>



                            {/* branch name */}
                            <p className="text-md py-1">Address</p>
                            <input
                                type="text"
                                id="branch_address"
                                placeholder="Enter branch address"
                                value={branch_address}
                                // onChange={handleChange}
                                onChange={(e) => setBranchAddress(e.target.value)}
                                className="mb-3 border rounded px-3 py-2 w-full"
                            />


                            <button
                                onClick={handleSubmit}
                                className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                            >
                                Submit
                            </button>

                        </div>
                    </div>
                </div>


                {/* <button type="submit">Login</button> */}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </>

    );
};

export default AddBranch;
