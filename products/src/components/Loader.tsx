import React from 'react';

interface LoaderProps {
    minHeight?: string;
}

export default function Loader({ minHeight = '50vh' }: LoaderProps) {
    return (
        <div className="flex items-center justify-center" style={{ minHeight }}>
            <span>Loading...</span>
        </div>
    );
}
