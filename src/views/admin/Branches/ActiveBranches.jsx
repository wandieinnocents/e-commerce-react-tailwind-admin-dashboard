import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BranchesMenu from './BranchesMenu';

const ActiveBranches = () => {
    return (

        <>
            <BranchesMenu title="Active Branches" />

            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">ActiveBranches</h2>

            </div>
        </>

    );
};

export default ActiveBranches;
