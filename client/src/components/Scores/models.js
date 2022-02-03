const getScores = async () => {
  try {
    console.log("before fetch", process.env.REACT_APP_API_URL);
    const res = await fetch(`${process.env.REACT_APP_API_URL}/scores`);
    console.log("fetch done");
    const scoresData = await res.json();
    console.log("called getScores", scoresData);
    return scoresData;
  } catch (err) {
    console.error(err.message);
  }
};

export default getScores;
