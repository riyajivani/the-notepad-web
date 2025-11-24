import { Component } from "react";
import Error from "./Error";

export class ErrorBoundary extends Component{
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorInfo: error.message };
  }

  render() {
    if (this.state.hasError) {
      return <Error path={this.props.path} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
