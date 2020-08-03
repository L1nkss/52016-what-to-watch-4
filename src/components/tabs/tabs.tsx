import TabsItem from "./components/tabs-item";
import withActiveItem from "@hocs/with-active-item/with-active-item";

interface ITabs {
  activeTab: string,
  tabs: Array<string>,
  handleTabClick: () => void
}

const Tabs = (props: ITabs) => {
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

export default Tabs;
