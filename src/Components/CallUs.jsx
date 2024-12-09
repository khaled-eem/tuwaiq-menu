import React from 'react'
import MainLayout from '../Layout/MainLayout';
const CallUs = () => {
    return ( <>
    
    <MainLayout>
    <div className="container mt-5">
      <h2 className="text-center mb-4">اتصل بنا</h2>

      <p className="text-center">
        نحن هنا لخدمتكم! يسرنا أن نسمع منكم ونجيب على جميع استفساراتكم واقتراحاتكم.
      </p>

      <div className="row mt-4">
       
        <div className="col-md-6">
          <h4>معلومات التواصل</h4>
          <ul className="list-unstyled">
            <li>
              <strong>📞 الهاتف:</strong> 0555555557
            </li>
            <li>
              <strong>📧 البريد الإلكتروني:</strong> menu@gmail.com
            </li>
            <li>
              <strong>📍 العنوان:</strong> المملكة العربية السعودية، الرياض، حي النخيل
            </li>
          </ul>

          <h4 className="mt-4">ساعات العمل</h4>
          <ul className="list-unstyled">
            <li>
              <strong>⏰ الأحد - الخميس:</strong> 10:00 صباحًا - 11:00 مساءً
            </li>
            <li>
              <strong>⏰ الجمعة والسبت:</strong> 12:00 مساءً - 12:00 صباحًا
            </li>
          </ul>
        </div>

        
        <div className="col-md-6">
          <h4>نموذج التواصل</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                الاسم:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="أدخل اسمك"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                البريد الإلكتروني:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="أدخل بريدك الإلكتروني"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                الرسالة:
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                placeholder="أدخل رسالتك"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              إرسال
            </button>
          </form>
        </div>
      </div>

    </div>
    </MainLayout>
    
    
    </> );
}
 
export default CallUs;