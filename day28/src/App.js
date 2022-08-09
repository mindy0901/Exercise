import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillDelete, AiFillEdit, AiFillLike, AiOutlineComment } from "react-icons/ai";
import './App.css';
import { addPost, deletePost, editPost } from './redux/reducers/postSlice';

function App() {
      const { posts } = useSelector((state) => state.postSlice);
      const [form, setForm] = useState("");
      const [editToggle, setEditToggle] = useState(false);
      const [postIndex, setPostIndex] = useState(0)
      const dispatch = useDispatch();
      let datetime = new Date().toLocaleString();

      const handleAddPost = (e) => {
            e.preventDefault();
            dispatch(addPost(form))
            setForm("")
      }

      const handleSetForm = (e) => {
            setForm(e.target.value);
      }

      const handleEdit = (i, content) => {
            setForm(content)
            setPostIndex(i);
            setEditToggle(true);
      }

      const handleSaveEdit = (account) => {
            dispatch(editPost({ form, account }))
            setEditToggle(false)
      }

      return (
            <div className="app">
                  <div className="form">
                        <form className="form__container">
                              <textarea
                                    cols="60"
                                    maxLength={250}
                                    value={form}
                                    placeholder='Tweet something ...'
                                    onChange={(e) => handleSetForm(e)}
                              ></textarea>
                              <button onClick={(e) => handleAddPost(e)}
                              >Add post</button>
                        </form>
                  </div>
                  <div className="posts" >
                        <div className="posts__container">
                              {posts.length === 0 && <div>No Posts</div>}
                              {posts.map((post, index) => (
                                    editToggle && index === postIndex
                                          ? <div className='post__edit' key={index} >
                                                <form className="form__container">
                                                      <textarea
                                                            cols="60"
                                                            placeholder='Tweet something ...'
                                                            onChange={(e) => handleSetForm(e)}
                                                            value={form}
                                                      ></textarea>
                                                </form>
                                                <button onClick={() => handleSaveEdit(post.account)}>Save</button>
                                                <button onClick={() => setEditToggle(false)}>Cancel</button>
                                          </div>
                                          : <div div className="post" key={index}>
                                                <div className="post__name">
                                                      <span>{post.name}</span>
                                                      <span>{post.account}</span>
                                                </div>
                                                <div className="post__content">
                                                      <span>{post.content}</span>
                                                </div>
                                                <div className="post__more">
                                                      <div className="more__edit">
                                                            <AiFillEdit
                                                                  onClick={() => handleEdit(index, post.content)}
                                                                  color="#92d0f0" fontSize={24} />
                                                            <AiFillDelete
                                                                  onClick={() => dispatch(deletePost(index))}
                                                                  color="#92d0f0" fontSize={24} />
                                                      </div>
                                                      <div className="more__comment">
                                                            <AiOutlineComment color="#333" fontSize={24} />
                                                            <AiFillLike color="#333" fontSize={24} />
                                                      </div>
                                                      <div className="more__time">
                                                            {datetime}
                                                      </div>
                                                </div>
                                          </div>
                              ))}
                        </div>
                  </div>
            </div>
      )
}

export default App;
