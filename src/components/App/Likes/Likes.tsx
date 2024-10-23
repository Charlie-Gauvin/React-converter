import { useState } from 'react';

function Likes() {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    // console.log('CLICKED!');
    setLikes((current) => current + 1);
  };

  return (
    <aside>
      <button onClick={handleClick} type="button">
        Likes : {likes}
      </button>
    </aside>
  );
}
export default Likes;
