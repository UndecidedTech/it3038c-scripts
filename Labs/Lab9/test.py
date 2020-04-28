import json
import requests

r = requests.get('http://localhost:3000')

data = r.json()

for p in data:
    print("{0} is color: {1}".format(p["name"], p["color"]))
