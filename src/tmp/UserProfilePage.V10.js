import { useParams } from "react-router-dom";

function UserProfilePage() {
  // Error: Objects are not valid as a React child (found: object with keys {username}). If you meant to render a collection of children, use an array instead.
  // const username = useParams();

  // {Desestructurar} useParams() Object  get param value
  const { username } = useParams();
  // req.params =.../profile / :username

  return (
    <div>
      <h1>UserProfile : {username} Page</h1>
    </div>
  );
}

export default UserProfilePage;
