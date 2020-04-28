from bs4 import BeautifulSoup
import requests, re

r = requests.get("https://myanimelist.net/topanime.php").content

soup = BeautifulSoup(r, "html.parser")

tableDetails = soup.findAll("div", {"class": "detail"})
tableScores =  soup.findAll("td", {"class": "score"})
titleArray = []
scoreArray = []
outputData = []

for p in tableDetails:
    a = p.findAll("a", {"class": "hoverinfo_trigger"})
    print(a[0].string)
    titleArray.append(a[0].string)

#issue with header column of the table -- fixed with if check
for o in tableScores:
    b = o.findAll("span", {"class": "score-label"})
    print(b)
    if(len(b) > 0):
        scoreArray.append(b[0].string)
#Output
for i in range(len(titleArray)):
    c = {}
    print("LENGTHS", len(titleArray), len(scoreArray))
    c["title"] = titleArray[i]
    c["score"] = scoreArray[i]
    outputData.append(c)

print(outputData)
#print(r)