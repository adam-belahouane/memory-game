const numToString = (playerNum, multiUsers) => {
  if (playerNum === 1) {
    return multiUsers.first;
  } else if (playerNum === 2) {
    return multiUsers.second;
  } else if (playerNum === 3) {
    return multiUsers.third;
  } else {
    return multiUsers.fourth;
  }
};

export default numToString;
