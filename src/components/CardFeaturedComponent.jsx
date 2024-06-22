/* eslint-disable react/prop-types */

function CardFeaturedComponent({card}) {
  return (
    <div className="flex flex-col items-center justify-center w-[320px] min-h-[360px] dark:text-whiteText dark:bg-whiteText/10 text-center gap-[10px] bg-darkMainText/90 text-whiteText rounded-lg p-[20px]">
        <img src={card.imageUrl} alt="" className="w-[90px]" />

        <h3 className="font-medium text-[20px]">{card.title}</h3>
        <p className="text-whiteText/40 grow">{card.desc}</p>


        <div className="flex items-center gap-[5px]">
            <img src={card.userImg} alt="" />
            <span>{card.user}</span>
        </div>

        <button className="px-[13px] py-[8px] bg-whiteText/20 rounded-lg mt-[20px]">Install Extension</button>
    </div>
  )
}

export default CardFeaturedComponent