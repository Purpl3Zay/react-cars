import Background from '../assets/images/Car.jpeg'

function Contact() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed h-full'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 bg-black bg-opacity-50 text-white rounded backdrop-blur-sm -mt-40 mb-40'>Car</h3>
        </div>
    </div>
  )
}

export default Contact