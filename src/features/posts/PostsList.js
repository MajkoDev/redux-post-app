import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";

function PostsList() {
  const posts = useSelector(selectAllPosts);

  // maping over posts
  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 200)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.user} />
      </p>

    </article>
  ));

  // rendering posts
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
}

export default PostsList;
