import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BranchesMenu from './BranchesMenu';

const InActiveBranches = () => {
    return (

        <>
            <BranchesMenu title="Inactive Branches" />

            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">InActiveBranches</h2>

            </div>
        </>

    );
};

export default InActiveBranches;
