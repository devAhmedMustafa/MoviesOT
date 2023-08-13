import requests
from bs4 import BeautifulSoup

def fetch_tomato(title):

    url = requests.get(f"https://www.rottentomatoes.com/m/{title}")
    soup = BeautifulSoup(url.content, 'lxml')

    score = repr(soup.find('score-board')['audiencescore']) # type: ignore
    score = str(score)

    return score