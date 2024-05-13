import { useParams } from 'react-router-dom';
import React from 'react';


export default function Info(){
    const { info } = useParams(); // Извлечение переданного параметра
    console.log(info);
  return (
    <div>
      <h1>Details Page</h1>
      <p>Информация: {decodeURIComponent(info)}</p>
    </div>
  );
};


