**[Live Demo]**(https://spacestagram-shopify.herokuapp.com/)

Shopify Frontend Challenge

Features Implemented
- **Loading** state while images are fetched
- **Shopify** design theme
- **Image Tags**

Extra Notes
- Since Nasa disabled their **concept_tags** parameter on the **APOD API** which provides useful **image tags**, I decided to build my own **API** to do such. 
- I used **spaCy** speech tagging library in **Python** and deployed the endpoint with **Flask**. (Javascript doesn't have great NLP capabilities).
- I left **this** feature **local** because of the extra **latency** and **risk** of the backend **crashing** which I occasionally experienced with the live version.
- **Directory:** `microservice/app.py` 
