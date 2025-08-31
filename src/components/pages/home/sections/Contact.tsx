import React from 'react'

const Contact = () => {
    return (
        <div className='flex flex-row'>
            <div className='w-1/2 flex-col'>
                <span className='text-3xl'>
                    Get in touch...
                </span>
                <form className='flex flex-col space-y-2 mt-4'>
                    <label>Name*
                    </label>
                    <input type="text" placeholder="Your Name" className='border border-gray-300 p-2 rounded-md' />
                    <label>Message</label>
                    <textarea placeholder="Your Message" className='border border-gray-300 p-2 rounded-md mt-2' />
                    <label>Mobile No*</label>
                    <input type="text" placeholder="Your Mobile No" className='border border-gray-300 p-2 rounded-md mt-2' />
                    <label>Email*</label>
                    <input type="email" placeholder="Your Email" className='border border-gray-300 p-2 rounded-md mt-2' />
                    <span className='text-red-500 text-sm'>* Indicates required fields</span>
                    <button type="submit" className='bg-blue-500 text-white p-2 rounded-md mt-2'>Send</button>
                </form>
            </div>
            <div className='w-1/2 flex-col'>
                <span className='font-bold text-2xl'>Office Hours</span>
                <span className='space-between'><span className='font-mono'>Mon - Fri</span> 4:00 PM - 7:15 PM</span>
                <span className='space-between'>
                    <span className='font-mono'>Sat - Sun</span> Closed
                </span>

                <span>Contact:</span>
                <span className='font-mono'>Telephone: (123) 456-7890</span>
                <span className='font-mono'>Email: info@example.com</span>
                <span className='font-mono'>Whatsapp: https://wa.me/1234567890</span>
                <span className='font-mono'>Address: 123 Main St, City, Country</span>
            </div>
        </div>
    )
}

export default Contact;