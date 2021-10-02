import React from 'react'

const hoc = WrappedComponent => {
  class HOC extends React.Component {
    constructor(props){
      super(props);
        
      this.state= {
        isOpen: false
      }
    }
    
    changeData = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
      let { isOpen } = this.state;
      return (
        <WrappedComponent
          isOpen={isOpen}
          changeData={this.changeData}
          {...this.props}
        />
      );
    }
  }

  HOC.displayName = `ListItem(${WrappedComponent.name})`;
  return HOC;
}

export default hoc;