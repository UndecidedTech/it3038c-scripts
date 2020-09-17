import json
import requests

r = requests.get('http://localhost:3000')

data = r.json()
stringArray = []
for p in data:
    sentence = "{0} is color: {1}".format(p["name"], p["color"])
    stringArray.append(sentence)
    print(sentence)


print(stringArray)