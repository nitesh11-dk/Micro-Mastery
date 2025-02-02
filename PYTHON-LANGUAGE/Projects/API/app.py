
# ? API 
# application programming interface 

#  We are using requests for hitting api 
import requests

url ="https://api.freeapi.app/api/v1/public/randomusers/user/random"

headers = {"accept": "application/json"}

response = requests.get(url, headers=headers)

print(response.json())