import { Component, type ReactNode } from "react";


export class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
    constructor(props: any) {
        super(props);

        this.state = { hasError: false };
    }

    componentDidCatch(): void {
        this.setState({ hasError: true });
    }

    render(): ReactNode {
        if (this.state.hasError)
            return (
                <div className="text-center mt-10 text-red-400">
                    Something went wrong;
                </div>
            );
        return this.props.children;
    }
}