import axios from "axios";
import React, { useState } from "react";

const Axios = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2024-03-25&sortBy=publishedAt&apiKey=7836c05fb64f4e918bfaab84663d3250",
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>axios</h2>
      <div>
        <button onClick={onClick}>불러와요</button>
      </div>
      {data && (
        <textarea
          rows={7}
          readOnly={true}
          value={JSON.stringify(data, null, 2)}
        />
      )}
      <div></div>
    </div>
  );
};

export default Axios;
