import React, { PropsWithChildren, ReactNode } from 'react';

import ErrorBoundary from './ErrorBoundary';

import Header from './Header';
import Footer from './Footer';

interface DefaultLayout {
    aside?: ReactNode;
}

export default function DefaultLayout({
    children,
    aside,
}: PropsWithChildren<DefaultLayout>) {
    return (
        <>
            <Header />
            <main className="p-5">
                {aside && (
                    <aside>
                        <ErrorBoundary>{aside}</ErrorBoundary>
                    </aside>
                )}

                <div className="content">
                    <ErrorBoundary>{children}</ErrorBoundary>
                </div>
            </main>
            <Footer />
        </>
    );
}
