import React from 'react'
import reactDom from 'react-dom'
import { cleanup, render } from '@testing-library/react'
import renderer from 'react-test-renderer'

import NavbarC from '../NavbarC'


afterEach(cleanup)
it("Navbar renders properly and without issue", () => {
    const div = document.createElement("div");
    reactDom.render(<NavbarC />, div);
})


it("matches snapshot", () => {
    const tree = renderer.create(<NavbarC />).toJSON();
    expect(tree).toMatchSnapshot()
})
