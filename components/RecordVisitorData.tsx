import React from "react";
import { useEffect } from "react";
import Cookie from "js-cookie";
var inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
export default function RecordVisitorData({children}:any) {
  useEffect(() => {

    fetch("/api/recordVisitor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
        const time = new Date().getTime()
        setTimeout(()=>{
            Cookie.set("lastVisit",`${time}`,{expires:inFifteenMinutes,sameSite:'strict'})

        },15000)
  }, []);
  return children;
}
