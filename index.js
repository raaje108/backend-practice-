const express =require('express')
require('dotenv').config()
const app=express()
const port=3000

const githubdata={
  "login": "raaje108",
  "id": 105787105,
  "node_id": "U_kgDOBk4u4Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/105787105?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/raaje108",
  "html_url": "https://github.com/raaje108",
  "followers_url": "https://api.github.com/users/raaje108/followers",
  "following_url": "https://api.github.com/users/raaje108/following{/other_user}",
  "gists_url": "https://api.github.com/users/raaje108/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/raaje108/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/raaje108/subscriptions",
  "organizations_url": "https://api.github.com/users/raaje108/orgs",
  "repos_url": "https://api.github.com/users/raaje108/repos",
  "events_url": "https://api.github.com/users/raaje108/events{/privacy}",
  "received_events_url": "https://api.github.com/users/raaje108/received_events",
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
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2022-05-18T10:36:19Z",
  "updated_at": "2026-03-02T11:32:24Z"
}

app.get('/',(req,res)=>{
    res.send('hello')
})

app.get('/keshav',(req,res)=>{
    res.send('he is best')
})

app.get('/github',(req,res)=>{
    res.json(githubdata)
})

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${port}`)
})

