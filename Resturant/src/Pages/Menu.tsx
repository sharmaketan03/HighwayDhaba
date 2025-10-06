import { useState } from "react";
import { Card, CardContent } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { Badge } from "../Components/ui/badge";
import { Utensils, Leaf, Flame } from "lucide-react";
import aloogobi from "../assets/aloo-gobi.jpg"

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("starters");

  const categories = [
    { id: "starters", name: "Starters", icon: Utensils },
    { id: "main-veg", name: "Main Course (Veg)", icon: Leaf },
    { id: "rice-bread", name: "Rice & Bread", icon: Utensils },
    { id: "beverages", name: "Beverages", icon: Utensils },
    { id: "desserts", name: "Desserts", icon: Utensils }
  ];

  const menuItems = {
    starters: [
      {
        name: "Samosa (2 pcs)",
        price: "₹40",
        description: "Crispy pastry filled with spiced potatoes and peas",
        veg: true,
        popular: true,
        image:"src/assets/potato-samosas-_2.webp"
      },
      {
        name: "Paneer Tikka",
        price: "₹180",
        description: "Grilled cottage cheese marinated in spices",
        veg: true,
        image: "src/assets/paneer-tikka.jPg"
      },
      {
        name: "Cold COffee",
        price: "₹220",
        description: "Tender Paneer pieces grilled to perfection",
        veg: false,
        spicy: true,
        image: "src/assets/cold COffe.jPg"
      },
      {
        name: "Hot Coffee",
        price: "₹60",
        description: "This is an Hot coffee",
        veg: true,
        image: "src/assets/Hot Coffe.jpg"
      },
      {
        name: "Paneer Pakoda",
        price: "₹120",
        description: "Assorted vegetable fritters",
        veg: true,
        image: "src/assets/paneer Pakoda.webp"
      },
      {
        name: "Aloo Paratha",
        price: "₹280",
        description: "Fresh marinated with traditional spices",
        veg: false,
        image: "src/assets/Aloo Paratha.jpg"
      }
    ],
    "main-veg": [
      {
        name: "Dal Tadka",
        price: "₹140",
        description: "Yellow lentils tempered with aromatic spices",
        veg: true,
        popular: true,
        image: "src/assets/daltdka.webp"
      },
      {
        name: "Paneer Butter Masala",
        price: "₹220",
        description: "Cottage cheese in rich tomato and butter gravy",
        veg: true,
        popular: true,
        image: "src/assets/pannerbuttermasala.jpeg"
      },
      {
        name: "Aloo Gobi",
        price: "₹160",
        description: "Potatoes and cauliflower cooked with spices",
        veg: true,
        image:"src/assets/aloo-gobi.jpg"
      },
      {
        name: "Palak Paneer",
        price: "₹200",
        description: "Cottage cheese in creamy spinach curry",
        veg: true,
        image: "src/assets/Palak-Paneer.jpg"
      },
      {
        name: "Rajma",
        price: "₹160",
        description: "Red kidney beans in thick curry",
        veg: true,
        image: "src/assets/Rajma-Masala.jPg"
      },
      {
        name: "Mixed Vegetable",
        price: "₹180",
        description: "Seasonal vegetables cooked in traditional style",
        veg: true,
        image: "src/assets/mix veitable.jPg"
      },
      {
        name: "Malai Kofta",
        price: "₹240",
        description: "Cottage cheese dumplings in creamy curry",
        veg: true,
        image: "src/assets/malai-kofta-2.jPg"
      },
      {
        name: "Baingan Bharta",
        price: "₹180",
        description: "Roasted eggplant mash with onions and tomatoes",
        veg: true,
        image: "src/assets/Baingan-Bharta-L.jPg"
      }
    ],
    "rice-bread": [
      {
        name: "Steamed Rice",
        price: "₹80",
        description: "Perfectly cooked basmati rice",
        veg: true,
        image: "/images/steamed-rice.jPJ"
      },
      {
        name: "Jeera Rice",
        price: "₹120",
        description: "Cumin flavored basmati rice",
        veg: true,
        image: "/images/jeera-rice.jPJ"
      },
      {
        name: "Vegetable Biryani",
        price: "₹200",
        description: "Fragrant rice with mixed vegetables",
        veg: true,
        image: "/images/veg-biryani.jPJ"
      },
      {
        name: "Roti (2 pcs)",
        price: "₹40",
        description: "Fresh whole wheat flatbread",
        veg: true,
        image: "/images/roti.jPJ"
      },
      {
        name: "Naan",
        price: "₹50",
        description: "Traditional leavened bread from tandoor",
        veg: true,
        image: "/images/naan.jPJ"
      },
      {
        name: "Butter Naan",
        price: "₹60",
        description: "Naan brushed with butter",
        veg: true,
        image: "/images/butter-naan.jPJ"
      },
      {
        name: "Garlic Naan",
        price: "₹70",
        description: "Naan topped with garlic and herbs",
        veg: true,
        image: "/images/garlic-naan.jPJ"
      },
      {
        name: "Laccha Paratha",
        price: "₹60",
        description: "Layered flaky bread",
        veg: true,
        image: "/images/laccha-paratha.jPJ"
      }
    ],
    beverages: [
      {
        name: "Masala Chai",
        price: "₹25",
        description: "Traditional spiced tea",
        veg: true,
        popular: true,
        image: "/images/masala-chai.jPJ"
      },
      {
        name: "Fresh Lime Soda",
        price: "₹40",
        description: "Refreshing lime and soda drink",
        veg: true,
        image: "/images/lime-soda.jPJ"
      },
      {
        name: "Lassi (Sweet)",
        price: "₹60",
        description: "Traditional yogurt drink",
        veg: true,
        image: "/images/lassi.jPJ"
      },
      {
        name: "Mango Lassi",
        price: "₹80",
        description: "Creamy mango yogurt drink",
        veg: true,
        image: "/images/mango-lassi.jPJ"
      },
      {
        name: "Fresh Juice",
        price: "₹80",
        description: "Seasonal fruit juice",
        veg: true,
        image: "/images/juice.jPJ"
      },
      {
        name: "Soft Drinks",
        price: "₹40",
        description: "Assorted cold drinks",
        veg: true,
        image: "/images/soft-drinks.jPJ"
      },
      {
        name: "Buttermilk",
        price: "₹50",
        description: "Spiced yogurt drink",
        veg: true,
        image: "/images/buttermilk.jPJ"
      },
      {
        name: "Filter Coffee",
        price: "₹35",
        description: "South Indian style coffee",
        veg: true,
        image: "/images/filter-coffee.jPJ"
      }
    ],
    desserts: [
      {
        name: "Gulab Jamun (2 pcs)",
        price: "₹80",
        description: "Soft milk dumplings in sugar syrup",
        veg: true,
        popular: true,
        image: "/images/gulab-jamun.jPJ"
      },
      {
        name: "Rasmalai (2 pcs)",
        price: "₹100",
        description: "Cottage cheese dumplings in milk",
        veg: true,
        image: "/images/rasmalai.jPJ"
      },
      {
        name: "Kheer",
        price: "₹90",
        description: "Rice pudding with nuts and cardamom",
        veg: true,
        image: "/images/kheer.jPJ"
      },
      {
        name: "Jalebi",
        price: "₹60",
        description: "Crispy spiral sweets in sugar syrup",
        veg: true,
        image: "/images/jalebi.jPJ"
      },
      {
        name: "Kulfi",
        price: "₹70",
        description: "Traditional Indian ice cream",
        veg: true,
        image: "/images/kulfi.jPJ"
      },
      {
        name: "Gajar Halwa",
        price: "₹120",
        description: "Carrot pudding with nuts and milk",
        veg: true,
        image: "/images/gajar-halwa.jPJ"
      },
      {
        name: "Ice Cream",
        price: "₹80",
        description: "Assorted flavors available",
        veg: true,
        image: "/images/ice-cream.jPJ"
      },
      {
        name: "Fresh Fruit Plate",
        price: "₹100",
        description: "Seasonal fresh fruits",
        veg: true,
        image: "/images/fruit-plate.jPJ"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* ... Hero & Special Offers sections stay the same ... */}

      {/* Menu Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
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
                    <h3 className="text-lg font-semibold text-heritage-brown">{item.name}</h3>
                    <span className="text-xl font-bold text-traditional-gold">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {item.veg && (
                        <Badge className="bg-green-100 text-green-800 border-green-300">
                          <Leaf className="h-3 w-3 mr-1" />
                          Veg
                        </Badge>
                      )}
                      {!item.veg && (
                        <Badge className="bg-red-100 text-red-800 border-red-300">
                          <Flame className="h-3 w-3 mr-1" />
                          Non-Veg
                        </Badge>
                      )}
                      {item.popular && (
                        <Badge className="bg-traditional-gold/20 text-heritage-brown border-traditional-gold/30">
                          Popular
                        </Badge>
                      )}
                      {item.spicy && (
                        <Badge className="bg-orange-100 text-orange-800 border-orange-300">
                          Spicy
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ... Combo Meals & Order Section remain unchanged ... */}
    </div>
  );
};

export default Menu;
