import Link from 'next/link';
import Moment from 'react-moment';
import { MdLocationOn } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';

export default function ListingItem({ id, listing, onEdit, onDelete }) {
  return (
    <div className="relative">
      <Link href={`/category/${listing.type}/${id}`}>
        <div className="relative bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-150 m-[10px] cursor-pointer">
          <img
            src={listing.imgUrls[0]}
            alt="listing"
            loading="lazy"
            className="h-[170px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in"
          />
          <Moment
            className="absolute top-2 left-2 bg-[#3377cc] text-white uppercase text-xs font-semibold rounded-md px-2 py-1 shadow-lg"
            fromNow
          >
            {listing.timestamp?.toDate()}
          </Moment>
          <div className="w-full p-[10px]">
            <div className="flex items-center space-x-1">
              <MdLocationOn className="h-5 w-5 text-green-600" />
              <p className="font-semibold text-sm mb-[2px] text-gray-600 truncate">
                {listing.address}
              </p>
            </div>
            <p className="font-semibold m-0 text-xl truncate">{listing.name}</p>
            <p className="text-[#457b9d] mt-2 font-semibold">
              $
              {listing?.offer
                ? listing?.salePrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                : listing?.regularPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              {listing?.type === 'rent' && ' / month'}
            </p>
            <div className="flex items-center mt-[10px] space-x-3">
              <div className="flex items-center space-x-1">
                <p className="font-bold text-xs">
                  {listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : '1 Bed'}
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <p className="font-bold text-xs">
                  {listing.bathrooms > 1
                    ? `${listing.bathrooms} Baths`
                    : '1 Bath'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
      {onDelete && (
        <FaTrash
          className="absolute bottom-4 right-4 h-[14px] text-red-700 cursor-pointer"
          onClick={() => onDelete(id)}
        />
      )}
      {onDelete && (
        <MdEdit
          className="absolute bottom-4 right-10 h-4 w-4 text-gray-800 cursor-pointer"
          onClick={() => onEdit(id)}
        />
      )}
    </div>
  );
}
