import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import TableRow from "./Components/TableRow.js";

const App = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then(function (response) {
        console.log(response);
        setData(response.data);
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Top 10 Cryptocurrencies</h1>
      <br></br>
      <table className="table table-hover table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Image</th>
            <th>Symbol</th>
            <th>Current Price(usd)</th>
            <th>Total Volume</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((coin) => <TableRow key={coin.id} coin={coin} />)}
        </tbody>
      </table>
    </div>
  );
};

export default App;
