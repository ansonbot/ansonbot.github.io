import './Main.css';
import { Link } from "react-router-dom";

function Main() {
  return (
    <div class="main">

      <div id="main-content" class="transboxbg">
        <p class="main-title">
          <a href="https://ansonbot.github.io" target="_blank" rel="noreferrer" title="">
            Anson Liang
          </a>
        </p>
        <ul id="main-nav">
          <li>
            <a href="https://linkedin.com/in/yiyanliang" target="_blank" rel="noreferrer" title="Anson@LinkedIn">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://ansonnet.github.io/geovis/map.html" target="_blank" rel="noreferrer" title="GeoVisualization">
              Maps
            </a>
          </li>
          <li>
            <a href="http://www.500px.com/AKB48" target="_blank" rel="noreferrer" title="Anson@500px">
              500px
            </a>
          </li>
          <li>
            <a href="http://www.yoyotoronto.com" target="_blank" rel="noreferrer" title="YoYoToronto">
              YoYoToronto
            </a>
          </li>
          <li>
            <Link to="/example">Test</Link>
          </li>
        </ul>
      </div>

      <div id="main-footer" class="transboxbg">
        <p>
          <a href="mailto:48@hotmail.co.jp" title="48@hotmail.co.jp">Email Anson</a>
        </p>
      </div>

    </div>
  );
}

export default Main;
