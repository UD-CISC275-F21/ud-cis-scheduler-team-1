import requests
from bs4 import BeautifulSoup

from basicScrape import header_function
from basicScrape import scrape_page
from basicScrape import format_page
from time import sleep
import json

#Undergrad was done first, then saved
#json was then loaded for grad

def scrapeCatalog():
    with open('catalog.json', 'r') as f:
        catalog = f.read()
    catalog = json.loads(catalog)
    currentCodes = list(catalog.keys())
    #currentCodes = []
    #catalog = {}

    #for undergrads, num = 46
    #num = 46
    #for i in range(1, 46 + 1):
    #    url = "https://catalog.udel.edu/content.php?catoid=47&catoid=47&navoid=8868&filter%5Bitem_type%5D=3&filter%5Bonly_active%5D=1&filter%5B3%5D=1&filter%5Bcpage%5D=" + str(i) +"#acalog_template_course_filter"
    #    header = header_function(url)
    #    resp = scrape_page(url, header)
    #    soup = BeautifulSoup(resp, 'html.parser')
    #    classes = soup.find_all("td", {"class": "width"})
    #    for j in classes:
    #        course = format_page(j.a['href'])
    #        print(course)
    #        sleep(0.5)
    #        key = "".join(course.keys())[0:4]
    #        if(key not in currentCodes):
    #            catalog[key] = []
    #            currentCodes = currentCodes + [key]
    #        catalog[key].append(course)
    #    sleep(0.5)
        
    #for grads, num = 29
    num = 29
    for i in range(1, 29 + 1):
        url = "https://catalog.udel.edu/content.php?catoid=49&catoid=49&navoid=10009&filter%5Bitem_type%5D=3&filter%5Bonly_active%5D=1&filter%5B3%5D=1&filter%5Bcpage%5D=" + str(i) + "#acalog_template_course_filter"
        header = header_function(url)
        resp = scrape_page(url, header)
        soup = BeautifulSoup(resp, 'html.parser')
        classes = soup.find_all("td", {"class": "width"})
        for j in classes:
            course = format_page(j.a['href'])
            print(course)
            sleep(0.5)
            key = "".join(course.keys())[0:4]
            if(key not in currentCodes):
                catalog[key] = []
                currentCodes = currentCodes + [key]
            catalog[key].append(course)
        sleep(0.5)
    return catalog
                

if __name__ == '__main__':
    #url = "https://catalog.udel.edu/content.php?catoid=47&navoid=8868"
    #header = header_function(url)
    #resp = scrape_page(url, header)
    #soup = BeautifulSoup(resp, 'html.parser')
    #classes = soup.find_all("td", {"class": "width"})
    catalog = scrapeCatalog()
    with open('catalog2.json', 'w') as f:
        json.dump(catalog, f, indent = 4)
    
