import React, { useState } from "react";
import "../../style/showtime.css";
import { StarFilled } from "@ant-design/icons";
function Showtime() {
  return (
    <div className="container">
      <div className="movie-des" style={{ paddingTop: 50, paddingBot: 30 }}>
        <div className="des-title">Weekly Showtime</div>
        <div className="des-content">
          [ 290 An Duong Vuong, District 5, Ho Chi Minh ]
        </div>
      </div>
      <div className="showtime-container">

        <div className="showtime-detail">
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img
              src="https://cineplex2023.s3.ap-southeast-1.amazonaws.com/web-uploads/movies/169345859857129.webp"
              alt=""
              style={{ height: 200, width: 150 }}
            />
          </div>

          <div className="movie-infor">
            <h3>Jawan</h3>
            <div style={{ display: "flex" }}>
              <StarFilled style={{ margin: "10px 0", color: "#ffa800" }}></StarFilled> <div style={{ margin: "6px 6px 0 8px" }}>0.0</div>
            </div>
            <div className="category-container-showtime">
              <div className="category">
                Category
                <label
                  style={{ float: "right", textAlign: "right", marginRight: 5 }}
                >
                  :{" "}
                </label>
              </div>
              <div>2D</div>
            </div>
            <div className="category-container-showtime">
              <div className="category">
                Actor
                <label
                  style={{ float: "right", textAlign: "right", marginRight: 5 }}
                >
                  :{" "}
                </label>
              </div>
              <div>Shah Rukh Khan, Nayanthara, Vijay Sethupathi</div>
            </div>
            <div className="category-container-showtime">
              <div className="category">
                Genre
                <label
                  style={{ float: "right", textAlign: "right", marginRight: 5 }}
                >
                  :{" "}
                </label>
              </div>
              <div>Action, Thriller</div>
            </div>
            <div className="category-container-showtime">
              <div className="category">
                Release
                <label
                  style={{ float: "right", textAlign: "right", marginRight: 5 }}
                >
                  :{" "}
                </label>
              </div>
              <div>07-09-2023</div>
            </div>
            <div className="category-container-showtime">
              <div className="category">
                Language
                <label
                  style={{ float: "right", textAlign: "right", marginRight: 5 }}
                >
                  :{" "}
                </label>
              </div>
              <div>Hindi</div>
            </div>
            <div className="flex mt-6 gap-4">
              <button class="button-detail">Show time</button>
              <button class="button1">Watch trailer</button>
            </div>
          </div>
        </div>
        <div className="calendar-time">
          <table className="styled-table1" style={{ background: "#3e3e40", color: "white" }}>
            <tbody >
              <tr>
                <td>Sunday 5th, November 2023</td>
                <td>11:05 AM - 12:00 AM</td>
                <td>
                  {" "}
                  <button className="button-detail">Get ticket</button>
                </td>
              </tr>
              <tr>
                <td>Monday 6th, November 2023</td>
                <td>11:05 AM - 12:00 AM</td>
                <td >
                  {" "}
                  <button className="button-detail">Get ticket</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="movie-des">


      </div>

    </div>
  );
}

export default Showtime;
