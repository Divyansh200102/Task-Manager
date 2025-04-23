//Develop task creation modal

const PostCreate = ({ onCreatePost }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [progress, setProgress] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post(`http://${posts_host}/posts/create`, { title })
      .catch((error) => {
        console.log(error);
      });
    onCreatePost && onCreatePost();
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <label>Description</label>
          <input
            value={title}
            onChange={(event) => setDescription(event.target.value)}
          />

          <label>Progress</label>
          <input
            value={title}
            onChange={(event) => setProgress(event.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
export default PostCreate;
