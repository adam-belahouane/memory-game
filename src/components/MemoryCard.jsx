import { useEffect, useState } from "react";
import getFontAwesomeIcon from "../tools/number-to-icon";

const MemoryCard = ({
  num,
  arrOfC,
  setIsSame,
  isSame,
  setArrayOfCorrect,
  isSmall,
  isNumbers,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleIsSame = () => {
    setIsSelected(true);
    setTimeout(() => {
      if (isSame === 0) {
        setIsSame(num);
      } else {
        if (isSame === num) {
          setArrayOfCorrect([...arrOfC, num]);
          setIsSame(0);
        } else {
          setIsSame(0);
          setIsSelected(false);
        }
      }
    }, 200);
  };

  useEffect(() => {
    if (isSame === 0) setIsSelected(false);
  }, [isSame]);
  return (
    <>
      {arrOfC.includes(num) ? (
        <div
          className={
            isSmall ? "memory-card correct" : "memory-card small correct"
          }
        >
          {getFontAwesomeIcon(num, isNumbers)}
        </div>
      ) : /**isSame === num && **/ isSelected ? (
        <div
          className={
            isSmall ? "memory-card selected" : "memory-card small selected"
          }
        >
          {getFontAwesomeIcon(num, isNumbers)}
        </div>
      ) : (
        <div
          className={isSmall ? "memory-card" : "memory-card small"}
          onClick={handleIsSame}
        ></div>
      )}
    </>
  );
};

export default MemoryCard;
