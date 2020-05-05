const { parse } = require("node-html-parser")
const { createElement, Fragment } = require("react")
const PropTypes = require("prop-types")

const filterHTMLElements = obj => obj.constructor.name === "HTMLElement"

const ArhaScript = ({ children, parseOpts }) =>
  createElement(
    Fragment,
    null,
    parse(children, parseOpts)
      .childNodes.filter(filterHTMLElements)
      .map(({ tagName, rawText }, key) =>
        createElement(
          tagName,
          { dangerouslySetInnerHTML: { __html: rawText }, key },
          null
        )
      )
  )

ArhaScript.defaultProps = {
  children: "",
  parseOpts: {
    script: true,
    noscript: true
  }
}

ArhaScript.propTypes = {
  children: PropTypes.string,
  parseOpts: PropTypes.object
}

export default ArhaScript
