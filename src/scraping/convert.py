import json
from pprint import pprint

if __name__ == '__main__':
    with open('catalog2.json', 'r') as f:
        catalog = f.read()
    catalog = json.loads(catalog)
    result = {}
    for did, values in catalog.items():
        result[did] = {}
        for course_wrapper in values:
            for course_id, course in course_wrapper.items():
                course["typicallyOffered"] = course.pop("typ")
                result[did][course_id] = course
    with open('catalog3.json', 'w') as f:
        json.dump(result, f, indent = 4)
    


