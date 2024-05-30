import { NavLink } from "react-router-dom";
import "./PaymentMethod.css";
export default function PaymentMethod() {
  return (
    <>
      <div className="payment-method-section">
        <div className="payment-method-container container">
          <div className="left-about-us">
            <h1 className="head-text-section-2">
              <span className="our-info-text"> ------- كيفية البيع </span>
              <br />
              كيف تبيع من
              <span className="your-choose"> خلالنا؟ </span>
            </h1>
            <p className="desc-section-t">
              من تحليلات السوق الدقيقة إلى إتمام الصفقات بنجاح: فريقنا يعمل
              جاهدًا عشان يكون مفتاح نجاح عملية بيع بيتك اطمئن وثق إنك في أيد
              أفضل الخبراء في عالم العقارات.
            </p>
            <div className="container-button">
                <NavLink to={'/projects'}>
              <button className="btns-section-2">شوف مشاريعنا</button>
                </NavLink>
                <NavLink to={'/about'}>
              <button className="btns-section-2 btn-read-more">
                اعرف أكثر
              </button>
                </NavLink>
            </div>
          </div>
          <div className="payment-method-left">
            <div className="payment-method">
              <div className="number-container">1</div>
              <div className="container-text-payment">
                <h1 className="heading-container-text-payment"> ضيف عقارك</h1>
                <p className="desc-container-text-payment">
                تواصل معنا للحصول على استشارة الخبير
                </p>
              </div>
            </div>
            <div className="payment-method">
              <div className="number-container">2</div>
              <div className="container-text-payment">
                <h1 className="heading-container-text-payment">
                مهمة فريق أبعاد
                </h1>
                <p className="desc-container-text-payment">
                ما تشيل هم فريقنا راح يتولى رحلة البيع حتى النهاية                </p>
              </div>
            </div>
            <div className="payment-method">
              <div className="number-container">3</div>
              <div className="container-text-payment">
                <h1 className="heading-container-text-payment">
                تم البيع                </h1>
                <p className="desc-container-text-payment">
                تمت الصفقة بيع ولا اسهل                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
