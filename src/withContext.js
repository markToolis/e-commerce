import React from 'react'
import Context from ".Context"

const withContext = WrappedComponent => {
    const WithHOC = props => {
        return (
            <Context.Constomer>
                {context => <WrappedComponent {...props} context={context}/>}
            </Context.Constomer>
        );
    };
    return WithHOC;
}

export default withContext;

// all it does is make a higher-order component, which appends our context to a wrapped component’s props
// but I don't andestend this 