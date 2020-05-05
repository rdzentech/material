# material
This is for the material series

Documentation below is for CLI version 6 and we no longer accept PRs to improve this. For version 7 see here.

Deploy to GitHub Pages
A simple way to deploy your Angular app is to use GitHub Pages.

The first step is to create a GitHub account, and then create a repository for your project. Make a note of the user name and project name in GitHub.

Then all you need to do is run ng build --prod --output-path docs --base-href PROJECT_NAME, where PROJECT_NAME is the name of your project in GitHub. Make a copy of docs/index.html and name it docs/404.html.

Commit your changes and push. On the GitHub project page, configure it to publish from the docs folder.

And that's all you need to do! Now you can see your page at https://USER_NAME.github.io/PROJECT_NAME/.

You can also use angular-cli-ghpages, a full featured package that does this all this for you and has extra functionality. All you need is a single command:

ngh --dir=dist/docs
It takes care of pushing to the gh-pages branch and copying your index.html to 404.html.
