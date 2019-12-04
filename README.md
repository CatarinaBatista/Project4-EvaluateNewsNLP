# Project 4 - Evaluate News with NLP from Front End Developer Nanodegree

## Table of Contents
* [About](#about)
* [API used](#api-used)
* [Get Started](#get-started)


## About
This project aims to interpret and analyze a text that the user has entered through a URL and has as a result of the polarity, subjectivity, the confidence of both and the analyzed text.

It is a _web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites._


## API used
The [Aylien API](https://aylien.com/) is a new Text Analysis API of Natural Language Processing (NLP) where you can send a link or a text to the API and the API will analyse the text and respond with information from textual content.


## Get Started
1. Download files or clone the repository
2. Install all dependencies
    * put `npm install` on the terminal
3. Add dist folder
    * `npm run prod` on the terminal
4. For use Aylien API you must signing up to get an API key
    * Create a `.env` file that contain your `API_ID` and your `API_KEY`
5. For start the server you should run that command in the terminal: `npm start`
    * The server should start on http://localhost:8000/ on your browser
6. Use `npm run test` for test the project with jest