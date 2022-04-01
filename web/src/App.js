import "./App.css";
import Background from "./Background";
//<Background />

function App() {
  return (
    <div className="container">
      <div class="timeline">
        <div id="content"></div>
        <div class="card">
          <div class="icon"></div>
          <div class="content">
            <b>ハリドイスラム</b>
            <p>自己学習型フロントエンド開発者</p>
          </div>
          <div class="arrow"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
