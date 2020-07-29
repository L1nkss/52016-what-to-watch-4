import * as React from "react";

interface IWithActiveItem {
  active: string,
  name: string
  cb?: (evt: React.MouseEvent, name: string) => void,
}


const withActiveItem = (Compoment, className) => {
  class WithActiveItem extends React.Component<IWithActiveItem> {
    getClass() {
      const {active, name} = this.props;
      let itemClass = className;
      if (active === name) {
        itemClass += ` ${className}--active`;
      }
      return itemClass;
    }
    render() {
      const itemClass = this.getClass();
      return (
        <Compoment {...this.props} className={itemClass}/>
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
