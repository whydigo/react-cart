import React from "react";
import { useState } from "react";

const Footer = () => {

  const [sended, setSended] = useState(true)

  const handleChange = () => {
    setSended(!sended)
  }


  return (
    <div className="footer">
      <p className="info">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
        eligendi eum.
      </p>
      <button type="submit" 
      disabled={!sended && true} 
      onClick={handleChange}
      className="btn btn-success basket">{sended ? 'Добавить в корзину' : 'Уже в корзине'}</button>
      {!sended && <div onClick={handleChange} className="delete">Удалить из корзины</div>}
    </div>
  );
};

export default Footer;
