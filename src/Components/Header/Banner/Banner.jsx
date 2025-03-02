import uni from '../../../assets/harvard-university-cambridge-usa.jpg'
const Banner = () => {
    return (
        <div className='flex items-center my-12'>
            <img className='max-h-96  object-contain mx-auto' src={uni} alt="" />
        </div>
    );
};

export default Banner;