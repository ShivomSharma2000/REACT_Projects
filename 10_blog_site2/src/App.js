import './App.css';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { Routes , Route, useSearchParams, useLocation} from 'react-router-dom';

import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import Category from './pages/Category';
import Tag from './pages/Tag';

function App() {

  const {dataFetching} = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();    //it's used to access and update of our 'query parameter'.
  const location = useLocation();                               // it's gives us a 'current location'

  useEffect(()=>{
    const page = searchParams.get('page') ?? 1;                      //find a page from our 'url',if not found then page set to '1'(page always be exist's in url ,that's a reason they will fetch always)

    if(location.pathname.includes('tags')){                      //showing, if in 'url' we have a 'tag' word then this code will be go
      const tag = location.pathname.split('/').at(-1).replaceAll('-',' ');       //this line shows, in path wherever we will be find '/' but at only last index(-1) and also replace '-' to ' ' 
      dataFetching(Number(page),tag)                                                 // at last,call the function and pass their parameters
    }
    else if(location.pathname.includes('categories')){                        //showing, if in 'url' we have a 'category' word then this code will be go
      const category = location.pathname.split('/').at(-1).replaceAll('-',' ');
      dataFetching(Number(page),null,category)
    }
    else{
      dataFetching(Number(page));                                                   //else will be run when both 'tag' and 'category' aren't in 'url'
        }

  },[location.pathname, location.search])                                  //this function always call when path or page no. will be change
  
  return (

    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:blogId' element={<BlogPage />} />
        <Route path='/categories/:category' element={<Category />} />
        <Route path='/tags/:tag' element={<Tag />} />
    </Routes>

  );
  
}

export default App;
