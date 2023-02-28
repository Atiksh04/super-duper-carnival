import { FC } from 'react';
import TrendIcon from "../icons/trend.svg";
import Icon from '../components/Icon';
import Text from '../components/Text';

const HomePage: FC = ()=>{
    return(
        <div className='w-screen h-screen bg-[#14172B] text-white px-20'>
            <div className='flex items-center justify-start my-auto h-full'>
                <div className='flex items-center justify-center w-fit'>
                    <Icon icon={TrendIcon} altText={"trend-icon"}/>
                    <Text text={"Trending Assets"} additionalClasses="ml-4"/>
                </div>
            </div>
        </div>
    )
} 

export default HomePage;