# CCC-2020S1-Assignment2 Group 12
Team Members:
* [Yizhou Zhu - 1034676](https://github.com/lupintheforth)
* [Shizhe Cai - 798125](https://github.com/shizhec)
* [Haoyu Zhang - 976650](https://github.com/Neetordy)
* [Haowen Shen - 1070497](https://github.com/hwnshen)
* [Peng Cao - 798530](https://github.com/c731615340)

## Project Structure
### FrontEnd
1.

### BackEnd
1.

### Scraper
* Searching API
  1. GetOldTweet3 modified for rate limit
  2. generate matched shell script to run for each local government area in Victoria
  3. Use shell scripts to automate the spier
  4. Provide data to Natural Language Processing section
  5. retreive processed data to upload to CouchDB
* Streaming API
  1. Stream in all the real-time tweets to CouchDB
  2. keep a streamlog
* Covid-19
  1. Customized scraper for the two websites
     https://covid-19-au.com/
     https://www.dhhs.vic.gov.au/media-hub-coronavirus-disease-covid-19
  2.Updated and modified on daily basis (no automation)


### Natural Language Processing
* Sentiment Analysis
  1. Remove non-text tweets.
  2. Use NLTK Vader to do the intensity analysis.
  3. Gives a compound score of sentiment, and also a label
     of negative/positive/neutral based on ±0.05 boundry.
* Topic Modelling
  1. Remove emails, newline characters and single quotes.
  2. Using gensim module to continue pre-processing .
  3. Using bigram and trigram model to enhance word.
  4. Only keep and Lemmatize NOUN and ADJECTIVE
  5. latent dirichlet allocation model for topic extraction
  6. Wordcloud to show the result with top 10 frequent words.
  

### Deployment
1.

## Server Arrangement
Server 1: 172.26.130.162
```
server 1 
```
Server 2: 172.26.130.251
```
server 2  
```
Server 3: 172.26.132.37
```
server 3 
```
Server 4: 172.26.132.136
```
server 4 
```

