const HomePage ={
  template:'#home-page',
};
const ProfilePage = {
  template:'#profile-page',
};

const FatherPage = {
  template:'#father-page',
};

const MotherPage = {
  template:'#mother-page',
};
const BrotherPage = {
  template:'#brother-page',
};
const SisterPage = {
  template:'#sister-page',
};

const ErrorPage = {
  template:'#error-page',
};
const router = new VueRouter({
  routes: [
    { path: '/', component: HomePage },
    { path: '/myprofile', component: ProfilePage },
    { path: '/father',component: FatherPage },
    {path: '/mother',component:MotherPage},
    {path: '/brother',component: BrotherPage},
     {path: '/sister',component: SisterPage},
    { path: '*', component: ErrorPage },
  
  ]
});

const vm = new Vue({
  el: "#app",
  router,
});

