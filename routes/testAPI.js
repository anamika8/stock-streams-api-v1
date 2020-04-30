const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/", function(req, res, next) {
  res.send("API is working properly");
});

router.get("/:id", async function(req, res, next) {
  const stockTwitsURL = `https://api.stocktwits.com/api/2/streams/symbol/${req.params.id}.json`;
  //const stockTwitsURL = `https://api.stocktwits.com/api/2/streams/symbols.json?access_token=7a7fa6192e7a4a2c25e091c4acebc573556aced9&symbols=${req.params.id}`;
  const logErrorMessage = `Encountered the below error while fetching from the url:`;
  let finalResult = undefined;
  try {
    console.log(`Calling the stock-twits API: ${stockTwitsURL}`);
    let response = await fetch(stockTwitsURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors"
    });
    console.log(response);
    finalResult = await response.json();
  } catch (error) {
    console.error(`${logErrorMessage} ${stockTwitsURL}`);
    console.error(`ERROR: ${error}`);
    return error;
  }

  return res.send(finalResult);
});

module.exports = router;
