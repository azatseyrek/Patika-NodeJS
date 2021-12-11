const posts = [
  { id: 1, postSub: "post1" },
  { id: 2, postSub: "post2" },
  { id: 3, postSub: "post3" },
];

// const listPost = () => {
//   posts.map((post) => {
//     console.log(post);
//   });
// };

// const addPost = (id, postSub) => {
//   const promise = new Promise((resolve, eject) => {
//     posts.push({ id: id, postSub: postSub });
//     resolve("Post Eklendi");
//     reject("Post eklenemedi");
//   });
//   return promise;
// };

// const showPosts = async () => {
//   try {
//     await addPost(4, 'deneasdame');
//     listPost();
//   } catch (error) {
//     console.log(error);
//   }
// };

// showPosts();

let data = true;

const listPost = () => {
  posts.map((post) => {
    console.log(post);
  });
};

const addPost = (newPost) => {
  promise = new Promise((resolve, reject) => {
      posts.push(newPost)
    
      resolve(console.log("post eklendi"));
  
      reject("kitap eklenemedi");
    
  });
  return promise;
};

async function showPosts() {
  try {
    await addPost({ id: 7, postSub: "Post-5" });
    listPost();
    
  } catch (error) {
    console.log(error);
  }
};

showPosts();
