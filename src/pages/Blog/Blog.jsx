/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import useFetch from '../../customHook/useFetch';
import { Header, Button } from '../../components';
import './Blog.css';

const Blog = () => {
  const [pageCount, setPageCount] = useState(0);

  const [POSTS, setPosts] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const posts = useFetch(url);
  const calculatePageCount = (Post) => Math.ceil(Post.length / 4);

  const handleClickOnPage = (pageNumber) => {
    setActivePage(pageNumber);
  };
  useEffect(() => {
    if (posts) {
      setPosts(posts.slice(0, 15));
    }
  }, [posts]);

  useEffect(() => {
    if (POSTS) {
      setPageCount(calculatePageCount(POSTS));
    }
  }, [POSTS]);

  return (
    <>
      <Header />
      <div className="blog">
        {!POSTS && 'loading..'}
        {POSTS && (
          <ul>
            {POSTS.slice(4 * (activePage - 1), 4 * activePage).map(
              ({ title, id, body }) => (
                <li key={id}>
                  <h4>{title}</h4>
                  <p>{body}</p>
                  <br />
                </li>
              ),
            )}
          </ul>
        )}

        <div className="pagination">
          {new Array(pageCount).fill(0).map((item, index) => (
            <Button
              key={`button_${index}`}
              handleClick={() => handleClickOnPage(index + 1)}
              className={activePage === index + 1 ? 'activePage' : ''}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;

// class Blog extends React.Component {
//   constructor(props) {
//     super();
//     this.state = {
//       clicked: 0,
//       didMount: false,
//     };
//   }
//   componentDidMount() {
//     console.log("mounted");
//     // setTimeout(() => {
//     //   this.setState((prevstate) => ({ ...prevstate, didMount: true }));
//     //   this.handleClick();
//     // }, 2000);
//   }
//   componentDidUpdate() {
//     console.log("updeated");
//   }
//   componentWillUnmount() {
//     console.log("unmounted");
//   }
//   handleClick = () => {
//     this.setState({ clicked: this.state.clicked + 1 });
//   };
//   render() {
//     const { clicked, didMount } = this.state;
//     return (
//       <div>
//         <h1>Blog class component</h1>
//         <h4>{clicked}</h4>
//         <Button handleClick={this.handleClick}>click</Button>
//         <h1>component did Mount</h1>
//         <h4> is it mounted?{didMount ? "yes" : "no"}</h4>
//       </div>
//     );
//   }
// }
