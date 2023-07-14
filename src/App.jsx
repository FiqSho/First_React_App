import Header from "./component/Header";
import Content from "./component/Content";
import Footer from "./component/Footer";
import "./app.css"
const App = () => {
  return (
    <div className="app" >
     
      <Header title="My First React Application"/> 
      <Content/>
      <Footer/>
      
    </div>
  );
};

export default App;