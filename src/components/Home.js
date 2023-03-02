import React from 'react'
import { useValues } from '../Context/ContextProvider'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const { windowInnerWidth } = useValues()
  const navigate = useNavigate()
  return (
    <>
      <div className={`d-flex flex-column justify-content-center position-relative text-center pt-5 ${windowInnerWidth < 600 ? 'px-1' : 'px-5'}`} 
        style={
        {backgroundImage: "url('./images/background.jpg')" , 
        backgroundSize: 'cover' , 
        minHeight: '100vh' ,
        backgroundPosition: 'center' ,
        backgroundRepeat: 'no-repeat' ,
        backgroundAttachment: 'fixed'}}>
          <p className={`text-bg-dark display-2 fw-bold font-monospace mt-5 mb-4 ${windowInnerWidth < 576 ? 'mx-3' : 'mx-5'}`}>Welcome to Southern Spices</p>
          <p className={`text-bg-dark fs-6 mb-5 ${windowInnerWidth < 400 ? 'mx-1 px-2' : 'mx-5'}`}>
            This non-veg restaurant offers a variety of delicious dishes made with fresh ingredients. From succulent grilled meats to flavorful curries, there is something for everyone to enjoy. All of the dishes are prepared with the utmost care and attention, ensuring that every bite is full of flavor. The restaurant also offers a range of sides, such as salads, naan breads and rice, to accompany the mains. The atmosphere is casual and relaxed, making it the perfect spot for a family dinner or a night out with friends.
            
            <br />
            <br />
            
            The restaurant also offers a selection of beverages to pair with your meal. From craft beers to wines, there is something for everyone. Desserts are also available, featuring traditional Indian sweets and other treats. The friendly and attentive staff are always on hand to make sure that your experience is top-notch. Whether you're looking for a quick bite or a leisurely meal, this non-veg restaurant is sure to satisfy.
            
            </p>
            <div className='position-absolute top-0 end-0 pe-5 mt-3'>
              <div className='input-group'>
                <button className='btn btn-primary btn-lg' onClick={() => navigate('/login')}>Login</button>
                <button className='btn btn-info btn-lg' onClick={() => navigate('/signup')}>SignIn</button>
              </div>
            </div>
      </div>

    </>
  )
}
