# 9. axios_1

- `yarn add axios`

- get 메서드

# 9.1. axios 로 API 호출해서 데이터 받아오기

- [axios](https://axios-http.com/kr)
- [가라데이터](https://jsonplaceholder.typicode.com/)

```js
import axios from "axios";
import React, { useState } from "react";

const Axios = () => {
  const [data, setData] = useState(null);
  const onClick = () => {
    console.log("sdfasfd");
    // axios.get 함수는 파라미터로 전달된 주소에 GET 요청을 해준다.
    // 그리고 이에 대한 결과는 .then을 통해 비동기적으로 확인할 수 있다.
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const jsonData = data.map((item, index) => (
    <textarea key={index} value={JSON.stringify(item, null, 2)} />
  ));
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
      <div>{jsonData}</div>
    </div>
  );
};

export default Axios;
```

- async / await 적용

```js
import axios from "axios";
import React, { useState } from "react";

const Axios = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1/comments",
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
```

# 9.2. newsapi API 키 발급 받기
