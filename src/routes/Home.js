import React, { useState } from "react";
import { dbService } from "fbase";

function Home() {
  const [nweet, setNweet] = useState("");
  // submit할 때 마다 document를 생성하도록
  const onSubmit = async (event) => {
    event.preventDefault();
    // document id를 자동으로 부여하면서 document를 add함
    await dbService.collection("nweets").add({
      nweet,
      createdAt: Date.now(),
    });
    setNweet("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };
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
    </div>
  );
}

export default Home;
