import TabsItem from "./components/tabs-item";
import withActiveItem from "@hocs/with-active-item/with-active-item";
import * as React from "react";


const Tabs = (props) => {
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {props.tabs.map((tab) => {
          const TabItemWrapper = withActiveItem(TabsItem, `movie-nav__item`);
          return <TabItemWrapper key={tab} name={tab} active={props.activeTab} cb={props.handleTabClick} />;
        })}
      </ul>
    </nav>
  );
};

// Tabs.propTypes = {
//   tabs: propTypes.arrayOf(propTypes.string).isRequired,
//   handleTabClick: propTypes.func.isRequired,
//   activeTab: propTypes.string.isRequired
// };

export default Tabs;
