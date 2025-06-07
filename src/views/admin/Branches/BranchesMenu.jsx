import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BranchesMenu = ({title}) => {
    

    return (
        <>
            {/* page buttons section  */}
            <div className="flex flex-col md:flex-row gap-1 md:gap-4 bg-blue-100">
                <div className="w-full md:w-1/3 text-center md:text-start  p-4 rounded text-2xl font-bold">{title}</div>

                <div className="w-full md:w-2/3  rounded">
                    <div className="flex flex-wrap gap-4 p-4 rounded-lg justify-center md:justify-end">
                        <Link to="/admin/branches/add" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                            Add Branch
                        </Link>

                        <Link to="/admin/branches" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                            All Branches
                        </Link>

                        <Link to="/admin/branches/active" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                            Active
                        </Link>

                        <Link to="/admin/branches/in-active" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                            In Active
                        </Link>

                    </div>
                </div>
            </div>
        </>
    );

};

export default BranchesMenu;
