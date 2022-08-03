import "./ItemListContainer.css";


import ItemList from '../ItemList/ItemList'

export default function ItemListContainer({ greeting }) {


  return (
    <div className="ItemListContainer">
      <h2 className="greeting">{greeting}</h2>
      <div className="containerProducts">


        <ItemList />



      </div>
    </div>
  );
}
