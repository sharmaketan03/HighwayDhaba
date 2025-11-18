// import { useState } from "react";
// import { Card, CardContent } from "../Components/ui/card";
// import { Button } from "../Components/ui/button";
// import { Badge } from "../Components/ui/badge";
// import { Heart, X } from "lucide-react";

// const categories = ["all", "food", "interior", "rooms", "kitchen"];

// export default function Gallery() {
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [likedItems, setLikedItems] = useState<number[]>([]);
//   const [lightboxImage, setLightboxImage] = useState<string | null>(null);

//   const galleryItems = [
//     {
//       id: 1,
//       image:
//         "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
//       title: "Traditional Dhaba Interior",
//       category: "interior",
//     },
//     {
//       id: 2,
//       image:
//         "https://images.unsplash.com/photo-1604908812958-28e6b37da87f?auto=format&fit=crop&w=800&q=80",
//       title: "Authentic Indian Thali",
//       category: "food",
//       popular: true,
//     },
//     {
//       id: 3,
//       image:
//         "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80",
//       title: "Comfortable Guest Room",
//       category: "rooms",
//     },
//     {
//       id: 4,
//       image:
//         "https://images.unsplash.com/photo-1606851090167-3a5e88cba1cc?auto=format&fit=crop&w=800&q=80",
//       title: "Live Kitchen Experience",
//       category: "kitchen",
//       featured: true,
//     },
//     {
//       id: 7,
//       image:
//         "https://images.unsplash.com/photo-1598514982378-42b88998aa31?auto=format&fit=crop&w=800&q=80",
//       title: "Dal Tadka Special",
//       category: "food",
//     },
//     {
//       id: 10,
//       image:
//         "https://images.unsplash.com/photo-1556911073-52527ac437f5?auto=format&fit=crop&w=800&q=80",
//       title: "Tandoor Cooking",
//       category: "kitchen",
//     },
//   ];

//   const filteredItems =
//     activeCategory === "all"
//       ? galleryItems
//       : galleryItems.filter((i) => i.category === activeCategory);

//   const toggleLike = (id: number) => {
//     setLikedItems((prev) =>
//       prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
//     );
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Heading */}
//       <section className="py-16 text-center">
//         <h1 className="text-4xl font-bold mb-4">PG Dhaba Gallery</h1>
//         <p className="text-lg text-gray-500">
//           Explore delicious food, ambience, and more.
//         </p>
//       </section>

//       {/* Category Filters */}
//       <div className="flex justify-center gap-3 pb-8">
//         {categories.map((cat) => (
//           <Button
//             key={cat}
//             variant={activeCategory === cat ? "default" : "outline"}
//             onClick={() => setActiveCategory(cat)}
//             className="capitalize"
//           >
//             {cat}
//           </Button>
//         ))}
//       </div>

//       {/* Masonry Gallery */}
//       <div className="container mx-auto px-4 pb-20">
//         <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
//           {filteredItems.map((item) => (
//             <Card
//               key={item.id}
//               className="relative overflow-hidden group cursor-pointer break-inside-avoid"
//             >
//               <img
//                 src={item.image}
//                 className="w-full rounded-lg object-cover group-hover:scale-110 transition-all duration-700"
//                 onClick={() => setLightboxImage(item.image)}
//               />

//               {/* Overlay & Like Button */}
//               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300">
//                 <Button
//                   size="sm"
//                   variant="outline"
//                   className="absolute bottom-3 left-3 text-white border-white"
//                   onClick={() => toggleLike(item.id)}
//                 >
//                   <Heart
//                     className={`h-4 w-4 ${
//                       likedItems.includes(item.id)
//                         ? "fill-red-600 text-red-600"
//                         : ""
//                     }`}
//                   />
//                 </Button>
//               </div>

//               {/* Badges */}
//               <div className="absolute top-4 left-4 flex gap-2">
//                 {item.featured && (
//                   <Badge className="bg-yellow-400 text-black">Featured</Badge>
//                 )}
//                 {item.popular && (
//                   <Badge className="bg-red-600 text-white">Popular</Badge>
//                 )}
//               </div>

//               <CardContent className="p-3">
//                 <h2 className="font-semibold text-lg">{item.title}</h2>
//                 <p className="text-xs text-gray-600 capitalize">
//                   {item.category}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Lightbox */}
//       {lightboxImage && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
//           <img
//             src={lightboxImage}
//             className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
//           />

//           <Button
//             className="absolute top-6 right-6 bg-white text-black"
//             onClick={() => setLightboxImage(null)}
//           >
//             <X className="w-5 h-5" />
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useState } from "react";

export default function Gallery() {
  const categories = ["Kitchen", "Bedroom", "Living Room", "Office"];

  const images: { url: string; category: string }[] = [
    { url: "https://via.placeholder.com/300x200?text=Kitchen+1", category: "Kitchen" },
    { url: "https://via.placeholder.com/300x200?text=Kitchen+2", category: "Kitchen" },
    { url: "https://via.placeholder.com/300x200?text=Bedroom+1", category: "Bedroom" },
    { url: "https://via.placeholder.com/300x200?text=Bedroom+2", category: "Bedroom" },
    { url: "https://via.placeholder.com/300x200?text=Living+Room+1", category: "Living Room" },
    { url: "https://via.placeholder.com/300x200?text=Office+1", category: "Office" },
  ];

  const [activeCategory, setActiveCategory] = useState("Kitchen");

  const filteredImages = images.filter((img) => img.category === activeCategory);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Gallery</h1>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-white ${
              activeCategory === cat ? "bg-blue-600" : "bg-gray-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img src={img.url} className="w-full h-48 object-cover" alt="Gallery" />
          </div>
        ))}
      </div>
    </div>
  );
}
