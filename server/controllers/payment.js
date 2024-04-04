const axios = require("axios");
require("dotenv").config();
module.exports = {
  add: async (req, res) => {
    const url = "https://developers.flouci.com/api/generate_payment";
    const payload = {
      "app_token": "bfb456ce-0022-43a8-a417-eff40313bab4",
      "app_secret": "bcd5c06c-cbfe-4f6c-856f-999bb565d676",
      "amount": 3444,
      "accept_card": "true",
      "session_timeout_secs": 1200,
      "success_link": "https://www.facebook.com/",
      "fail_link": "https://www.instagram.com/",
      "developer_tracking_id": "5bf726db-ccc9-4c8a-ae41-0558cf138357"
      
    }
    await axios
      .post(url, payload)
      .then((result) => {
        res.send(result.data);
      })
      .catch((err) => {
        console.log('test');
        res.send(err);
      });
  },
};
