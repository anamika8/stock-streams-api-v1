const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/", function(req, res, next) {
  res.send("API is working properly");
});

router.get("/:id", async function(req, res, next) {
  const stockTwitsURL = `https://api.stocktwits.com/api/2/streams/symbol/${req.params.id}.json`;
  const logErrorMessage = `Encountered the below error while fetching from the url:`;
  let finalResult;
  try {
    console.log(`Calling the stock-twits API: ${stockTwitsURL}`);
    let response = await fetch(stockTwitsURL);
    finalResult = await response.json();
  } catch (error) {
    console.error(`${logErrorMessage} ${stockTwitsURL}`);
    console.error(`ERROR: ${error}`);
    return error;
  }

  return res.send(finalResult);
});

module.exports = router;
