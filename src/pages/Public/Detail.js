import React, { useState } from "react";
import "../../style/detail.css";
import { StarFilled } from "@ant-design/icons";
function MovieDetail() {
  return (
    <div className="container">
      <div className="detail-container">
        <div className="big-img">
          <img
            src="https://cineplex2023.s3.ap-southeast-1.amazonaws.com/web-uploads/movies/169345860082436.webp"
            alt=""
            style={{ width: "100%", filter: "blur(10px)" }}
          />
        </div>
        <div className="movie-detail">
          <img
            src="https://cineplex2023.s3.ap-southeast-1.amazonaws.com/web-uploads/movies/169345859857129.webp"
            alt=""
          />
          <div className="movie-infor">
            <h3>Jawan</h3>
            <div style={{ display: "flex" }}>
              <StarFilled style={{ margin: "10px 0", color: "#ffa800" }}></StarFilled> <div style={{ margin: "6px 6px 0 8px" }}>0.0</div>
            </div>
            <div className="category-container">
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
            <div className="category-container">
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
            <div className="category-container">
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
            <div className="category-container">
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
            <div className="category-container">
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
            <div className="flex">
              <button class="button-detail">Show time</button>
              <button class="button1">Watch trailer</button>
            </div>
          </div>
        </div>
      </div>
      <div className="movie-des">
        <div className="des-title">SYNOPSIS</div>
        <div className="des-content">
          A high-octane action thriller which outlines the emotional journey of
          a man who is set to rectify the wrongs in the society.
        </div>
        <div className="des-title">SHOW TIME</div>
        <table className="styled-table">
          <tbody>
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
  );
}

export default MovieDetail;
