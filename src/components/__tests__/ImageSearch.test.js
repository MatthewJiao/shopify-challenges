import React from 'react'
import reactDom from 'react-dom'
import { cleanup, render } from '@testing-library/react'
import renderer from 'react-test-renderer'

import ImageSearch from '../ImageSearch'


afterEach(cleanup)
it("image search renders properly and without issue", () => {
    const div = document.createElement("div");
    reactDom.render(<ImageSearch searchText = {"kittens"} />, div);
})


it("matches snapshot", () => {
    const tree = renderer.create(<ImageSearch searchText = {"kittens"} />).toJSON();
    expect(tree).toMatchSnapshot()
})
