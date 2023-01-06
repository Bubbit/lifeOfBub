---
layout: layouts/blog.njk
title: How I review
published: true
description: My 3 ways of reviewing pull requests
tags: [codereview, way of working, opinion]
cover_image: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cygfh03qofia9tqsmbbr.jpg
---

In my day to day life as a programmer, one of the main things I run into are pull requests. Either I made them myself and am waiting for a review, or I am asked to review a pull request from a colleague.

A pull request is a method of working within the coding community to get your peers to review, and ultimately approve your code contributions and merge them into the main branch.

In this blog post I want to share my three ways of reviewing pull requests and some general remarks that apply to all three approaches.

General remarks
- Don't be afraid to ask questions if something is unclear.
- Pull requests (PR's) should have a short life. PR's that are open for too long will go out of sync in an active code base and create more and more work.
- Repeating yourself in a review, ie. commenting the same thing on a repeating factor, can be seen as negative. Try to keep it to one remark that includes the other cases.
- All automated tests should pass in any situation and need to be added if applicable.

## Open source reviewing
A few years ago I was attending a presentation by [Pieter Hintjens](https://www.youtube.com/watch?v=uzxcILudFWM&ab_channel=DomCode) regarding managing Open Source communities. One of the things that I remember from this talk was his view on how to handle pull requests within such a community and what 'joy' it sparks for a contributor to get their pull requests merged quickly. His way of reviewing was to not really review it, just merge and see later if it works. If it breaks revert it or fix it yourself.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ne9lat7v5keh8b9jgjme.gif)

Back then, my initial reaction was this is never going to work in the projects I work on. However over the years I have started to develop my own way of reviewing pull requests, and I have to say that his approach does work within some projects I have worked on, Open Source and internal ones.

## Intense reviewing
This is the most 'nit-picky' way of reviewing a pull request. Intense reviewing is used within our team at work to uphold strict styling, test coverage and a way of writing code in order to keep our code base synced across multiple repositories.
During this kind of reviewing process you go file by file and check if there are (CI system should indicate) any issues regarding leftover `console.logs`, missing semicolons and more importantly, stuff that is hard to detect for 'linting' tooling, typo's, missing comments if necessary etc.

These kinds of issues of course do not need a long comment. In our team we sometimes just resort into using either an emoji or just a `?`. Make sure that you only do this if you know it is not perceived as a 'bad comment' else it can have a negative effect.

The next step of this review process is to really understand why certain decisions are made, especially if you think you would have solved this issue with solution A, but solution B was chosen.
Here are two ways of commenting on this kind of topic:
The telling way: 'I think solution A is way better' or (in my opinion) the better, questioning way: 'Why did you choose solution B here?'.
If you are not satisfied with the reasoning, you can go in to a more detailed questioning, e.g. 'Do you think solution A would be better?' Keeping it as a question should spark a discussion and hopefully you both learn something out of it, in the end it does not matter which solution is chosen.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8qflerb05gg9u5vljroj.gif)

The aim of a review process like this is to completely understand the reasoning of how and why this code change has been done,  especially to make sure their are no [broken windows](https://www.artima.com/articles/dont-live-with-broken-windows) in the code base you and your team are responsible for.

Another benefit when using a review style like this with newer developers is that they have a 'safety net' while coding, which means that they should feel like they can try things, won't break anything and also learn and improve themselves.

## Quality driven reviewing
Quality driven reviewing is a way of PR reviewing if something is currently required, but in the long run is not going to be there. e.g. something that is required for a short migration period, this is the middle ground of the three types of reviewing.
Sometimes your team needs to release a feature that is temporary (yes I know, most things temporary in a code base are still there four years later) or under a very tight deadline. 

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x1ydkyrgd56a9muc534j.gif)

Deadlines or temporary solutions are never an argument for bad code. The intense way of reviewing normally takes a bit more time and sometimes could be a waste at that moment due to the duration the code will live in the code base, or take too long for a deadline that needs to be met. During this way of reviewing you check if the code is correct and does not break anything else. Even if you think that solution A should be replaced with solution B as it's 'better' or 'more in style' this can be skipped unless it is necessary for performance/stability. 

Just to be sure, only pick this method of reviewing if you cannot do the intense way of reviewing, it is doing the bare minimum, but sometimes that can be enough.

Do you have other ways of reviewing or do you have any remarks regarding the ones I have mentioned here? Let me know!
Also do you sometimes do the fourth option of reviewing, namely even if you know it's broken, not in style etc, just merge it and fix it afterwards as you're 'done' with commenting?