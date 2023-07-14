
import '../assets/css/Header.css'
const Header = ({title}) => {
    return (
        <div className="container bg-warning ">
        <div className="row">
          <div className="col text-center ">
            <h2>{title}</h2>
            
          </div>
        </div>
      </div>
    );
};

export default Header;



