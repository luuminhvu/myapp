import React from "react";

const Features = () => {
  const data = [
    {
      title: "Search Data",
      description:
        "Don’t worry if your data is very large, the Data Warehouse provides a search engine, which is useful for making it easier to find data effectively saving time.",
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/de39/7ca5/7ba1dda1fab4af707def69fa8e4d2a0b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BgD1vq8SLRTDFLIdVEeGonJCxje94-qe1Jz48NJu2ui0reH8UI6PfzBy3VnksGRqcuM8-eLB80iI8IwoB3G5EDmV2LKUca-JSw2mNN2h~VsUxpj7p0~cjYXcMeUl46l1faM9qzF6XFd1vtxxWHC~txxKA1CixwyOGqiigYPgfBnAU7rgvWckgOlvnmfhBtskauFM8s48FlbgttHVrtEEwRa9n9cTtmVXsvuqZJiCqyUMosuKaybG3xAwlAUKtuMJomuZ0jo8qFs~HopQ6xb7yQyIzlNSi5h0fKFRX2KQHIojkmQS~nO~x6yRi6WL6wdH5Qyw3ntMKGPAz5Z16Xy7Ag__",
      color: "bg-greenRgb",
    },
    {
      title: "24 Hours Access",
      description:
        "Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.",
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/4848/bd8b/6441ecd1919c84f36a65eabdc8138a2c?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I5X~ylS-5CP654blk8ajFeWhxpEv-iIBVQN2ttqrlHUT7IsZhDuY0kEgoxJCESZnQmDyaXADtkppcnk93VFfZoirI7XBCCyGdIayDLa8wJioLDn3LKau3suRO9D-Jkq-yVJOm~uVCAQfzEVRi8VcRZhpLZbi365DGqm6Q2H2b6Fih2NM5bD3yBv5IjoEJLdnekxbCzWRipLb5bibYqED98AXFQdc2O~yx6rPQT~unrRUE7ip96NBbRnUItLMLhwr9UbHK~deLG5N0~6y1sDAdUdTFfN-5z~BZ6hF1BItQzwZP7tJzXqimwnimaStDZGgWIx9YRGf~6F39dRQjrC~IA__",
      color: "bg-purpleRgb",
    },
    {
      title: "Print Out",
      description:
        "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/cc12/c28f/2f3e743d08b2c66de2a7a23d4228df91?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kC4jK2o7aznO70BqxGfSqVgsBSzG-3db6cFpiuA947d5kO6LU92RDvJX~0n87XxRTMl6BD2FTQU8a67zMk7v0qIKzgj2CFaZI6WF7yWJBMBl6JmQmU4UzMrfNnL8ICNjigd0Th5iDH8UlTUccW7BzQ~xoyFdAAOI82l7PdOg2ayXVWoiHUrUaePGdPKCHW7HlcPkA88imvgHxafCx19urkisPnmWoaZ75Qk8mE64YF7HmEufJaXJkVbChupBl~PiZMAxJ5c2sYMp3KeD4EXS4SQeoLwzwzdeXCwp44yhKLxUhfDND~ueewtNHDEYArCuee~mfQklHx~TSwJKr~U56w__",
      color: "bg-pinkRgb",
    },
    {
      title: "Security Code",
      description:
        "Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.",
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/9b0c/ad9e/af78d7add1e7940c7af1b7f896b757e0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YGV8wo2ftd6c7T9Xm0DmRMZ7gtsyf8gT-WA8iUUPoeqo5InINO56vhXUeuMLopjH~3kQDwAL-l8dd~JbMPvECthZkK57Kx-HfChKgcMCsHIsUnwBQvpBc7OPObQRaXdGvj7sBKzjl5CzuO44TrQdaBNuWDNg79hVqxViOnr-poL9uD857Xo7P1bV5QkS0W0y6POyBSrh5Rh~Lj3Yf03YhPbE8gMqUivLHxUkKito0VsPs9V3JSRRysleCcvrqZx7mfcw1JhXGqHuPKw76C2XjNHpDJ3FOrrTnFQjyH5EQMfYmpY04nlj5~IUlvtA6VJ~h8INXO7w-lKSIz1JcKXTwQ__",
      color: "bg-blueRgb",
    },
  ];

  return (
    <div className="container mx-auto max-w-[1120px] p-8 mt-48">
      <div className="text-center mb-16 w-[575px] mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Features</h1>
        <p className="text-xl text-gray-600 mt-20">
          Some of the features and advantages that we provide for those of you
          who store data in this Data Warehouse.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-36 gap-y-16">
        {data.map((feature, index) => (
          <div
            key={index}
            className={`relative flex p-8 ${feature.color} rounded-3xl border border-gray-200 h-[382px]`}
          >
            <div className="absolute top-20 -left-24">
              <img
                src={feature.imgUrl}
                alt="Icon"
                className="w-full h-auto rounded-full"
              />
            </div>
            <div className="ml-20 pl-20 pr-6 relative">
              <h2 className="text-[24px] mt-6 font-bold text-textRgb mb-2">
                {feature.title}
              </h2>
              <p className="text-desRgb mb-4 mt-4 leading-8 w-56">
                {feature.description}
              </p>
              <a
                href
                className="text-moreRgb font-bold hover:underline absolute bottom-0"
              >
                Learn more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
