import React, {Component} from "react";
import ErrorIndicator from "../errorIndicator/ErrorIndicator";

export default class ErrorBoundry extends Component {
    state = {
        hasError: false,
    };

    componentDidCatch() {
        this.setState({hasError: true});
    }
    render() {
        const {hasError} = this.state;
        if (hasError) {
            return <ErrorIndicator />;
        }
        return this.props.children;
    }
}
