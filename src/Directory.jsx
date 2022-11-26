import { useState } from "react";

const Directory = ({ Data }) => {
  const [isExpand, setIsExpand] = useState(false);
  const handleClick = () => {
    setIsExpand(!isExpand);
    console.log(isExpand);
  };
  if (Data.type === "folder") {
    return (
      <div>
        <span onClick={handleClick}>
          <b>{Data.name}</b>
          <br />
        </span>
        <div style={{ display: isExpand ? "block" : "none", paddingLeft: 15 }}>
          {Data.items.map((file) => {
            return <Directory Data={file} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <span>
        {Data.name}
        <br />
      </span>
    );
  }
};

export default Directory;
