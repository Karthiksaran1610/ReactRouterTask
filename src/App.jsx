import React from 'react';
import NavBar from './Components/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FullStack from './pages/FullStack';
import CyberSecurity from './pages/CyberSecurity';
import DataScience from './pages/DataScience';
import Carrer from './pages/Carrer';
import PageNotfound from './pages/PageNotfound';

const App = () => {
  const data=[
    {
      img:"https://d2ms8rpfqc4h24.cloudfront.net/Guide_to_Full_Stack_Development_000eb0b2d0.jpg",
      Title:"Full Stack Development",
      Date:"10 May 2024",
      Content:"Remote Full Stack Developers are in high demand due to their ability to handle both front-end and back-end"
    },
    {
      img:"https://www.classicinformatics.com/hubfs/full-stack%20developer.png#keepProtocol",
      Title:"Full Stack Development",
      Date:"10 May 2024",
      Content:" learning web development skills in 2024 is still a very worthwhile pursuit"
    },
    {
      img:"https://miro.medium.com/v2/resize:fit:800/0*XH3rLskyOsCqVV-j.jpg",
      Title:"Full Stack Development",
      Date:"10 May 2024",
      Content:"Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024"
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgfCGlqt45yu5aEjdmkQMIxlKfwLERb8Rxz4oqZTqf_W-InL9QQP77nzjIi8GpamfmaMg&usqp=CAU",
      Title:"Full Stack Development",
      Date:"10 May 2024",
      Content:"Best Full-Stack Development Project Ideas in 2024"
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSVOrfWvTa5OgqqJX0Y4rf8z8EEXV_DN8chp5gaRlHvg&s",
      Title:"Cyber Security",
      Date:"10 May 2024",
      Content:"Blockchain technology continues to mature in 2024, its role in cybersecurity"
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      Title:"Cyber Security",
      Date:"10 May 2024",
      Content:"The demand for cybersecurity will be high"
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1PZkcNUbk0qeC4coYQ9oGCKrffrg2OM1XDcbPsv1ZkzcUwUfnRUF-wucVQlo1BIPX-Y&usqp=CAU",
      Title:"Cyber Security",
      Date:"10 May 2024",
      Content:"In 2023, cyberattacks grew at an alarming rate"
    },
    {
      img:"https://www.shutterstock.com/image-vector/business-teamwork-small-peoples-working-600nw-1156921555.jpg",
      Title:"Cyber Security",
      Date:"10 May 2024",
      Content:"“A data breach is about both privacy and security. ..."
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRytZMLvKNFPl0WXSpXmfeM7c_qrlrI6l2Jxw&s",
      Title:"Data Science",
      Date:"10 May 2024",
      Content:"‍The data science and its impact on big data in the future "
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      Title:"Data Science",
      Date:"10 May 2024",
      Content:"Data and data science greatly influence everything we do…"
    },
    {
      img:"https://insidebigdata.com/wp-content/uploads/2019/04/DataScience_shutterstock_1054542323.jpg",
      Title:"Data Science",
      Date:"10 May 2024",
      Content:"The best way to learn data science is to do data science"
    },
    {
      img:"https://thumbs.dreamstime.com/b/data-science-utilizza-metodi-scientifici-algoritmi-e-sistemi-per-estrarre-conoscenze-intuizioni-dai-dati-vari-concetto-di-207016521.jpg",
      Title:"Data Science",
      Date:"10 May 2024",
      Content:"Essential lesson on how you should practice data science"
    },
    {
      img:"https://www.classicinformatics.com/hubfs/full-stack%20developer.png#keepProtocol",
      Title:"Carrer",
      Date:"10 May 2024",
      Content:"The future of full stack development certainly sees an increased demand for software developers "
    },
    {
      img:"https://insidebigdata.com/wp-content/uploads/2019/04/DataScience_shutterstock_1054542323.jpg",
      Title:"Carrer",
      Date:"10 May 2024",
      Content:"Develop the cyber security skills. ..."
    },
    {
      img:"https://insidebigdata.com/wp-content/uploads/2019/04/DataScience_shutterstock_1054542323.jpg",
      Title:"Carrer",
      Date:"10 May 2024",
      Content:"The perks of being a data scientist are luring many IT professionals to take this career path"
    },
  ]

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home data={data} />} />
        <Route path='/FullStackDevelopment' element={<FullStack data={data} />} />
        <Route path='/CyberSecurity' element={<CyberSecurity data={data} />} />
        <Route path='/DataScience' element={<DataScience data={data} />} />
        <Route path='/Carrer' element={<Carrer data={data} />} />
        <Route path='*' element={<PageNotfound />} />
      </Routes>
    </div>
  );
};

export default App;