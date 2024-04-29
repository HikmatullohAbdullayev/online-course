
import SoatIcon from '../../../../assets/icon/SoatIcon';

function NumberCard(props) {
    return (
        <div className='flex flex-col gap-20  p-10  border border-shadow shadow-sm max-w-[550px] w-full'>
            <p className='text-right  font-extrabold text-title48 p-4 '>{props.number}</p>
            <h3 className='font-600 text-subTitle24 p-10'>{props.title}</h3>
            <ul className='grid gap-10'>
                <li className='flex justify-between items-center divide-transparent  px-16 py-8 hover:border hover:border-secondary hover:shadow-secondary rounded-8 tablemin:flex tablemin:flex-col tablemin:items-start tablemin:gap-10'>
                    <div className="flex flex-col gap-8 ">
                        <p className='font-500 text-name20 p-8'>{props.lesson1Title}</p>
                        <p className='font-400 text-text18 text-text'>{props.lesson1}</p>
                    </div>
                    <div  className="flex items-center gap-8 px-14 py-12 border-shadow border rounded-8 hover:bg-secondary hover:text-white ">
                        <span className='hover:text-white'><SoatIcon/></span>
                        <p className='text-nowrap'>{props.lesson1Time}</p>
                    </div>
                </li>
                <li className='flex justify-between items-center  px-16 py-8 hover:border hover:border-secondary hover:shadow-secondary rounded-8 tablemin:flex tablemin:flex-col tablemin:items-start tablemin:gap-10'>
                    <div className="flex flex-col gap-8 ">
                        <p className='font-500 text-name20 p-8'>{props.lesson2Title}</p>
                        <p className='font-400 text-text18 text-text'>{props.lesson2}</p>
                    </div>
                    <div  className="flex items-center gap-8 px-14 py-12 border-shadow border rounded-8 hover:bg-secondary hover:text-white ">
                        <span className='hover:text-white'><SoatIcon/></span>
                        <p className='text-nowrap'>{props.lesson2Time}</p>
                    </div>
                </li>
                <li className='flex justify-between items-center  px-16 py-8 hover:border hover:border-secondary hover:shadow-secondary rounded-8 tablemin:flex tablemin:flex-col tablemin:items-start tablemin:gap-10'>
                    <div className="flex flex-col gap-8 ">
                        <p className='font-500 text-name20 p-8'>{props.lesson3Title}</p>
                        <p className='font-400 text-text18 text-text'>{props.lesson3}</p>
                    </div>
                    <div  className="flex items-center gap-8 px-14 py-12 border-shadow border rounded-8 hover:bg-secondary hover:text-white ">
                        <span className='hover:text-white'><SoatIcon/></span>
                        <p lassName='text-nowrap'>{props.lesson3Time}</p>
                    </div>
                </li>
                
            </ul>

            
        </div>
    );
}

export default NumberCard;