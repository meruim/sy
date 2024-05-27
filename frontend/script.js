// listner for reviews
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector("button");
  const post = document.querySelector(".post");
  const reviews = document.querySelector(".reviews");

  const commentForm = document.getElementById("commentForm");
  const commentTextarea = document.querySelector(".textarea textarea");
  const nameArea = document.querySelector(".name textarea");

  const starLabels = document.querySelectorAll(".reviews label");

  let selectedStar = 0;

  starLabels.forEach((label) => {
    label.addEventListener("click", () => {
      selectedStar = parseInt(label.getAttribute("for").split("-")[1]);
    });
  });

  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const comment = commentTextarea.value;
    const name = nameArea.value;
    console.log("Star Rating:", selectedStar);
    console.log("Comment:", comment);
    console.log("Name:", name);

    const formData = {
      rating: selectedStar,
      comment: comment,
      name: name,
    };

    fetch("/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        alert("Review submitted successfully!");

        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      });

    reviews.style.display = "none";
    post.style.display = "block";
  });
});

window.onload = async () => {
  try {
    const response = await fetch("/data");
    const data = await response.json();

    if (response.ok) {
      const testimonialBoxContainer = document.querySelector(
        ".testimonial-box-container"
      );

      data.forEach((item) => {
        const testimonialBox = document.createElement("div");
        testimonialBox.classList.add("testimonial-box");

        const boxTop = document.createElement("div");
        boxTop.classList.add("box-top");

        // Profile Section
        const profileDiv = document.createElement("div");
        profileDiv.classList.add("profile");

        const profileImgDiv = document.createElement("div");
        profileImgDiv.classList.add("profile-img");

        const profileImg = document.createElement("img");
        profileImg.src = "img/reviews-icon.jpg"; // Assuming each data item has a profile image URL property
        profileImgDiv.appendChild(profileImg);

        const nameUserDiv = document.createElement("div");
        nameUserDiv.classList.add("name-user");

        const nameStrong = document.createElement("strong");
        nameStrong.textContent = item.name; // Assuming each data item has a name property
        nameUserDiv.appendChild(nameStrong);

        profileDiv.appendChild(profileImgDiv);
        profileDiv.appendChild(nameUserDiv);

        // Reviews Section
        const reviewsDiv = document.createElement("div");
        reviewsDiv.classList.add("reviews");

        for (let i = 0; i < item.rating; i++) {
          const starIcon = document.createElement("i");
          starIcon.classList.add("fas", "fa-star");
          reviewsDiv.appendChild(starIcon);
        }

        boxTop.appendChild(profileDiv);
        boxTop.appendChild(reviewsDiv);
        testimonialBox.appendChild(boxTop);

        // Comments Section
        const clientCommentDiv = document.createElement("div");
        clientCommentDiv.classList.add("client-comment");

        const commentP = document.createElement("p");
        commentP.textContent = item.comment; // Assuming each data item has a comment property
        clientCommentDiv.appendChild(commentP);

        testimonialBox.appendChild(clientCommentDiv);

        testimonialBoxContainer.appendChild(testimonialBox);
      });
    } else {
      console.error("Error fetching data:", data);
      alert("Error fetching data. Please try again later.");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("Error fetching data. Please try again later.");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-list a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((nav) => nav.classList.remove("active"));
      link.classList.add("active");
    });
  });
});

const menubtn = document.querySelector(".menu");
const menu = document.querySelector("header ul");
const up = document.querySelector(".up");

menubtn.onclick = function () {
  if (!menu.classList.contains("open")) {
    menu.classList.add("open");
    menubtn.style.transform = "rotate(180deg)";
    menubtn.classList.remove("uil-bars");
    menubtn.classList.add("uil-times");
  } else {
    menu.classList.remove("open");
    menubtn.style.transform = "rotate(0deg)";
    menubtn.classList.add("uil-bars");
    menubtn.classList.remove("uil-times");
  }
};

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    menubtn.style.transform = "rotate(0deg)";
    menubtn.classList.add("uil-bars");
    menubtn.classList.remove("uil-times");
  }
});

up.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const nav3 = document.getElementById("nav3");
const nav4 = document.getElementById("nav4");

nav1.onclick = function () {
  menu.classList.remove("open");
  menubtn.style.transform = "rotate(0deg)";
  menubtn.classList.add("uil-bars");
  menubtn.classList.remove("uil-times");
};
nav2.onclick = function () {
  menu.classList.remove("open");
  menubtn.style.transform = "rotate(0deg)";
  menubtn.classList.add("uil-bars");
  menubtn.classList.remove("uil-times");
};
nav3.onclick = function () {
  menu.classList.remove("open");
  menubtn.style.transform = "rotate(0deg)";
  menubtn.classList.add("uil-bars");
  menubtn.classList.remove("uil-times");
};
nav4.onclick = function () {
  menu.classList.remove("open");
  menubtn.style.transform = "rotate(0deg)";
  menubtn.classList.add("uil-bars");
  menubtn.classList.remove("uil-times");
};

const htmlbar = document.getElementById("bar1");
const cssbar = document.getElementById("bar2");
const jsbar = document.getElementById("bar3");

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 1200 ||
    document.documentElement.scrollTop > 1200
  ) {
    htmlbar.classList.add("activehtml");
    cssbar.classList.add("activecss");
    jsbar.classList.add("activejs");
  }
});

const sw = document.querySelector(".switch");
const swcircle = document.querySelector(".switchcircle");

sw.addEventListener("click", () => {
  if (!swcircle.classList.contains("on")) {
    swcircle.classList.add("on");
    swcircle.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
    document.body.classList.add("dark");
    menu.classList.remove("open");
    menubtn.style.transform = "rotate(0deg)";
    menubtn.classList.add("uil-bars");
    menubtn.classList.remove("uil-times");
    sw.style.backgroundColor = "#1F2021";
  } else {
    swcircle.classList.remove("on");
    swcircle.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
    document.body.classList.remove("dark");
    menu.classList.remove("open");
    menubtn.style.transform = "rotate(0deg)";
    menubtn.classList.add("uil-bars");
    menubtn.classList.remove("uil-times");
    sw.style.backgroundColor = "#fff";
  }
});

function showReviews() {
  const reviewList = document.getElementById("review-list");
  reviewList.innerHTML = ""; // Clear previous reviews

  const reviews = [
    { name: "John Doe", rating: 5, date: "2024-05-21", comment: "Great app!" },
    {
      name: "Jane Smith",
      rating: 4,
      date: "2024-05-20",
      comment: "Very useful.",
    },
    // Add more sample reviews as needed
  ];

  for (const review of reviews) {
    const reviewDiv = document.createElement("div");
    reviewDiv.classList.add("review");

    const userName = document.createElement("p");
    userName.innerHTML = `<b>${review.name}</b>`;

    const rating = document.createElement("span");
    rating.classList.add("rating");
    rating.innerHTML = "★".repeat(review.rating);

    const date = document.createElement("p");
    date.innerHTML = review.date;

    const comment = document.createElement("p");
    comment.innerHTML = review.comment;

    const showReviewLink = document.createElement("a");
    showReviewLink.classList.add("show-review-link");
    showReviewLink.href = "#";
    showReviewLink.textContent = "Show Review";
    showReviewLink.onclick = function () {
      alert(
        `Review by ${review.name}\nRating: ${review.rating}\nDate: ${review.date}\nComment: ${review.comment}`
      );
    };

    reviewDiv.appendChild(userName);
    reviewDiv.appendChild(rating);
    reviewDiv.appendChild(date);
    reviewDiv.appendChild(comment);
    reviewDiv.appendChild(showReviewLink);

    reviewList.appendChild(reviewDiv);
  }
}
