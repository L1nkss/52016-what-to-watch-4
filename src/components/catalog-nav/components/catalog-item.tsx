import * as React from "react";

interface ICatalogItem {
 className: string,
 cb: (evt: React.MouseEvent, name: string) => void,
 name: string
}

const CatalogItem = (props: ICatalogItem) => {
  const {cb, name} = props;
  return (
    <li onClick={(evt) => cb(evt, name)} className={props.className}>
      <a href="#" className="catalog__genres-link">{name}</a>
    </li>
  );
};

export default CatalogItem;
