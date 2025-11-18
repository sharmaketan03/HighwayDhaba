






import { useState } from "react";
import { Card, CardContent } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { Badge } from "../Components/ui/badge";
// Added new icons for new categories
import { Utensils, Leaf, Pizza, Sandwich, ChefHat, Coffee, CookingPot, Layers, Package, GlassWater } from "lucide-react"; 
// // ✅ ALL IMAGE IMPORTS (FIXED & CONSOLIDATED LIST)
// Ensure these paths are correct in your project structure
// import { useState } from "react";
// import { Card, CardContent } from "../Components/ui/card";
// import { Button } from "../Components/ui/button";
// import { Badge } from "../Components/ui/badge";
// // Added new icons for new categories
// import { Utensils, Leaf, Pizza, Sandwich, ChefHat, Coffee, CookingPot, Layers, Package, GlassWater } from "lucide-react"; 

// ✅ ALL IMAGE IMPORTS (FIXED & CONSOLIDATED LIST)
// Ensure these paths are correct in your project structure
import HotCoffe from "../assets/HotCoffe.jpg"; // OK
import coldCoffe from "../assets/cold-COffe.jpg" // OK
import alooParatha from "../assets/pannerparatha.png"; // OK
import cauliflowerParatha from "../assets/Cauliflowerparatha.png"; // Changed casing
import mixVegUttapam from "../assets/mixveguTTapam.jpg"; // OK
import onionUttapam from "../assets/onionuthappam.webp"; // OK
import paneerPakoda from "../assets/paneer-Pakoda.webp"; // OK
import onionDosa from "../assets/OnionDosa.jpeg"; // OK
import masalaDosa from "../assets/MasalaDosa.jpeg"; // OK
import paneerDosa from "../assets/paneerDosa.jpeg"; // OK
import plainDosa from "../assets/PlainDosa.jpg"; // OK
import manchowSoup from "../assets/Manchow Soup.jpeg"; // OK
import hotSourSoup from "../assets/Hot & Sour Soup.jpeg"; // OK
// import palakPaneer from "../assets/Palak-Paneer.jpg"; // OK
import plainCurd from "../assets/plaincurd.jpg"; // OK
import plainParatha from "../assets/Plainparatha.jpeg"; // OK
import ravaDosa from "../assets/ravadosa.jpg"; // OK
import paperDosa from "../assets/paperDosa.avif"; // OK
import singaporeNoodles from "../assets/SingaporeNoodles.avif"; // OK
import specialMasalaDosa from "../assets/Speacialmasaladosa.jpg"; // OK
import sweetCurd from "../assets/sweetcurd.jpeg"; // OK
import tomatoSoup from "../assets/TomatoSoup.jpg"; // OK
import tomatoUttapam from "../assets/tomatouttapam.jpg"; // OK
import vegSoup from "../assets/Veg Soup.jpg"; // OK
import vegChowmein from "../assets/VegChowmein.jpg"; // OK
import vegPakoda from "../assets/vegpakoda.png"; // OK
import hakkasnoodeles from "../assets/hakkanoodeles.jpg"; // OK
import mixparatha from "../assets/mixparatha.png"; // OK

// Placeholder imports for Main Veg and other new items
import samosa from "../assets/samosa.jpeg"; // OK
import daltdka from "../assets/daltadka.jpeg"; // OK
import paneerbuttermasala from "../assets/pannerbuttermasala.webp"; // OK (as pannerbuttermasala.webp)
// import aloogobhi from "../assets/aloo-gobi.jpeg"; // Used for Aloo-Gobi/Aloo-Mutter
// import rajmamasala from "../assets/rajmamasala.jpeg"; // OK
import malaikofta from "../assets/malai-kofta.webp"; // OK
import shaahipanner from "../assets/shaahipanner.png"; // Corrected to match file name: shaahipanner.png
import kadaipanner from "../assets/kadaipanner.jpeg"; // OK
import PaneerMashroom from "../assets/PaneerMashroom.jpeg"; // Corrected to match file name: PaneerMashroom.jpeg
import pannerbhurji from "../assets/pannerbhurji.jpeg"; // OK
import navratankorma from "../assets/navratankorma.jpeg"; // OK
import panner65 from "../assets/panner65.jpeg"; // OK
import khoyapanner from "../assets/khoyapanner.jpg"; // OK
import pannerdopiyaza from "../assets/pannerdopayaza.jpeg"; // OK
import PaneerPasanda from "../assets/PaneerPasanda.jpeg"; // Corrected to match file name: PaneerPasanda.jpeg
import chholapanner from "../assets/cholapanner.jpeg"; // Corrected to match file name: cholapanner.jpeg (from image_71279e.png)
import aloo_paneer from "../assets/aloo_paneer.avif"; // Corrected to match file name: aloo_paneer.avif
import PalakPaneer from "../assets/PalakPaneer.jpeg"; // Corrected to match file name: PalakPaneer.jpeg
import matterpanner from "../assets/matterpanner.jpeg"; // Corrected to match file name: matterpanner.jpeg (from image_71279e.png)
import PaneerDilbahaar from "../assets/Paneer Dilbahaar.jpeg"; // Corrected to match file name: PaneerDilbahaar.jpeg
import PaneerPunjabi from "../assets/PaneerPunjabi.jpeg"; // Corrected to match file name: PaneerPunjabi.jpeg
import pannerchatkara from "../assets/PaneerChatkara.jpeg"; // Corrected to match file name: PaneerChatkara.jpeg
import PaneerKalimirch from "../assets/PaneerKalimirch.jpeg"; // Corrected to match file name: PaneerKalimirch.jpeg
import panner_masala from "../assets/pannerMasala.jpeg"; // Corrected to match file name: pannerMasala.jpeg
import pannertadka from "../assets/pannertadka.jpg"; // OK
import pannerpeshwari from "../assets/pannerpeshwari.jpg"; // OK
import pannerlababdar from "../assets/pannerlababdar.jpg"; // OK
import PaneerKolapuri from "../assets/PaneerKolapuri.jpg"; // Corrected to match file name: PaneerKolapuri.jpeg
import pannerhandi from "../assets/PaneerHandi.webp"; // Corrected to match file name: PaneerHandi.webp
import PaneerKofta from "../assets/PaneerKofta.jpeg"; // Corrected to match file name: PaneerKofta.jpeg
import PaneerPatiyala from "../assets/PaneerPatiyala.jpeg"; // Corrected to match file name: PaneerPatiyala.jpeg
import PaneerMalwa from "../assets/PaneerMalwa.jpeg"; // Corrected to match file name: PaneerMalwa.jpeg
import PaneerNoorani from "../assets/PaneerNoorani.jpeg"; // Corrected to match file name: PaneerNoorani.jpeg
import PaneerTikkaMasala from "../assets/PaneerTikkaMasala.jpeg"; // Corrected to match file name: PaneerTikkaMasala.jpeg
import PaneerAngara from "../assets/PaneerAngara.jpg"; // Corrected to match file name: PaneerAngara.jpg
import PaneerRoll from "../assets/Paneer Roll.jpeg"; // Corrected to match file name: PaneerRoll.jpeg
import mixveg from "../assets/mixveg.jpeg"; // OK
import chhanamasala from "../assets/ChanaChilli.jpg"; // OK
import aloochole from "../assets/aloochole.jpeg"; // OK
import AlooMutter from "../assets/AlooMutter.jpeg"; // OK
import JeeraAloo from "../assets/JeeraAloo.jpeg"; // OK
import VegKopta from "../assets/Veg.Kopta.jpeg"; // Corrected to match file name: VegKofta.jpeg
import SebTomato from "../assets/sev-tamto.webp"; // OK
import SebBhaji from "../assets/Seb-Bhaji.jpeg"; // OK 
import GarlicNaan from "../assets/GarlicNaan.jpeg"; // OK 
import butterNaan from "../assets/butterNaan.jpeg"; // OK
// import missiRoti from "../assets/missiRoti.jpeg"; // OK
// import tandooriRoti from "../assets/tandooriRoti.jpeg"; // OK 
import Staffnan from "../assets/StaffNan.png"; // OK  
import LacchaParatha from "../assets/LacchaParatha.webp"; // OK       
import MissiRotiButter from "../assets/MissiRotiButter.jpeg"; // OK
// import PaneerChat from "../assets/PaneerChat.jpeg"; // OK
import MissiRotiPlain from "../assets/MissiRotiPlain.jpeg"; // OK
import TawaRotiButter from "../assets/ButterRoti.jpeg"; // OK
import TawaRotiPlain from "../assets/TawaRotiPlain.jpeg"; // OK 
import VegBiryani from "../assets/Veg. Biryani.jpeg"; // OK
import VegPulav from "../assets/Veg. Pulav.jpeg"; // OK
import CholePulav from "../assets/Cholepulav.jpg"; // OK
// import PaneerMasala from "../assets/PaneerMasala.jpeg";
import JeeraRice from "../assets/JeeraRice.jpeg"; // OK
import MutterPulav from "../assets/mutterpulav.jpeg"; // OK
import PlainRice from "../assets/PlainRice.jpeg"; // OK
import MasalaPapad from "../assets/MasalaPapad.png"; // OK
import GreenSalad from "../assets/GreenSalad.jpeg"; // OK  
import OnionSalad from "../assets/onionsalad.webp"; // OK
import FryPapad from "../assets/FryPapad.jpeg"; // OK
import PaneerTikka from "../assets/PaneerTikka.webp"; 
import MashroomTikka from "../assets/MashroomTikka.jpeg"; // OK
import VegManchurian from "../assets/Veg. Manchurian.jpeg"; // OK
import chilliPaneer from "../assets/ChilliPaneer.jpeg"; // OK
import chilliMashroom from "../assets/ChilliMashroom.jpeg";   
import chilliPotato from "../assets/ChilliPotato.jpeg"; // OK
import honeyChilliPotato from "../assets/HoneyChilliPotato.jpeg"; // OK 
import vegFriedRice from "../assets/Veg. FriedRice.jpeg"; // OK
import FruitRaita from "../assets/FruitRaita.jpeg"; // OK
import PineappleRaita from "../assets/PineappleRaita.jpeg"; // OK
import   VegRaita from "../assets/Veg.Raita.jpeg"; // OK
import  BundiRaita from "../assets/Bundi Raita.jpeg"; // OK
import JeeraRaita from "../assets/JeeraRaita.jpg"; // OK
import OnionRaita from "../assets/OnionRaita.jpeg"; // OK
import OnionPizza from "../assets/OnionPizza.avif"; // OK
import MixVegPizza from "../assets/MixVegPizza.jpeg"; // OK
import CheesePizza from "../assets/CheesePizza.jpeg"; // OK
import PaneerPizza from "../assets/PaneerPizza.jpg"; // OK
import PJSpecialPizza from "../assets/P.J. SpecialPizza.jpeg"; // OK
import VegBerger from "../assets/vegburger.jpeg"; // OK
import PaneerBerger from "../assets/PaneerBerger.jpeg"; // OK
import CheeseBerger from "../assets/CheeseBerger.jpg"; // OK
import VegSandwich from "../assets/Veg.Sandwich.jpeg"; // OK
import PaneerSandwich from "../assets/PaneerSandwich.jpg"; // OK
import CheeseGrillSandwich from "../assets/CheeseGrillSandwich.jpeg"; // OK
import PlaneMaggi from "../assets/PlaneMaggi.webp"; // OK
import VegMaggi from "../assets/vegmaggie.jpeg"; // OK
import dalfry from "../assets/dalfry.jpg"; // OK
import punajbidal from "../assets/Punjaabidalfry.jpeg"; // OK
import shahidall from "../assets/sahidal.jpeg"; // OK
import dalmakhani from "../assets/DalMakhani.webp"; // OK

import MasalaMaggi from "../assets/MasalaMaggi.jpeg"; // OK
// --- CATEGORY SETUP (Consolidated & Fixed with New Categories) ---
const categories = [
    { id: "paneer-special", name: "Paneer Special ✨", icon: ChefHat },
    { id: "indian-curries", name: "Indian Curries 🍲", icon: CookingPot },
    { id: "bread-rice-sides", name: "Bread, Rice & Sides 🍚", icon: Utensils },
    { id: "paratha-rolls", name: "Paratha & Rolls 🍞", icon: Layers }, // Renamed from paratha-breakfast
    { id: "dosa-uttapam", name: "Dosa & Uttapam 🥞", icon: Leaf },
    { id: "fast-food", name: "Fast Food & Chinese 🍔", icon: Sandwich },
    { id: "chaat-snacks", name: "Chaat & Soup 🥗", icon: Layers }, // Renamed from chaat-snacks and included soup
    { id: "pizza-maggi", name: "Pizza, Burger & Maggi 🍕", icon: Pizza },
    { id: "raita-thali-misc", name: "Raita, Special Thali & Misc 🍽️", icon: GlassWater }, // Renamed
    { id: "beverages-curd", name: "Drinks & Curd ☕", icon: Coffee }, // Renamed
    // { id: "buffet-packages", name: "Buffet Packages 🎁", icon: Package },
];

const menuItems = {
    // --- PANEER SPECIAL (from image_64e47b.jpg) ---
    "paneer-special": [
        { name: "Kadai Paneer", price: "₹260/-", description: "Cottage cheese cooked in a spicy tomato-based gravy with bell peppers and onions.", veg: true, image: kadaipanner },
        { name: "Paneer Mashroom", price: "₹260/-", description: "Cottage cheese and mushroom curry.", veg: true, image: PaneerMashroom },
        { name: "Paneer Bhurji", price: "₹330/-", description: "Scrambled cottage cheese cooked with spices.", veg: true, popular: true, image: pannerbhurji },
        { name: "Navratan Korma", price: "₹260/-", description: "Rich, creamy curry with nine different vegetables, fruits, and nuts.", veg: true, image: navratankorma },
        { name: "Paneer Bt. Masala (Butter Masala)", price: "₹250/-", description: "Cottage cheese in rich tomato and butter gravy.", veg: true, image: paneerbuttermasala },
        { name: "Paneer - 65", price: "₹280/-", description: "Spicy, deep-fried paneer starter.", veg: true, image: panner65 },
        { name: "Khoa Paneer", price: "₹230/-", description: "Paneer dish cooked with thickened milk solids (khoya).", veg: true, image: khoyapanner },
        { name: "Paneer Do Pyaza", price: "₹240/-", description: "Paneer cooked with a large amount of onions.", veg: true, image: pannerdopiyaza },
        { name: "Paneer Pasanda", price: "₹290/-", description: "Stuffed paneer in a creamy, mild gravy.", veg: true, image: PaneerPasanda },
        { name: "Shahi Paneer", price: "₹250/-", description: "Paneer in a thick, creamy gravy made of tomato, cashew, and spices.", veg: true, popular: true, image: shaahipanner },
        { name: "Chhola Paneer", price: "₹220/-", description: "Chickpea and cottage cheese curry.", veg: true, image: chholapanner },
        { name: "Aloo Paneer", price: "₹180/-", description: "Potato and cottage cheese curry.", veg: true, image: aloo_paneer },
        { name: "Palak Paneer", price: "₹220/-", description: "Cottage cheese in creamy spinach curry.", veg: true, image: PalakPaneer },
        { name: "Mutter Paneer", price: "₹200/-", description: "Peas and cottage cheese in tomato gravy.", veg: true, image: matterpanner },
        // Other Paneer Dishes
        { name: "Paneer Roll", price: "₹270/-", description: "Spiced paneer filling wrapped in bread or roti.", veg: true, image: PaneerRoll },
        { name: "Paneer Dilbahaar", price: "₹280/-", description: "Specialty paneer dish.", veg: true, image: PaneerDilbahaar },
        { name: "Paneer Punjabi", price: "₹260/-", description: "Paneer dish in classic Punjabi style.", veg: true, image: PaneerPunjabi },
        { name: "Paneer Chatkara", price: "₹250/-", description: "Tangy and spicy paneer preparation.", veg: true, image: pannerchatkara },
        { name: "Paneer Kalimirch", price: "₹280/-", description: "Paneer cooked with black pepper.", veg: true, image: PaneerKalimirch },
        { name: "Paneer Masala", price: "₹280/-", description: "Spicy paneer curry.", veg: true, image: panner_masala },
        { name: "Paneer Tadka", price: "₹270/-", description: "Paneer tempered with spices.", veg: true, image: pannertadka },
        { name: "Paneer Peshawari", price: "₹280/-", description: "Paneer dish inspired by Peshawari cuisine.", veg: true, image: pannerpeshwari },
        { name: "Paneer Lawabdar", price: "₹280/-", description: "Paneer in a creamy, slightly sweet tomato gravy.", veg: true, image: pannerlababdar },
        { name: "Paneer Kolapuri", price: "₹300/-", description: "Spicy paneer curry in Kolhapuri style.", veg: true, image: PaneerKolapuri },
        { name: "Paneer Makhanwala", price: "₹270/-", description: "Paneer in a rich, buttery gravy.", veg: true, image: paneerbuttermasala },
        { name: "Paneer Handi", price: "₹300/-", description: "Paneer curry cooked and served in a Handi.", veg: true, image: pannerhandi },
        { name: "Paneer Kofta", price: "₹280/-", description: "Paneer dumplings in a mild gravy.", veg: true, image: PaneerKofta },
        { name: "Paneer Patiyala", price: "₹280/-", description: "Paneer Patiyala style.", veg: true, image: PaneerPatiyala },
        { name: "Paneer Malwa", price: "₹280/-", description: "Paneer Malwa style.", veg: true, image: PaneerMalwa },
        { name: "Paneer Noorani", price: "₹280/-", description: "Light and flavorful paneer dish.", veg: true, image: PaneerNoorani },
        { name: "Paneer Tikka Masala", price: "₹300/-", description: "Paneer tikka pieces in a spiced curry.", veg: true, image: PaneerTikkaMasala },
        { name: "Paneer Angara", price: "₹300/-", description: "Smoky flavored paneer curry.", veg: true, image: PaneerAngara },
    ],

    // --- INDIAN CURRIES (from image_64e4a0.jpg) ---
    "indian-curries": [
        { name: "Mutter Mashroom", price: "₹250/-", description: "Peas and mushroom curry.", veg: true, image: PaneerMashroom },
        { name: "Malai Kofta", price: "₹270/-", description: "Cottage cheese dumplings in creamy curry.", veg: true, image: malaikofta },
        { name: "Mix Veg.", price: "₹180/-", description: "Mixed seasonal vegetable .", veg: true, image: mixveg },
     
        { name: "Chana Masala", price: "₹180/-", description: "Spicy chickpea curry.", veg: true, image: chhanamasala },
        
       
        { name: "Aloo Chhola", price: "₹150/-", description: "Potato and chickpea curry.", veg: true, image: aloochole },
        { name: "Aloo Mutter", price: "₹150/-", description: "Potato and peas curry.", veg: true, image: AlooMutter },
        { name: "Jeera Aloo", price: "₹140/-", description: "Potatoes tempered with cumin seeds.", veg: true, image: JeeraAloo },
       
        { name: "Veg. Kopta", price: "₹280/-", description: "Vegetable dumplings in a mild gravy.", veg: true, image: VegKopta },
       
        { name: "Seb Tomato", price: "₹160/-", description: "Curry made with apples (Seb) and tomatoes.", veg: true, image: SebTomato },
        { name: "Seb Bhaji", price: "₹180/-", description: "Curry made with apples (Seb).", veg: true, image: SebBhaji },
   
        // Dal Dishes                                                                       import dalfry from "../assets/dalfry.jpeg"; // OK

                                                     
        { name: "Dal Fry", price: "₹140/-", description: "Tempered yellow lentils.", veg: true, image: dalfry },
        { name: "Dal Tadka", price: "₹180/-", description: "Yellow lentils tempered with aromatic spices.", veg: true, image: daltdka },
       
        { name: "Punjabi Dal", price: "₹190/-", description: "Lentil preparation in Punjabi style.", veg: true, image: punajbidal },
        { name: "Shahi Dal", price: "₹190/-", description: "Rich lentil dish.", veg: true, image: shahidall },
        
        { name: "Dal Makhani", price: "₹200/-", description: "Black lentils and kidney beans slow-cooked with cream and butter.", veg: true, popular: true, image: dalmakhani },
    ],

    // --- BREAD, RICE & SIDES (from image_64e4d9.jpg) ---
    "bread-rice-sides": [
        // Roti/Naan
       
        { name: "Garlic Naan", price: "₹100/-", description: "Naan flavored with garlic.", veg: true, image: GarlicNaan },
        { name: "Staff Nan", price: "₹110/-", description: "Naan with filling or staff special.", veg: true, image: Staffnan },
        { name: "Butter Naan", price: "₹60/-", description: "Naan brushed with butter.", veg: true, image: butterNaan },
        { name: "Laccha Paratha", price: "₹70/-", description: "Layered whole wheat flatbread.", veg: true, image: LacchaParatha },
        { name: "Missi Roti Butter", price: "₹35/-", description: "Butter roti made from mixed flours.", veg: true, image: MissiRotiButter },
        { name: "Missi Roti Plain", price: "₹30/-", description: "Plain roti made from mixed flours.", veg: true, image: MissiRotiPlain },
        { name: "Tawa Roti Butter", price: "₹20/-", description: "Roti cooked on a griddle, brushed with butter.", veg: true, image: TawaRotiButter },
        { name: "Tawa Roti Plain", price: "₹15/-", description: "Roti cooked on a griddle, plain.", veg: true, image: TawaRotiPlain },
       
        // Rice Dishes
       
        { name: "Veg. Biryani", price: "₹200/-", description: "Aromatic rice dish cooked with mixed vegetables and spices.", veg: true, popular: true, image: VegBiryani },
        { name: "Veg. Pulav", price: "₹170/-", description: "Rice cooked with mixed vegetables.", veg: true, image: VegPulav },
        { name: "Chole Pulav", price: "₹170/-", description: "Rice cooked with chickpeas (chhole).", veg: true, image: CholePulav },
        { name: "Jeera Rice", price: "₹110/-", description: "Basmati rice tempered with cumin seeds.", veg: true, image: JeeraRice },
        { name: "Mutter Pulav", price: "₹130/-", description: "Rice cooked with green peas (mutter).", veg: true, image: MutterPulav },
        { name: "Plain Rice", price: "₹100/-", description: "Simple boiled rice.", veg: true, image: PlainRice },
        // Papad & Salad
        { name: "Masala Papad", price: "₹60/-", description: "Roasted papad topped with chopped onion, tomato, and spices.", veg: true, image: MasalaPapad },
       
        { name: "Green Salad", price: "₹60/-", description: "Mixed fresh vegetables.", veg: true, image: GreenSalad },
        { name: "Onion Salad", price: "₹30/-", description: "Sliced raw onion.", veg: true, image: OnionSalad },
       
        { name: "Fry Papad", price: "₹40/-", description: "Plain fried papad.", veg: true, image: FryPapad },
      
       
    ],

    // --- PARATHA & ROLLS (from image_6477dd.jpg and image_64e47b.jpg) ---
    "paratha-rolls": [
        // Breakfast items from image_6477dd.jpg
        { name: "Paneer Paratha", price: "₹120", description: "Stuffed flatbread with paneer", veg: true, image: alooParatha },
        { name: "Mix Paratha", price: "₹110", description: "Mixed vegetable stuffed paratha", veg: true, image: mixparatha },
        { name: "Cauliflower Paratha (Se.)", price: "₹100", description: "Stuffed cauliflower paratha (Seasonal)", veg: true, image: cauliflowerParatha },
        { name: "Onion Paratha", price: "₹80", description: "Stuffed onion paratha", veg: true, image: alooParatha },
        { name: "Potato Paratha", price: "₹80", description: "Stuffed potato paratha", veg: true, image: alooParatha },
        { name: "Plain Paratha", price: "₹60", description: "Plain paratha served hot", veg: true, image: plainParatha },
        // Roll moved from Paneer Special
        { name: "Paneer Roll", price: "₹270/-", description: "Spiced paneer filling wrapped in bread or roti.", veg: true, image: PaneerRoll },
    ],

    // --- DOSA & UTTAPAM (from image_6477dd.jpg) ---
    "dosa-uttapam": [
        // Dosas
        { name: "Paneer Dosa", price: "₹150", description: "Crispy dosa filled with paneer", veg: true, image: paneerDosa },
        { name: "Masala Dosa", price: "₹120", description: "Classic dosa with spiced potato filling", veg: true, image: masalaDosa },
        { name: "Onion Dosa", price: "₹110", description: "Dosa with onion topping", veg: true, image: onionDosa },
        { name: "Plain Dosa", price: "₹80", description: "Classic plain dosa", veg: true, image: plainDosa },
        { name: "Rawaa Dosa", price: "₹140", description: "Rawa (semolina) base dosa", veg: true, image: ravaDosa },
        { name: "Paper Dosa", price: "₹140", description: "Extra thin and crispy dosa", veg: true, image: paperDosa },
        { name: "P.J. Special Dosa", price: "₹200", description: "Restaurant special dosa variety", veg: true, popular: true, image: specialMasalaDosa },
        // Uttapams
        { name: "Onion Uttpam", price: "₹150", description: "Soft uttapam with onion", veg: true, image: onionUttapam },
        { name: "Tamato Uttpam", price: "₹150", description: "Uttapam topped with tomato", veg: true, image: tomatoUttapam },
        { name: "Mix Veg Uttpam", price: "₹160", description: "Uttapam topped with mixed vegetables", veg: true, image: mixVegUttapam },
    ],

    // --- FAST FOOD & CHINESE (from image_646555.jpg and image_6477dd.jpg) ---
    "fast-food": [
        // Starters/Chinese
        { name: "Paneer Tikka (Starter)", price: "₹250/-", description: "Grilled cottage cheese marinated in spices.", veg: true, image: PaneerTikka },
        { name: "Mashroom Tikka (Starter)", price: "₹260/-", description: "Grilled mushrooms marinated in spices.", veg: true, image: MashroomTikka },
        { name: "Veg. Manchurian", price: "₹160/-", description: "Fried vegetable balls tossed in spicy gravy.", veg: true, image: VegManchurian },
        { name: "Chilli Paneer", price: "₹230/-", description: "Paneer cubes tossed in spicy chilli sauce.", veg: true, image: chilliPaneer },
        { name: "Chilli Mashroom", price: "₹240/-", description: "Mushrooms tossed in spicy chilli sauce.", veg: true, image: chilliMashroom },
        { name: "Chilli Potato", price: "₹150/-", description: "Crispy fried potato strips in chilli sauce.", veg: true, image: chilliPotato },
        { name: "Honey Chilli Potato", price: "₹170/-", description: "Crispy fried potato strips in sweet and spicy sauce.", veg: true, image: honeyChilliPotato },
        { name: "Veg. Fried Rice", price: "₹160/-", description: "Wok-tossed rice with mixed vegetables.", veg: true, image: vegFriedRice },
        // Noodles
        { name: "Veg Chowmein", price: "₹120", description: "Stir fried noodles with vegetables", veg: true, image: vegChowmein },
        { name: "Hakka Noodles", price: "₹150", description: "Chinese-style fried noodles", veg: true, image: hakkasnoodeles },
        { name: "Singapore Noodles", price: "₹160", description: "Spicy, tangy noodles Singapore style", veg: true, image: singaporeNoodles },
    ],

    // --- CHAAT, SNACKS & SOUP (from image_646555.jpg and image_6477dd.jpg) ---
    "chaat-snacks": [
        
        
        // Pakoda & Samosa
        { name: "Samosa (2 pcs)", price: "₹40", description: "Crispy pastry filled with spiced potatoes and peas", veg: true, popular: true, image: samosa },
        { name: "Paneer Pakoda (8 Pcs)", price: "₹180", description: "Crispy cottage cheese fritters served hot", veg: true, image: paneerPakoda },
        { name: "Veg Pakoda (10 Pcs)", price: "₹130", description: "Assorted vegetable fritters", veg: true, image: vegPakoda },
        // Soups
        { name: "Tamato Soup", price: "₹120", description: "Creamy tomato soup", veg: true, image: tomatoSoup },
        { name: "Veg Soup", price: "₹120", description: "Vegetable soup", veg: true, image: vegSoup },
        { name: "Hot & Sour Soup", price: "₹130", description: "Spicy-sour vegetable soup", veg: true, image: hotSourSoup },
        { name: "Manchow Soup", price: "₹130", description: "Chinese-style spicy soup", veg: true, image: manchowSoup }

    ],

    // --- PIZZA, BURGER & MAGGI (from image_646555.jpg) ---import OnionPizza from "../assets/OnionPizza.jpeg"; // OK

    "pizza-maggi": [
        // Pizzas
        { name: "Onion Pizza", price: "₹190/-", description: "Pizza topped with fresh onion slices.", veg: true, image: OnionPizza },
        { name: "Tamato Pizza", price: "₹200/-", description: "Pizza topped with fresh tomato slices.", veg: true, image: tomatoUttapam },
        { name: "Mix Veg Pizza", price: "₹240/-", description: "Pizza topped with assorted vegetables.", veg: true, image: MixVegPizza },
        { name: "Cheese Pizza", price: "₹250/-", description: "Simple pizza loaded with cheese.", veg: true, image: CheesePizza },
        { name: "Paneer Pizza", price: "₹260/-", description: "Pizza topped with cottage cheese cubes.", veg: true, image: PaneerPizza },
        { name: "P.J. Special Pizza", price: "₹300/-", description: "Restaurant's special signature pizza.", veg: true, popular: true, image: PJSpecialPizza },
        // Burger
        { name: "Veg. Berger", price: "₹80/-", description: "Classic vegetable patty burger.", veg: true, image: VegBerger },
        { name: "Paneer Berger", price: "₹100/-", description: "Burger with a paneer patty or paneer filling.", veg: true, image: PaneerBerger },
        { name: "Cheese Berger", price: "₹120/-", description: "Vegetable burger with extra cheese.", veg: true, image: CheeseBerger },
        // Sandwich
        { name: "Veg. Sandwich", price: "₹70/-", description: "Simple vegetable sandwich.", veg: true, image: VegSandwich },
        { name: "Paneer Sandwich", price: "₹90/-", description: "Sandwich filled with spiced paneer.", veg: true, image: PaneerSandwich },
        { name: "Cheese Grill Sandwich", price: "₹100/-", description: "Grilled sandwich loaded with cheese.", veg: true, image: CheeseGrillSandwich },
        // Maggi
        { name: "Plane Maggi", price: "₹60", description: "Simple instant noodles prepared plain.", veg: true, image: PlaneMaggi },
        { name: "Veg. Maggi", price: "₹80", description: "Instant noodles prepared with vegetables.", veg: true, image: VegMaggi },
        { name: "Masala Maggi", price: "₹100", description: "Instant noodles prepared with extra spices/masala.", veg: true, popular: true, image: MasalaMaggi },
    ],

    // --- RAITA, THALI & MISC (from image_64e51b.jpg) ---import FruitRaita from "../assets/FruitRaita.jpeg"; // OK
    "raita-thali-misc": [
        // Raita
        { name: "Fruit Raita", price: "₹150/-", description: "Curd mixed with fresh fruits.", veg: true, image: FruitRaita },
        { name: "Pineapple Raita", price: "₹120/-", description: "Curd mixed with pineapple chunks.", veg: true, image: PineappleRaita },
        { name: "Veg. Raita", price: "₹100/-", description: "Curd mixed with chopped vegetables.", veg: true, image:VegRaita},
        { name: "Bundi Raita", price: "₹90/-", description: "Curd mixed with small, fried, crispy gram flour balls (Bundi).", veg: true, image: BundiRaita },
        { name: "Jeera Raita", price: "₹90/-", description: "Curd flavored with roasted cumin seeds.", veg: true, image: JeeraRaita },
        { name: "Onion Raita", price: "₹90/-", description: "Curd mixed with chopped onions.", veg: true, image: OnionRaita },
        // Special Thali
        { name: "Special Thali", price: "₹300/-", description: "Includes Shahi Paneer, Dal Fry, Rice, Papad, Salad, 1 Gulab Jamun/Fruit Raita, 4 Roti.", veg: true, popular: true, image: null },
        // Misc
        
    ],

    // --- DRINKS & CURD (from image_6477dd.jpg) ---
    "beverages-curd": [
        // Drinks
        { name: "Cold Coffee", price: "₹220", description: "Chilled coffee with ice cream and cream", veg: true, image: coldCoffe },
        { name: "Hot Coffee", price: "₹60", description: "Freshly brewed hot coffee with milk and sugar", veg: true, image: HotCoffe },
        // Curd (moved from Breakfast section)
        { name: "Sweet Curd", price: "₹70", description: "Sweetened curd", veg: true, image: sweetCurd },
        { name: "Plain Curd", price: "₹60", description: "Fresh curd", veg: true, image: plainCurd },
    ],

    // --- BUFFET PACKAGES (from image_64e4fa.jpg) ---
    // "buffet-packages": [
    //     { name: "STANDARD BUFFE PACKAGE", price: "₹299/-", description: "Includes: Roti Butter, Paneer Bt. Masala / Shahi Paneer / Khoa Paneer, Dal Fry, Chana Masala, Mutter Pulav, Papad, Salad, Raita.", veg: true, image: null },
    //     { name: "PREMIUM BUFFE PACKAGE", price: "₹399/-", description: "Includes: Roti Butter, Missi Roti, Naan, Paneer Bt. Masala / Shahi Paneer / Khoa Paneer, Dal Tadka (Butter), Chana Masala, Mix Veg., Mutter Pulav, Papad, Salad, Raita, Gulab Jamun (2 Pcs).", veg: true, popular: true, image: null },
    //     { name: "SUPREME BUFFE PACKAGE", price: "₹599/-", description: "Includes: Chowmein, Pav Bhaji, Gol Gappe, Bhalla, Roti Butter, Missi Roti, Naan, Paneer Bt. Masala / Shahi Paneer / Khoa Paneer, Dal Tadka (Butter), Chana Masala, Mix Veg., Mutter Pulav, Papad, Salad, Raita, Gulab Jamun (2 Pcs), Soup.", veg: true, popular: true, image: null },
    //     { name: "Note 1 (GST)", price: "", description: "GST extra will be charged.", veg: true, image: null },
    //     { name: "Note 2 (Min. Plates)", price: "", description: "Buffet packages must be booked for 50 or more plates.", veg: true, image: null },
    //     { name: "Note 3 (Advance)", price: "", description: "50% advance deposit is mandatory for buffet booking.", veg: true, image: null },
    // ],
};


const Menu = () => {
    // Set initial active category to 'paneer-special'
    const [activeCategory, setActiveCategory] = useState("paneer-special");

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="py-8 sm:py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Category Buttons (Responsive Scrollable) */}
                    <div className="flex flex-row overflow-x-auto whitespace-nowrap space-x-3 sm:space-x-4 pb-4 mb-8 sticky top-0 bg-white z-10 shadow-sm rounded-lg p-2">
                        {categories.map((category) => (
                            <Button
                                key={category.id}
                                variant={activeCategory === category.id ? "default" : "outline"}
                                className="flex items-center space-x-1.5 px-3 py-2 text-sm flex-shrink-0 transition-all duration-200"
                                onClick={() => setActiveCategory(category.id)}
                            >
                                <category.icon className="h-4 w-4" />
                                <span className="hidden sm:inline">{category.name}</span>
                                <span className="inline sm:hidden">{category.name.split(" ")[0]}</span>
                            </Button>
                        ))}
                    </div>

                    {/* Current Category Heading */}
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-primary pb-2 text-center">
                        {categories.find(c => c.id === activeCategory)?.name} Menu
                    </h2>

                    {/* Menu Grid (Fully Responsive) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {menuItems[activeCategory]?.map((item, index) => (
                            <Card
                                key={index}
                                className="p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                            >
                                <CardContent className="p-0 flex flex-col flex-grow">
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-40 object-cover rounded-t-md mb-4"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="w-full h-40 flex items-center justify-center bg-gray-100 rounded-t-md mb-4 text-gray-500 font-semibold border-b">
                                            [Image Not Available]
                                        </div>
                                    )}
                                    <div className="flex justify-between items-start mb-2 px-2">
                                        <h3 className="text-lg font-semibold text-heritage-brown">
                                            {item.name}
                                        </h3>
                                        <span className="text-xl font-bold text-traditional-gold">
                                            {item.price}
                                        </span>
                                    </div>
                                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed px-2">
                                        {item.description}
                                    </p>
                                    <div className="flex space-x-2 flex-wrap px-2">
                                        {item.veg && (
                                            <Badge className="bg-green-100 text-green-800 border-green-300">
                                                <Leaf className="h-3 w-3 mr-1" />
                                                Veg
                                            </Badge>
                                        )}
                                        {!item.veg && (
                                            <Badge className="bg-red-100 text-red-800 border-red-300">
                                                Non-Veg
                                            </Badge>
                                        )}
                                        {item.popular && (
                                            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">
                                                Popular
                                            </Badge>
                                        )}
                                        {item.spicy && (
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
