const sh = require("shelljs")
const fs = require("fs")
const url = require("url")

let repoUrl: string
let $ = JSON.parse(fs.readFileSync("package.json") as any)
if (typeof $.pkg.repository === "object") {
  if (!$.pkg.repository.hasOwnProperty("url")) {
    throw new Error("URL does not exist in repository section")
  }
  repoUrl = $.pkg.repository.url
} else {
  repoUrl = $.pkg.repository
}

let parsedUrl = url.parse(repoUrl)
let repository = (parsedUrl.host || "") + (parsedUrl.path || "")
let ghToken = process.env.GH_TOKEN

sh.echo("Deploying docs!!!")
sh.cd("docs")
sh.touch(".nojekyll")
sh.exec("git init")
sh.exec("git add .")
sh.exec('git config user.name "Nicholas Gentile"')
sh.exec('git config user.email "8gentile@gmail.com"')
sh.exec('git commit -m "docs(docs): update gh-pages"')
sh.exec(
  `git push --force --quiet "https://${ghToken}@${repository}" master:gh-pages`
)
sh.echo("Docs deployed!!")
