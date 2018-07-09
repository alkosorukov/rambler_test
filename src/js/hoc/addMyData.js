import React, {PureComponent} from "react";

export function addMyData(WrappedComponent) {

    return class extends PureComponent {
      render() {
        return <WrappedComponent {...this.props} />;
      }
    };
   }