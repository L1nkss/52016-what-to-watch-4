import * as React from "react";

interface ITabsItem {
  className: string,
  name: string,
  cb: (name: string) => void
}

const TabsItem = (props: ITabsItem) => {
  const {name, cb} = props;
  return (
    <li className={props.className} key={name} onClick={() => cb(name)}>
      <a href="#" className="movie-nav__link">{name}</a>
    </li>
  );
};

export default TabsItem;

