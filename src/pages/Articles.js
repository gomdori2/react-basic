import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import ArticleItem from "./ArticleItem";

const items = [
  { id: 1, text: "게시글 1" },
  { id: 2, text: "게시글 2" },
  { id: 3, text: "게시글 3" },
  { id: 4, text: "게시글 4" },
  { id: 5, text: "게시글 5" },
];

const Articles = () => {
  return (
    <div>
      <Layout>
        <div>
          <Outlet />
        </div>
      </Layout>
      <ul>
        {items.map(item => (
          <ArticleItem key={item.id} id={item.id} text={item.text} />
        ))}
      </ul>
    </div>
  );
};

export default Articles;
