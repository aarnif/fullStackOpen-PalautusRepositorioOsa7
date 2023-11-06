import { Link } from "react-router-dom";
import NewBlog from "./NewBlog";
import { Container, Card, CardHeader } from "../styles";

const Blogs = ({ blogs }) => {
  const byLikes = (b1, b2) => b2.likes - b1.likes;

  return (
    <>
      <Container>
        {blogs.sort(byLikes).map((blog) => (
          <Card>
            <CardHeader>
              <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
            </CardHeader>
          </Card>
        ))}
      </Container>
      <NewBlog />
    </>
  );
};

export default Blogs;
