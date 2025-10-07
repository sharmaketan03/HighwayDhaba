"use strict";
// import { useState } from "react";
// import { Card, CardContent } from "../Components/ui/card";
// import { Button } from "../Components/ui/button";
// import { Input } from '../Components/ui/input';
// import { Badge } from "../Components/ui/badge";
// import { 
//   Calendar, 
//   User, 
//   Clock, 
//   ArrowRight, 
//   Search, 
//   Tag,
//   Share2,
//   Bookmark,
//   Eye,
//   MessageCircle,
//   TrendingUp,
//   ChefHat,
//   MapPin,
//   Coffee,
//   Utensils
// } from "lucide-react";
// const Blog = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeCategory, setActiveCategory] = useState("all");
//   const categories = [
//     { id: "all", name: "All Posts", count: 24 },
//     { id: "food", name: "Food & Recipes", count: 8 },
//     { id: "travel", name: "Travel Tips", count: 6 },
//     { id: "culture", name: "Culture & Heritage", count: 5 },
//     { id: "news", name: "News & Updates", count: 3 },
//     { id: "stories", name: "Customer Stories", count: 2 }
//   ];
//   const blogPosts = [
//     {
//       id: 1,
//       title: "The Secret Behind Our Famous Dal Tadka",
//       excerpt: "Discover the traditional recipe and cooking techniques that make our dal tadka a favorite among thousands of travelers...",
//       content: "Our dal tadka has been perfecting for over 15 years, using traditional techniques passed down through generations. The secret lies in the perfect balance of spices and the slow-cooking method...",
//       category: "food",
//       author: "Chef Raman Kumar",
//       date: "2024-01-20",
//       readTime: "5 min read",
//       image: "/api/placeholder/600/300",
//       tags: ["recipe", "dal", "traditional", "cooking"],
//       views: 1245,
//       comments: 23,
//       featured: true
//     },
//     {
//       id: 2,
//       title: "Highway Travel Safety Tips for Families",
//       excerpt: "Essential safety guidelines and tips for families traveling on Indian highways, based on our 15 years of experience serving travelers...",
//       content: "Traveling on highways with family requires careful planning and awareness. Here are the most important safety tips we've gathered from serving thousands of families...",
//       category: "travel",
//       author: "Suresh Sharma",
//       date: "2024-01-18",
//       readTime: "7 min read",
//       image: "/api/placeholder/600/300",
//       tags: ["safety", "family", "highway", "travel"],
//       views: 892,
//       comments: 15
//     },
//     {
//       id: 3,
//       title: "The History and Culture of Rajasthani Cuisine",
//       excerpt: "Explore the rich heritage of Rajasthani food culture and how it influences our menu at PJ Dhaba...",
//       content: "Rajasthani cuisine reflects the harsh climate and lifestyle of the desert state. Each dish tells a story of adaptation, preservation, and flavor...",
//       category: "culture",
//       author: "Dr. Meera Joshi",
//       date: "2024-01-15",
//       readTime: "8 min read", 
//       image: "/api/placeholder/600/300",
//       tags: ["rajasthan", "culture", "heritage", "cuisine"],
//       views: 654,
//       comments: 12
//     },
//     {
//       id: 4,
//       title: "Meet Our Head Chef: 25 Years of Culinary Excellence",
//       excerpt: "An interview with our head chef about his journey, philosophy, and the stories behind our most popular dishes...",
//       content: "Chef Raman Kumar has been with PJ Dhaba for over a decade, bringing authentic flavors and innovative techniques to traditional recipes...",
//       category: "stories",
//       author: "PJ Dhaba Team",
//       date: "2024-01-12",
//       readTime: "6 min read",
//       image: "/api/placeholder/600/300",
//       tags: ["chef", "interview", "story", "team"],
//       views: 423,
//       comments: 8
//     },
//     {
//       id: 5,
//       title: "Best Highway Dhabas in North India: A Guide",
//       excerpt: "A comprehensive guide to the best highway dhabas across North India, featuring authentic cuisine and reliable service...",
//       content: "After years in the highway hospitality business, we've compiled a list of the most authentic and reliable dhabas for travelers...",
//       category: "travel",
//       author: "Travel Desk",
//       date: "2024-01-10",
//       readTime: "10 min read",
//       image: "/api/placeholder/600/300",
//       tags: ["dhabas", "highway", "guide", "north india"],
//       views: 1876,
//       comments: 31,
//       trending: true
//     },
//     {
//       id: 6,
//       title: "Seasonal Menu Changes: What's New This Winter",
//       excerpt: "Discover our special winter menu featuring warming spices, seasonal vegetables, and traditional comfort foods...",
//       content: "Winter brings special ingredients and traditional recipes that warm both body and soul. Our seasonal menu reflects these changes...",
//       category: "food",
//       author: "Chef Raman Kumar",
//       date: "2024-01-08",
//       readTime: "4 min read",
//       image: "/api/placeholder/600/300",
//       tags: ["winter", "seasonal", "menu", "comfort food"],
//       views: 567,
//       comments: 9
//     }
//   ];
//   const popularTags = [
//     "recipe", "travel", "highway", "safety", "traditional", "cuisine", 
//     "rajasthan", "dhaba", "authentic", "culture", "heritage", "food"
//   ];
//   const recentPosts = blogPosts.slice(0, 4);
//   const filteredPosts = blogPosts.filter(post => {
//     const matchesCategory = activeCategory === "all" || post.category === activeCategory;
//     const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
//     return matchesCategory && matchesSearch;
//   });
//   const stats = [
//     { label: "Blog Posts", value: "24", icon: MessageCircle },
//     { label: "Monthly Readers", value: "12K+", icon: Eye },
//     { label: "Recipe Shares", value: "500+", icon: Share2 },
//     { label: "Travel Tips", value: "100+", icon: MapPin }
//   ];
//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-royal text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-5xl font-bold mb-6">PJ Dhaba Blog</h1>
//           <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
//             Stories, recipes, travel tips, and insights from 15 years of serving travelers on the highway. 
//             Discover the culture, food, and experiences that make every journey memorable.
//           </p>
//           <div className="flex justify-center space-x-8 text-traditional-gold">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <stat.icon className="h-8 w-8 mx-auto mb-2" />
//                 <div className="text-3xl font-bold">{stat.value}</div>
//                 <div className="text-sm">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* Search and Categories */}
//       <section className="py-12 bg-traditional-gold text-heritage-brown">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
//               <div className="relative flex-1 max-w-md">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-heritage-brown/60" />
//                 <Input
//                   type="text"
//                   placeholder="Search blog posts..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="pl-10 bg-white/80 backdrop-blur-sm border-heritage-brown/30"
//                 />
//               </div>
//               <Button variant="heritage" className="flex items-center space-x-2">
//                 <Search className="h-4 w-4" />
//                 <span>Search</span>
//               </Button>
//             </div>
//             <div className="flex flex-wrap justify-center gap-2">
//               {categories.map((category) => (
//                 <Button
//                   key={category.id}
//                   variant={activeCategory === category.id ? "heritage" : "outline"}
//                   className="flex items-center space-x-2"
//                   onClick={() => setActiveCategory(category.id)}
//                 >
//                   <span>{category.name}</span>
//                   <Badge variant="secondary" className="ml-1">
//                     {category.count}
//                   </Badge>
//                 </Button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Featured/Trending Posts */}
//       {activeCategory === "all" && (
//         <section className="py-12 bg-gradient-warm">
//           <div className="container mx-auto px-4">
//             <div className="flex items-center justify-between mb-8">
//               <h2 className="text-3xl font-bold text-heritage-brown">Featured & Trending</h2>
//               <TrendingUp className="h-6 w-6 text-traditional-gold" />
//             </div>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {blogPosts.filter(post => post.featured || post.trending).map((post) => (
//                 <Card key={post.id} className="overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-300 hover:-translate-y-1">
//                   <div className="relative">
//                     <div className="h-48 bg-gradient-heritage flex items-center justify-center">
//                       <div className="text-center text-white">
//                         <ChefHat className="h-16 w-16 mx-auto mb-2 opacity-50" />
//                         <div className="text-sm opacity-80">Blog Post Image</div>
//                       </div>
//                     </div>
//                     <div className="absolute top-4 left-4 flex gap-2">
//                       {post.featured && (
//                         <Badge className="bg-traditional-gold text-heritage-brown">
//                           Featured
//                         </Badge>
//                       )}
//                       {post.trending && (
//                         <Badge className="bg-heritage-brown text-white">
//                           <TrendingUp className="h-3 w-3 mr-1" />
//                           Trending
//                         </Badge>
//                       )}
//                     </div>
//                   </div>
//                   <CardContent className="p-6">
//                     <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
//                       <Badge variant="secondary" className="capitalize">{post.category}</Badge>
//                       <div className="flex items-center space-x-1">
//                         <Calendar className="h-3 w-3" />
//                         <span>{new Date(post.date).toLocaleDateString()}</span>
//                       </div>
//                       <div className="flex items-center space-x-1">
//                         <Clock className="h-3 w-3" />
//                         <span>{post.readTime}</span>
//                       </div>
//                     </div>
//                     <h3 className="text-xl font-semibold text-heritage-brown mb-3 line-clamp-2">
//                       {post.title}
//                     </h3>
//                     <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center space-x-4 text-sm text-muted-foreground">
//                         <div className="flex items-center space-x-1">
//                           <Eye className="h-3 w-3" />
//                           <span>{post.views}</span>
//                         </div>
//                         <div className="flex items-center space-x-1">
//                           <MessageCircle className="h-3 w-3" />
//                           <span>{post.comments}</span>
//                         </div>
//                       </div>
//                       <Button variant="traditional" size="sm">
//                         Read More
//                         <ArrowRight className="h-3 w-3 ml-1" />
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}
//       {/* Blog Posts Grid */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//             {/* Main Content */}
//             <div className="lg:col-span-3">
//               <div className="flex items-center justify-between mb-8">
//                 <h2 className="text-3xl font-bold text-heritage-brown">
//                   {activeCategory === "all" ? "All Posts" : categories.find(c => c.id === activeCategory)?.name}
//                   <span className="text-muted-foreground ml-2">({filteredPosts.length})</span>
//                 </h2>
//                 <select className="border rounded-md px-3 py-1 text-sm">
//                   <option>Latest First</option>
//                   <option>Most Popular</option>
//                   <option>Most Commented</option>
//                 </select>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {filteredPosts.map((post) => (
//                   <Card key={post.id} className="overflow-hidden shadow-warm hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
//                     <div className="h-48 bg-gradient-heritage flex items-center justify-center">
//                       <div className="text-center text-white">
//                         <Coffee className="h-12 w-12 mx-auto mb-2 opacity-50" />
//                         <div className="text-xs opacity-80">Blog Image</div>
//                       </div>
//                     </div>
//                     <CardContent className="p-6">
//                       <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-3">
//                         <Badge variant="secondary" className="capitalize">{post.category}</Badge>
//                         <div className="flex items-center space-x-1">
//                           <Calendar className="h-3 w-3" />
//                           <span>{new Date(post.date).toLocaleDateString()}</span>
//                         </div>
//                         <div className="flex items-center space-x-1">
//                           <Clock className="h-3 w-3" />
//                           <span>{post.readTime}</span>
//                         </div>
//                       </div>
//                       <h3 className="text-lg font-semibold text-heritage-brown mb-2 line-clamp-2">
//                         {post.title}
//                       </h3>
//                       <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
//                       <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
//                         <div className="flex items-center space-x-1">
//                           <User className="h-3 w-3" />
//                           <span>{post.author}</span>
//                         </div>
//                         <div className="flex items-center space-x-3">
//                           <div className="flex items-center space-x-1">
//                             <Eye className="h-3 w-3" />
//                             <span>{post.views}</span>
//                           </div>
//                           <div className="flex items-center space-x-1">
//                             <MessageCircle className="h-3 w-3" />
//                             <span>{post.comments}</span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <div className="flex flex-wrap gap-1">
//                           {post.tags.slice(0, 2).map(tag => (
//                             <Badge key={tag} variant="outline" className="text-xs">
//                               #{tag}
//                             </Badge>
//                           ))}
//                         </div>
//                         <div className="flex items-center space-x-2">
//                           <Button variant="ghost" size="sm">
//                             <Bookmark className="h-3 w-3" />
//                           </Button>
//                           <Button variant="ghost" size="sm">
//                             <Share2 className="h-3 w-3" />
//                           </Button>
//                           <Button variant="traditional" size="sm">
//                             <ArrowRight className="h-3 w-3" />
//                           </Button>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//               <div className="text-center mt-12">
//                 <Button variant="traditional" size="lg">
//                   Load More Posts
//                 </Button>
//               </div>
//             </div>
//             {/* Sidebar */}
//             <div className="lg:col-span-1">
//               <div className="sticky top-4 space-y-6">
//                 {/* Recent Posts */}
//                 <Card className="p-6 shadow-warm">
//                   <CardContent>
//                     <h3 className="text-lg font-semibold text-heritage-brown mb-4">Recent Posts</h3>
//                     <div className="space-y-4">
//                       {recentPosts.map(post => (
//                         <div key={post.id} className="flex space-x-3">
//                           <div className="w-16 h-16 bg-gradient-heritage rounded-lg flex items-center justify-center flex-shrink-0">
//                             <Utensils className="h-6 w-6 text-white opacity-50" />
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <h4 className="text-sm font-medium text-heritage-brown line-clamp-2 mb-1">
//                               {post.title}
//                             </h4>
//                             <div className="text-xs text-muted-foreground">
//                               {new Date(post.date).toLocaleDateString()}
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//                 {/* Popular Tags */}
//                 <Card className="p-6 shadow-warm">
//                   <CardContent>
//                     <h3 className="text-lg font-semibold text-heritage-brown mb-4">Popular Tags</h3>
//                     <div className="flex flex-wrap gap-2">
//                       {popularTags.map(tag => (
//                         <Button
//                           key={tag}
//                           variant="outline"
//                           size="sm"
//                           className="text-xs"
//                           onClick={() => setSearchTerm(tag)}
//                         >
//                           <Tag className="h-3 w-3 mr-1" />
//                           {tag}
//                         </Button>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//                 {/* Newsletter */}
//                 <Card className="p-6 shadow-warm bg-heritage-brown text-white">
//                   <CardContent className="text-center">
//                     <h3 className="text-lg font-semibold mb-2 text-traditional-gold">Stay Updated</h3>
//                     <p className="text-sm opacity-90 mb-4">
//                       Get the latest recipes, travel tips, and stories delivered to your inbox.
//                     </p>
//                     <div className="space-y-3">
//                       <Input 
//                         type="email" 
//                         placeholder="Your email address"
//                         className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
//                       />
//                       <Button variant="heritage" className="w-full">
//                         Subscribe
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };
// export default Blog;
