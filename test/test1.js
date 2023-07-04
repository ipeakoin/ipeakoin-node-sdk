const Client = require("../dist")

const client = new Client('ipeakoin1ab59eccfbc78d1b', '93fc39d77ef6a3a7b5f26b83fbbebe81', 'http://127.0.0.1:3000');

(async ()=> {
    try {
        const res = await client.v1.getAccounts({
            accessToken: "6f6d64aab7e168570847d0f4ca13b5e9c06fd85f",
          });
          console.log(res)
    } catch (error) {
        console.log(error?.errorMessage)
        
    }
})()