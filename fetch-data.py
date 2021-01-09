import requests
import json

url_bs : str = 'https://data.bs.ch/api/records/1.0/search/?dataset=100111&q=&sort=-datum&facet=datum'
res_bs = requests.get(url_bs)
res_bs.raise_for_status()
data = [{'date': record['fields']['datum'], 'count': record['fields']['total_geimpfte_personen']} for record in res_bs.json()['records']]

with open('assets/generated/cumulative.json', 'w') as file:
    json.dump(data, file)