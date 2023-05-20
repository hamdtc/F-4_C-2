import React from "react";

const TableRow = (props) => {
  let { coin } = props;

  return (
    <tr onClick={() => console.log(coin.id)}>
      <td>{coin.name}</td>
      <td>{coin.id}</td>
      <td>
        <img src={coin.image} alt={coin.name} className="image" />
      </td>
      <td>{coin.symbol}</td>
      <td>{coin.current_price}</td>
      <td>{coin.total_volume}</td>
    </tr>
  );
};

export default TableRow;
