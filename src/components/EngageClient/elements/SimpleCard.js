import React from "react";

export default function SimpleCard({
  label = "product name",
  color = "gray-700",
  size = "small",
  textColor = "gray",
  image,
  value,
  showValue = false
}) {
  const { width, height, fontSize } = sizeMap[size];

  return (
    <div className="flex-1 m-1">
      <div
        className={`${width} ${height} bg-${color} rounded-lg overflow-hidden shadow relative`}
      >
        <img className="object-cover object-center" src={image} alt="image" />
        <div
          style={{ fontSize }}
          className={`z-40 p-2 font-semibold mb-1 text-center bg-${color} text-${textColor}`}
        >
          {label}
        </div>
      </div>
    </div>
  );
}

const sizeMap = {
  small: {
    width: "w-20",
    height: "h-20",
    fontSize: "8px"
  },
  medium: {
    width: "w-24",
    height: "h-24",
    fontSize: "10px"
  },
  large: {
    width: "w-32",
    height: "h-32"
  }
};
// {/*
// <main className="py-4">
//   <div className="px-4">
//     <div className="block md:flex justify-between md:-mx-2">
//       <div className="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
//           {/* // */}
//         <div className="bg-white rounded-lg overflow-hidden shadow relative">
//           <img className="h-56 w-full object-cover object-center" src="https://images.unsplash.com/photo-1457282367193-e3b79e38f207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80" alt="">
//           <div className="p-4 h-auto md:h-40 lg:h-48">
//             <a href="#" className="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
//               Woman standing under blue sky
//             </a>
//             <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem blanditiis unde asperiores? Officia amet perspiciatis ad quibusdam incidunt eaque, nobis, eveniet neque porro id commodi quisquam debitis!
//             </div>
//             <div className="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
//               <a className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#something</a>
//               <a className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#sky</a>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* // */}

//     </div>
//   </div>
// </main> */}
