import "../assets/css/Footer.css";
const Footer = () => {
  const text = ' "The journey of a thousand miles begins with a single step."';
  return (
    <div className="container bg-secondary h-25 justify-content-center">
      <div className="row">
        <div className="col  text-center">
          <h5 className="footer-title pt-2">
            &copy;Md Shofikul Islam. All rights reserved.
          </h5>
          <div className="footer-description">
            <p className="fs-5"> {text}</p>
            <p className="person fs-6">- Lao Tzu</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
