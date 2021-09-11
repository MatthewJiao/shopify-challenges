from flask import Flask
import spacy

from flask_cors import CORS, cross_origin



app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

nlp = spacy.load("en_core_web_sm")

@app.route('/predict/<features>')
def index1(features):
    try:
        listOfDescriptions = features.split('<<<>>>')
        print(len(listOfDescriptions))
        parsedLists = []

        for item in listOfDescriptions:
            doc = nlp(item)
            temp = []
            for chunk in doc.noun_chunks:
                temp.append(chunk.root.text)
            parsedLists.append(temp)
            
        
        return str(parsedLists)
    except:
        return "Error"


@app.route('/')
def start():
    return "hello"


if __name__ == "__main__":
    app.run(debug=False)
