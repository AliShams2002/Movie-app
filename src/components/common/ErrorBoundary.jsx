import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-[#0a0a0a] text-white min-h-screen flex items-center justify-center p-6">
          <div className="text-center max-w-md">
            <h1 className="text-3xl font-bold mb-4">
              Oops! Something went wrong.
            </h1>
            <p className="text-white/60 mb-6">
              {this.state.error?.message || "Unexpected error"}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg duration-150"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
