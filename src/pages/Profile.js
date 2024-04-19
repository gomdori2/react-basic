import React from "react";
import { Link, useParams } from "react-router-dom";

const data = {
  cat: {
    name: "나비",
    description: "키우고싶다",
  },
  dog: {
    name: "뽀삐",
    description: "키울수있을까",
  },
};

const Profile = () => {
  // useParams : URL 파라미터의 값을 조회할 수 있게 해준다.
  const params = useParams();
  const profile = data[params.animals];

  console.log(params);
  return (
    <div>
      <Link to="/">
        <h2>home</h2>
      </Link>
      <h1>동물님 프로필</h1>
      <div>
        {/* 예외 처리 존재하지 않는 데이터 접근 시  */}
        {profile ? (
          <div>
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
          </div>
        ) : (
          <p>존재하지 않는 프로필입니다.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
