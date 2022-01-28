const CSSInJS =() => {
    return <div>
        <p style={{color:'green'}}>Font Color is green</p>
        <p>scoped!</p>
        <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: gold;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
        <style global jsx>{`
        body {
          background: cyan;
        }
      `}</style>
    </div>
}
export default CSSInJS