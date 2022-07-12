import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo"
import ReactionButtons from "./ReactionButtons";

function PostsList() {
  const posts = useSelector(selectAllPosts);

  // order odf posts
  // sorting posts (localeCompare will return -1, 0, 1 if one is greater than another)
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  // maping over posts
  const renderedPosts = orderedPosts.map((post) => (
    <article className="article" key={post.id}>
      <h3 className="postTitle">{post.title}</h3>
      <p className="postContent">{post.content.substring(0, 200)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));

  // rendering posts
  return (
    <section>
      <h2 >Posts</h2>
      {renderedPosts}
    </section>
  );
}

export default PostsList;
