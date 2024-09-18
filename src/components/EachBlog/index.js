import "./styles.css";

const EachBlog = (props) => {
  const { item,delition } = props;
  const { title, body, id } = item;

  const deleteData = () => {
    delition(id)
  }

  return (
    <div className="main">
      <h3>{title}</h3>
      <p>{body}</p>
      <div className='but1'>
        <button type='Button'>Edit</button>
        <button type='Button' onClick={deleteData}>Delete</button>
      </div>
    </div>
  );
};

export default EachBlog;
