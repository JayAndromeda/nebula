import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: process.env.GH_AUTH_TOKEN ?? ''
})

console.log(await octokit.request("GET /user"))