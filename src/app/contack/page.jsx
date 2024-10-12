"use client";
import { useEffect, useState } from "react";

const Contact = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const jobs = `https://www.arbeitnow.com/api/job-board-api`;

  useEffect(() => {
    const work = async () => {
      try {
        const response = await fetch(jobs);
        const result = await response.json();
        console.log(result); 
        setData(result.data || []); 
      } catch (error) {
        console.log(error.message);
      }
    };
    work();
  }, []);

  return (
    <div className="mx-auto px-5 pt-[100px]">
      {data.length > 0 ? (
        data.map((dassa, index) => (
          <div key={index}>
            <p>{dassa.company_name}</p>
            <div
              dangerouslySetInnerHTML={{ __html: dassa.description }}
            ></div>
            <p>{dassa.slug}</p>
            <p>{dassa.location}</p>
          </div>
        ))
      ) : (
        <p>Ma'lumot topilmadi</p>
      )}
      <p>salom</p>
    </div>
  );
};

export default Contact;
