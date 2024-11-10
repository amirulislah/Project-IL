import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const frequentlyAskQuestion = [
    {
        titlle: "Produk apa saja yang disediakan HIDROKUAPONIK??",
        descripti:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        titlle: "Berapa biaya untuk memulai sistem hidroponik atau akuaponik?",
        descripti:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        titlle: "What is Lorem Ipsum?",
        descripti:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
];


const Faq = () => {
    const [activeId, setactiveId] = useState(null);

    const togglerFunction = (index) => {
        if (activeId == index) {
            setactiveId(null);
        } else {
            setactiveId(index);
        }
    };
    return (
        <div className='w-full py-10'>
            <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight text-center my-5">Pertanyaan</h2>
            <div className='w-[600px] m-auto border rounded-lg overflow-hidden'>
                {frequentlyAskQuestion.map((item, i) => (
                    <div className='border-b last:border-b-0 cursor-pointer'>
                        <div key={i} className={'px-5 py-4 flex items-center justify-center ${activeId ==  i ? "bg-gray-100"}'} onClick={() => togglerFunction(i)}>
                            <p className='flex-1'>{item.titlle}
                            </p>
                            <span>
                                {activeId == i ? (
                                    <FaAngleUp />
                                ) : (
                                    <FaAngleDown />
                                )
                                }
                            </span>
                        </div>
                        {activeId == i && (
                            <div className='px-5 py-4 flex items-center justify-between'>
                                <p>{item.descripti}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq;