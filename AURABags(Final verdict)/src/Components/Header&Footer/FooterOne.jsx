import React from 'react'

const FooterOne = () => {
    const items = [
        'Luggage Bags', 'Cabin Bags', 'Laptop Bags', 'Duffle Bags',
        'Backpacks', 'Hard Trolley Bags', 'Lock for Bags', 'Soft Trolley Bags',
        'Casual Backpacks', 'Trekking Bags', 'School Bags', 'College Bags',
        'Office Bags', 'Kids Backpack', 'Sling Bags', 'Travel Neck Pillow'
    ];

    return (
        <div className="bg-[#272727] text-white">
            <div className="w-[85%] m-auto py-6">
                <h2 className="text-lg font-bold">POPULAR SEARCHES</h2>
                <ul className="flex flex-wrap gap-2 mt-2">
                    {items.map((item, index) => (
                        <li key={index} className="text-sm cursor-pointer underline">{item}</li>
                    ))}
                </ul>
            </div>
            <div className="w-[85%] m-auto py-6">
                <h2 className="text-lg font-bold">BUY BAGS & LUGGAGE ONLINE AT Aura Bags</h2>
                <p className="text-sm mt-2 leading-6">
                    Choose from a wide range of high-quality travel bags designed for convenience, style, and durability. Whether you're embarking on a short trip or a long expedition, Aura Bags ensures you travel effortlessly and in style.
                </p>
            </div>
        </div>
    );
};

export default FooterOne;