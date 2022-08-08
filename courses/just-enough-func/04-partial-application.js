// Partial application
import fetch from 'node-fetch'

const getFromAPI = baseURL => endpoint => cb =>
    fetch(`${baseURL}${endpoint}`)
        .then(res => res.json())
        .then(data => cb(data))
        .then(err => {
            console.error(err)
        })

const getGithub = getFromAPI('https://api.github.com')
const getGithubUsers = getGithub('/users')
const getGithubRepos = getGithub('/repositories')

getGithubUsers(data => {
    const githubUsers = data.map(user => user.login)
    console.log(
        '🚀 ~ file: 04-partial-application.js ~ line 18 ~ githubUsers',
        githubUsers,
    )
})

getGithubRepos(data => {
    const githubRepos = data.map(repo => repo.name)
    console.log(
        '🚀 ~ file: 04-partial-application.js ~ line 18 ~ githubRepos',
        githubRepos,
    )
})

// The main benefit of partial application is our ability to delay the evaluation of a function while still supplying some of the arguments to be stored and reused throughout our application. For the second one, let's log out the user.avatar URLs.
