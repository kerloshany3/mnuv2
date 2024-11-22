'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

const Result = () => {
    const searchParams = useSearchParams();
    const numSec = searchParams.get('numSec'); // Retrieve the "numSec" query parameter

    return (
        <div className="m-auto justify-center place-items-center flex flex-col">
            <h1 className="font-bungee text-7xl p-4 mt-4 text-slate-900 bg-slate-500 rounded-xl w-6/12 text-center">
                Value from URL: {numSec}
            </h1>
        </div>
    );
};

export default Result;
