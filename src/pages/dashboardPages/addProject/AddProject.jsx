import { useState } from "react";
import "./AddProject.scss";
export default function AddProject() {

  return (
    
    <>
      <div
        id="add-project"
        className="container d-flex flex-column align-items-end my-5 "
      >
        <form action="" className="form-contactus">
        <div className="container-input-full mb-5">
            <label htmlFor="unit" className="form-label">
              اسم المشروع
            </label>
            <input type="text" className="form-input-full-contactus" />
      
          </div>






          <div className="container-input-full mb-5">
          <label htmlFor="unit" className="form-label">
              صورة الغلاف
            </label>
            <input className="form-control form-control-lg" id="formFileLg"  type="file"/>
          {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/ratchet/2.0.2/css/ratchet.css" rel="stylesheet"/>
          <label for="imageUpload" className="btn btn-primary btn-block btn-outlined btn-img">اختار صورة</label>
          <input type="file" id="imageUpload" accept="image/*" style={{display: 'none'}}/> */}
          </div>


        
          <div className="container-input-full mb-5">
          <label htmlFor="unit" className="form-label">
              صور المشروع 
            </label>
            <input className="form-control form-control-lg" id="formFileLg" multiple type="file"/>
          </div>




          <div className="container-input-full mb-5">
            <label htmlFor="message" className="form-label" >
              تفاصيل المشروع
            </label>
            <textarea
              className="form-input-full-contactus-message"
              rows="10"
              id="message"
            ></textarea>
          </div>







          <div className="container-input-full mb-5">
            <label htmlFor="unit" className="form-label">
الشعار            </label>
            <input type="text" className="form-input-full-contactus" />
      
          </div>










          <div className="container-input-full mb-5">
            <label htmlFor="unit" className="form-label">
             الحي
            </label>
            <input type="text" className="form-input-full-contactus" />
      
          </div>







          <div className="container-input-full mb-5">
            <label htmlFor="unit" className="form-label">
             عدد المباني
            </label>
            <input type="number" className="form-input-full-contactus" />
      
          </div>



          <select className="form-select mb-5" multiple aria-label="multiple select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>





          <button className="btn-send-contactus">حفظ المشروع</button>



       
      
       
        </form>
      </div>
    </>
  );
}