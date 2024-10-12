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
    <div className="container flex flex-wrap  py-8 bg-blue-200  mx-auto px-5 pt-[100px]">

     
      <div className="grid grid-cols-1 md:grid-cols-2 mt-12 lg:grid-cols-3 gap-10">
         {data.length > 0 ? (
        data.map((dassa, index) => (
          <div key={index}>
            <p>{dassa.tags}</p>
            <div>{dassa.company_name}</div> {/* Simple div to avoid rendering issues */}
            <div dangerouslySetInnerHTML={{ __html: dassa.description }}></div>
            <div dangerouslySetInnerHTML={{ __html: dassa.slug }}></div>

            <div>{dassa.slug}</div> {/* Simple div for text */}
            <div>{dassa.location}</div> {/* Simple div for text */}
            <a href={dassa.url} target="_blank" rel="noopener noreferrer">
              {dassa.url}
            </a>
          </div>
        ))
        
      ) : (
        <p>Ma'lumot topilmadi</p>
      )}
      </div>
      <p>salom</p>
    </div>
  );
};

export default Contact;
