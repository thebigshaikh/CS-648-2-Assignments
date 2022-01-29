const element = (
  <div id="mainDiv">
      <div id="nameDiv">
          <h1>Basil Shaikh</h1>
      </div>
      <div id="imgDiv">
          <img id="imgID" src="img01.jpg" alt="My Photo" width="300" height="300"></img><br/><br/>
      </div>
      <div id="introDiv">
          Just a Vincentian who loves Manchester United and Rock Music<br/>

      </div>
      <div id="gitDiv">
          <a id="gitLinkID" href="https://github.com/thebigshaikh">VIEW MY GITHUB REPO</a>
      </div>
  </div>
)
 
ReactDOM.render(element, document.getElementById('contents'));