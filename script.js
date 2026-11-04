/*
    EMC GAMING JS CODE 
*/

// Default view for games display (grid or list)
let currentView = "grid";

//Array of game objects (min 8 games, 4 recommended)
const games = [
    {
        id: 1,
        title: "Animal Crossing",
        price: 89.99, 
        rating: 4.9, 
        category: "Sandbox" ,
        platform: "Nintendo, Console, PC",
        description: "A relaxing, open-ended social simulation video game series where a human player lives in a village or on an island inhabited by charming anthropomorphic animals.",  
        image: "https://img.icons8.com/fluent/1200/animal-crossing.jpg",
        releaseDate: "2020-03-20",
        recommended: false,
        thumbnails: [
            "https://animalcrossing.nintendo.com/new-horizons/assets/img/share-fb.jpg",
            "https://okaycool.ca/wp-content/uploads/2019/06/acnewhorizons.png?w=950&h=534&crop=1",
            "https://i.etsystatic.com/21924204/r/il/2cc77b/5397438206/il_fullxfull.5397438206_2qbr.jpg",
            "https://static0.polygonimages.com/wordpress/wp-content/uploads/chorus/uploads/chorus_asset/file/19923754/InteriorDesign.00_05_23_23.Still006.jpg"
        ],
        screenshots: [
            "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/03/Animal-Crossing-New-Horizons-Fishing-1.jpg?w=1600&h=900&fit=crop",
            "https://www.newgamenetwork.com/app/uploads/2025/10/acnh_08_2.jpg",
            "https://img.game8.co/3239936/69b17628dfaf7cc9adbe0d3af389ea1c.png/show",
            "https://i.redd.it/51vgqu8w5zh41.jpg"
        ],
        reviews: [
            "So cozy and relaxing—perfect after a long day.",
            "Designing my island is honestly addictive.",
            "Wholesome vibes and lots to do."
        ]

    }, 

    {
        id: 2,
        title: "Minecraft",
        price: 35.00, 
        rating: 4.7, 
        category: "Sandbox" ,
        platform: "Console, PC, mobile",
        description: "A block-based, open-world sandbox game where players explore, craft, and build anything they can imagine in an infinite, procedurally generated 3D world.",  
        image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/02/minecraft-key-art-feature.jpg",
        heroPosition: "center 30%",   
        releaseDate: "2009-05-17",
        recommended: true,
        thumbnails: [
            "https://static.planetminecraft.com/files/image/minecraft/blog/2024/668/17223208-vintage-key-art-nologo_l.jpg",
            "https://thumbs.dreamstime.com/b/scenic-minecraft-landscape-depicting-lush-blocky-terrain-dense-vegetation-pixelated-stone-arch-covered-vines-374220406.jpg",
            "https://www.minecraft.net/content/dam/minecraftnet/games/dungeons/screenshots/bttn-header.jpg",
            "https://minecraft.wiki/images/thumb/Mne_shots_ova_original.jpeg/1200px-Mne_shots_ova_original.jpeg?14499"
        ],
        screenshots: [
            "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2020/10/minecraft-lush-caves-axolotls.jpg",
            "https://static0.srcdn.com/wordpress/wp-content/uploads/2021/02/Minecraft-Cave-Cliff-Update-New-Caves.jpg",
            "https://cdn-www.bluestacks.com/bs-images/Minecraft_Survival-First-Shelter_EN_1.jpg",
            "https://cdn.mos.cms.futurecdn.net/4NtTXUdudDCExU629W5UaS.jpg",
        ],
        reviews: [
            "I love how creative it is, I like how i can make whatever I want",
            "This is such an OG game, the split screen is so good.",
            "Survivial mode goes crazy"
        ]
    },

    {
        id: 3,
        title: "Lego Batman: The Videogame",
        price: 26.99, 
        rating: 4.2, 
        category: "Action-Adventure" ,
        platform: "Console, PC",
        description: "The fun of LEGO, the drama of Batman and the uniqueness of the combination makes for a comical and exciting adventure in LEGO Batman: The Videogame.", 
        image: "https://images.alphacoders.com/274/thumb-1920-274701.jpg" ,
        heroPosition: "center top",
        releaseDate: "2008-09-23",
        recommended: true,
        thumbnails: [
            "https://assets.altarofgaming.com/wp-content/uploads/2022/11/lego-batman-the-videogame-game-cover-altar-of-gaming.jpg",
            "https://i.ytimg.com/vi/iZUMfsBaC1Y/maxresdefault.jpg",
            "https://www.nintendoworldreport.com/media/33445/1/3.jpg",
            "https://i.guim.co.uk/img/static/sys-images/Technology/Pix/pictures/2008/10/17/batman.article.jpg?width=465&dpr=1&s=none&crop=none"
        ],
        screenshots: [
            "https://static0.cbrimages.com/wordpress/wp-content/uploads/2017/02/batman-lego.jpg",
            "https://cdn.mobygames.com/screenshots/16008662-lego-batman-the-videogame-windows-robin-built-a-vehicle-to-trave.png",
            "https://i.ytimg.com/vi/nLa3mM7s12k/maxresdefault.jpg",
            "https://www.co-optimus.com/images/splitscreens/2374.2.LEGOBatman2%202012-06-21%2008-05-12-667.png"
        ],
        reviews: [
            "Fun Lego twist on Batman, great for kids and fans.",
            "Co-op mode is hilarious with friends.",
            "Classic villains and puzzles keep it engaging."
        ]
    },

    {
        id: 4,
        title: "GTA 5",
        price: 19.99, 
        rating: 4.5, 
        category: "Action-Adventure" ,
        platform: "Console, PC",
        description: "Set in the fictional state of San Andreas and the city of Los Santos, the game features a single-player campaign centered on three playable, interconnected protagonists: retired bank robber Michael De Santa, street gangster Franklin Clinton, and violent drug dealer Trevor Philips.", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3240220/header.jpg?t=1765479644",
        releaseDate: "2013-09-17",
        recommended: false,
        thumbnails: [
            "https://wallpapers.com/images/hd/gta-5-photo-collage-qpjtjdxwbwrk4gyj.jpg",
            "https://i.redd.it/los-santos-skyline-v0-bkirb8bh5c4b1.jpg?width=3440&format=pjpg&auto=webp&s=62445d4d27eb86f59bfad90c8878c06c50a33940",
            "https://preview.redd.it/who-is-your-favorite-amongst-the-trio-mine-is-micheal-since-v0-ddxo3w5ddjvb1.jpg?width=1080&crop=smart&auto=webp&s=e44aa0b3dc0f908e540ebea27d3c7b6642e9bc5e",
            "https://i.ytimg.com/vi/wZAMjg2b1yE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCBg47Bse6VgJymp8q9yhGWECmKRw"
        ],
        screenshots: [
            "https://www.greenmangaming.com/blog/wp-content/uploads/2020/11/heist-1.jpg",
            "https://i.ytimg.com/vi/BWZATe7uKnQ/maxresdefault.jpg",
            "https://i.ytimg.com/vi/rgVCzEg-dXc/maxresdefault.jpg",
            "https://cdn2.unrealengine.com/gta-online-beginners-guide-tips-vehicles-1920x1080-33dbe0ca2d01.jpg"
        ],
        reviews: [
            "Huge open world with endless chaos—love the story switches.",
            "Online mode is addictive with friends.",
            "Graphics and missions are top-tier."
        ]
    },

    {
        id: 5,
        title: "Hello Kitty Island Adventure",
        price: 54.58, 
        rating: 4.9, 
        category: "Adventure, Life Simulation" ,
        platform: "Nintendo, mobile",
        description: "A cozy life-simulation game where you befriend Sanrio characters, explore a massive, deserted tropical island, and restore it to a bustling, customizable paradise.",  
        image: "https://developer.apple.com/articles/images/og/hello-kitty-island-adventure-og.jpg",
        heroPosition: "center 40%",
        releaseDate: "2023-07-28",
        recommended: true,
        thumbnails: [
            "https://www.digitallydownloaded.net/wp-content/uploads/2023/08/hello-kitty-island-adventure-1.webp",
            "https://i0.wp.com/templeofgeek.com/wp-content/uploads/2023/12/Screen-Shot-2023-12-20-at-7.44.57-PM.jpg?fit=1928%2C1098&ssl=1",
            "https://i.ytimg.com/vi/hAhrLj1P6kE/sddefault.jpg",
            "https://cdn.psxe.net/2025/08/hello-kitty-island-adventure.jpg"
        ],
        screenshots: [
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2495100/ss_0289e97d97c26cc5ea15c7ab402c10e9a54e7e3c.jpg",
            "https://www.siliconera.com/wp-content/uploads/2025/01/img-3331-e1738104190942.jpeg",
            "https://img.opencritic.com/game/undefined/3cn11B3V.jpg",
            "https://cdn.mapgenie.io/images/games/hello-kitty-island-adventure/preview.jpg"
        ],
        reviews: [
            "Adorable Sanrio world-building—so cute and relaxing.",
            "Befriending characters feels wholesome",
            "Perfect for casual play and customization."
        ]
    },
  
    {
        id: 6,
        title: "It Takes Two",
        price: 39.99, 
        rating: 4.5, 
        category: "Cooperative Action" ,
        platform: "Console, PC",
        description: "A genre-bending, mandatory co-op action-platformer where players control Cody and May, a couple turned into dolls who must work together to repair their fractured relationship.",  
        image: "https://ladiesgamers.com/wp-content/uploads/2021/04/ta2-900x400.jpg",
        releaseDate: "2021-03-25",
        recommended: true,
        thumbnails: [
            "https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/bltdb3079a6d3bf4563/650f13dba4952877756c7d5b/It_Takes_Two_Header.png?disable=upscale&width=1200&height=630&fit=crop",
            "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2024/08/mixcollage-13-aug-2024-02-33-pm-1690.jpg",
            "https://www.gamepur.com/wp-content/uploads/2021/03/26005107/ITT_GI_shot04_web.jpg",
            "https://i.ytimg.com/vi/1laaoskHEv4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCv4yQxYvb-lWRtVKwKqYlvE3yR5g"
        ],
        screenshots: [
            "https://static0.srcdn.com/wordpress/wp-content/uploads/2021/04/It-Takes-Two-Vacuum-Cleaner-Boss.jpg",
            "https://attackofthefanboy.com/wp-content/uploads/2021/04/It-Takes-Two-Kaleidoscope-How-to-Cross-the-Gap.jpg?w=1200",
            "https://assetsio.gnwcdn.com/it_takes_two-2.jpg?width=2048&height=2048&fit=bounds&quality=85&format=jpg&auto=webp",
            "https://images.squarespace-cdn.com/content/v1/5ce942caecdee600012bbbb3/1ab78d0e-6245-4f4f-b18d-d57078bffd34/It+Takes+Two_20210521202630.jpg"
        ],
        reviews: [
            "Best co-op game—story about relationships is touching.",
            "Puzzles require real teamwork.",
            "My boyfriend and I had so much fun playing (and so many arguements haha)"
        ]
    },
   
    {
        id: 7,
        title: "Red Dead Redemption",
        price: 79.99, 
        rating: 4.8, 
        category: "Action-Adventure, RPG" ,
        platform: "Console, PC",
        description: "Set in 1911 during the decline of the American frontier. Players control former outlaw John Marston, who is forced by government agents to hunt down his former gang members to save his kidnapped family.", 
        image: "https://gaming-cdn.com/images/products/16200/616x353/red-dead-redemption-playstation-4-game-playstation-store-cover.jpg?v=1730298578" ,
        releaseDate: "2010-05-28",
        recommended: false,
        thumbnails: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvFC7wbxPVSMtOd7HruR3al7UvRuZRySR0sA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-_bN38UvX9Oc_B2RFPZce9OxrPSb3hNQNoA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTomA1X6ZhZNleNkGUVY9nIrVFr3CibnUWtWw&s",
            "https://i.redd.it/m2d8zk62xws81.jpg"
        ],
        screenshots: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx4V1EsgV7YTilRdoex0Ng6jJJQ9T_Lk9abw&s",
            "https://assetsio.gnwcdn.com/Sunset-in-Red-Dead-Redemption-on-PC.jpg?width=570&quality=85&format=jpg&dpr=3&auto=webp",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3h1ahvq1uVTnd5Hd912XIo-wBp0Q4nLaVOQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifmW09VT9tmblMoGBtn-2byPQvEuYg3-1cA&s"
        ],
        reviews: [
            "Epic Western story—John Marston is iconic.",
            "Open world feels alive with details.",
            "Shooting and exploration are immersive."
        ]

    },

    {
        id: 8,
        title: "Mario Kart 8",
        price: 79.99, 
        rating: 4.9, 
        category: "Party-racing" ,
        platform: "Nintendo",
        description: "Arcade-style kart racing, featuring anti-gravity racing, customizable vehicles, and 12-player online/local multiplayer.", 
        image: "https://cdn.shortpixel.ai/spai/q_glossy+ret_img+to_auto/www.slantmagazine.com/wp-content/uploads/2015/06/mariokart8.jpg" ,
        heroPosition: "center",
        releaseDate: "2014-05-29",
        recommended: true,
        thumbnails: [
            "https://www.videogameschronicle.com/files/2020/01/mario-kart-8-deluxe-art-a.jpg",
            "https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/03/mario-kart.jpg",
            "https://i.ytimg.com/vi/3UdRDlyJXLg/maxresdefault.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqG6SMv0PTvkbRDQVb5y_Eyt7B9au542oGig&s"
        ],
        screenshots: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBI0YFSLqjJz4hv7GmlHBKP0XLPfukFUKWIw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhp92nbXweU6qJIJtrbv9T2nKSkGhwDYy0Zw&s",
            "https://www.nintendo.com/jp/ichikara/aabpa/photo/02/013.jpg",
            "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/0/05/Mk8vmain.png"
        ],
        reviews: [
            "Ultimate party racer—tracks are so cool",
            "Multiplayer is competitive, chaotic and addictive.",
            "Iconic and classic game"
        ]
 
    },

    {
        id: 9,
        title: "The Elder Scrolls V: Skyrim",
        price: 19.99, 
        rating: 4.5, 
        category: "RPG" ,
        platform: "Console, PC",
        description: "An open-world fantasy action RPG where players take on the role of the Dragonborn to fight dragons, explore vast landscapes, and complete quests. ",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoleWj03HDH_nr--sWLb4SWueeibtpz5N3ag&s", 
        releaseDate: "2011-11-11",
        recommended: false,
        thumbnails: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRznqawCqGqTfKOi2XVp_5VvDilU1t3xT6Yjw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7otSm86zdYBwn_AhYNZFt5BjwwZsyXZ_EvA&s",
            "https://w0.peakpx.com/wallpaper/877/567/HD-wallpaper-video-games-the-elder-scrolls-v-skyrim-dovakhiin-dragonborn-and-mobile-background-awesome-dragonborn.jpg",
            "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-elder-scrolls-5-skyrim/a/a5/Skyrim-dragons.jpg"
        ],
        screenshots: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ64pVUT9QQBjnd3wV1KzBnXHtNlIRq5ZwpA&s",
            "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-elder-scrolls-5-skyrim/1/1a/Skyrim-awesome11-600x337.jpg",
            "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/10/6-Mage-casting-an-Alteration-spell-Skyrim-Spellcaster-Perks.jpg?q=50&fit=crop&w=825&dpr=1.5",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx-Jm5kydGs32-1_LOYezbocx5VRnQ7SzRPg&s"
        ],
        reviews: [
            "Endless adventures in a massive world.",
            "Mods make it replayable forever.",
            "Dragon fights are epic."
        ]
    },
]; 

// Initialize cart and wishlist from localStorage 
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// Filter recommended games for hero section
const recommendedGames = games.filter(game => game.recommended);
let heroIndex = 0;

//HERO SECTION
function UpdateHero() {
    const game = recommendedGames[heroIndex];

    // Update hero game image and position if specified
    const heroImg = document.getElementById("heroImage");
    heroImg.src = game.image;
    heroImg.alt = game.title;
    heroImg.style.objectPosition = game.heroPosition || "center";

    // Updates game titles and ratings
    document.getElementById("heroTitle").textContent = game.title;
    document.getElementById("heroRating").textContent = game.rating + " " + buildStars(game.rating);
      
    // Cycle to next game
    heroIndex++;
    if (heroIndex >= recommendedGames.length) {
        heroIndex = 0;
    }

}

//START HEROSLIDER 
function startHeroSlider() {
    UpdateHero(); // show first immediately
    setInterval(UpdateHero, 3000); // change every 3s
}

//DISPLAY RECOMMENDED GAMES BELOW HERO SECTION
function displayRecommendedGames() {
    const container = document.getElementById("recommendedContainer");
    container.innerHTML = ""; // clear existing content

    recommendedGames.forEach(function(game) {
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");
        gameCard.addEventListener("click", function() {
            showGameDetails(game.id);
        });

        // Create image 
        const img = document.createElement("img");
        img.src = game.image;
        img.alt = game.title;

        // create title 
        const title = document.createElement("h4");
        title.textContent = game.title;

        // create price 
        const price = document.createElement("p");
        price.textContent = "$" + game.price;

        // Append all elements
        gameCard.appendChild(img);
        gameCard.appendChild(title);
        gameCard.appendChild(price);

        container.appendChild(gameCard);
    });
}


//DISPLAY ALL GAMES - Includes search, filter, grid/list view, games
function displayAllGames() {
    const container = document.getElementById("gamesContainer");
    container.innerHTML = ""; 
    container.className = currentView;  //applies grid/list class

    let filteredGames = [...games];  //copy of the games

    // get filter values
    const categoryValue = document.getElementById("categoryFilter").value;
    const platformValue = document.getElementById("platformFilter").value;
    const priceValue = document.getElementById("priceSort").value;
    const searchValue = document.getElementById("searchInput").value.toLowerCase();;
    const sortByValue = document.getElementById("sortBy").value;
    const minPrice = parseFloat(document.getElementById("minPrice").value);
    const maxPrice = parseFloat(document.getElementById("maxPrice").value);

    //Filter by Category
    if(categoryValue !== "all"){
        filteredGames = filteredGames.filter(game => game.category.toLowerCase().includes(categoryValue.toLowerCase()));
    }

    //Filter by Platform
    if (platformValue !== "all") {
        filteredGames = filteredGames.filter(game => game.platform.toLowerCase().includes(platformValue.toLowerCase()));
    }

    //Filter by Price Range
    filteredGames = filteredGames.filter(game =>game.price >= minPrice && game.price <= maxPrice);

     //Search
     if (searchValue !== "") {
        filteredGames = filteredGames.filter(game => game.title.toLowerCase().includes(searchValue));
     }

    //Price Sort
    if (priceValue === "low-high") {
        filteredGames.sort((a, b) => a.price - b.price);
    } else if (priceValue === "high-low") {
        filteredGames.sort((a, b) => b.price - a.price);
    }

    //Name + Rating Sort
    if (sortByValue === "name-az") {
        filteredGames.sort((a, b) => a.title.localeCompare(b.title));
    }
    
    if (sortByValue === "name-za") {
        filteredGames.sort((a, b) => b.title.localeCompare(a.title));
    }
    
    if (sortByValue === "rating-high") {
        filteredGames.sort((a, b) => b.rating - a.rating);
    }
    
    if (sortByValue === "rating-low") {
        filteredGames.sort((a, b) => a.rating - b.rating);
    }

    // create and append game cards 
    filteredGames.forEach(function(game){ 
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");
        gameCard.addEventListener("click", function() {
            showGameDetails(game.id);
        });

        const img = document.createElement("img");
        img.src = game.image;
        img.alt = game.title;

        const title = document.createElement("h4");
        title.textContent = game.title;

        const price = document.createElement("p");
        price.textContent = "$" + game.price;
    
        gameCard.appendChild(img);
        gameCard.appendChild(title);
        gameCard.appendChild(price);

        container.appendChild(gameCard);
    });
}

//DISPLAY GAME DETAILS - includes main img, thumbnail, sceenshots, specs etc. 
function showGameDetails(gameId) {
    const game = games.find(g => g.id === gameId);
    const container = document.getElementById("detailsContainer");
    container.innerHTML = "";

    //create page title
    const pageTitle = document.createElement("h2");
    pageTitle.className = "details-title";
    pageTitle.textContent = game.title;

    //top section for images and screenshots
    const top = document.createElement("div");
    top.className = "details-top";

    // left section main images and thumbnails 
    const left = document.createElement("div");
    left.className = "details-left";

    const mainImg = document.createElement("img");
    mainImg.className = "details-main-img";
    mainImg.src = game.image;
    mainImg.alt = game.title;

    const thumbs = document.createElement("div");
    thumbs.className = "details-thumbs"; 

    game.thumbnails.forEach(function(thumb) {
        const thumbImg = document.createElement("img");
        thumbImg.className = "details-thumbs-img";
        thumbImg.src = thumb;
        thumbImg.alt = "Thumbnail";

        //click image to update main image
        thumbImg.addEventListener("click", function(e) {
            e.stopPropagation();
            mainImg.src = thumb;
        }); 

        thumbs.appendChild(thumbImg);
    });

    left.appendChild(mainImg);
    left.appendChild(thumbs);

    //right section screenshots
    const right = document.createElement("div");
    right.className = "details-right";

    let shotIndex = 0;

    const shotWrap = document.createElement("div");
    shotWrap.className = "details-shot-wrap";

    const shotImg = document.createElement("img");
    shotImg.className = "details-shot-img";
    shotImg.src = game.screenshots[shotIndex];
    shotImg.alt = "Screenshot";

    const previousButton = document.createElement("button");
    previousButton.className = "details-arrow-prev";
    previousButton.type = "button";
    previousButton.textContent = "<";

    const nextButton = document.createElement("button");
    nextButton.className = "details-arrow-next";
    nextButton.type = "button";
    nextButton.textContent = ">";

    // function to update screenshot image
    function renderShot() {
        shotImg.src = game.screenshots[shotIndex];
    }

    //previous screenshot 
    previousButton.addEventListener("click", function(e) {
        e.stopPropagation();
        shotIndex = (shotIndex - 1 + game.screenshots.length) % game.screenshots.length;
        renderShot();
    });

    //next screenshot
    nextButton.addEventListener("click", function(e) {
        e.stopPropagation();
        shotIndex = (shotIndex + 1) % game.screenshots.length;
        renderShot();
    });

    shotWrap.appendChild(previousButton);
    shotWrap.appendChild(shotImg);
    shotWrap.appendChild(nextButton);

    right.appendChild(shotWrap);
    top.appendChild(left);
    top.appendChild(right);

    // Info section
    const info = document.createElement("div");
    info.className = "details-info";
    
    const descrip = document.createElement("p"); 
    descrip.className = "details-description";
    descrip.textContent = game.description;

    //rating row
    const ratingRow = document.createElement("div");
    ratingRow.className = "details-rating-row";

    const ratingNum = document.createElement("span");
    ratingNum.className = "details-rating-num";
    ratingNum.textContent = game.rating.toFixed(1);

    const stars = document.createElement("span");
    stars.className = "details-stars";
    stars.textContent = buildStars(game.rating); 

    ratingRow.appendChild(ratingNum);
    ratingRow.appendChild(stars);

    // reviews 
    const reviewsTitle = document.createElement("h3");
    reviewsTitle.className = "details-subtitle";
    reviewsTitle.textContent = "Reviews";
    
    const reviewsList = document.createElement("div");
    reviewsList.className = "details-reviews";
    
    const reviewsToShow = (game.reviews && game.reviews.length)? game.reviews: ["No reviews yet."];
    
    reviewsToShow.forEach(function(text) {
      const r = document.createElement("div");
      r.className = "details-review-card";
      r.textContent = text;
      reviewsList.appendChild(r);
    });

    //specs 
    const specs = document.createElement("div");
    specs.className = "details-specs";

    specs.innerHTML = `
    <div class="spec-row"><span class="spec-label">Release Date: </span><span class="spec-value">${game.releaseDate}</span></div>
    <div class="spec-row"><span class="spec-label">Category: </span><span class="spec-value">${game.category}</span></div>
    <div class="spec-row"><span class="spec-label">Platform: </span><span class="spec-value">${game.platform}</span></div>
  `;

  //action buttons 
    const actions = document.createElement("div");
    actions.className = "details-actions";

    const addToCartButton = document.createElement("button");
    addToCartButton.className = "details-cart-button";
    addToCartButton.type = "button";
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.addEventListener("click", function(e) {
        e.stopPropagation();
        addToCart(game);
    });

    const addToWishlistButton = document.createElement("button");
    addToWishlistButton.className = "details-wishlist-button";
    addToWishlistButton.type = "button";
    addToWishlistButton.textContent = "Add To Wishlist";
    addToWishlistButton.addEventListener("click", function(e) {
        e.stopPropagation();
        addToWishlist(game);
    });

    actions.appendChild(addToCartButton);
    actions.appendChild(addToWishlistButton);

    // append all to container 
    container.appendChild(pageTitle);
    container.appendChild(top);

    info.appendChild(descrip);
    info.appendChild(ratingRow);
    info.appendChild(specs);
    info.appendChild(reviewsTitle);
    info.appendChild(reviewsList);
    info.appendChild(actions);

    container.appendChild(info);

    //show the page 
    showPage("details");
}

// Stars for the ratings 
function buildStars(rating) {
    const full = Math.floor(rating);
    const half = (rating - full) >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
  
    return "★".repeat(full) + (half ? " ½" : "") + "☆".repeat(empty);
}

//ADD TO CART
function addToCart(game) {
    const existingItem = cart.find(item => item.id === game.id);

    if(existingItem) {
        existingItem.quantity +=1;
    } else {
        cart.push({
            id: game.id,
            title: game.title,
            price: game.price,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(game.title + " added to cart!");
}

//DISPLAY ITEMS IN CART 
function displayCart() {
    const container = document.getElementById("cartContainer");
    container.innerHTML = "";

    if(cart.length === 0) {
        container.textContent = "Your Cart is empty.";
        return;
    }

    let subtotal = 0;

    cart.forEach(function(item) {
        const itemDiv = document.createElement("div");

        const title = document.createElement("p");
        title.textContent = item.title; 

        const price = document.createElement("p");
        price.textContent = "Price: $" + item.price;

        const quantity = document.createElement("p");
        quantity.textContent = "Quantity: " + item.quantity;

        //increase game quantity button
        const increaseButton = document.createElement("button");
        increaseButton.textContent = "+";
        increaseButton.addEventListener("click", function() {
            item.quantity++;
            updateCart();
        });

        //decrease game quantity button
        const decreaseButton = document.createElement("button");
        decreaseButton.textContent = "-";
        decreaseButton.addEventListener("click", function() {
            if(item.quantity > 1) {
                item.quantity--;
            } else {
                cart = cart.filter(g => g.id !== item.id);
            }
            updateCart();
        });

        //remove game button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function() {
            cart = cart.filter(g => g.id !== item.id);
            updateCart();
        });

        itemDiv.appendChild(title);
        itemDiv.appendChild(price);
        itemDiv.appendChild(quantity);
        itemDiv.appendChild(increaseButton);
        itemDiv.appendChild(decreaseButton);
        itemDiv.appendChild(removeButton);

        container.appendChild(itemDiv);

        subtotal += item.price * item.quantity;
    });

    //calculates tax and total
    const tax = subtotal * 0.13;
    const total = subtotal + tax;

    //summary section
    const summary = document.createElement("div");

    const subtotalText = document.createElement("h3");
    subtotalText.textContent = "Subtotal: $" + subtotal.toFixed(2);
    
    const taxText = document.createElement("h3");
    taxText.textContent = "Tax (13%): $" + tax.toFixed(2);
    
    const totalText = document.createElement("h2");
    totalText.textContent = "Total: $" + total.toFixed(2);
    
    summary.appendChild(subtotalText);
    summary.appendChild(taxText);
    summary.appendChild(totalText);

    container.appendChild(summary);

    //bring to checkout button 
    const checkOutButton = document.createElement("button");
    checkOutButton.textContent = "Proceed to Checkout";
    checkOutButton.addEventListener("click", function() {
        showPage("checkout");
    });
    container.appendChild(checkOutButton);
}

//UPDATE CART ITEMS
function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

//UPDATE CART COUNT ITEMS
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cartCount").textContent = count;
}

// ADD TO WISHLIST
function addToWishlist(game) {
    const existingItem = wishlist.find(item => item.id === game.id);

    if(existingItem) {
        existingItem.quantity +=1;
    } else {
        wishlist.push({
            id: game.id,
            title: game.title,
            price: game.price,
            quantity: 1
        });
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    updateWishlistCount();
    alert(game.title + " added to wishlist!");
}

//DISPLAY WISHLIST 
function displayWishlist() {
    const container = document.getElementById("wishlistContainer");
    container.innerHTML = "";

    if(wishlist.length === 0) {
        container.textContent = "Your Wishlist is empty.";
        return;
    }

    wishlist.forEach(function(item) {
        const itemDiv = document.createElement("div");

        const title = document.createElement("p");
        title.textContent = item.title; 

        const price = document.createElement("p");
        price.textContent = "Price: $" + item.price;

        const quantity = document.createElement("p");
        quantity.textContent = "Quantity: " + item.quantity;

        const increaseButton = document.createElement("button");
        increaseButton.textContent = "+";
        increaseButton.addEventListener("click", function() {
            item.quantity++;
            updateWishlist();
        });

        const decreaseButton = document.createElement("button");
        decreaseButton.textContent = "-";
        decreaseButton.addEventListener("click", function() {
            if(item.quantity > 1) {
                item.quantity--;
            } else {
                wishlist = wishlist.filter(g => g.id !== item.id);
            }
            updateWishlist();
        });

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function() {
            wishlist = wishlist.filter(g => g.id !== item.id);
            updateWishlist();
        });

        //add to cart button (moves that game into cart)
        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.addEventListener("click", function() {
            moveWishlistToCart(item.id)
        });

        itemDiv.appendChild(title);
        itemDiv.appendChild(price);
        itemDiv.appendChild(quantity);
        itemDiv.appendChild(increaseButton);
        itemDiv.appendChild(decreaseButton);
        itemDiv.appendChild(removeButton);
        itemDiv.appendChild(addToCartButton);

        container.appendChild(itemDiv);
    });

}

// UPDATE WISHLIST 
function updateWishlist() {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    displayWishlist();
    updateWishlistCount();
}

// UPDATE WISHLIST COUNT ITEMS
function updateWishlistCount() {
    const count = wishlist.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("wishlistCount").textContent = count;
}

// MOVE WISHLIST ITEM TO CART
function moveWishlistToCart(id) {
    const wishlistItem = wishlist.find(item => item.id === id);
    if(!wishlistItem) return;

    // Check if already exists in cart
    const existingCartItem = cart.find(item => item.id === id);

    if (existingCartItem) {
        existingCartItem.quantity += wishlistItem.quantity;
    } else {
        cart.push({
            id: wishlistItem.id,
            title: wishlistItem.title,
            price: wishlistItem.price,
            quantity: wishlistItem.quantity
        });
    }

    // Remove from wishlist
    wishlist = wishlist.filter(item => item.id !== id);

    // update storage
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    // Refresh displays
    displayWishlist();
    updateWishlistCount();
    updateCartCount();

    alert("Moved to cart!");
}

//CHECKOUT
function setupCheckoutForm() {
    const form = document.getElementById("checkoutForm");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        //Get form values
        const email = document.getElementById("checkoutEmail").value.trim();
        const cardName = document.getElementById("cardName").value.trim();
        const cardNumber = document.getElementById("cardNumber").value.trim();
        const expiry = document.getElementById("expiryDate").value.trim();
        const cvv = document.getElementById("CVV").value.trim();

        //validates card length is 16 numbers
        if (cardNumber.length !== 16 || isNaN(cardNumber)) {
            alert("Card number must be 16 digits.");
            return;
        }

        //validates CVV is 3 numbers 
        if (cvv.length < 3 || cvv.length > 4 || isNaN(cvv)) {
            alert("Invalid CVV.");
            return;
        }

        //Validates expiry pattern MM/YY 
        const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
        if (!expiry.match(expiryPattern)) {
            alert("Expiry date must be in MM/YY format.");
            return;
        }

       //Validates year isnt expired
        const [month, year] = expiry.split("/");
        const fullYear = 2000 + parseInt(year);
        if (fullYear < 2026) {
            alert("Card cannot be expired.");
            return;
        }

        // Show processing loading spinner
        document.getElementById("processing").style.display = "block";
        setTimeout(function() {
            document.getElementById("processing").style.display = "none";
            generateReceipt(email);
            console.log("Calling generateReceipt...");
        }, 2000);
    });
}

//ODER NUMBER GENERATOR
function generateOrderNumber() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    // random 4 digit number
    const randomDigits = Math.floor(1000 + Math.random() * 9000);

    return `ORD-${year}${month}${day}-${randomDigits}`;
}

//RECEIPT 
function generateReceipt(email) {
    const container = document.getElementById("receiptContainer");
    container.innerHTML = "";

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    //generate order details 
    const orderNumber = generateOrderNumber();
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, "0")}/${
        String(today.getMonth() + 1).padStart(2, "0")}/${today.getFullYear()}`;

    let subtotal = 0;

    //build items list 
    cart.forEach(item => {
        const itemDiv = document.createElement("p");
        itemDiv.textContent = `${item.title} - $${item.price} x ${item.quantity}`;
        container.appendChild(itemDiv);

        subtotal += item.price * item.quantity;
    });

    const tax = subtotal * 0.13;
    const total = subtotal + tax;

    container.innerHTML = `
        <p><strong>Order Number:</strong> ${orderNumber}</p>
        <p><strong>Order Date:</strong> ${formattedDate}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr>
        ${container.innerHTML}
        <hr>
        <p>Subtotal: $${subtotal.toFixed(2)}</p>
        <p>Tax (13%): $${tax.toFixed(2)}</p>
        <h3>Total: $${total.toFixed(2)}</h3>
    `;

    // Clear cart after purchase
    cart = [];
    localStorage.removeItem("cart");
    updateCartCount();

    // show receipt page
    showPage("receipt");
}

// ABOUT PAGE CONTACT FORM 
function setupContactForm() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        //get values 
        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const message = document.getElementById("contactMessage").value.trim();
        
        //error elements 
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("contactEmailError");
        const messageError = document.getElementById("messageError");
        const successMessage = document.getElementById("contactSuccess");

        // Clear previous errors
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        successMessage.textContent = "";

        let isValid = true;

        // Name validation
        if (name === "") {
            nameError.textContent = "Name is required.";
            isValid = false;
        }

        // Email validation
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (email === "") {
            emailError.textContent = "Email is required.";
            isValid = false;
        } else if (!email.match(emailPattern)) {
            emailError.textContent = "Invalid email format.";
            isValid = false;
        }

        // Message validation
        if (message === "") {
            messageError.textContent = "Message cannot be empty.";
            isValid = false;
        }

        if (isValid) {
            successMessage.textContent = "Message sent successfully!";
            form.reset();
        }

    });
}

// HOME PAGE NEWSLETTER 
function newsLetterValidation() {
    const form = document.getElementById("newsletterForm");
    const emailInput = document.getElementById("emailInput");
    const errorText = document.getElementById("emailError");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // <- this stops the form from reloading the page

        const email = emailInput.value.trim();

        // validate empty email
        if (email === "") {
            errorText.textContent = "Email cannot be empty.";
            return;
        }

        //validate email format
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            errorText.textContent = "Invalid email format.";
            return;
        }

        //success message 
        errorText.textContent = "";
        alert("Successfully subscribed!");
        emailInput.value = "";
    });
}

//PAGE SHOW/HIDE 
function showPage(pageId) {
    const pages = document.querySelectorAll(".page");

    //Hide the pages
    pages.forEach(function(page) {
        page.style.display = "none";
    });

    //Show the selected page
    document.getElementById(pageId).style.display = "block";
}


//INITIALIZE ON LOAD 
window.onload = function() {
    // Nav links 
    const links = document.querySelectorAll(".nav-link");
    links.forEach(function(link) {

        link.addEventListener("click", function(e) {
            e.preventDefault();

            const pageId = this.getAttribute("data-page");

            //refresh contentfor specific pages
            if(pageId === "games") {
                displayAllGames();
            }

            if(pageId === "cart") {
                displayCart();
            }

            if(pageId === "wishlist") {
                displayWishlist();
            }

            showPage(pageId);
        });
    });

    // Default home page
    showPage("home");

    //Start heroSlider
    startHeroSlider();

    // Display recommended games on home page
    displayRecommendedGames();

    //Update Cart/Wishlist badges
    updateCartCount();
    updateWishlistCount();

    //Set up forms
    newsLetterValidation();
    setupCheckoutForm();
    setupContactForm();

    //Price sliders with validation and display update
    const minSlider = document.getElementById("minPrice");
    const maxSlider = document.getElementById("maxPrice");

    minSlider.addEventListener("input", function() {
        if (parseFloat(minSlider.value) > parseFloat(maxSlider.value)) {
            minSlider.value = maxSlider.value;
        }
        document.getElementById("minPriceDisplay").textContent = minSlider.value;
        displayAllGames();
    });
    
    maxSlider.addEventListener("input", function() {
        if (parseFloat(maxSlider.value) < parseFloat(minSlider.value)) {
            maxSlider.value = minSlider.value;
        }
        document.getElementById("maxPriceDisplay").textContent = maxSlider.value;
        displayAllGames();
    });

    //Filter/sort/search listeners 
    document.getElementById("categoryFilter").addEventListener("change", displayAllGames);
    document.getElementById("platformFilter").addEventListener("change", displayAllGames);
    document.getElementById("priceSort").addEventListener("change", displayAllGames);
    document.getElementById("searchInput").addEventListener("input", displayAllGames);
    document.getElementById("sortBy").addEventListener("change", displayAllGames);
    
    // View toggle buttons
    document.getElementById("gridViewButton").addEventListener("click", function() {
        currentView = "grid";
        displayAllGames();
    });
    document.getElementById("listViewButton").addEventListener("click", function() {
        currentView = "list";
        displayAllGames();
    });
};
