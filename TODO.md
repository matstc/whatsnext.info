# Features

## Fix main.js line 9
?

## Universal Search
- code academy
- codeschool
- khan academy
- coursera
- udemy
- edx

### Coursera
Get courses from https://www.coursera.org/maestro/api/topic/list2

Want to search:

- topics[id]["name"]
- topics[id]["short_description"]
- courses[id]["certificate_description"]

Want to grab:

- topics[id]["name"]
- topics[id]["short_description"]
- courses[id]["home_link"]
- topics[id]["small_icon"]
- topics[id]["insts"] -> insts[id].first_name,last_name,middle_name

### Khan Academy
http://www.khanacademy.org/api/v1/topictree

Flatten the children list and search title, description. Grab ka_url.

## Analytics
Broken by single page app?
