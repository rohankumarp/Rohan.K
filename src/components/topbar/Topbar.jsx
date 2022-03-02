import "./topbar.scss";

export default function Topbar({open,setopen}) {
  return (
    <div className={"topbar " + (open && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Rohan.K
          </a>
      
          <div className="extra">
            <a href="https://www.linkedin.com/in/rohan-kumar-pillay-7572b31b0/">
              <i className="fa fa-linkedin-square col "></i>
            </a>
          </div>

          <div className="extra">
            <a href="https://github.com/rohankumarp">
              <i className="fa fa-github-square col " aria-hidden="true"></i>
            </a>
          </div>

          <div className="extra">
            <a href="#">
              <i className="fa fa-envelope-square col " aria-hidden="true"></i>
            </a>
          </div>
        </div>
          
        

        <div className="right">

          <div className="hamburger" onClick={()=>setopen(!open)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
          
        </div>
      </div>
    </div>
  );
}
