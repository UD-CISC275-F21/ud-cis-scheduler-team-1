import requests
from bs4 import BeautifulSoup
import json

def header_function(subdomain):
    hdrs = {"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64)"}
    return hdrs

def scrape_page(url, header):
    page = requests.get(url, headers=header)
    print(page.status_code)
    return page.text


if __name__ == '__main__':
    header = header_function(5)
    #Change url based on website scraped, get rid of elements of array that
    # are not courses, copy and paste to .ts file
    url = "https://catalog.udel.edu/preview_program.php?catoid=47&poid=34806"
    resp = scrape_page(url, header)
    soup = BeautifulSoup(resp, 'html.parser')
    p = soup.findAll('a')
    courses = []
    for i in p:
        if(len(i.text) > 9):
            courses = courses + [i.text[0:8]]
    print(json.dumps(courses))
            
        
