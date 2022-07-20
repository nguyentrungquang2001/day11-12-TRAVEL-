import "./App.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import data from "./data";
function App() {
  const content = data.map((item) => {
    return (
      <div className="content">
        <div className="contentAvatar">
          <img src={item.imageUrl} />
        </div>
        <div className="contentText">
          <div className="add">
            <div className="addLive">
              <FaMapMarkerAlt color="red" />
              {item.location}
            </div>
            <div className="addMap">
              <a href={"http://google.com"}>View on Google Maps</a>
            </div>
          </div>
          <div className="name"> {item.title}</div>
          <div className="day">
            {item.startDate} - {item.endDate}
          </div>
          <div className="des">{item.description}</div>
        </div>
        <div className="borderBottom"></div>
      </div>
    );
  });
  return (
    <div className="container">
      <header>
        <p>my travel journal</p>
      </header>
      <div>{content}</div>
    </div>
  );
}

export default App;
