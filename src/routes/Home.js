import React, { useState, useEffect } from "react";
import { dbService } from "fbase";

function Home({ userObj }) {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState("");
  // submit할 때 마다 document를 생성하도록
  const onSubmit = async (event) => {
    event.preventDefault();
    // document id를 자동으로 부여하면서 document를 add함
    await dbService.collection("nweets").add({
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });
    setNweet("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };
  const getNweets = async () => {
    // get()을 통해 해당 collection을 가져옴
    const dbNweets = await dbService.collection("nweets").get();
    dbNweets.forEach((document) => {
      const nweetObject = {
        ...document.data(),
        id: document.id,
      };
      setNweets((prev) => [nweetObject, ...prev]);
    });
  };

  useEffect(() => {
    getNweets();
  }, []);
  console.log(nweets);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>
      <div>
        {nweets &&
          nweets.map((nweet) => (
            <div key={nweet.id}>
              <h4>{nweet.nweet}</h4>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
