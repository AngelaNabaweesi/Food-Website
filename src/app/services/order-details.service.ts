import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
  foodDetails = 
  [
    {
      id: 1,
      foodName: "Panner Grilled Sandwich",
      foodDetails: "Pan-fried masala paneer.",
      foodPrice: 200,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"  ,
    },
    {
      id: 2,
      foodName: "Vaggie Supreme",
      foodDetails: "Onions | Green Capsium | Mushroom | Black Olives, sweet corn, Red Paprika topped with Cheese",
      foodPrice: 300,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"  ,
    },
    {
      id: 3,
      foodName: "Panner Burger",
      foodDetails: "Panner",
      foodPrice: 149,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k",
    },
    {
      id: 4,
      foodName: "Veg Masala Roll In Naan",
      foodDetails: "A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice: 140,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7",
    },
    {
      id: 5,
      foodName: "Indulgence Brown",
      foodDetails: "(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      foodPrice: 150,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv",
    },
    {
      id: 6,
      foodName: "Oreo Cheesecake Ice Cream",
      foodDetails: "Oreo ice cream",
      foodPrice: 219,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6",
    },
  ]
  
}
