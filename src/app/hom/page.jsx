'use client'

import { useEffect, useState } from "react";

const Hom = () => {
  const[news, setNews]=useState([])
  console.log(news)
  const apiKey = "22b3f60844aa4886b6e24407fa6213ec"; 
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`; 
  useEffect(()=>{
const fetchNews = async()=>{
  try{
    const response =await fetch(url)
    const data = await response.json()
    setNews(data.articles)
  }catch(error){
    console.log('error')
  }
}
fetchNews()
  },[])
  return (
    <div>
{

 news.map((articles)=>(
  <div key={articles.id}>
<p>{articles.description}</p>
  </div>
 )) 
}
    </div>
  )
}
export default Hom