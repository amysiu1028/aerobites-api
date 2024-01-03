// cmd + shift + L - selects all and then you can change and delete it!
let businesses = [
    {
        terminal_id: 1, 
        businessName: "Atlanta Chophouse" 
    },
    { 
        terminal_id: 1, 
        businessName: "Auntie Anne's" 
    },
    { 
        terminal_id: 1, 
        businessName: "Burger King" 
    },
    { 
        terminal_id: 1, 
        businessName: "IHOP express" 
    },
    { 
        terminal_id: 1, 
        businessName: "Starbucks" 
    },
    { 
        terminal_id: 1, 
        businessName: "TGI Fridays'" 
    },
    { 
        terminal_id: 1, 
        businessName: "We Juice It" 
    },
    { 
        terminal_id: 1, 
        businessName: "Z Market" 
    },
    { 
        terminal_id: 2, 
        businessName: "Asian Chao" 
    },
    { 
        terminal_id: 2, 
        businessName: "Atlanta Bread & Bar" 
    },
    { 
        terminal_id: 2, 
        businessName: "Atlanta Hawks Bar & Grill" 
    },
    { 
        terminal_id: 2, 
        businessName: "Beer Code (Kitchen & Bar)" 
    },
    { 
        terminal_id: 2, 
        businessName: "Boar's Head Deli" 
    },
    { 
        terminal_id: 2, 
        businessName: "Boar's Head Kiosk" 
    },
    { 
        terminal_id: 2, 
        businessName: "Boardwalk Fresh Burgers & Fries" 
    },
    { 
        terminal_id: 2, 
        businessName: "Brioche Dorée Cafe" 
    },
    { 
        terminal_id: 2, 
        businessName: "Caribou Coffee" 
    },
    { 
        terminal_id: 2, 
        businessName: "Cat Cora's Kitchena" 
    },
    { 
        terminal_id: 2, 
        businessName: "Chick-fil-A" 
    },
    { 
        terminal_id: 2, 
        businessName: "Dunkin Donuts" 
    },
    { 
        terminal_id: 2, 
        businessName: "Freshëns" 
    },
    { 
        terminal_id: 2, 
        businessName: "Goldberg's Bagels Deli" 
    },
    { 
        terminal_id: 2, 
        businessName: "Gordon Biersch" 
    },
    { 
        terminal_id: 2, 
        businessName: "Great Wraps" 
    },
    { 
        terminal_id: 2, 
        businessName: "Low Country New Southern Cuisine" 
    },
    { 
        terminal_id: 2, 
        businessName: "McDonald's" 
    },
    { 
        terminal_id: 2, 
        businessName: "P.F. Chang's," 
    },
    { 
        terminal_id: 2, 
        businessName: "Piece of Cake" 
    },
    { 
        terminal_id: 2, 
        businessName: "Pinkberry" 
    },
    { 
        terminal_id: 2, 
        businessName: "Qdoba Mexican Grill" 
    },
    { 
        terminal_id: 2, 
        businessName: "Savannah's Candy Chicken" 
    },
    { 
        terminal_id: 2, 
        businessName: "Shake Shack" 
    },
    { 
        terminal_id: 2, 
        businessName: "The Coffee Bean & Tea Leaf" 
    },
    { 
        terminal_id: 2, 
        businessName: "Varasano's Pizzeria" 
    },
    { 
        terminal_id: 2, 
        businessName: "Z Market" 
    },
    { 
        terminal_id: 3, 
        businessName: "Asian Chao" 
    },
    { 
        terminal_id: 3, 
        businessName: "Atlanta Bread Company Kiosk" 
    },
    { 
        terminal_id: 3, 
        businessName: "Auntie Anne’s" 
    },
    { 
        terminal_id: 3, 
        businessName: "Blue Moon Brewhouse" 
    },
    { 
        terminal_id: 3, 
        businessName: "Bobby Burger Palace" 
    },
    { 
        terminal_id: 3, 
        businessName: "Dunkin' Donuts" 
    },
    { 
        terminal_id: 3, 
        businessName: "Fresh 2 Order" 
    },
    { 
        terminal_id: 3, 
        businessName: "Freshëns" 
    },
    { 
        terminal_id: 3, 
        businessName: "Paschal's" 
    },
    { 
        terminal_id: 3, 
        businessName: "Popeyes" 
    },
    { 
        terminal_id: 3, 
        businessName: "Proof of the Pudding Kiosk" 
    },
    { 
        terminal_id: 3, 
        businessName: "Roast Coffee House" 
    },
    { 
        terminal_id: 3, 
        businessName: "Samuel Adams Bar" 
    },
    { 
        terminal_id: 3, 
        businessName: "Savi Provisions Cafe" 
    },
    { 
        terminal_id: 3, 
        businessName: "Savannah's Candy Kitchen" 
    },
    { 
        terminal_id: 3, 
        businessName: "Sweetwater Last Cast Bar and Grill" 
    },
    {
        terminal_id: 3,
        bussinessName: "TGI Friday's"
    },
    {
        terminal_id: 3,
        bussinessName: "Wendy’s"
    },
    {
        terminal_id: 3,
        bussinessName: "Willy's Mexican Grill"
    },
    {
        terminal_id: 3,
        bussinessName: "Z Market"
    },
    {
        terminal_id: 4,
        bussinessName: "Atlanta Bread Company"
    },
    {
        terminal_id: 4,
        bussinessName: "Auntie Anne’s"
    },
    {
        terminal_id: 4,
        bussinessName: "Baja Fresh Express"
    },
    {
        terminal_id: 4,
        bussinessName: "Bantam and Biddy"
    },
    {
        terminal_id: 4,
        bussinessName: "Carrabba’s Italian Grill"
    },
    {
        terminal_id: 4,
        bussinessName: "Charley's Philly Steaks"
    },
    {
        terminal_id: 4,
        bussinessName: "Chick-Fil-A"
    },
    {
        terminal_id: 4,
        bussinessName: "Famous Famiglia Pizza"
    },
    {
        terminal_id: 4,
        bussinessName: "Five Guys Burgers and Fries"
    },
    {
        terminal_id: 4,
        bussinessName: "Great Wraps"
    },
    {
        terminal_id: 4,
        bussinessName: "Jersey Mike's Subs"
    },
    {
        terminal_id: 4,
        bussinessName: "Krispy Kreme"
    },
    {
        terminal_id: 4,
        bussinessName: "La Madeleine kiosk"
    },
    {
        terminal_id: 4,
        bussinessName: "Leeann Chin"
    },
    {
        terminal_id: 4,
        bussinessName: "Links Grill"
    },
    {
        terminal_id: 4,
        bussinessName: "Longhorn Steakhouse"
    },
    {
        terminal_id: 4,
        bussinessName: "Salad Works"
    },
    {
        terminal_id: 4,
        bussinessName: "Savannah's Candy Kitchen"
    },
    {
        terminal_id: 4,
        bussinessName: "Sbarro"
    },
    {
        terminal_id: 4,
        bussinessName: "Starbucks"
    },
    {
        terminal_id: 4,
        bussinessName: "Sweet Georgia Juke Joint"
    },
    {
        terminal_id: 4,
        bussinessName: "The Market"
    },
    {
        terminal_id: 4,
        bussinessName: "The Original El Taco"
    },
    {
        terminal_id: 4,
        bussinessName: "The Pecan Bar"
    },
    {
        terminal_id: 4,
        bussinessName: "The Varsity"
    },
    {
        terminal_id: 4,
        bussinessName: "Umaizushi"
    },
    {
        terminal_id: 5,
        bussinessName: "4040 Club"
    },
    {
        terminal_id: 5,
        bussinessName: "Asian Chao"
    },
    {
        terminal_id: 5,
        bussinessName: "ATL Market"
    },
    {
        terminal_id: 5,
        bussinessName: "Atlanta Braves All Star Grill"
    },
    {
        terminal_id: 5,
        bussinessName: "Auntie Annie’s"
    },
    {
        terminal_id: 5,
        bussinessName: "Buffalo Wild Wings"
    },
    {
        terminal_id: 5,
        bussinessName: "The Coffee Been & Tea Leaf"
    },
    {
        terminal_id: 5,
        bussinessName: "Chicken + Beer"
    },
    {
        terminal_id: 5,
        bussinessName: "Chipotle Mexican Grill"
    },
    {
        terminal_id: 5,
        bussinessName: "Einstein Bros. Bagels"
    },
    {
        terminal_id: 5,
        bussinessName: "Fav Yo"
    },
    {
        terminal_id: 5,
        bussinessName: "Famous Famiglia"
    },
    {
        terminal_id: 5,
        bussinessName: "Five Guys Burgers and Fries"
    },
    {
        terminal_id: 5,
        bussinessName: "Freshëns"
    },
    {
        terminal_id: 5,
        bussinessName: "Garbanzo Mediterranean Grill"
    },
    {
        terminal_id: 5,
        bussinessName: "Grindhouse Killer Burgers"
    },
    {
        terminal_id: 5,
        bussinessName: "Harvest + Grounds"
    },    
    {
    terminal_id: 5,
    bussinessName: "The Market by Food & Wine"
    },
    {
    terminal_id: 5,
    bussinessName: "Mustard Seed BBQ"
    },
    {
    terminal_id: 5,
    bussinessName: "Phillips Seafood,"
    },
    {
    terminal_id: 5,
    bussinessName: "Popeyes"
    },
    {
    terminal_id: 5,
    bussinessName: "Terrapin Brewery"
    },
    {
    terminal_id: 5,
    bussinessName: "Wolfgang Puck Fresh Express "
    },
    {
    terminal_id: 6,
    bussinessName: "Arby's"
    },
    {
    terminal_id: 6,
    bussinessName: "Boar's Head Kiosk"
    },
    {
    terminal_id: 6,
    bussinessName: "Caribou Coffee"
    },
    {
    terminal_id: 6,
    bussinessName: "Freshëns"
    },
    {
    terminal_id: 6,
    bussinessName: "McDonald’s"
    },
    {
    terminal_id: 6,
    bussinessName: "Nathan's"
    },
    {
    terminal_id: 6,
    bussinessName: "Nature’s Table"
    },
    {
    terminal_id: 6,
    bussinessName: "One Flew South"
    },
    {
    terminal_id: 6,
    bussinessName: "Qdoba Mexican Grill"
    },
    {
    terminal_id: 6,
    bussinessName: "Panda Express"
    },
    {
    terminal_id: 6,
    bussinessName: "Subway"
    },
    {
    terminal_id: 6,
    bussinessName: "TGI Friday’s"
    },
    {
    terminal_id: 6,
    bussinessName: "The Piano Bar"
    },
    {
    terminal_id: 6,
    bussinessName: "Villa Pizza Fresh Italian Kitchen"
    },
    {
    terminal_id: 7,
    bussinessName: "Atlanta Stillhouse"
    },
    {
    terminal_id: 7,
    bussinessName: "Auntie Annie's"
    },
    {
    terminal_id: 7,
    bussinessName: "Bojangles"
    },
    {
    terminal_id: 7,
    bussinessName: "Coffee Bean and Tea Leaf"
    },
    {
    terminal_id: 7,
    bussinessName: "Goldberg’s Bagel Company & Deli"
    },
    {
    terminal_id: 7,
    bussinessName: "GrindHouse Burgers"
    },
    {
    terminal_id: 7,
    bussinessName: "Harvest & Grounds Cafe"
    },
    {
    terminal_id: 7,
    bussinessName: "Jamba Juice"
    },
    {
    terminal_id: 7,
    bussinessName: "Papi’s Caribbean Cafe"
    },
    {
    terminal_id: 7,
    bussinessName: "Subway"
    },
    {
    terminal_id: 7,
    bussinessName: "TGI Friday’s"
    },
    {
    terminal_id: 7,
    bussinessName: "Uncle Maddio’s"
    },
    {
    terminal_id: 7,
    bussinessName: "Z Market"
    },
    {
    terminal_id: 8,
    bussinessName: "Ecco"
    },
    {
    terminal_id: 8,
    bussinessName: "Lorena Garcia Tapas"
    },
    {
    terminal_id: 8,
    bussinessName: "Maison Mathis Belgium Beer Cafe"
    },
    {
    terminal_id: 8,
    bussinessName: "The Original El Taco"
    },
    {
    terminal_id: 8,
    bussinessName: "The Pecan Bistro"
    },
    {
    terminal_id: 8,
    bussinessName: "Pei Wei"
    },
    {
    terminal_id: 8,
    bussinessName: "Starbucks"
    },
    {
    terminal_id: 8,
    bussinessName: "Sweet Auburn Market"
    },
    {
    terminal_id: 8,
    bussinessName: "The Varsity"
    },
    {
    terminal_id: 9,
    bussinessName: "Bleu Mediterranean Bar"
    },
    {
    terminal_id: 9,
    bussinessName: "The Salt Lick Bar-B-Que"
    },
    {
    terminal_id: 9,
    bussinessName: "Pappadeaux Seafood Kitchen"
    },
    {
    terminal_id: 9,
    bussinessName: "Ling & Louie’s"
    },
    {
    terminal_id: 9,
    bussinessName: "Pappasito’s Cantina"
    },
    {
    terminal_id: 9,
    bussinessName: "California Pizza Kitchen"
    },
    {
    terminal_id: 9,
    bussinessName: "Vino Volo"
    },
    {
    terminal_id: 9,
    bussinessName: "Lorena Garcia Tapas y Cocina"
    },
    {
    terminal_id: 9,
    bussinessName: "Twisted Root"
    },
    {
    terminal_id: 9,
    bussinessName: "Plum Market"
    },
    {
    terminal_id: 9,
    bussinessName: "Auntie Anne’s Pretzels"
    },
    {
    terminal_id: 9,
    bussinessName: "Dunkin’ Donuts"
    },
    {
    terminal_id: 9,
    bussinessName: "Einstein Bros. Bagels"
    },
    {
    terminal_id: 9,
    bussinessName: "La Creme Coffee & Tea"
    },
    {
    terminal_id: 9,
    bussinessName: "La Madeline"
    },
    {
    terminal_id: 9,
    bussinessName: "McDonald’s"
    },
    {
    terminal_id: 9,
    bussinessName: "Panera Bread"
    },
    {
    terminal_id: 9,
    bussinessName: "Pinkberry"
    },
    {
    terminal_id: 9,
    bussinessName: "Popeye’s"
    },
    {
    terminal_id: 9,
    bussinessName: "Qdoba"
    },
    {
    terminal_id: 9,
    bussinessName: "Starbucks"
    },
    {
    terminal_id: 9,
    bussinessName: "TGI Fridays"
    },
    {
    terminal_id: 9,
    bussinessName: "Whisk & Bowl"
    },
    {
    terminal_id: 10,
    bussinessName: "Cousins BBQ"
    },
    {
    terminal_id: 10,
    bussinessName: "Hickory by Kent Rathbun"
    },
    {
    terminal_id: 10,
    bussinessName: "Cantina Laredo"
    },
    {
    terminal_id: 10,
    bussinessName: "Decanted"
    },
    {
    terminal_id: 10,
    bussinessName: "Cousins Back Porch"
    },
    {
    terminal_id: 10,
    bussinessName: "Auntie Anne’s Pretzels"
    },
    {
    terminal_id: 10,
    bussinessName: "Baskin-Robbins"
    },
    {
    terminal_id: 10,
    bussinessName: "Caribou Coffee"
    },
    {
    terminal_id: 10,
    bussinessName: "Dunkin’ Donuts"
    },
    {
    terminal_id: 10,
    bussinessName: "Garrett Popcorn Shops"
    },
    {
    terminal_id: 10,
    bussinessName: "McAllister’s Deli"
    },
    {
    terminal_id: 10,
    bussinessName: "McDonald’s"
    },
    {
    terminal_id: 10,
    bussinessName: "Panda Express"
    },
    {
    terminal_id: 10,
    bussinessName: "Plum Market"
    },
    {
    terminal_id: 10,
    bussinessName: "Red Mango"
    },
    {
    terminal_id: 10,
    bussinessName: "Smashburger"
    },
    {
    terminal_id: 10,
    bussinessName: "Starbucks"
    },
    {
    terminal_id: 10,
    bussinessName: "Subway"
    },
    {
    terminal_id: 10,
    bussinessName: "TGI Fridays "
    },
    {
    terminal_id: 10,
    bussinessName: "Wingstop"
    },
    {
    terminal_id: 11,
    bussinessName: "Bleu Mediterranean Bar"
    },
    {
    terminal_id: 11,
    bussinessName: "Shake Shack"
    },
    {
    terminal_id: 11,
    bussinessName: "Pappadeaux Seafood Bar"
    },
    {
    terminal_id: 11,
    bussinessName: "Pappadeaux Seafood Kitchen"
    },
    {
    terminal_id: 11,
    bussinessName: "Pappasito’s Cantina"
    },
    {
    terminal_id: 11,
    bussinessName: "Banh Shop"
    },
    {
    terminal_id: 11,
    bussinessName: "Nowitzki"
    },
    {
    terminal_id: 11,
    bussinessName: "Auntie Anne’s Pretzels"
    },
    {
    terminal_id: 11,
    bussinessName: "Baskin-Robbins"
    },
    {
    terminal_id: 11,
    bussinessName: "Boar’s Head Deli"
    },
    {
    terminal_id: 11,
    bussinessName: "Chick-fil-A"
    },
    {
    terminal_id: 11,
    bussinessName: "Chili’s"
    },
    {
    terminal_id: 11,
    bussinessName: "Dickey’s Barbecue Pit"
    },
    {
    terminal_id: 11,
    bussinessName: "Dunkin’ Donuts"
    },
    {
    terminal_id: 11,
    bussinessName: "Einstein Bros. Bagels"
    },
    {
    terminal_id: 11,
    bussinessName: "Freshens Yogurt & Smoothies"
    },
    {
    terminal_id: 11,
    bussinessName: "McDonald’s"
    },
    {
    terminal_id: 11,
    bussinessName: "Pinkberry"
    },
    {
    terminal_id: 11,
    bussinessName: "Pizza Hut Express "
    },
    {
    terminal_id: 11,
    bussinessName: "Starbucks Coffee"
    },
    {
    terminal_id: 11,
    bussinessName: "TGI Fridays"
    },
    {
    terminal_id: 11,
    bussinessName: "Whisk & Bowl "
    },
    {
    terminal_id: 12,
    bussinessName: "Flying Saucer Draught Emporium "
    },
    {
    terminal_id: 12,
    bussinessName: "Eatzi’s "
    },
    {
    terminal_id: 12,
    bussinessName: "Hickory"
    },
    {
    terminal_id: 12,
    bussinessName: "Cru Food & Wine Bar"
    },
    {
    terminal_id: 12,
    bussinessName: "The Italian Kitchen by Wolfgang Puck"
    },
    {
    terminal_id: 12,
    bussinessName: "Artisan Market"
    },
    {
    terminal_id: 12,
    bussinessName: "TXMX"
    },
    {
    terminal_id: 12,
    bussinessName: "Cantina Laredo "
    },
    {
    terminal_id: 12,
    bussinessName: "Brewed"
    },
    {
    terminal_id: 12,
    bussinessName: "Hickory"
    },
    {
    terminal_id: 12,
    bussinessName: "Bar Louie"
    },
    {
    terminal_id: 12,
    bussinessName: "Banh Shop"
    },
    {
    terminal_id: 12,
    bussinessName: "Applebee’s"
    },
    {
    terminal_id: 12,
    bussinessName: "Buffalo Wild Wings"
    },
    {
    terminal_id: 12,
    bussinessName: "Chick-fil-A"
    },
    {
    terminal_id: 12,
    bussinessName: "Dickey’s Barbecue Pit"
    },
    {
    terminal_id: 12,
    bussinessName: "Great American Bakery"
    },
    {
    terminal_id: 12,
    bussinessName: "Lavazza Coffee"
    },
    {
    terminal_id: 12,
    bussinessName: "McDonald’s"
    },
    {
    terminal_id: 12,
    bussinessName: "Pinkberry"
    },
    {
    terminal_id: 12,
    bussinessName: "Subway"
    },
    {
    terminal_id: 12,
    bussinessName: "Starbucks"
    },
    {
    terminal_id: 12,
    bussinessName: "Whataburger"
    },
    {
    terminal_id: 13,
    bussinessName: "Drew Pearson’s Sports 88"
    },
    {
    terminal_id: 13,
    bussinessName: "Love Shack"
    },
    {
    terminal_id: 13,
    bussinessName: "Sonny Bryan’s Smokehouse"
    },
    {
    terminal_id: 13,
    bussinessName: "2.0 Taco & Tequila Bar"
    },
    {
    terminal_id: 13,
    bussinessName: "Auntie Anne’s Pretzels"
    },
    {
    terminal_id: 13,
    bussinessName: "Chick-fil-A"
    },
    {
    terminal_id: 13,
    bussinessName: "Dunkin’ Donuts"
    },
    {
    terminal_id: 13,
    bussinessName: "Einstein Bros. Bagels"
    },
    {
    terminal_id: 13,
    bussinessName: "IHOP"
    },
    {
    terminal_id: 13,
    bussinessName: "Jamba"
    },
    {
    terminal_id: 13,
    bussinessName: "Jimmy John’s"
    },
    {
    terminal_id: 13,
    bussinessName: "Panda Express and Bar"
    },
    {
    terminal_id: 13,
    bussinessName: "Starbucks"
    },
    {
    terminal_id: 13,
    bussinessName: "TGI Fridays"
    },
    {
    terminal_id: 13,
    bussinessName: "Uno Due Go"
    },
    {
    terminal_id: 13,
    bussinessName: "Wendy’s"
    },
    {
    terminal_id: 14,
    bussinessName: "Ben & Jerry's Ice Cream"
    },
    {
    terminal_id: 14,
    bussinessName: "Blue Sky Bar"
    },
    {
    terminal_id: 14,
    bussinessName: "Caribou Coffee"
    },
    {
    terminal_id: 14,
    bussinessName: "Dazbog Coffee"
    },
    {
    terminal_id: 14,
    bussinessName: "Denver Chophouse"
    },
    {
    terminal_id: 14,
    bussinessName: "Dunkin’ Donuts"
    },
    {
    terminal_id: 14,
    bussinessName: "Einstein Bros. Bagels"
    },
    {
    terminal_id: 14,
    bussinessName: "Freshëns Fresh Food Studio"
    },
    {
    terminal_id: 14,
    bussinessName: "Grab & Go Marketplace"
    },
    {
    terminal_id: 14,
    bussinessName: "KFC ExpressPizza Hut Express"
    },
    {
    terminal_id: 14,
    bussinessName: "Lavazza"
    },
    {
    terminal_id: 14,
    bussinessName: "McDonald's"
    },
    {
    terminal_id: 14,
    bussinessName: "Mesa Verde Bar & Grill "
    },
    {
    terminal_id: 14,
    bussinessName: "Panda Express"
    },
    {
    terminal_id: 14,
    bussinessName: "Pizza Hut Tuk Tuk"
    },
    {
    terminal_id: 14,
    bussinessName: "Quiznos"
    },
    {
    terminal_id: 14,
    bussinessName: "Sky Snax Grab & Go"
    },
    {
    terminal_id: 14,
    bussinessName: "Vino Volo"
    },
    {
    terminal_id: 15,
    bussinessName: "Aviator's Sports Bar & Bar-B-Que "
    },
    {
    terminal_id: 15,
    bussinessName: "Cantina Grill"
    },
    {
    terminal_id: 15,
    bussinessName: "Caribou Coffee"
    },
    {
    terminal_id: 15,
    bussinessName: "City Pho"
    },
    {
    terminal_id: 15,
    bussinessName: "City Wok"
    },
    {
    terminal_id: 15,
    bussinessName: "CRÚ Food and Wine Bar"
    },
    {
    terminal_id: 15,
    bussinessName: "Garbanzo Fresh Mediterranean"
    },
    {
    terminal_id: 15,
    bussinessName: "Half Moon Empanadas"
    },
    {
    terminal_id: 15,
    bussinessName: "Heidi's Brooklyn Deli"
    },
    {
    terminal_id: 15,
    bussinessName: "Hotch Potch Snack Shoppe"
    },
    {
    terminal_id: 15,
    bussinessName: "Jamba Juice"
    },
    {
    terminal_id: 15,
    bussinessName: "Kabod Coffee"
    },
    {
    terminal_id: 15,
    bussinessName: "Lounge 5280 Wine Bar"
    },
    {
    terminal_id: 15,
    bussinessName: "McDonald’s"
    },
    {
    terminal_id: 15,
    bussinessName: "Modern Market"
    },
    {
    terminal_id: 15,
    bussinessName: "Pizza Hut ExpressHäagen Dazs"
    },
    {
    terminal_id: 15,
    bussinessName: "Pour La France!"
    },
    {
    terminal_id: 15,
    bussinessName: "Qdoba Mexican Eats"
    },
    {
    terminal_id: 15,
    bussinessName: "Que Bueno! Mexican Grille"
    },
    {
    terminal_id: 15,
    bussinessName: "Rocky Mountain Chocolate Factory"
    },
    {
    terminal_id: 15,
    bussinessName: "Sara Lee Sandwich ShoppeColombo Frozen Yogurt"
    },
    {
    terminal_id: 15,
    bussinessName: "Shake Shack"
    },
    {
    terminal_id: 15,
    bussinessName: "SmashBurger & Bar"
    },
    {
    terminal_id: 15,
    bussinessName: "Starbucks Coffee"
    },
    {
    terminal_id: 15,
    bussinessName: "Sunset Loop Market"
    },
    {
    terminal_id: 15,
    bussinessName: "SweetWater Mountain Taphouse"
    },
    {
    terminal_id: 15,
    bussinessName: "Wolfgang Puck"
    },
    {
    terminal_id: 16,
    bussinessName: "Auntie Anne's Pretzels"
    },
    {
    terminal_id: 16,
    bussinessName: "Big Bowl"
    },
    {
    terminal_id: 16,
    bussinessName: "Caribou Coffee"
    },
    {
    terminal_id: 16,
    bussinessName: "The Coffee Bean & Tea Leaf"
    },
    {
    terminal_id: 16,
    bussinessName: "Coors Silver Bullet Bar"
    },
    {
    terminal_id: 16,
    bussinessName: "Einstein Bros. Bagels"
    },
    {
    terminal_id: 16,
    bussinessName: "Grab & Go Marketplace"
    },
    {
    terminal_id: 16,
    bussinessName: "Jamba Juice"
    },
    {
    terminal_id: 16,
    bussinessName: "The Magic Pan"
    },
    {
    terminal_id: 16,
    bussinessName: "McDonald's"
    },
    {
    terminal_id: 16,
    bussinessName: "Modern Market"
    },
    {
    terminal_id: 16,
    bussinessName: "SmashBurger & Bar"
    },
    {
    terminal_id: 16,
    bussinessName: "Starbucks Coffee"
    },
    {
    terminal_id: 16,
    bussinessName: "Tapas Sky Bar"
    },
    {
    terminal_id: 16,
    bussinessName: "Timberline Steaks & Grille"
    },
    {
    terminal_id: 16,
    bussinessName: "Villa Pizza"
    },
    {
    terminal_id: 16,
    bussinessName: "Vino Volo"
    },
    {
    terminal_id: 16,
    bussinessName: "Woody Creek Bakery & Café"
    },
    {
    terminal_id: 17,
    bussinessName: "America's Dog"
    },
    {
    terminal_id: 17,
    bussinessName: "Auntie Anne's"
    },
    {
    terminal_id: 17,
    bussinessName: "Beaudevin Wine Bar"
    },
    {
    terminal_id: 17,
    bussinessName: "Berghoff Cafe"
    },
    {
    terminal_id: 17,
    bussinessName: "Billy Goat Tavern & Grill"
    },
    {
    terminal_id: 17,
    bussinessName: "Brioche Doree"
    },
    {
    terminal_id: 17,
    bussinessName: "Cafe Zoot"
    },
    {
    terminal_id: 17,
    bussinessName: "Cafe Descartes"
    },
    {
    terminal_id: 17,
    bussinessName: "Chi Life Market"
    },
    {
    terminal_id: 17,
    bussinessName: "Ciao Gourmet Market"
    },
    {
    terminal_id: 17,
    bussinessName: "Dunkin"
    },
    {
    terminal_id: 17,
    bussinessName: "Eli's Cheesecake"
    },
    {
    terminal_id: 17,
    bussinessName: "Farmer's Fridge"
    },
    {
    terminal_id: 17,
    bussinessName: "Fresh Market on the Go"
    },
    {
    terminal_id: 17,
    bussinessName: "Galileo Bar & Grill"
    },
    {
    terminal_id: 17,
    bussinessName: "Garrett Popcorn Shops"
    },
    {
    terminal_id: 17,
    bussinessName: "Goose Island Beer Company"
    },
    {
    terminal_id: 17,
    bussinessName: "Great American Bagel Company"
    },
    {
    terminal_id: 17,
    bussinessName: "Jamba Juice"
    },
    {
    terminal_id: 17,
    bussinessName: "Jazz Bar"
    },
    {
    terminal_id: 17,
    bussinessName: "La Tapenade Mediterranean Cafe"
    },
    {
    terminal_id: 17,
    bussinessName: "Manchu Wok"
    },
    {
    terminal_id: 17,
    bussinessName: "McDonald's"
    },
    {
    terminal_id: 17,
    bussinessName: "Nuts on Clark"
    },
    {
    terminal_id: 17,
    bussinessName: "Reggio's Pizza"
    },
    {
    terminal_id: 17,
    bussinessName: "Rocky Mountain Chocolate Factory"
    },
    {
    terminal_id: 17,
    bussinessName: "Salad Works"
    },
    {
    terminal_id: 17,
    bussinessName: "Smoothie King  The Grove"
    },
    {
    terminal_id: 17,
    bussinessName: "Starbucks Coffee"
    },
    {
    terminal_id: 17,
    bussinessName: "Tuscany Cafe"
    },
    {
    terminal_id: 17,
    bussinessName: "Wicker Park Seafood & Sushi Bar"
    },
    {
    terminal_id: 17,
    bussinessName: "Wolfgang Express"
    },
    {
    terminal_id: 18,
    bussinessName: "Auntie Anne's"
    },
    {
    terminal_id: 18,
    bussinessName: "Brioche Doree"
    },
    {
    terminal_id: 18,
    bussinessName: "CIBO Express Gourmet Market"
    },
    {
    terminal_id: 18,
    bussinessName: "Carry Out Carry On"
    },
    {
    terminal_id: 18,
    bussinessName: "Chicago Style Hot Dogs"
    },
    {
    terminal_id: 18,
    bussinessName: "Chili's Too"
    },
    {
    terminal_id: 18,
    bussinessName: "Eat Well, Travel Further"
    },
    {
    terminal_id: 18,
    bussinessName: "Farmer's Fridge"
    },
    {
    terminal_id: 18,
    bussinessName: "La Tapenade Mediterranean Cafe"
    },
    {
    terminal_id: 18,
    bussinessName: "McDonald's"
    },
    {
    terminal_id: 18,
    bussinessName: "Nuts on Clark"
    },
    {
    terminal_id: 18,
    bussinessName: "Sky Bridge Bar & Grill"
    },
    {
    terminal_id: 18,
    bussinessName: "Stanley's Blackhawks Kitchen & Tap"
    },
    {
    terminal_id: 18,
    bussinessName: "Starbucks Coffee"
    },
    {
    terminal_id: 18,
    bussinessName: "Summer House Santa Monica"
    },
    {
    terminal_id: 18,
    bussinessName: "Wicker Park Seafood & Sushi Bar (Bar Service Only)"
    },
    {
    terminal_id: 19,
    bussinessName: "B-Smooth, Smoothies & Salads"
    },
    {
    terminal_id: 19,
    bussinessName: "BJ Gourmet Market"
    },
    {
    terminal_id: 19,
    bussinessName: "Brioche Doree"
    },
    {
    terminal_id: 19,
    bussinessName: "Bubbles Wine Bar"
    },
    {
    terminal_id: 19,
    bussinessName: "Burger Federation"
    },
    {
    terminal_id: 19,
    bussinessName: "Burrito Beach"
    },
    {
    terminal_id: 19,
    bussinessName: "Café Descartes"
    },
    {
    terminal_id: 19,
    bussinessName: "CIBO Express Gourmet Market"
    },
    {
    terminal_id: 19,
    bussinessName: "Chicago Cubs Bar & Grill"
    },
    {
    terminal_id: 19,
    bussinessName: "Chili's Too"
    },
    {
    terminal_id: 19,
    bussinessName: "Dunkin' Donuts"
    },
    {
    terminal_id: 19,
    bussinessName: "Facades Bar"
    },
    {
    terminal_id: 19,
    bussinessName: "Farmers Market"
    },
    {
    terminal_id: 19,
    bussinessName: "Fulton Street Cafe"
    },
    {
    terminal_id: 19,
    bussinessName: "Garrett Popcorn Shops"
    },
    {
    terminal_id: 19,
    bussinessName: "Gold Coast Dogs"
    },
    {
    terminal_id: 19,
    bussinessName: "Goose Island Beer Company"
    },
    {
    terminal_id: 19,
    bussinessName: "ICE Dishes & Drinks Bar"
    },
    {
    terminal_id: 19,
    bussinessName: "Great American Bagel Company"
    },
    {
    terminal_id: 19,
    bussinessName: "La Tapenade Mediterranean Cafe"
    },
    {
    terminal_id: 19,
    bussinessName: "Macaroni Grill"
    },
    {
    terminal_id: 19,
    bussinessName: "Manchu Wok"
    },
    {
    terminal_id: 19,
    bussinessName: "McDonald's"
    },
    {
    terminal_id: 19,
    bussinessName: "O'Brien's Restaurant & Bar"
    },
    {
    terminal_id: 19,
    bussinessName: "Prairie Tap"
    },
    {
    terminal_id: 19,
    bussinessName: "Publican Tavern"
    },
    {
    terminal_id: 19,
    bussinessName: "Reggio's Pizza"
    },
    {
    terminal_id: 19,
    bussinessName: "Rocky Mountain Chocolate Factory"
    },
    {
    terminal_id: 19,
    bussinessName: "Rush Street Bar"
    },
    {
    terminal_id: 19,
    bussinessName: "Skyscrapers Bar"
    },
    {
    terminal_id: 19,
    bussinessName: "Starbucks Coffee"
    },
    {
    terminal_id: 19,
    bussinessName: "Subway"
    },
    {
    terminal_id: 19,
    bussinessName: "Tortas Frontera by Rick Bayless"
    },
    {
    terminal_id: 19,
    bussinessName: "Wolfgang Puck Express"
    },
    {
    terminal_id: 20,
    bussinessName: "Big Bowl"
    },
    {
    terminal_id: 20,
    bussinessName: "Burger King"
    },
    {
    terminal_id: 20,
    bussinessName: "Dunkin' Donuts"
    },
    {
    terminal_id: 20,
    bussinessName: "Farmer's Fridge"
    },
    {
    terminal_id: 20,
    bussinessName: "Farmer2Air Market"
    },
    {
    terminal_id: 20,
    bussinessName: "Garrett Popcorn Shops"
    },
    {
    terminal_id: 20,
    bussinessName: "Goddess on the Go"
    },
    {
    terminal_id: 20,
    bussinessName: "Hub 51"
    },
    {
    terminal_id: 20,
    bussinessName: "McDonald's"
    },
    {
    terminal_id: 20,
    bussinessName: "R.J. Grunts Burgers & Fries"
    },
    {
    terminal_id: 20,
    bussinessName: "Six Points Market"
    },
    {
    terminal_id: 20,
    bussinessName: "Sparrow Coffee"
    },
    {
    terminal_id: 20,
    bussinessName: "The Goddess and Grocer"
    },
    {
    terminal_id: 20,
    bussinessName: "Tocco"
    },
    {
    terminal_id: 20,
    bussinessName: "Tortas Frontera by Rick Bayless"
    },
    {
    terminal_id: 20,
    bussinessName: "Urban Olive"
    },
    {
    terminal_id: 20,
    bussinessName: "Wow Bao"
    },
    {
    terminal_id: 21,
    bussinessName: "Jamba Juice"
    },
    {
    terminal_id: 21,
    bussinessName: "Siegel’s Bagelmania"
    },
    {
    terminal_id: 21,
    bussinessName: "Great Steak & Potato Co."
    },
    {
    terminal_id: 21,
    bussinessName: "Moe’s Southwest Grill"
    },
    {
    terminal_id: 21,
    bussinessName: "Starbucks"
    },
    {
    terminal_id: 21,
    bussinessName: "The B Lounge"
    },
    {
    terminal_id: 21,
    bussinessName: "Dunkin’ Express"
    },
    {
    terminal_id: 21,
    bussinessName: "Cocktail Bar"
    },
    {
    terminal_id: 21,
    bussinessName: "Stella Artois Bar"
    },
    {
    terminal_id: 22,
    bussinessName: "Shake Shack"
    },
    {
    terminal_id: 22,
    bussinessName: "360° Gourmet Burritos "
    },
    {
    terminal_id: 22,
    bussinessName: "Einstein Bros. Bagel"
    },
    {
    terminal_id: 22,
    bussinessName: "Fresh Attractions"
    },
    {
    terminal_id: 22,
    bussinessName: "Little Tony’s Pizzeria"
    },
    {
    terminal_id: 22,
    bussinessName: "Mrs. Fields"
    },
    {
    terminal_id: 22,
    bussinessName: "Port of Subs"
    },
    {
    terminal_id: 22,
    bussinessName: "Red Star Lounge"
    },
    {
    terminal_id: 22,
    bussinessName: "PGA Tour Grill"
    },
    {
    terminal_id: 23,
    bussinessName: "Jose Cuervo Tequileria"
    },
    {
    terminal_id: 23,
    bussinessName: "Popeyes"
    },
    {
    terminal_id: 23,
    bussinessName: "Auntie Anne’s"
    },
    {
    terminal_id: 23,
    bussinessName: "Brookwood Farms BBQ"
    },
    {
    terminal_id: 23,
    bussinessName: "Burger King"
    },
    {
    terminal_id: 23,
    bussinessName: "Coffee Bean & Tea Leaf"
    },
    {
    terminal_id: 23,
    bussinessName: "Fresh Attractions"
    },
    {
    terminal_id: 23,
    bussinessName: "Fresh Market on the Go"
    },
    {
    terminal_id: 23,
    bussinessName: "The Great American Bagel & Bakery"
    },
    {
    terminal_id: 23,
    bussinessName: "Jamba Juice"
    },
    {
    terminal_id: 23,
    bussinessName: "LAS MKT"
    },
    {
    terminal_id: 23,
    bussinessName: "Nathan’s Famous"
    },
    {
    terminal_id: 23,
    bussinessName: "Pei Wei Asian Diner"
    },
    {
    terminal_id: 23,
    bussinessName: "Popeye’s"
    },
    {
    terminal_id: 23,
    bussinessName: "Villa Fresh Italian Kitchen"
    },
    {
    terminal_id: 23,
    bussinessName: "Wendy’s"
    },
    {
    terminal_id: 23,
    bussinessName: "Corcoran’s Irish Pub"
    },
    {
    terminal_id: 23,
    bussinessName: "Crafted Bar"
    },
    {
    terminal_id: 23,
    bussinessName: "Barney’s Lounge"
    },
    {
    terminal_id: 23,
    bussinessName: "Jersey Mike’s"
    },
    {
    terminal_id: 23,
    bussinessName: "Lucky Streak"
    },
    {
    terminal_id: 23,
    bussinessName: "Sammy’s Beach Bar & Grill"
    },
    {
    terminal_id: 24,
    bussinessName: "Ruby’s Diner and Ruby’s Bar"
    },
    {
    terminal_id: 24,
    bussinessName: "Wolfgang Puck Express"
    },
    {
    terminal_id: 24,
    bussinessName: "Auntie Anne’s"
    },
    {
    terminal_id: 24,
    bussinessName: "Baja Fresh Express"
    },
    {
    terminal_id: 24,
    bussinessName: "Burger King"
    },
    {
    terminal_id: 24,
    bussinessName: "California Pizza Kitchen"
    },
    {
    terminal_id: 24,
    bussinessName: "Cinnabon"
    },
    {
    terminal_id: 24,
    bussinessName: "Fresh Attractions"
    },
    {
    terminal_id: 24,
    bussinessName: "Great American Bagel & Bakery "
    },
    {
    terminal_id: 24,
    bussinessName: "Jamba Juice"
    },
    {
    terminal_id: 24,
    bussinessName: "Mrs. Fields"
    },
    {
    terminal_id: 24,
    bussinessName: "Port of Subs"
    },
    {
    terminal_id: 24,
    bussinessName: "Quiznos Subs"
    },
    {
    terminal_id: 24,
    bussinessName: "Starbucks Coffee"
    },
    {
    terminal_id: 24,
    bussinessName: "Burke in the Box"
    },
    {
    terminal_id: 24,
    bussinessName: "Chili’s"
    },
    {
    terminal_id: 24,
    bussinessName: "Metro Pizza"
    },
    {
    terminal_id: 24,
    bussinessName: "Rachel’s Kitchen"
    },
    {
    terminal_id: 24,
    bussinessName: "Sammy’s Woodfired Pizza & Grill"
    },
    {
    terminal_id: 24,
    bussinessName: "Estrella Jalisco Bar"
    },
    {
    terminal_id: 25,
    bussinessName: "Auntie Anne's"
    },
    {
    terminal_id: 25,
    bussinessName: "Carvel"
    },
    {
    terminal_id: 25,
    bussinessName: "Chick-fil-A"
    },
    {
    terminal_id: 25,
    bussinessName: "Chili's Too"
    },
    {
    terminal_id: 25,
    bussinessName: "Cinnabon"
    },
    {
    terminal_id: 25,
    bussinessName: "Dunkin' Donuts"
    },
    {
    terminal_id: 25,
    bussinessName: "McDonald's"
    },
    {
    terminal_id: 25,
    bussinessName: "Moe's Southwest Grill"
    },
    {
    terminal_id: 25,
    bussinessName: "Panda Express"
    },
    {
    terminal_id: 25,
    bussinessName: "Quiznos"
    },
    {
    terminal_id: 25,
    bussinessName: "Sbarro"
    },
    {
    terminal_id: 25,
    bussinessName: "Starbucks"
    },
    {
    terminal_id: 26,
    bussinessName: "Brioche Dorée"
    },
    {
    terminal_id: 26,
    bussinessName: "Burger King"
    },
    {
    terminal_id: 26,
    bussinessName: "Cold Stone Creamery"
    },
    {
    terminal_id: 26,
    bussinessName: "Famous Famiglia"
    },
    {
    terminal_id: 26,
    bussinessName: "Starbucks"
    },
    {
    terminal_id: 26,
    bussinessName: "ZaZa Snack Bar"
    },
    {
    terminal_id: 27,
    bussinessName: "Au Bon Pain"
    },
    {
    terminal_id: 27,
    bussinessName: "Kafe Kalik"
    },
    {
    terminal_id: 27,
    bussinessName: "McDonald's"
    },
    {
    terminal_id: 27,
    bussinessName: "pinkberry"
    },
    {
    terminal_id: 27,
    bussinessName: "Sbarro"
    },
    {
    terminal_id: 27,
    bussinessName: "Starbucks"
    },
    {
    terminal_id: 28,
    bussinessName: "Freshens"
    },
    {
    terminal_id: 28,
    bussinessName: "Manchu Wok"
    },
    {
    terminal_id: 28,
    bussinessName: "Nature's Table"
    },
    {
    terminal_id: 28,
    bussinessName: "Qdoba"
    },
    {
    terminal_id: 28,
    bussinessName: "Wendy's"
    },
    {
    terminal_id: 28,
    bussinessName: "ZaZa Cafe"
    },
    {
    terminal_id: 29,
    bussinessName: "Burger King"
    },
    {
    terminal_id: 29,
    bussinessName: "Carvel"
    },
    {
    terminal_id: 29,
    bussinessName: "Fresh Attractions"
    },
    {
    terminal_id: 29,
    bussinessName: "Nathan's: hot dogs"
    },
    {
    terminal_id: 29,
    bussinessName: "Pinkberry"
    },
    {
    terminal_id: 30,
    bussinessName: "Cafe Versailles"
    },
    {
    terminal_id: 30,
    bussinessName: "Icebox Cafe"
    },
    {
    terminal_id: 30,
    bussinessName: "La Carreta Restaurant"
    },
    {
    terminal_id: 30,
    bussinessName: "Ku-Va"
    },
    {
    terminal_id: 30,
    bussinessName: "Spring Chicken"
    },
    {
    terminal_id: 30,
    bussinessName: "Shula’s Bar & Grill"
    },
    {
    terminal_id: 30,
    bussinessName: "Au Bon Pain"
    },
    {
    terminal_id: 30,
    bussinessName: "305 Pizza"
    },
    {
    terminal_id: 30,
    bussinessName: "Bacardi Mojito Bar"
    },
    {
    terminal_id: 30,
    bussinessName: "Beaudevin"
    },
    {
    terminal_id: 30,
    bussinessName: "Clover Irish Pub"
    },
    {
    terminal_id: 30,
    bussinessName: "Clubhouse One"
    },
    {
    terminal_id: 30,
    bussinessName: "The Counter"
    },
    {
    terminal_id: 30,
    bussinessName: "Corona Beach House"
    },
    {
    terminal_id: 30,
    bussinessName: "Dunkin Donuts"
    },
    {
    terminal_id: 30,
    bussinessName: "Einstein Bagels"
    },
    {
    terminal_id: 30,
    bussinessName: "Estefan Kitchen Express"
    },
    {
    terminal_id: 31,
    bussinessName: "Viena"
    },
    {
    terminal_id: 31,
    bussinessName: "Budweiser Brewhouse"
    },
    {
    terminal_id: 31,
    bussinessName: "Burger King"
    },
    {
    terminal_id: 31,
    bussinessName: "Pizza Hut Express"
    },
    {
    terminal_id: 31,
    bussinessName: "Cafe La Caretta"
    },
    {
    terminal_id: 31,
    bussinessName: "Cafe Versailles"
    },
    {
    terminal_id: 31,
    bussinessName: "Chef Creole"
    },
    {
    terminal_id: 31,
    bussinessName: "Chili’s Too"
    },
    {
    terminal_id: 31,
    bussinessName: "Dunkin Donuts"
    },
    {
    terminal_id: 31,
    bussinessName: "Guava & Java"
    },
    {
    terminal_id: 31,
    bussinessName: "Halfmoon Empanadas"
    },
    {
    terminal_id: 31,
    bussinessName: "Subway"
    },
    {
    terminal_id: 31,
    bussinessName: "Margaritaville"
    },
    {
    terminal_id: 31,
    bussinessName: "Samuel Adams"
    },
    {
    terminal_id: 31,
    bussinessName: "Stella Bar"
    },
    {
    terminal_id: 31,
    bussinessName: "Sushi Maki"
    },
    {
    terminal_id: 31,
    bussinessName: "Wynwood Warehouse Bar"
    },
    {
    terminal_id: 32, 
    bussinessName: "Bud Light Lounge"
    },
    { 
    terminal_id: 32, 
    bussinessName: "Bongos Cuban Cafe"
    },
    { 
    terminal_id: 32, 
    bussinessName: "Corona Beach House"
    },
    { 
    terminal_id: 32, 
    bussinessName: "Earl of Sandwich"
    },
    { 
    terminal_id: 32, 
    bussinessName: "Famous Famiglia"
    },
    { 
    terminal_id: 32, 
    bussinessName: "Gilbert’s Food Bar "
    },
    { 
    terminal_id: 32, 
    bussinessName: "Heineken Bar"
    },
    { 
    terminal_id: 32, 
    bussinessName: "La Pausa"
    },
    { 
    terminal_id: 32, 
    bussinessName: "McDonald’s"
    },
    { 
    terminal_id: 32, 
    bussinessName: "Nathan’s Famous"
    },
    { 
    terminal_id: 32, 
    bussinessName: "Subway"
    },
    { 
    terminal_id: 32, 
    bussinessName: "Starbucks"
    },
    { 
    terminal_id: 32, 
    bussinessName: "Quizno’s"
    },
    { 
    terminal_id: 33, 
    bussinessName: "​​Goldilocks Filipino Cuisine"
    },
    { 
    terminal_id: 33, 
    bussinessName: "Starbird"
    },
    {
    terminal_id: 33,
    bussinessName: "Bun Mee"
    },
    {
    terminal_id: 33,
    bussinessName: "Bourbon Pub"
    },
    {
    terminal_id: 33,
    bussinessName: "Ritual Coffee"
    },
    {
    terminal_id: 34,
    bussinessName: "Napa Farms Market"
    },
    {
    terminal_id: 34,
    bussinessName: "Farmerbrown"
    },
    {
    terminal_id: 34,
    bussinessName: "Dolores Park Cafe "
    },
    {
    terminal_id: 34,
    bussinessName: "Proposition Chicken"
    },
    {
    terminal_id: 34,
    bussinessName: "Koi Palace Express"
    },
    {
    terminal_id: 34,
    bussinessName: "SF Uncork’d"
    },
    {
    terminal_id: 35,
    bussinessName: "Sankaku"
    },
    {
    terminal_id: 35,
    bussinessName: "Union Street Gastro Pub "
    },
    {
    terminal_id: 35,
    bussinessName: "Max’s E.V.O.O. Cafe "
    },
    {
    terminal_id: 35,
    bussinessName: "Peet’s Coffee & Tea"
    },
    {
    terminal_id: 35,
    bussinessName: "Burger King "
    },
    {
    terminal_id: 36,
    bussinessName: "Blaze Pizza"
    },
    {
    terminal_id: 36,
    bussinessName: "Cadillac Mexican Kitchen & Tequila Ba"
    },
    {
    terminal_id: 36,
    bussinessName: "Chick-Fil-A"
    },
    {
    terminal_id: 36,
    bussinessName: "El Tiempo Cantina "
    },
    {
    terminal_id: 36,
    bussinessName: "First Glass Bistro & Bar "
    },
    {
    terminal_id: 36,
    bussinessName: "Great American Bagel"
    },
    {
    terminal_id: 36,
    bussinessName: "Jack In The Box"
    },
    {
    terminal_id: 36,
    bussinessName: "Liquid Provisions"
    },
    {
    terminal_id: 36,
    bussinessName: "Mockingbird Distillery & Smokehouse"
    },
    {
    terminal_id: 36,
    bussinessName: "Panda Express"
    },
    {
    terminal_id: 36,
    bussinessName: "Starbucks"
    },
    {
    terminal_id: 36,
    bussinessName: "Subway"
    },
    {
    terminal_id: 36,
    bussinessName: "Wendy’s"
    },
    {
    terminal_id: 36,
    bussinessName: "Which Wich"
    },
    {
    terminal_id: 37,
    bussinessName: "American Craft Tavern"
    },
    {
    terminal_id: 37,
    bussinessName: "Bullritos"
    },
    {
    terminal_id: 37,
    bussinessName: "Cafe Adobe"
    },
    {
    terminal_id: 37,
    bussinessName: "Chick-Fil-A "
    },
    {
    terminal_id: 37,
    bussinessName: "Freshii"
    },
    {
    terminal_id: 37,
    bussinessName: "Hard Rock Cafe"
    },
    {
    terminal_id: 37,
    bussinessName: "Jason’s Deli"
    },
    {
    terminal_id: 37,
    bussinessName: "Panda Express "
    },
    {
    terminal_id: 37,
    bussinessName: "Peet’s Coffee & Tea"
    },
    {
    terminal_id: 37,
    bussinessName: "Pizza Hut"
    },
    {
    terminal_id: 37,
    bussinessName: "Ray’s Fish and Shrimp Shack"
    },
    {
    terminal_id: 37,
    bussinessName: "Smashburger"
    },
    {
    terminal_id: 37,
    bussinessName: "Starbucks"
    },
    {
    terminal_id: 37,
    bussinessName: "SugarLand Beer Garden"
    },
    {
    terminal_id: 37,
    bussinessName: "Whataburger"
    },
    {
    terminal_id: 38, 
    bussinessName: "Pala"
    },
    { 
    terminal_id: 38, 
    bussinessName: "Ember"
    },
    { 
    terminal_id: 38, 
    bussinessName: "Olio"
    },
    { 
    terminal_id: 38, 
    bussinessName: "Q Bar"
    },
    { 
    terminal_id: 38, 
    bussinessName: "Vida Taqueria"
    },
    { 
    terminal_id: 38, 
    bussinessName: "Agave Taqueria"
    },
    { 
    terminal_id: 38, 
    bussinessName: "Alchemy Craft Cocktail"
    },
    { 
    terminal_id: 38, 
    bussinessName: "El Premio Tex-Mex Bar & Grill"
    },
    { 
    terminal_id: 38, 
    bussinessName: "Forno Magico"
    },
    { 
    terminal_id: 38, 
    bussinessName: "Freshens"
    },
    { 
    terminal_id: 38, 
    bussinessName: "H Burger Bar"
    },
    { 
    terminal_id: 38, 
    bussinessName: "Katz Coffee & Bistro"
    },
    { 
    terminal_id: 38, 
    bussinessName: "Landry’s Seafood "
    },
    { 
    terminal_id: 38, 
    bussinessName: "Panda Express"
    },
    { 
    terminal_id: 38, 
    bussinessName: "Pick Up Stix"
    },
    { 
    terminal_id: 38, 
    bussinessName: "Pink’s Pizza"
    },
    { 
    terminal_id: 38, 
    bussinessName: "Poppy’s Bagels  Little Purse"
    },
    { 
    terminal_id: 38, 
    bussinessName: "Potbelly Sandwich Shop"
    },
    {
    terminal_id: 38,
    bussinessName: "Steak n’ Shake"
    },
    {
    terminal_id: 38,
    bussinessName: "Starbucks"
    },
    {
    terminal_id: 38,
    bussinessName: "Southern Belle "
    },
    {
    terminal_id: 38,
    bussinessName: "Wendy’s"
    },
    {
    terminal_id: 38,
    bussinessName: "Which Wich"
    },
    {
    terminal_id: 39,
    bussinessName: "Bayou City Bar"
    },
    {
    terminal_id: 39,
    bussinessName: "Byte: Fresh Grab and Go"
    },
    {
    terminal_id: 39,
    bussinessName: "Ciao Gourmet Market"
    },
    {
    terminal_id: 39,
    bussinessName: "Peet’s Coffee"
    },
    {
    terminal_id: 40,
    bussinessName: "Auntie Anne’s Pretzels"
    },
    {
    terminal_id: 40,
    bussinessName: "Cinnabon"
    },
    {
    terminal_id: 40,
    bussinessName: "Custom Burgers"
    },
    {
    terminal_id: 40,
    bussinessName: "Dunkin’ Donuts"
    },
    {
    terminal_id: 40,
    bussinessName: "El Premio"
    },
    {
    terminal_id: 40,
    bussinessName: "Gavi"
    },
    {
    terminal_id: 40,
    bussinessName: "Houston Wheelhouse"
    },
    {
    terminal_id: 40,
    bussinessName: "Katz Coffee and Bistro"
    },
    {
    terminal_id: 40,
    bussinessName: "Livefire Burger"
    },
    {
    terminal_id: 40,
    bussinessName: "The Market by Villa "
    },
    {
    terminal_id: 40,
    bussinessName: "Panda Express"
    },
    {
    terminal_id: 40,
    bussinessName: "Schlotzsky’s Deli"
    },
    {
    terminal_id: 40,
    bussinessName: "Starbucks "
    },
    {
    terminal_id: 40,
    bussinessName: "Subway"
    },
    {
    terminal_id: 40,
    bussinessName: "Tanglewood Grill "
    },
    {
    terminal_id: 40,
    bussinessName: "Wendy’s"
    },
    {
    terminal_id: 40,
    bussinessName: "World Nectar"
    },
    {
    terminal_id: 40,
    bussinessName: "Yume"
    },
    {
    terminal_id: 41, 
    bussinessName: "Dunkin’"
    },
    { 
    terminal_id: 41, 
    bussinessName: "Alta Strada"
    },
    { 
    terminal_id: 41, 
    bussinessName: "Boston Bruin Bar"
    },
    { 
    terminal_id: 41, 
    bussinessName: "Currito"
    },
    { 
    terminal_id: 41, 
    bussinessName: "Friendly’s"
    },
    { 
    terminal_id: 41, 
    bussinessName: "Harpoon Tap Room"
    },
    { 
    terminal_id: 41, 
    bussinessName: "Legal Sea Foods"
    },
    { 
    terminal_id: 41, 
    bussinessName: "Sbarro"
    },
    { 
    terminal_id: 41, 
    bussinessName: "Starbucks"
    },
    { 
    terminal_id: 41, 
    bussinessName: "B.Good"
    },
    { 
    terminal_id: 42, 
    bussinessName: "Berkshire Farms Market"
    },
    { 
    terminal_id: 42, 
    bussinessName: "Dunkin’"
    },
    { 
    terminal_id: 42, 
    bussinessName: "Kelly’s Roast Beef"
    },
    { 
    terminal_id: 42, 
    bussinessName: "Legal Sea Foods"
    },
    {
    terminal_id: 42,
    bussinessName: "Lucca"
    },
    {
    terminal_id: 42,
    bussinessName: "N.e. MKT"
    },
    {
    terminal_id: 42,
    bussinessName: "Not Your Average Joe’s"
    },
    {
    terminal_id: 43,
    bussinessName: "Dunkin’"
    },
    {
    terminal_id: 43,
    bussinessName: "Boston Beer Works"
    },
    {
    terminal_id: 43,
    bussinessName: "Boston Public Market"
    },
    {
    terminal_id: 43,
    bussinessName: "Camden food co."
    },
    {
    terminal_id: 43,
    bussinessName: "Davio’s Northern Italian Steakhouse"
    },
    {
    terminal_id: 43,
    bussinessName: "Green Express"
    },
    {
    terminal_id: 43,
    bussinessName: "Mija"
    },
    {
    terminal_id: 43,
    bussinessName: "Potbelly Sandwich Shop"
    },
    {
    terminal_id: 43,
    bussinessName: "Starbucks"
    },
    {
    terminal_id: 43,
    bussinessName: "Wahlburgers"
    },
    {
    terminal_id: 44,
    bussinessName: "Dunkin’"
    },
    {
    terminal_id: 44,
    bussinessName: "Boston Harbor Distillery"
    },
    {
    terminal_id: 44,
    bussinessName: "Dine Boston Cafe"
    },
    {
    terminal_id: 44,
    bussinessName: "Harbor Market"
    },
    {
    terminal_id: 44,
    bussinessName: "Legal Sea Foods"
    },
    {
    terminal_id: 44,
    bussinessName: "Sal’s Pizza"
    },
    {
    terminal_id: 44,
    bussinessName: "Monica’s Mercato"
    },
    {
    terminal_id: 45,
    bussinessName: "Starbucks"
    },
    {
    terminal_id: 45,
    bussinessName: "Shula Burger"
    },
    {
    terminal_id: 45,
    bussinessName: "Rocco’s tacos"
    },
    {
    terminal_id: 45,
    bussinessName: "Offerdahl’s Off-The-Grill"
    },
    {
    terminal_id: 45,
    bussinessName: "Air Margaritaville"
    },
    {
    terminal_id: 45,
    bussinessName: "Auntie Anne’s"
    },
    {
    terminal_id: 45,
    bussinessName: "La Familia Tacos & Tequila"
    },
    {
    terminal_id: 45,
    bussinessName: "BurgerFi"
    },
    {
        terminal_id: 46,
        bussinessName: "Flash Fire Pizza"
    },
    {
        terminal_id: 46,
        bussinessName: "Torn Basil"
    },
    {
        terminal_id: 46,
        bussinessName: "Shake Shack"
    },
    {
        terminal_id: 46,
        bussinessName: "Umaizushi"
    },
    {
        terminal_id: 46,
        bussinessName: "Starbucks"
    },
    {
        terminal_id: 47,
        bussinessName: "Golden Bear Grill"
    },
    {
        terminal_id: 47,
        bussinessName: "Harvest and Grounds"
    },
    {
        terminal_id: 47,
        bussinessName: "Corona Extra Beach Bar"
    },
    {
        terminal_id: 47,
        bussinessName: "Steak’n Shake"
    },
    {
        terminal_id: 47,
        bussinessName: "Pei Wei Asian Diner"
    },
    {
        terminal_id: 47,
        bussinessName: "Aroma Market"
    },
    {
        terminal_id: 47,
        bussinessName: "Chef Allen’s 2 Go"
    },
    {
        terminal_id: 48,
        bussinessName: "DeSano Pizza Bakery"
    },
    {
        terminal_id: 48,
        bussinessName: "Casa Noble"
    },
    {
        terminal_id: 48,
        bussinessName: "Café Siena"
    },
    {
        terminal_id: 48,
        bussinessName: "Casanava"
    },
    {
        terminal_id: 48,
        bussinessName: "Kafe Kalik"
    },
    {
        terminal_id: 48,
        bussinessName: "Cross Grain Brewhouse"
    },
    {
        terminal_id: 48,
        bussinessName: "Harvest & Grounds"
    },
    {
        terminal_id: 49,
        businessName: "Blue Door Pub [A]"
      },
      {
        terminal_id: 49,
        businessName: "Bruegger’s Bagels [a]"
      },
      {
        terminal_id: 49,
        businessName: "Greek Kitchen [A]"
      },
      {
        terminal_id: 49,
        businessName: "Bottle Rocket [C]"
      },
      {
        terminal_id: 49,
        businessName: "Buffalo Wild Wings [C]"
      },
      {
        terminal_id: 49,
        businessName: "Chick-fil-A [C]"
      },
      {
        terminal_id: 49,
        businessName: "Chiroport [C]"
      },
      {
        terminal_id: 49,
        businessName: "Farmer’s Fridge [C]"
      },
      {
        terminal_id: 49,
        businessName: "Smash Burger [C]"
      },
      {
        terminal_id: 49,
        businessName: "Starbucks Coffee [C]"
      },
      {
        terminal_id: 49,
        businessName: "Twins Grill [C]"
      },
      {
        terminal_id: 49,
        businessName: "Verdi Market [C]"
      },
      {
        terminal_id: 49,
        businessName: "McDonald’s [D]"
      },
      {
        terminal_id: 49,
        businessName: "Qdoba [E]"
      },
      {
        terminal_id: 49,
        businessName: "Farmer’s Fridge [H]"
      },
      {
        terminal_id: 49,
        businessName: "Red Cow [E]"  
      },
      {
        terminal_id: 49,
        businessName: "Sebastian Joe’s [E]"
      },
      {
        terminal_id: 49,
        businessName: "Auntie Anne’s [F]"
      },
      {
        terminal_id: 49,
        businessName: "Caribou Coffee [F]"
      },
      {
        terminal_id: 49,
        businessName: "Chick-fil-A [F]"
      },
      {
        terminal_id: 49,
        businessName: "Cinnabon [F]"
      },
      {
        terminal_id: 49,
        businessName: "Panda Express [F]"
      },
      {
        terminal_id: 49,
        businessName: "Wendy’s [F]"
      },
      {
        terminal_id: 49,
        businessName: "Cibo Food Hall [G]"
      },
      {
        terminal_id: 49,
        businessName: "Custom Burgers [G]"
      },
      {
        terminal_id: 49,
        businessName: "Poppy’s [G]"
      },
      {
        terminal_id: 49,
        businessName: "Starbucks [G]"
      }, 
      {
        terminal_id: 50,
        businessName: "Caribou Coffee [H]"
      },
      {
        terminal_id: 50,
        businessName: "Minnesota Wild Bar and Restaurant [H]"
      },
      {
        terminal_id: 50,
        businessName: "Subway [H]"
      },
      {
        terminal_id: 50,
        businessName: "Starbucks [H]"
      },
      {
        terminal_id: 51,
        businessName: "Cibo Express"
      },
      {
        terminal_id: 51,
        businessName: "Dunkin’ Donuts"
      },
      {
        terminal_id: 51,
        businessName: "Salotto"
      },
      {
        terminal_id: 52,
        businessName: "Bar 212"
      },
      {
        terminal_id: 52,
        businessName: "Beecher’s Market Cafe"
      },
      {
        terminal_id: 52,
        businessName: "Bar Veloce"
      },
      {
        terminal_id: 52,
        businessName: "Beecher's Market Café"
      },
      {
        terminal_id: 52,
        businessName: "Brewery Heights"
      },
      {
        terminal_id: 52,
        businessName: "Brooklyn Diner"
      },
      {
        terminal_id: 52,
        businessName: "Dos Toros Taqueria"
      },
      {
        terminal_id: 52,
        businessName: "Dunkin' Donuts"
      },
      {
        terminal_id: 52,
        businessName: "Eli's Essentials"
      },
      {
        terminal_id: 52,
        businessName: "Go Go Stop"
      },
      {
        terminal_id: 52,
        businessName: "Greenleaf's"
      },
      {
        terminal_id: 52,
        businessName: "Healthy Gourmet"
      },
      {
        terminal_id: 52,
        businessName: "Hill Country BBQ Market"
      },
      {
        terminal_id: 52,
        businessName: "Irving Farm Coffee Roasters"
      },
      {
        terminal_id: 52,
        businessName: "Junior's Restaurant and Cheesecake"
      },
      {
        terminal_id: 52,
        businessName: "La Chula Bar & Taqueria"
      },
      {
        terminal_id: 52,
        businessName: "Mulberry Street"
      },
      {
        terminal_id: 52,
        businessName: "Osteria Fusco"
      },
      {
        terminal_id: 52,
        businessName: "Scoop"
      },
      {
        terminal_id: 52,
        businessName: "Shake Shack"
      },
      {
        terminal_id: 52,
        businessName: "Spirit & Bell"
      },
      {
        terminal_id: 52,
        businessName: "Starbucks"
      },
      {
        terminal_id: 52,
        businessName: "Sweetleaf Coffee"
      },
      {
        terminal_id: 52,
        businessName: "Tap & Pour"
      },
      {
        terminal_id: 52,
        businessName: "The DEAN"
      },
      {
        terminal_id: 52,
        businessName: "Think Coffee"
      },
      {
        terminal_id: 52,
        businessName: "Tony and Benny's Pizza Parlor"
      },
      {
        terminal_id: 52,
        businessName: "Wendy's"
      },
      {
        terminal_id: 52,
        businessName: "Zaro's Family Bakery"
      },
      {
        terminal_id: 52,
        businessName: "5 Boroughs Food Emporium"
      },
     {
        terminal_id: 53,
        businessName: "Anglers"
      },
      {
        terminal_id: 53,
        businessName: "Artichoke"
      },
      {
        terminal_id: 53,
        businessName: "Bisoux"
      },
      {
        terminal_id: 53,
        businessName: "Cibo Express"
      },
      {
        terminal_id: 53,
        businessName: "Cotto Market"
      },
      {
        terminal_id: 53,
        businessName: "Custom Burgers"
      },
      {
        terminal_id: 53,
        businessName: "Food Hall Hot and Cold Buffet"
      },
      {
        terminal_id: 53,
        businessName: "Kombu"
      },
      {
        terminal_id: 53,
        businessName: "World Bean"
      },
      {
        terminal_id: 54,
        businessName: "Andiamo"
      },
      {
        terminal_id: 54,
        businessName: "Cat Cora's Taproom"
      },
      {
        terminal_id: 54,
        businessName: "Chick-fil-A"
      },
      {
        terminal_id: 54,
        businessName: "Chili’s"
      },
      {
        terminal_id: 54,
        businessName: "Coffee Beanery"
      },
      {
        terminal_id: 54,
        businessName: "Corridor Kitchen"
      },
      {
        terminal_id: 54,
        businessName: "Detroit Street LunchBox (Grab & Go Sandwiches)"
      },
      {
        terminal_id: 54,
        businessName: "Ember's - A Fire & Ice Lounge"
      },
      {
        terminal_id: 54,
        businessName: "Gordon Biersch"
      },
      {
        terminal_id: 54,
        businessName: "Grobbel’s Gourmet Deli"
      },
      {
        terminal_id: 54,
        businessName: "Harvest & Grounds"
      },
      {
        terminal_id: 54,
        businessName: "Illy Coffee & Fountain Bar"
      },
      {
        terminal_id: 54,
        businessName: "Leo's Coney Island"
      },
      {
        terminal_id: 54,
        businessName: "Longhorn Steakhouse"
      },
      {
        terminal_id: 54,
        businessName: "Max & Erma's – Casual Dining"
      },
      {
        terminal_id: 54,
        businessName: "McDonald’s"
      },
      {
        terminal_id: 54,
        businessName: "Mezza Mediterranean Grille"
      },
      {
        terminal_id: 54,
        businessName: "P.F. Chang's - Asian Cuisine"
      },
      {
        terminal_id: 54,
        businessName: "Palazzolo's Artisan Gelato & Sorbetto"
      },
      {
        terminal_id: 54,
        businessName: "Papa Joe's Dining Room"
      },
      {
        terminal_id: 54,
        businessName: "Pinkberry"
      },
      {
        terminal_id: 54,
        businessName: "Plum Market serving Zingerman’s"
      },
      {
        terminal_id: 54,
        businessName: "Popeye's Louisiana Kitchen"
      },
      {
        terminal_id: 54,
        businessName: "Potbelly Sandwich Shop"
      },
      {
        terminal_id: 54,
        businessName: "Qdoba"
      },
      {
        terminal_id: 54,
        businessName: "Robert Mondavi Experience"
      },
      {
        terminal_id: 54,
        businessName: "Sora Japanese Cuisine & Sushi Bar"
      },
      {
        terminal_id: 54,
        businessName: "Starbucks (Gate A20)"
      },
      {
        terminal_id: 54,
        businessName: "Starbucks (Gate A61)"
      },
      {
        terminal_id: 54,
        businessName: "Starbucks (Gate B8)"
      },
      {
        terminal_id: 54,
        businessName: "Starbucks (Central Link)"
      },
      {
        terminal_id: 54,
        businessName: "Subway"
      },
      {
        terminal_id: 54,
        businessName: "The Shed"
      },
      {
        terminal_id: 54,
        businessName: "Vino Volo Wine Room"
      },
      {
        terminal_id: 55,
        businessName: "Air Margaritaville"
      },
      {
        terminal_id: 55,
        businessName: "Anita's Kitchen"
      },
      {
        terminal_id: 55,
        businessName: "Atwater Brewery"
      },
      {
        terminal_id: 55,
        businessName: "Brioche Doree"
      },
      {
        terminal_id: 55,
        businessName: "Chick-fil-A"
      },
      {
        terminal_id: 55,
        businessName: "Common Grace"
      },
      {
        terminal_id: 55,
        businessName: "Detroit Street Café"
      },
      {
        terminal_id: 55,
        businessName: "Jolly Pumpkin"
      },
      {
        terminal_id: 55,
        businessName: "McDonald's"
      },
      {
        terminal_id: 55,
        businessName: "MOD Pizza"
      },
      {
        terminal_id: 55,
        businessName: "National Coney Island"
      },
      {
        terminal_id: 55,
        businessName: "Outback Steakhouse"
      },
      {
        terminal_id: 55,
        businessName: "Pei Wei"
      },
      {
        terminal_id: 55,
        businessName: "Starbucks (Gate D10 & 11)"
      },
      {
        terminal_id: 55,
        businessName: "Starbucks (Gate D26 & 28)"
      }
    ]

    module.exports = businesses;