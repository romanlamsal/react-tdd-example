# React-TDD-Example

This repository contains code produce during a live coding session with the topic 
"React and Test-Driven Development/Design".

## Goal

To demonstrate how a GUI can be built with React in a test-driven fashion, I set the goal to develop a single-page app
where a list of books was shown. The list could be filtered by keywords with a simple input field, also the books from 
the list should be viewable in detail.

Due to the restricted time, only the listing of the books is more or less finished, with a component issuing an (pseudo)
API call towards a backend.

## What's inside

* ./typescript: Actual implementation we did during the coding session. Check the git log to see where we started
* ./javascript: Only the base for what could have been implemented. We decided to go for Typescript, so there is nothing
fancy to find
* ./bookserver: super simple express-App which exposes an api to fetch about 100 books (`/books`) and an API to fetch
an UML diagram of the book entity (`/uml`)