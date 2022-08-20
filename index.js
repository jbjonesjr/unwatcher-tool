
// use octokit to iterate over all my github subscriptions

// instantiate octokit.js
const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
    userAgent: 'jbjonesjr-github-subscriptions-manager',
    baseUrl: 'https://api.github.com'
});

octokit.re

