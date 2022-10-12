import requests


res = requests.request('GET', 'http://localhost:3000/api/anime/info/54')
print(res.json())