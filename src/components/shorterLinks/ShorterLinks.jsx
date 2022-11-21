import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUrl } from '../../app/slice/shorterLinksSlice';
import styles from '../shorterLinks/shorterLinks.module.css';

const ShorterLinks = () => {
  const shortLink = useSelector((state) => state.shorterLinks);
  const dispatch = useDispatch();
  const [url, setUrl] = useState();
  const [error, setError] = useState(true);

  const onChangeHandler = (e) => {
    setUrl(e.target.value);
    setError(true);
  };

  const onSubmithandler = (e) => {
    e.preventDefault();
    dispatch(addUrl(url));
    setUrl('');
  };

  useEffect(() => {
    if (shortLink.error.ok === false) {
      setError(false);
    }
  }, [shortLink]);

  const copyUrl = (url) => {
    navigator.clipboard.writeText(url).then(() => {
      alert('복사완료');
    });
  };

  return (
    <div>
      <form className={styles.fromContainer} onSubmit={onSubmithandler}>
        <input value={url || ''} type="text" onChange={onChangeHandler} placeholder={error === false ? shortLink.error.error : 'Shorten a link here...'} />
        <button>Shorten It!</button>
      </form>
      <ul>
        {shortLink.data.map((data) => {
          return (
            <ul key={data.code}>
              <p>{data.original_link}</p>
              <p>{data.full_short_link}</p>
              <button onClick={() => copyUrl(data.full_short_link)}>Copy</button>
            </ul>
          );
        })}
      </ul>
    </div>
  );
};

export default ShorterLinks;
