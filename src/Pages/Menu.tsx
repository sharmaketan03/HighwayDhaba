import { useState } from "react";
import { Card, CardContent } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { Badge } from "../Components/ui/badge";
import { Utensils, Leaf, Flame } from "lucide-react";
import samosa from "../assets/potato-samosas-_2.webp"
import paneertikka from  "../assets/paneer-tikka.jpg"
import coldcoffee from "../assets/cold-COffe.jpg"
import hotcoffe from "../assets/Hot-Coffe.jpg"
import pannerpakoda from "../assets/paneer-Pakoda.webp"
import aloopratha from "../assets/Aloo-Paratha.jpg"
// ⚙️ Type for each menu item
type MenuItem = {
  name: string;
  price: string;
  description: string;
  veg: boolean;
  image: string;
  popular?: boolean;
  spicy?: boolean;
};

// ⚙️ Type for all categories
type MenuData = {
  [key: string]: MenuItem[];
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("starters");

  const categories = [
    { id: "starters", name: "Starters", icon: Utensils },
    { id: "main-veg", name: "Main Course (Veg)", icon: Leaf },
    { id: "rice-bread", name: "Rice & Bread", icon: Utensils },
    { id: "beverages", name: "Beverages", icon: Utensils },
    { id: "desserts", name: "Desserts", icon: Utensils },
  ];

  const menuItems: MenuData = {
    starters: [
      {
        name: "Samosa (2 pcs)",
        price: "₹40",
        description: "Crispy pastry filled with spiced potatoes and peas",
        veg: true,
        popular: true,
        image:` ${samosa}`,
      },
      {
        name: "Paneer Tikka",
        price: "₹180",
        description: "Grilled cottage cheese marinated in spices",
        veg: true,
        image:` ${paneertikka}`,
      },
      {
        name: "Cold Coffee",
        price: "₹220",
        description: "Chilled coffee with ice cream and cream",
        veg: true,
        spicy: false,
        image: ` ${coldcoffee}`  ,
      },
      {
        name: "Hot Coffee",
        price: "₹60",
        description: "This is a hot coffee",
        veg: true,
        image:  ` ${hotcoffe}` ,
      },
      {
        name: "Paneer Pakoda",
        price: "₹120",
        description: "Assorted vegetable fritters",
        veg: true,
        image: ` ${pannerpakoda}` ,
      },
      {
        name: "Aloo Paratha",
        price: "₹280",
        description: "Fresh marinated with traditional spices",
        veg: true,
        image:` ${ aloopratha}`,
      },
    ],
    "main-veg": [
      {
        name: "Dal Tadka",
        price: "₹140",
        description: "Yellow lentils tempered with aromatic spices",
        veg: true,
        popular: true,
        image: "src/assets/dal-tadka.webp",
      },
      {
        name: "Paneer Butter Masala",
        price: "₹220",
        description: "Cottage cheese in rich tomato and butter gravy",
        veg: true,
        popular: true,
        image: "src/assets/paneer-butter-masala.jpeg",
      },
      {
        name: "Aloo Gobi",
        price: "₹160",
        description: "Potatoes and cauliflower cooked with spices",
        veg: true,
        image: "src/assets/aloo-gobi.jpg",
      },
      {
        name: "Palak Paneer",
        price: "₹200",
        description: "Cottage cheese in creamy spinach curry",
        veg: true,
        image: "src/assets/palak-paneer.jpg",
      },
      {
        name: "Rajma",
        price: "₹160",
        description: "Red kidney beans in thick curry",
        veg: true,
        image: "src/assets/rajma-masala.jpg",
      },
      {
        name: "Malai Kofta",
        price: "₹240",
        description: "Cottage cheese dumplings in creamy curry",
        veg: true,
        image: "src/assets/malai-kofta-2.jpg",
      },
    ],
    // other categories (rice-bread, beverages, desserts) can stay same
  };

  return (
    <div className="min-h-screen">
      {/* Menu Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "heritage" : "outline"}
                className="flex items-center space-x-2"
                onClick={() => setActiveCategory(category.id)}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </Button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems[activeCategory]?.map((item, index) => (
              <Card
                key={index}
                className="p-6 shadow-warm hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                  )}

                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-heritage-brown">
                      {item.name}
                    </h3>
                    <span className="text-xl font-bold text-traditional-gold">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex space-x-2">
                    {item?.veg && (
                      <Badge className="bg-green-100 text-green-800 border-green-300">
                        <Leaf className="h-3 w-3 mr-1" />
                        Veg
                      </Badge>
                    )}
                    {!item?.veg && (
                      <Badge className="bg-red-100 text-red-800 border-red-300">
                        <Flame className="h-3 w-3 mr-1" />
                        Non-Veg
                      </Badge>
                    )}
                    {item?.popular && (
                      <Badge className="bg-traditional-gold/20 text-heritage-brown border-traditional-gold/30">
                        Popular
                      </Badge>
                    )}
                    {item?.spicy && (
                      <Badge className="bg-orange-100 text-orange-800 border-orange-300">
                        Spicy
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;