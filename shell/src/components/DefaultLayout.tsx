import React, { ReactChildren, FunctionComponent, PropsWithChildren, ReactNode } from "react";

import Header from './Header';
import Footer from './Footer';

interface DefaultLayout {
    aside?: ReactNode
}

export default function DefaultLayout ({ children, aside }: PropsWithChildren<DefaultLayout>) {
    return (
        <>
            <Header />
                <main className="p-5">
                    {
                        aside && (
                            <aside>
                                { aside }
                            </aside>
                        )
                    }
                    <div className="content">
                        { children }
                    </div>
                </main>
            <Footer />
        </>
    );
}