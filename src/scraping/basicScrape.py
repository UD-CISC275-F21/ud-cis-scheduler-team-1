"Program to scrape an individual course page"
"Ex: https://catalog.udel.edu/preview_course_nopop.php?catoid=47&coid=271282"

import requests
from bs4 import BeautifulSoup
import re

def header_function(subdomain):
    hdrs = {"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64)"}
    return hdrs

def scrape_page(url, header):
    page = requests.get(url, headers=header)
    print(page.status_code)
    return page.text

def getSubText(start, alt, string):
    target = start + "(.*)"
    substr = re.search(target, string).group()
    substr = substr.replace(alt, "")
    end = substr.find("<")
    return substr[0:end]
    

def format_page(subURL):
    url = "https://catalog.udel.edu/" + subURL
    header = header_function(url)
    resp = scrape_page(url, header)
    soup = BeautifulSoup(resp, 'html.parser')
    p = soup.findAll('p')    
    for i in p:
        soup2 = BeautifulSoup(str(i), 'html.parser')
        if(soup2.find('h1', {'id': 'course_preview_title'})):
            soup3 = soup2
    soup2 = soup3
    title = soup2.find('h1', {'id': 'course_preview_title'}).text
    code = " ".join(title.split()[0:2])
    name = " ".join(title.split()[3:])
    if(code[0:3] != "PCS"):
        while(soup2.a):
            soup2 = BeautifulSoup(str(soup2).replace(str(soup2.a), soup2.a.text), 'html.parser')
        while(soup2.span):
            soup2 = BeautifulSoup(str(soup2).replace(str(soup2.span), ""), 'html.parser')        
        cred = getSubText('<strong>Credit\(s\):</strong>', '<strong>Credit(s):</strong>', str(soup2))
        if(str(soup2).find('<strong>Course Typically Offered:</strong>') > -1):
            typ = getSubText('<strong>Course Typically Offered:</strong>', '<strong>Course Typically Offered:</strong>', str(soup2)).strip()
        else:
            typ = ""
        if(str(soup2).find('<strong>PREREQ:</strong>') > -1):
            preReq = getSubText('<strong>PREREQ:</strong>', '<strong>PREREQ:</strong>', str(soup2))
            preReq = preReq.replace('\xa0', " ").strip()
        else:
            preReq = ""
        if(str(soup2).find('<strong>RESTRICTIONS:</strong>') > -1):
            restrict = getSubText('<strong>RESTRICTIONS:</strong>', '<strong>RESTRICTIONS:</strong>', str(soup2))
            restrict = restrict.replace('\xa0', " ").strip()
        else:
            restrict = ""
        descr = "".join(re.findall(r'<strong>Component:</strong>.*<br/>(.*)<br/><strong>Repeatable for Credit:</strong>', str(soup2)))
        descr = descr.replace('\xa0', " ").strip()
        if(str(soup2).find('<strong>University Breadth:</strong>') > -1):
            univ = getSubText('<strong>University Breadth:</strong>', '<strong>University Breadth:</strong>', str(soup2)).strip()
        else:
            univ = ""
        if(str(soup2).find('<strong>College of Arts and Sciences Breadth:</strong>') > -1):
            AS = getSubText('<strong>College of Arts and Sciences Breadth:</strong>', '<strong>College of Arts and Sciences Breadth:</strong>', str(soup2))
            AS = AS.replace('&amp;', '&').strip()
        else:
            AS = ""        
    else:
        descr = "".join(re.findall('<p><hr/>(.*)</p>', str(soup2)))
        cred = "0"
        typ = ""
        preReq = ""
        restrict = ""
        univ = ""
        AS = ""
    breadth = "University: " + univ + "; A&S: " + AS
    course = dict()
    course['code'] = code
    course['name'] = name
    course['descr'] = descr
    course['credits'] = cred
    course['preReq'] = preReq
    course['restrict'] = restrict
    course['breadth'] = breadth
    course['typ'] = typ
    return {code: course}

if __name__ == '__main__':
    course = format_page("preview_course_nopop.php?catoid=49&coid=290434")
