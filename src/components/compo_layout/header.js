import env from '../../env/env.js'
import './header.css'
import { Container } from 'react-bootstrap';
const header = () =>(
    <Container fluid className="header" style={headerStyle}>
      <h1 className="title">TERMINAL BYTE</h1>
      <h2 className="Username">Username</h2>
    </Container>
)
const headerStyle = {
    background: env.colors.lightSkyBlue,
  };    
  export default header;
// timer
  /*setInterval(function time(){
    var d = new Date();
    var hours = 24 - d.getHours();
    var min = 60 - d.getMinutes();
    if((min + '').length == 1){
      min = '0' + min;
    }
    var sec = 60 - d.getSeconds();
    if((sec + '').length == 1){
          sec = '0' + sec;
    }*/