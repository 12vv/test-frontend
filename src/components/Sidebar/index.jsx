import "./index.css";
import {
  HomeOutlined,
  BarChartOutlined,
  PieChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/">
              <span className="icon">
                <HomeOutlined />
              </span>
              <span className="text">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/home1">
              <span className="icon">
                <BarChartOutlined />
              </span>
              <span className="text">HOME1</span>
            </Link>
          </li>
          <li>
            <Link to="/home2">
              <span className="icon">
                <PieChartOutlined />
              </span>
              <span className="text">HOME2</span>
            </Link>
          </li>

          <div className="bottom">
            <li>
              <Link to="/settings">
                <span className="icon">
                  <SettingOutlined />
                </span>
                <span className="text">Settings</span>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
