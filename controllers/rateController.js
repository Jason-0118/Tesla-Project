
// const fetch = require('node-fetch')

exports.get_rate = function (req, res) {
    // let API = "https://cs-361-tesla.herokuapp.com/tesla/?name=2021 " + req.params.model;
    // fetch(API)
    //     .then((response) => {
    //         if (!response.ok) console.error("Issue with request", response);
    //         return response.json();
    //     })
    //     .then((data) => {
    //         let info = data
    //         res.render('rate.ejs', {
    //             title: req.params.model,
    //             info
    //         });
    //     })

    if (req.params.model === "Tesla Model X") {
        var info = Info[0]
    }
    else if (req.params.model === "Tesla Model Y") {
        var info = Info[1]
    }
    else if (req.params.model === "Tesla Model 3") {
        var info = Info[2]
    }
    else if (req.params.model === "Tesla Model S") {
        var info = Info[3]
    }
    res.render('rate.ejs', {
        title: req.params.model,
        info
    })

}

//------------------
Info = [
    {
        "name": "2021 Tesla Model X",
        "url_image": "https://media.ed.edmunds-media.com/tesla/model-x/2021/oem/2021_tesla_model-x_4dr-suv_plaid_fq_oem_1_815.jpg",
        "pros": [
            "Instant and powerful acceleration",
            "Electric range is impressive",
            "Three-row seating is available",
            "Access to Tesla's extensive Supercharger network"
        ],
        "cons": [
            "Finicky upward-swinging rear doors impede functionality",
            "Vast windshield lets too much sun and heat into the cabin",
            "Apple CarPlay and Android Auto aren't offered"
        ],
        "news": [
            "All-new interior design with new dash, steering wheel and infotainment screen",
            "Minor changes to exterior design",
            "Lineup now consists of Long Range and Plaid trims",
            "Part of the first Model X generation introduced for 2016"
        ],
        "comment": [
            "Although  the Model X debuted over five years ago, it's still essentially a unicorn in  the market. Even if you take its showstopping falcon-wing rear doors out of  the equation, no other SUV — electric or otherwise — can  match the Model X's acceleration. Throw in its impressive 360 miles of  estimated driving range and you really do have a one-of-a-kind vehicle.",
            "For  2021, Tesla has updated the interior of the Model X with a higher-definition  17-inch touchscreen, a new instrument panel, and a rather controversial  steering wheel design that looks more like something from an airplane than a  car. The automaker also changed the name of the Performance version to Plaid, a  reference to the Mel Brooks movie Spaceballs. ",
            "Direct  competitors are few, with Tesla's own Model S sedan the most similar in range  and performance. If you don't need the space the Model X offers, the smaller  Tesla Model Y is also worth a look. Audi's e-tron SUV is another all-electric  luxury SUV, while the Mercedes-Benz GLE offers superior interior materials and  build quality, though it's currently only available with a gasoline engine. Is  the Model X a truly unique world beater? Read our Expert Rating below to find  out.",
            "Edmunds' editorial team acquired and  lived with a 2016 Tesla Model X for nearly two years, logging nearly 25,000  miles. As an all new-design for Tesla, it had a few teething problems at first  and suffered from some build-quality issues. The 2021 Tesla Model X differs  from our early long-term Model X by way of improved cabin materials and  significantly upgraded software, and build quality in recent Teslas we've  driven is much improved. It's the same generation, though, so many of our  observations still apply. To learn more about the Tesla Model X, check out our 2016 Tesla Model X coverage."
        ],
        "rating": {
            "verdict": "8.1 / 10",
            "drive": "",
            "comfort": "",
            "interior": "8.5",
            "tech": "7.0",
            "storage": "8.5",
            "range": "8.0",
            "value": "",
            "wildcard": "9.0"
        }
    },
    {
        "name": "2021 Tesla Model Y",
        "url_image": "https://media.ed.edmunds-media.com/tesla/model-y/2020/oem/2020_tesla_model-y_4dr-suv_performance_fq_oem_2_815.jpg",
        "pros": [
            "Plenty of range",
            "Stunning acceleration, especially from the Performance model",
            "Convenient Supercharger network for long-distance driving",
            "Roomy seating front and rear"
        ],
        "cons": [
            "No Apple CarPlay or Android Auto smartphone integration",
            "Performance model's overly stiff ride",
            "Optional third row of seats is barely usable"
        ],
        "news": [
            "Introduced, and then discontinued, Standard Range version",
            "Seven-seat configuration now available",
            "Part of the first Model Y generation introduced for 2020"
        ],
        "comment": [
            "The 2021 Tesla Model Y is a small SUV that slots below the larger Model X in the company's lineup. It's a Tesla, so of course it's all-electric. It also has a lot in common with the Model 3 sedan, including similar design inside and out. Compared to the 3, the Y gives you more space for rear passengers and greater cargo capacity. You can even order a 2021 Model Y with a third row of seats. Just know that the third row of seats is strictly for small children because the rear window glass directly intrudes on passenger head space.",
            "Overall, the Model Y has many redeeming qualities. Its Long Range and Performance variants offer impressive range, each rated by the EPA at more than 300 miles on a full charge. They also feel great to drive thanks to quick acceleration and nimble handling. However, new challengers have entered the EV arena in the past year. In particular, you should check out the Ford Mustang Mach-E and Volkswagen ID.4 electric SUVs. Audi's e-tron is another viable pick if you want something more luxurious. Need help deciding on the Model Y? Check out our Expert Rating below for our in-depth evaluation. ",
            "Our car experts lived with a 2020 Tesla Model Y Performance and drove it for thousands of miles as part of our long-term evaluation fleet. Read our long-term Tesla Model Y test page to learn about long-term reliability, energy efficiency and our take on what it's like to own a Model Y."
        ],
        "rating": {
            "verdict": "8.2 / 10",
            "drive": "",
            "comfort": "",
            "interior": "7.5",
            "tech": "7.5",
            "storage": "8.0",
            "range": "8.0",
            "value": "",
            "wildcard": "9.5"
        }
    },
    {
        "name": "2021 Tesla Model 3",
        "url_image": "https://media.ed.edmunds-media.com/tesla/model-3/2018/oem/2018_tesla_model-3_sedan_performance_fq_oem_1_815.jpg",
        "pros": [
            "Class-leading range, performance and handling",
            "Comfortable seating and lots of interior room",
            "Access to Tesla's prolific Supercharger fast-charging stations"
        ],
        "cons": [
            "Touchscreen interface can lead to driver distraction",
            "No Android Auto or Apple CarPlay support"
        ],
        "news": [
            "Increased range and efficiency",
            "New interior and exterior trim",
            "Standard integrated wireless phone charger",
            "Part of the first Model 3 generation introduced for 2017"
        ],
        "comment": [
            "Can  a car be \"insanely amazing\"? Well, that's how an owner described the  Model 3 on an Edmunds consumer review. Is there some hyperbole here? Most  definitely. But even from our more measured standpoint, the Model 3 is an  impressive sedan. And it's getting even better for 2021. ",
            "More  range is always a good thing with an electric vehicle, and the Model 3 obliges.  The base Standard Range Plus — the previous special-order-only  Standard Range is now gone for good — rises from 250 miles to an  EPA-estimated 263 miles of range. Similar gains are in store for the Long Range  AWD and the Performance. Other 2021 changes include black exterior trim instead  of chrome, a standard wireless phone charging pad, a power trunklid, metal  steering wheel control dials instead of plastic, and a new window design to  help reduce outside noise.",
            "The  Model 3 is a great pick for an EV, but it's not the only one for 2021.  Specifically, we've found the Ford Mustang Mach-E, Kia Niro EV, Polestar 2  (Polestar is a new boutique EV brand from Volvo) and Volkswagen ID.4 to also be  viable choices. So should you stick with Silicon Valley's finest or go with an  alternative? Read our Model 3 Expert Rating below to help you decide.",
            "Edmunds' editorial team lived with a 2017 Tesla Model 3 Long  Range for nearly two years, logging 24,000 miles. As an all new-design for  Tesla, it had a few teething problems at first. But most of the issues were  electronic in nature and were later sorted out via software updates. The 2021  Tesla Model 3 differs from our early long-term Model 3 by way of improved cabin  materials and different powertrain options. It's the same generation, though,  so many of our observations still apply. Check out our 2017 Tesla Model 3  Long Range coverage to learn more."
        ],
        "rating": {
            "verdict": "8.4 / 10",
            "drive": "9.0",
            "comfort": "8.5",
            "interior": "8.0",
            "tech": "7.0",
            "storage": "8.0",
            "range": "8.0",
            "value": "8.0",
            "wildcard": "9.5"
        }
    },
    {
        "name": "2021 Tesla Model S",
        "url_image": "https://electrek.co/wp-content/uploads/sites/3/2021/04/Tesla-Model-S-2021-Refresh-1.jpg?quality=82&strip=all&w=1000",
        "pros": [
            "Electric range is impressive",
            "Wicked quick acceleration across the board",
            "Liftback design affords abundant cargo space",
            "Access to Tesla's extensive Supercharger network"
        ],
        "cons": [
            "Lack of a traditional steering wheel and turn stalks hampers usability",
            "Interior isn't as refined as cabins in similarly priced sedans",
            "No Apple CarPlay or Android Auto smartphone integration",
            "Limited array of paint colors or other ways to customize from the factory"
        ],
        "news": [
            "Revised model lineup",
            "New ultra-performance Plaid version",
            "Updated interior with horizontal-oriented touchscreen",
            "New driver information display and rear-passenger entertainment display",
            "Part of the first Model S generation introduced for 2012"
        ],
        "comment": [
            "The  2021 Tesla Model S is an all-electric sedan that sits at the top of the  automaker's lineup. The Model S might be the oldest vehicle Tesla currently  sells, but it's still desirable thanks to robust performance as well as  unparalleled all-electric range. Currently, the Model S Long Range boasts an  estimated 405 miles, which is the most from any EV on the market.",
            "There's  also the Tesla Model S Plaid. The Plaid, which presumably gets its name from an  obscure Spaceballs movie reference,  gains an additional electric motor, for a total of three. The automaker is  touting an output of 1,020 horsepower and a 0-60 mph time of 2 seconds. ",
            "Also  on tap for 2021 is an updated interior. It features a new horizontally oriented  touchscreen, which is the style Tesla implemented on its Model 3 and Y. It's  paired with an additional dash-mounted driver information display above the  steering yoke and an entertainment display for rear passengers. Wait, what's a  steering yoke? Yep, leave it to Tesla to try to reinvent the (steering) wheel.  The Model Y has a new design that's styled to look like an aircraft's flight  yoke or, perhaps more whimsically, the twin-grip design from Knight Rider's  KITT.",
            "So what's it like driving the updated Model S? Check out our Expert Rating below to get our test team's evaluation of the car's performance, real-world range and more."
        ],
        "rating": {
            "verdict": "8.1 / 10",
            "drive": "",
            "comfort": "",
            "interior": "7.5",
            "tech": "7.5",
            "storage": "8.5",
            "range": "8.0",
            "value": "",
            "wildcard": "10.0"
        }
    }
]
