import React from 'react'
import reactDom from 'react-dom'
import { cleanup, render } from '@testing-library/react'
import renderer from 'react-test-renderer'

import ImageCard from '../ImageCard'

const image_test_data = {
    "id": 1509956,
    "pageURL": "https://pixabay.com/photos/woman-field-sunlight-fashion-hat-1509956/",
    "type": "photo",
    "tags": "woman, field, sunlight",
    "previewURL": "https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_150.jpg",
    "previewWidth": 150,
    "previewHeight": 99,
    "webformatURL": "https://pixabay.com/get/g166b73dca4c700cd0a7cfd321cbf6e71447dfaa241a1e2ce5dbd38d67f1f05a5777ee02ddbc1921ad69748251c3c43c2435173a8de7bb63de5d51f77af154083_640.jpg",
    "webformatWidth": 640,
    "webformatHeight": 426,
    "largeImageURL": "https://pixabay.com/get/ge66b364c4be13d5c3ce681fd7dd3c45e5b21c607c7b374747fb447adcae34ebf6ec62b0387214262bb33f4d26d1f524c13dfc6572c4b583b36cad9efdf927c37_1280.jpg",
    "imageWidth": 5760,
    "imageHeight": 3840,
    "imageSize": 5088127,
    "views": 887498,
    "downloads": 461158,
    "collections": 2283,
    "likes": 2195,
    "comments": 337,
    "user_id": 334088,
    "user": "JillWellington",
    "userImageURL": "https://cdn.pixabay.com/user/2018/06/27/01-23-02-27_250x250.jpg"
};

afterEach(cleanup)
it("image card renders properly and without issue", () => {
    const div = document.createElement("div");
    reactDom.render(<ImageCard image = {image_test_data} />, div);
})


it("matches snapshot", () => {
    const tree = renderer.create(<ImageCard image = {image_test_data}/>).toJSON();
    expect(tree).toMatchSnapshot()
})
