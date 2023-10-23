// import React from 'react';
// import OtherPage from './OtherPage';
// import ContactPage from './ContactPage';


// function Footer() {
//   return (
//     <div className="container">
//   <div className="row">
//     <div className="col-md-6">
//       <h5>Социальные сети</h5>
//       <ul className="list-unstyled">
//         <li>
//           <a href="#">Facebook</a>
//         </li>
//         <li>
//           <a href="#">Twitter</a>
//         </li>
//         <li>
//           <a href="#">Instagram</a>
//         </li>
//         <li>
//         <Link to="/contacts">Контакты и информация</Link>
//         </li>
//       </ul>
//     </div>
//     <div className="col-md-6 text-md-right">
//       &copy; {new Date().getFullYear()} MOVIX
//     </div>
//   </div>
// </div>
//   );
// }

// <footer className="bg-dark text-white py-4">
// <div className="container">
//   <div className="row">
//     <div className="col-md-6">
//       <h5>Социальные сети</h5>
//       <ul className="list-unstyled">
//         <li>
//           <a href="#">Facebook</a>
//         </li>
//         <li>
//           <a href="#">Twitter</a>
//         </li>
//         <li>
//           <a href="#">Instagram</a>
//         </li>
//         <li>
//         <Link to="/contacts">Контакты и информация</Link>
//         </li>
//       </ul>
//     </div>
//     <div className="col-md-6 text-md-right">
//       &copy; {new Date().getFullYear()} MOVIX
//     </div>
//   </div>
// </div>
// </footer>

// export default Footer;




// <footer className="bg-dark text-white py-4">
// <div className="container">
//   <div className="row">
//     <div className="col-md-6">
//       <h5>Социальные сети</h5>
//       <ul className="list-unstyled">
//         <li>
//           <a href="#">Facebook</a>
//         </li>
//         <li>
//           <a href="#">Twitter</a>
//         </li>
//         <li>
//           <a href="#">Instagram</a>
//         </li>
//         <li>
//         <Link to="/contacts">Контакты и информация</Link>
//         </li>
//       </ul>
//     </div>
//     <div className="col-md-6 text-md-right">
//       &copy; {new Date().getFullYear()} MOVIX
//     </div>
//   </div>
// </div>
// </footer>

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom'; // Импорт Link из react-router-dom
import OtherPage from './OtherPage';
import ContactPage from './ContactPage';
import './footer.css';

function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h5>Социальные сети</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <Link to="/contacts">Контакты и информация</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-6 text-md-right">
          &copy; {new Date().getFullYear()} MOVIX
        </div>
      </div>
    </div>
  );
}

export default Footer;
