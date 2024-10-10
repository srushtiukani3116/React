import React from 'react'
import { Carousel } from "@material-tailwind/react";

export default function Home() {
  return (
    <div>
      {/* Slider  */}
        <div>
            <Carousel className="">
            <img
                src="https://media.istockphoto.com/id/1472363995/photo/skincare-natural-cosmetic-beauty-concept-for-face-and-body-care-eco-friendly-packaging.jpg?s=612x612&w=0&k=20&c=ygo30lfzEwcY7JYxfXnKAu0sDPTRHwACVmdm_7CFkHQ="
                alt="image 1"
                className="h-80 w-full object-cover"
            />
            <img
                src="https://media.istockphoto.com/id/1213960612/photo/cosmetics-skincare-ingredients.jpg?s=612x612&w=0&k=20&c=cA27SljabxeO4hCQNw-C_-m8b180E9iW8tLAzAZ_Xnw="
                alt="image 2"
                className="h-80 w-full object-cover"
            />
            <img
                src="https://media.istockphoto.com/id/1298237167/photo/natural-cosmetic-concept-with-serum-and-cream-tube-and-bottles-with-natural-materials.jpg?s=612x612&w=0&k=20&c=4diUaIZwUv-SOBhEc8NFjzKOmzZXjix0Ia8m4xyWPK4="
                alt="image 3"
                className="h-80 w-full object-cover"
            />
            <img
                src="https://media.istockphoto.com/id/1297786017/photo/zero-waste-eco-friendly-hygiene-bathroom-concept-wooden-toothbrush-soap-brush-cosmetic.jpg?s=612x612&w=0&k=20&c=rAUYfpeKFOKK85y5KtyU5kg8zHAJEg8PTlF-oYADBWQ="
                alt="image 3"
                className="h-80 w-full object-cover"
            />
            </Carousel>
        </div>
        <div className='gallery'>
          {/* Gallery  */}
          <h2>basq magazine</h2>
          <p>Take a peek at our online magazine where we cover everything from water to travel and wellness.</p>
          <div classname="grid gap-4">
            <div className='row m-4'>
              <div>
                  <img className="h-100 max-w-full" src="https://media.istockphoto.com/id/1213960612/photo/cosmetics-skincare-ingredients.jpg?s=612x612&w=0&k=20&c=cA27SljabxeO4hCQNw-C_-m8b180E9iW8tLAzAZ_Xnw=" alt=""/>
              </div>
              <div>
                  <img className="h-100 max-w-full" src="https://media.istockphoto.com/id/1213960612/photo/cosmetics-skincare-ingredients.jpg?s=612x612&w=0&k=20&c=cA27SljabxeO4hCQNw-C_-m8b180E9iW8tLAzAZ_Xnw=" alt=""/>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-4">
                <div>
                    <img className="h-auto max-w-full" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTzMF35V9sNnYcO5oBMHKWtw3p76sr4hnehospjBfAYiJPqlSBQBMQvxXYOufrWfArQcJFAjrUe6y5slYhn6h_fGM1Z73w2xwPQWZkcO-JOCbRXrkWD67MGaQ&usqp=CAc" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSURnBYft0bnQUAniydu1MVzrOSkj3tN5Lzl49M7TQ16d2wNG8sccdhntZLItQvwcejfgpGW7cqA2BldZKK9JX8WlJnd9iIB0yG_EsbQJWCbsDB8zs0NXFWBfjfGxnEP0g2wYRj2A&usqp=CAc" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQKpWY4blZysvr_Qls-gRYqByULDjUGKZLIPTBiHVgOrdHcEA81ZPvrWGIxyE3aFB14xGCcinR2h517cEvfKZ3ASsYJe1ZdRUNcuCpNEkk&usqp=CAc" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTpWrOHdzgxZNaJ6PVlPdjSySMAzG_NWJ9j4boyM0EzTa_QmYGGQIQAEv8aegyJgNOOxecZNQXI8j1luteCiX17_Epto-IzNsU4HQUC1W0TLD2vmomKPrVnWQ&usqp=CAc" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTt5xLFnjR6dCgfC7aVxWAYTAXJEIp96IvocmrKaoftkOscpd0YNugbCRMGDASpxrzMM5C8jS5UuxaYLKP8OG-GLKi9BRw7_kn2CZ5X-A8&usqp=CAc" alt=""/>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}