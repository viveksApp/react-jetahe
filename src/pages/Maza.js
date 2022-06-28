import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
//https://www.cluemediator.com/load-more-pagination-in-react
function Maza() {
  const perPage = 3;
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUserList = () => {
      setLoading(true);
      //https://reqres.in/api/users?per_page=${perPage}&page=${page}
      fetch(`https://mistword.com/mistbox/allprofile/${page}`)
        .then((res) => res.json())
        .then((res) => {
          //setTotalPages(res.total_pages);
          setTotalPages(8);
          setUserList([...userList, ...res.data]);
          setLoading(false);
        });
    };
    getUserList();
  }, [page]);

  return (
    <div className="App">
      {userList.map((x, i) => {
        return (
          <div key={i} className="box">
            <img src="" />
            <div className="name">{x.woName}</div>
            <div className="email">{x.woProfileId}</div>
            <Link
              to={`/details/${x.woProfileId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Home
            </Link>
          </div>
        );
      })}
      <div className="clearfix"></div>
      {totalPages !== page && (
        <button className="btn-load-more" onClick={() => setPage(page + 1)}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
}

export default Maza;
