import React from "react"
import Enzyme, { shallow, mount, render } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import jest from "jest"

import ArhaScript from "./index"

Enzyme.configure({ adapter: new Adapter() })

describe("ArhaScript-component", () => {
  it("renders with no props", () => {
    const component = mount(<ArhaScript />)
    expect(component).toMatchSnapshot()
  })

  it("renders scripts passed in as a string", () => {
    const component = mount(
      <ArhaScript>{`<script>console.log('hai')</script>`}</ArhaScript>
    )
    expect(component.find("script").text()).toEqual("console.log('hai')")
  })
  it("renders noscript elements in string", () => {
    const component = mount(
      <ArhaScript>{`<noscript><iframe src='https://player.vimeo.com/video/148751763'></iframe></noscript>`}</ArhaScript>
    )
    expect(component.find("noscript").text()).toEqual(
      "<iframe src='https://player.vimeo.com/video/148751763'></iframe>"
    )
  })

  it("renders two test scripts", () => {
    const component = mount(
      <ArhaScript>
        {`
        <script>console.log('hai')</script>
        <script>console.log('hoi')</script>
        `}
      </ArhaScript>
    )
    expect(component.find("script").at(0).text()).toEqual("console.log('hai')")
    expect(component.find("script").at(1).text()).toEqual("console.log('hoi')")
  })

  it("sanitizes element attributes", () => {
    const component = mount(
      <ArhaScript>{`<script id="test" test-attr="iamnothere">console.log('hai')</script>`}</ArhaScript>
    )
    expect(component.find("#test")).toEqual({})
    expect(component.find("[test-attr]")).toEqual({})
  })

  it("doesn't render script- and noscript-tags, if specified in props", () => {
    const component = mount(
      <ArhaScript
        parseOpts={{
          script: false,
          noscript: false
        }}
      >{`<script>console.log('hai')</script><noscript>enable javascript</noscript>`}</ArhaScript>
    )
    expect(component.find("script").text()).toEqual("")
    expect(component.find("noscript").text()).toEqual("")
  })
})
