import './Main.css';
import { Link } from "react-router-dom";

function Main() {
  return (
    <div class="main">

      <div id="main-content" class="transboxbg">
        <p id="main-title">
          <a href="https://ansonbot.github.io" target="_blank" rel="noreferrer"
            title="" data-content="Anson Liang">
            Anson Liang
          </a>
        </p>
        <ul id="main-nav">
          <li>
            <a href="https://linkedin.com/in/yiyanliang" target="_blank" rel="noreferrer"
              title="Anson@LinkedIn" data-content="LinkedIn">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://ansonnet.github.io/geovis/map.html" target="_blank" rel="noreferrer"
              title="GeoVisualization" data-content="Maps">
              Maps
            </a>
          </li>
          <li>
            <a href="http://www.500px.com/AKB48" target="_blank" rel="noreferrer"
              title="Anson@500px" data-content="500px">
              500px
            </a>
          </li>
          <li>
            <a href="http://www.yoyotoronto.com" target="_blank" rel="noreferrer"
              title="YoYoToronto" data-content="YoYoToronto">
              YoYoToronto
            </a>
          </li>
          <li>
              <Link to="/example">
                <a href data-content="Test">Test</a>
              </Link>
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
