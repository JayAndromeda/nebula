import { Octokit } from "octokit";
import * as dotenv from 'dotenv'

dotenv.config()

const octokit = new Octokit({
    auth: process.env.GH_AUTH_TOKEN ?? ''
})

console.log(await octokit.request("GET /user"))