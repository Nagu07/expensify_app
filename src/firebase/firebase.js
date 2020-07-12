import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD1M9bF76xHU6-9o5V8kk2NyZciFXsGk50",
    authDomain: "expensify-app-d0c37.firebaseapp.com",
    databaseURL: "https://expensify-app-d0c37.firebaseio.com",
    projectId: "expensify-app-d0c37",
    storageBucket: "expensify-app-d0c37.appspot.com",
    messagingSenderId: "671170493960",
    appId: "1:671170493960:web:0b9b0730bfc9be9e755bbd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  export {firebase,database as default};

//   firebase.database().ref().set({
//       name: 'Nagarajan test',
//       test:123
//   });

//   firebase.database().ref('Blog').push({
//         title:'This is first blog title',
//         shortdesc:'This is short description of the blog',
//         category:'Women',
//         content:'Loreum sdnkjdnkjdn jskandkjsandsandk sj ndsjkadnasjkdn kjasd',
//         show:true,
//         createdAt:988928490
//   })

// firebase.database().ref('Blog').once('value').then((snapshot) => {
//  const Blog = [];

//  snapshot.forEach((childSnapshot)=> {
//      Blog.push({
//          id:childSnapshot.key,
//          ...childSnapshot.val()
//      })
//  })
//  console.log(Blog);
// })

// firebase.database().ref('Blog').on('value',(snapshot) => {
//     const Blog = [];
   
//     snapshot.forEach((childSnapshot)=> {
//         Blog.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(Blog);
//    })