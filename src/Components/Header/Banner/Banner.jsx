import uni from '../../../assets/harvard-university-cambridge-usa.jpg'
const Banner = () => {
    return (
        <div className='flex items-center'>
            <img className='h-36  object-contain mx-auto' src={uni} alt="" />
        </div>
    );
};

export default Banner;