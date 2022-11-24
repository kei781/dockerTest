import axios from "axios";
import { BACK_URL } from "../../config";
import React, { useState, useEffect } from "react";

const ProReport = () => {
  const [boardList, setBoardList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: `${BACK_URL}board/community/pro/get5`,
          method: "GET",
        });
        setBoardList(data.data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <>
      {/* 전문가 리포트 5개*5 */}
      {boardList.map((data) => (
        <div className="Homelistspan">
          <div className="Homelistspandiv">
            <a href={"/Board/community/pro/detail/" + data.id}>
              {data.subject}
            </a>
          </div>
          <span>{data.author}</span>
          <span>{data.date}</span>
        </div>
      ))}
    </>
  );
};

export default ProReport;
