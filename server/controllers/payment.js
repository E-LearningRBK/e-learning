const axios = require("axios");
require("dotenv").config();
module.exports = {
  add: async (req, res) => {

    const url = "https://developers.flouci.com/api/generate_payment";
    let {price,id}=req.body
    price=price*1000
    const payload =  {
      "app_token": "bfb456ce-0022-43a8-a417-eff40313bab4",
      "app_secret": "07cf7cc3-2c03-4982-b6e4-c7bc0abd49be",
      "amount": price,
      "accept_card": "true",
      "session_timeout_secs": 1200,
      "success_link":`http://localhost:4200/course/${id}`,
      "fail_link": "https://www.instagram.com/",
      "developer_tracking_id": "5bf726db-ccc9-4c8a-ae41-0558cf138357"
    }
    await axios
    .post(url, payload)
    .then((result) => {
        res.send(result.data);
      })
      .catch((err) => {
        res.send(err);
      });
  },
};
