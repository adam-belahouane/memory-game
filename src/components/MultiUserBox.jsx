import { useEffect, useState } from "react";
import numToString from "../tools/numbertoString";

const MultiUserBox = ({
  playerNum,
  multiUsers,
  dispatchMulti,
  userPlaying,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (userPlaying === playerNum) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [userPlaying]);
  return (
    <div className="user-div-con">
      {isPlaying?<div className="triangle"></div>:<div className="triangle white"></div>}
      <div className={isPlaying ? "playing user-div" : "user-div"}>
        {isSmallScreen?<h3 style={isPlaying?{"color": "white"}:{}}>P{playerNum}</h3>: <h3 style={isPlaying?{"color": "white"}:{}}>Player {playerNum}</h3> }
        <div style={isPlaying?{"color": "white"}:{}}>{numToString(playerNum, multiUsers)}</div>
      </div>
    </div>
  );
};

export default MultiUserBox;
