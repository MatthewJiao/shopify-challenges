from flask import Flask
import spacy


app = Flask(__name__)


@app.route('/predict/<features>')
def index1(features):
    try:
        print('ting')
        nlp = spacy.load("en_core_web_sm")
        doc = nlp("Autonomous cars shift insurance liability toward manufacturers")
        for chunk in doc.noun_chunks:
            print(chunk.root.text)
              
        return 'data'
    except:
        return "Error"


@app.route('/')
def start():
    return "hello"


if __name__ == "__main__":
    app.run(debug=False)
