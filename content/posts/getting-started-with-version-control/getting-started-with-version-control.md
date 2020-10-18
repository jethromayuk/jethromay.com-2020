---
title: "Getting Started With Version Control"
description: "One of the fundamental topics that every developer needs to learn is version control and how to work with a codebase which could be updating and changing over time."
date: 2020-10-18T10:44:56+02:00
slug: getting-started-with-version-control
---

One of the fundamental topics that every developer needs to learn is version control and how to work with a codebase which could be updating and changing over time.

A version control system allows multiple people to work on a single project at the same time. Each person will have a copy of a project running on their computer, allowing them to make changes which won't affect the rest of the team. Once complete, the developer will be able to submit or push these updates to the version control system and ultimately merge their changes into the main project. The rest of the team will then have access to these new changes by pulling them down into their version of the project on their computers.

Each change will have a timestamp as well as information about who made that change, usually the developer's name and email address.

There are various types of version control systems, such as Git, Mercurial and many more. In this tutorial, we will be covering the basics of version control using Git utilizing a platform called GitHub.

## What is Git?

Git is a version control system used for tracking changes in a codebase during development. The purpose of Git is to coordinate changes among developers; it can, however, track changes in any set of files.

## What is GitHub?

GitHub is a Git repository hosting platform that allows developers to store their code which can be publically visible or private from the rest of the world. It keeps track of the various changes made to each of your projects and presents itself in an intuitive and easy to use interface. It is free to use but also offers a premium plan. Read more about their features [here](https://github.com/features).

## First Steps:

The easiest way to get started is by creating an account on GitHub at the [following link](https://github.com/join). Once you have created an account and you have logged in, you will be able to start creating repositories used to store your code. The home page will contain a feed which will display recent activity on repositories from people you follow on GitHub, so at first, you will not see anything here.

We are now ready to create our first repository! To do this, click on the + symbol in the top right of the screen, which will provide you with a few options, 'New repository', 'Import repository', 'New gist', 'New organization' and lastly 'New project'.

{{< figure src="new-repository.png" alt="GitHub dropdown used to create a new repository" caption="Select 'New repository' to create a new repository" >}}

All repositories require a unique name on your account, along with an optional description. You can control who can see and interact with this repository by setting the visibility to public or private. Additionally, you may choose to include a `README.md` file, a `.gitignore` file and a `LICENSE.md` file, for now, we will not add either of these additional files.

{{< figure src="create-repository.png" alt="Create a new GitHub repository" caption="Create a new GitHub repository" >}}

Once you have filled in the required information, click on 'Create repository' and you will be good to go!

## Setup:

There are two primary ways of interacting with a repository on GitHub, using the [desktop app](https://desktop.github.com/) and by using the command line. This guide will cover using the command line, as well as using GitHub's [new CLI tool](https://cli.github.com/) but feel free to use the desktop application or another GUI (Graphical User Interface) if you are more comfortable with a visual representation of the process.

> To interact with Git via the command line, you will need to have Git installed on your machine. Git comes preinstalled on Mac, however, on Windows it does not. If you are on Windows, please follow [this guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to install Git on your machine.

The GitHub CLI (Command Line Interface) allows you to easily interact directly with your repositories and even the GitHub API (Application Programming Interface.) It's worth noting that you don't have to use this CLI tool if you choose to work with the command line, you can still work with Git without it.

For us to use this new CLI tool, we will install it with instructions found at the following [link](https://github.com/cli/cli).

Once installed, open up a terminal window if you don't already have one open and the last step to take is to authenticate with our GitHub account. We do this by typing the following:

```
gh auth login
```

All interactions with the GitHub CLI start with 'gh' followed by the command. A full list of the currently available commands is available here.

Follow the prompts which will allow you to log in via the browser and type in a code. Once you have successfully logged in, it will ask you to select your default git protocol which will be either https or ssh. We won't be covering how to setup ssh keys, selecting https will be the final step in our setup.

## Cloning Our Repo:

Cloning the GitHub repository is quite simple, we will use the following command in our terminal:

```
gh repo clone <repository> <directory>
```

Replace <repository> with the full URL to your GitHub repository and replace <directory> with the name of the folder you would like to store this code. (Don't include the left/right chevron symbols.)

Alternatively, if you run the command inside a folder that you have already created you can omit the directory and instead use a period:

```
gh repo clone <repository> .
```

We are now ready to start adding and removing files from our repository.

## Pushing and Pulling Changes:

Once you have successfully cloned a repository, you will now be able to push code changes as well as pull updates onto your locally running version of the project. At the time of writing this article, there are no commands in the CLI which will allow you to push or pull code, so we will use standard git commands to do that.

Open the project in any code editor of your choice and create a new file, for example, `index.html`. Once you have added a new file, you will be ready to push this new file to your repository.

Before pushing new changes, you must ensure that you have all of the repositories files in your local version of the project. Assuming you are using the default GitHub branch name, you will run the following command in your terminal:

```
git pull
```

or

```
git pull origin main
```

Once you have pulled down any changes, you will be ready to add your files to a commit and push them to the repository. We can do this by running the following commands:

```
git add index.html
git commit -m "Initial commit"
```

The first command will add the `index.html` file to your commit, and the second command will commit your file with a message. The '-m' option indicates what your commit message is, followed by the actual message. If you have a lot of changes, you can omit the 'git add' step and run the following command:

```
git commit -a -m "Initial commit"
```

This command will add all of your new changes to the commit.

Our last step is to push the code!

Once you are happy with your commit and message, run the following command to push code to your GitHub repository:

```
git push
```

If you have followed each step correctly, you will now be able to see your newly changed files in your GitHub repository. If you have chosen this repository to be publically visible, send the link to your friends and they will now be able to pull down your code from this repository.

## Conclusion:

We have only scratched the surface of what can be achieved with version control, covering the basics of what Git is, how to create a repository on GitHub, how to setup GitHub's new CLI tool, cloning a repository, pulling code and pushing newly created files.

There are many different aspects of Git that we did not cover, a few of them are:

1. Branches
2. Merging vs Rebasing
3. Resetting, Checking Out, Reverting
4. Git Log
5. Hooks

If you would like this to become a series in which we cover various other topics, let me know via Twitter!
