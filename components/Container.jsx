import React from "react"
import Card from "./Card";


const trucks = [
    {
        src: 'https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg',
        name: 'Birria-Landia',
        location: 'Mexican',
        menuLink: 'https://thebirrialandia.com/menu/'
    },
    {
        src: 'https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42',
        name: 'Mysttik Masala',
        location: 'Indian',
        menuLink: 'https://indianfoodny.com/'
    },
    {
        src: 'https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&strip=all&w=1024',
        name: 'The Halal Guys',
        location: 'Middle Eastern',
        menuLink: 'https://thehalalguys.com/menu/'
    },
    {
        src: 'https://nydosas.com/wp-content/uploads/2018/07/maxresdefault-2-1024x630.jpg',
        name: 'NY Dosas',
        location: 'Vegetarian',
        menuLink: 'https://nydosas.com/menu/'
    },
    {
        src: 'https://infatuation.imgix.net/media/images/reviews/jerk-pan/banners/1561989308.8.jpg',
        name: 'Jerk Pan',
        location: 'Jamaican',
        menuLink: 'https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/'
    },
    {
        src: 'https://static01.nyt.com/images/2019/09/04/dining/29hungry-tong2/merlin_159654336_783be212-7726-485e-9250-4793a743af41-jumbo.jpg',
        name: 'Tong',
        location: 'Bangladeshi',
        menuLink: 'https://www.facebook.com/Bangladeshistreetfoods/'
    },
    {
        src: 'https://kingsouvlakinyc.com/wp-content/themes/king/images/location-f.jpg',
        name: 'King Souvlaki of Astoria',
        location: 'Greek',
        menuLink: 'https://kingsouvlakinyc.com/'
    },
    {
        src: 'https://fastly.4sqi.net/img/general/600x600/61129566_7PLEKHNMZ-VNqzYx2jWRVZGrZ42PdPX0M-j9Ftpg8Ts.jpg',
        name: "Ling's Sweet Mini Cakes",
        location: 'Chinese',
        menuLink: 'https://canalstreet.market/'
    },
    {
        src: 'https://d3hbe0kmbam4a5.cloudfront.net/photos/67e1cdb7-bc27-4f26-8343-851bfaa7fc22.jpg',
        name: "Uncle Gussy's",
        location: 'Greek',
        menuLink: 'https://unclegussys.com/menus/'
    },
    {
        src: 'https://live.staticflickr.com/8088/8400188739_53b16c7d13_z.jpg',
        name: 'Patacon Pisao',
        location: 'Venezuelan',
        menuLink: 'https://www.pataconpisaonyc.com/menus/'
    },
    {
        src: 'https://infatuation.imgix.net/media/images/reviews/moms-momo/banners/1606245507.888788.png',
        name: "Mom's Mono",
        location: 'Tibetan',
        menuLink: 'https://www.restaurantji.com/ny/jackson-heights/moms-momo-/menu/'
    },
    {
        src: 'https://fastly.4sqi.net/img/general/600x600/784042_29bZZHPGisHnWqyIuuXMo8D2zzW7QS6Hft7Vv15SH_I.jpg',
        name: 'Makina Cafe',
        location: 'Ethiopian',
        menuLink: 'https://makinacafenyc.com/'
    }
]

const Container = (props) => {
    return (
        <div className="container">
            {
                trucks.map((truck, i) => {
                    return (
                        <Card 
                            key={i}
                            src={truck.src} 
                            truckName={truck.name} 
                            location={truck.location} 
                            menuLink={truck.menuLink} 
                        />
                    )
                })
            }
        </div>
    )
};

export default Container;