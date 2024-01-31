import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = { hasError: false }

   static getDerivedStateFromError(error){
    return {hasError: true};
   }
    render() {
       if(this.state.hasError){
           return this.props.fallback;
       }
       return this.props.children;
    }
}

ErrorBoundary.propTypes = {};

export default ErrorBoundary;
