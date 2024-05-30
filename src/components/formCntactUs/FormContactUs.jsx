import "./FormContactUs.css"
export default function FormContactUs(props) {
  let stylingFontForm = {
    color: "white"
  }
  let styleInputs = {
border: "1px solid white",
backgroundColor: "transparent",
color: "white"
  }
  let stylebutton = {
    backgroundColor : "white",
    color: "#0756A5",
  }
    return(
        <>
                <form action="" className="form-contactus">
          <div className="container-inputs">
            <div className="container-input">
              <label htmlFor="name" className="form-label" style={props.stylingFontForm && stylingFontForm}>
                الاسم
              </label>
              <input type="text" className="form-input-contactus" id="name" style={props.styleInputs && styleInputs}/>
            </div>
            <div className="container-input-left">
              <div className="container-lable">
                <label htmlFor="city" className="form-label" style={props.stylingFontForm && stylingFontForm}>
                  المدينة
                </label>
              </div>
              <input type="text" className="form-input-contactus" id="city" style={props.styleInputs && styleInputs}/>
            </div>
          </div>
          <div className="container-input-full">
            <label htmlFor="unit" className="form-label" style={props.stylingFontForm && stylingFontForm}>
              الوحدة
            </label>
            <input type="text" className="form-input-full-contactus" id="unit" style={props.styleInputs && styleInputs}/>
          </div>
          <div className="container-input-full">
            <label htmlFor="email" className="form-label" style={props.stylingFontForm && stylingFontForm}>
              الايميل
            </label>
            <input type="email" className="form-input-full-contactus" id="email" style={props.styleInputs && styleInputs}/>
          </div>
          <div className="container-input-full">
            <label htmlFor="phone" className="form-label" style={props.stylingFontForm && stylingFontForm}>
              رقم الهاتف
            </label>
            <input type="number" className="form-input-full-contactus" id="phone" style={props.styleInputs && styleInputs}/>
          </div>
          <div className="container-input-full">
            <label htmlFor="message" className="form-label" style={props.stylingFontForm && stylingFontForm}>
              الرسالة
            </label>
            <textarea
              className="form-input-full-contactus-message"
              rows="10"
              id="message"
              style={props.styleInputs && styleInputs}
            ></textarea>
            {/* <input type="textarea" rows="4" className="form-input-full-contactus-message" id="message" /> */}
          </div>
          <button className="btn-send-contactus" style={props.stylebutton && stylebutton}>تواصل معنا</button>
        </form>

        </>
    )
}