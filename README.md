# API:Timestamp microservice

created by [@saifsmailbox98](https://github.com/saifsmailbox98)

:octocat:[Github Repository](https://github.com/saifsmailbox98/timestamp-api)


**How it works:**
 1. If passed a string as a parameter, it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
 1. If it does, it returns both the Unix timestamp and the natural language form of that date.
 1. If it does not contain a date or Unix timestamp, it returns null for those properties.


**Example usage:**

```https://timetagged.herokuapp.com/July%2015,%202017``` *[:link:](https://timetagged.herokuapp.com/July%2015,%202017)*

```https://timetagged.herokuapp.com/1500076800000``` *[:link:](https://timetagged.herokuapp.com/1500076800000)*

**Example output:**

```{ "unix":1500076800000, "natural":"Sat Jul 15 2017" }```

**Live site**

[timetagged.herokuapp.com](https://timetagged.herokuapp.com/)
