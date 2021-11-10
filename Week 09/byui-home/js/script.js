const data = {
  hero: {
    main: "https://www.byui.edu/images/home_page/Ready%20Round%207/7-Livestock_WebAds-High-Value2%20HOME.jpg",
    subSections: [
      {
        image:
          "https://www.byui.edu/images/homepage-main/pagebuilder/CampusVideos.jpg",
        text: "Campus Videos",
        link: "http://video.byui.edu/",
      },
      {
        image:
          "https://www.byui.edu/images/homepage-main/pagebuilder/PhotoGallery%280%29.jpg",
        text: "Photo Gallery",
        link: "http://photo.byui.edu/",
      },
      {
        image:
          "https://www.byui.edu/images/homepage-main/pagebuilder/ExploreCampus.jpg",
        text: "Explore Campus",
        link: "http://www.byui.edu/campus-tours",
      },
    ],
  },
  calendar: [
    {
      date: "Jun 22",
      title: "Devotional - Kristin Ballou",
    },
    {
      date: "Jun 29",
      title: "Devotional - Scott Johnson",
    },
    {
      date: "Jul 06",
      title: "Devotional - Jennifer Jones",
    },
    {
      date: "Jul 13",
      title: "Devotional - Barbara McKenna",
    },
  ],
  news: [
    {
      date: "JUNE 8, 2021",
      link: "https://www.byui.edu/newsroom/06-08-21-fall-semester-2021",
      image: "https://www.byui.edu/images/newsroom/Fall%20Semester%202021.jpg",
      title: "BYU-Idaho to be Fully Open Fall Semester 2021  ",
      excerpt:
        "The latest information regarding BYU-Idaho's plans for Fall Semester 2021",
    },
    {
      date: "MAY 14, 2021",
      link: "https://www.byui.edu/newsroom/05-14-21-spring-2021-enrollment",
      image:
        "https://www.byui.edu/images/newsroom/Spring%202021%20Enrollmen.jpeg",
      title: "BYU-Idaho enrollment continues steady, upward growth",
      excerpt: "Spring 2021 enrollment statistics released",
    },
    {
      date: "APRIL 20, 2021",
      link: "https://www.byui.edu/newsroom/4-20-eyring-radio-interview",
      image:
        "https://www.byui.edu/images/newsroom/Screen%20Shot%202021-04-20%20at%2010.34.07%20AM.png",
      title: "BYU-Idaho Radio Interview With the Eyrings",
      excerpt:
        "President and Sister Eyring discuss their Spring 2021 devotional message to students.",
    },
  ],
};

const mainVideo = document.getElementById("main-video");
const carousel = document.getElementById("carousel");
const information = document.getElementById("information");
const resources = document.getElementById("resources");
const importantDates = document.getElementById("important-dates");

// #region Set Main Image
let figure = document.createElement('figure');
let video = document.createElement('img');
video.src = data.hero.main;

figure.appendChild(video)
mainVideo.appendChild(figure)
// #endregion


// #region Set images in Carousel Section
data.hero.subSections.forEach(e => {
    let anchor = document.createElement('a');
    anchor.href = e.link

    let figure = document.createElement('figure');
    let figCaption = document.createElement('figcaption');
    figCaption.innerText = e.text

    let imgUrl = e.image;
    let img = document.createElement('img');
    img.src = imgUrl;

    figure.appendChild(img)
    figure.appendChild(figCaption)
    anchor.appendChild(figure);
    
    carousel.appendChild(anchor);
});
// #endregion

// #region Newsroom
let news = document.getElementById('news-room');

data.news.forEach(e => {
    let mainDiv = document.createElement('div');
    let div = document.createElement('div');
    let img = document.createElement('img');
    let a = document.createElement('a')
    let date = document.createElement('h3');
    let title = document.createElement('p');
    let excerpt = document.createElement('p');
    let button = document.createElement('button');

    img.src = e.image;
    a.href = e.link;
    date.innerText = e.date;
    title.innerText = e.title;
    excerpt.innerText = e.excerpt;
    button.textContent = 'READ MORE';

    div.appendChild(date);
    div.appendChild(title);
    div.appendChild(excerpt);
    div.appendChild(button)

    mainDiv.classList.add('news-item');
    div.classList.add('col');
    mainDiv.appendChild(a);
    mainDiv.appendChild(img);
    mainDiv.appendChild(div)

    news.appendChild(mainDiv)
});


// #endregion

// #region Set Calendar
let select = document.getElementById('important-dates');

data.calendar.forEach(e => {
    let option = document.createElement('option')
option.value = e.date
});

// #endregion