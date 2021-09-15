import React from 'react'
import reactDom from 'react-dom'
import { cleanup, render } from '@testing-library/react'
import renderer from 'react-test-renderer'

import Loading from '../Loading'


afterEach(cleanup)
it("Loading screen renders properly and without issue", () => {
    const div = document.createElement("div");
    reactDom.render(<Loading />, div);
})


it("matches snapshot", () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot()
})
