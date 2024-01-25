const forumLatest = "https://forum-proxy.freecodecamp.rocks/latest";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";
const postsContainer = document.getElementById("posts-container");
const allCategories = {
    299: { category: "Career Advice", className: "career" },
    409: { category: "Project Feedback", className: "feedback" },
    417: { category: "freeCodeCamp Support", className: "support" },
    421: { category: "JavaScript", className: "javascript" },
    423: { category: "HTML - CSS", className: "html-css" },
    424: { category: "Python", className: "python" },
    432: { category: "You Can Do This!", className: "motivation" },
    560: { category: "Backend Development", className: "backend" },
  };
  const forumCategory = (id) => {
    let selectedCategory = {};
  
    if (allCategories.hasOwnProperty(id)) {
      const { className, category } = allCategories[id];
  
      selectedCategory.className = className;
      selectedCategory.category = category;
    } else {
      selectedCategory.className = "general";
      selectedCategory.category = "General";
      selectedCategory.id = 1;
    }
    const url = `${forumCategoryUrl}${selectedCategory.className}/${id}`;
    const linkText = selectedCategory.category;
    const linkClass = `category ${selectedCategory.className}`;
  
    return `<a href="${url}" class="${linkClass}" target="_blank">
      ${linkText}
    </a>`;
  };
  