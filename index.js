require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubdata={
    "login": "Linash0807",
  "id": 152461903,
  "node_id": "U_kgDOCRZiTw",
  "avatar_url": "https://avatars.githubusercontent.com/u/152461903?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Linash0807",
  "html_url": "https://github.com/Linash0807",
  "followers_url": "https://api.github.com/users/Linash0807/followers",
  "following_url": "https://api.github.com/users/Linash0807/following{/other_user}",
  "gists_url": "https://api.github.com/users/Linash0807/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Linash0807/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Linash0807/subscriptions",
  "organizations_url": "https://api.github.com/users/Linash0807/orgs",
  "repos_url": "https://api.github.com/users/Linash0807/repos",
  "events_url": "https://api.github.com/users/Linash0807/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Linash0807/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2023-11-30T03:08:58Z",
  "updated_at": "2025-07-03T15:36:11Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api', (req, res) => {
  res.send('Hello from API!')
})

app.get('/yash',(req,res)=>{
    res.send("hi  ra potti")
})

app.get('/github',(req,res)=>{
  res.json(githubdata)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})