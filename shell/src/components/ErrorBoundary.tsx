import React, { ReactNode } from 'react';

interface ErrorProps {
    children: ReactNode;
}

interface ErrorState {
    hasError: boolean;
}

export default class ErrorBoundary extends React.Component<
    ErrorProps,
    ErrorState
> {
    state: ErrorState;

    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(): ErrorState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log('ErrorBoundary error: ', error, errorInfo);
    }

    render(): React.ReactNode {
        if (this.state.hasError) {
            return <p>Something went wrong.</p>;
        }

        return this.props.children;
    }
}
