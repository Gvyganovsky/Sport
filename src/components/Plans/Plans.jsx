import React, { useState, useEffect } from "react";
import './Plans.css'
import { plansData } from "../../data/plansData";
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const centerIndex = Math.floor(plansData.length / 2); // Получаем индекс элемента по центру (округленное значение)
        setActiveIndex(centerIndex); // Устанавливаем изначальное значение активного индекса
    }, []);

    const handlePlanClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className='plans-container'>
            <div className='programs-header' style={{gap: '2rem'}}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITH US</span>
            </div>

            <div className='plans'>
                {plansData.map((plan, index) => (
                    <div
                        className={`plan ${index === activeIndex ? 'active' : ''}`}
                        key={index}
                        onClick={() => handlePlanClick(index)}
                    >
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className='features'>
                            {plan.features.map((feature, index) => (
                                <div className='feature' key={index}>
                                    <img src={whiteTick} alt=""/>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>See more benefits -></span>
                        </div>
                        <button className='btn'>Join now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans;
