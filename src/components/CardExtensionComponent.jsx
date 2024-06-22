/* eslint-disable react/prop-types */
// icons
import {
	MdKeyboardCommandKey,
	MdOutlineDownloadForOffline,
} from 'react-icons/md';

function CardExtensionComponent({ card }) {
	return (
		<div className='dark:text-whiteText/40 flex flex-col p-[30px] border dark:border-whiteText/10 rounded-lg dark:bg-whiteText/5 bg-darkMainText/90 text-whiteText gap-[10px] relative'>
			<div className='flex items-center gap-[10px]'>
				<img src={card.imageUrl} alt='' />
				<h4>{card.title}</h4>
			</div>
			<p>{card.desc}</p>

			<div className='flex items-center gap-[10px] mt-[30px]'>
				<img src={card.userImage} alt='' />
				<span className='dark:text-whiteText/80'>{card.user}</span>

				{card.commands && (
					<div className='flex items-center gap-[5px]'>
						<MdKeyboardCommandKey />
						<span>{card.commands} Commands</span>
					</div>
				)}

				<div className='flex items-center gap-[5px]'>
					<MdOutlineDownloadForOffline />
					<span>{card.download} Download</span>
				</div>
			</div>
			<button className='absolute top-[30px] right-[30px] dark:bg-whiteText/10 px-[13px] py-[8px] text-[14px] rounded-lg text-whiteText bg-whiteText/15'>
				Install
			</button>
		</div>
	);
}

export default CardExtensionComponent;
