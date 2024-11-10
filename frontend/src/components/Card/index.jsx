const Card = ({
    image, title, description, 
}) => {
    return (
        <div className="max-w-sm   rounded overflow-hidden shadow-lg">
            <img className="w-96 mx-3" src={image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            
            <div className="font-normal text-sm m-5"></div>
        </div>
    )
}
export default Card