
import './EditProject.css'
export default function EditProject() {

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
            <input class="form-control form-control-lg" id="formFileLg"  type="file"/>
  
          </div>


        
          <div className="container-input-full mb-5">
          <label htmlFor="unit" className="form-label">
              صور المشروع 
            </label>
            <input class="form-control form-control-lg" id="formFileLg" multiple type="file"/>
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
