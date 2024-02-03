import Review from '../pages/Review';
import Home from '../pages/Home';
import Shopping from '../pages/Shopping';
import DetailProduct from '../pages/DetailProduct';

const publicRoutes = [

    {path: '/', component: Home},
    {path: '/review', component: Review, },
    { path: '/video', component: Review, layout: null },
    { path: '/shopping', component:Shopping },
    {path: '/detail-product', component: DetailProduct},

];

const privateRoutes = [
    
];

export { privateRoutes, publicRoutes }