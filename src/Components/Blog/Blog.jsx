import React from 'react';
import './Blog.css';

const Blog = () => {
    return (

        <div className='blog'>
           <div className="containers">

               <div className="head-title">
                  <h1>1) When you should use context api ?</h1> 
                  <p>Context api is also do like a network tower that can delivered signal everywhere , every location path. So, context api is a parent that every url location path can send those data into their child. </p>
               </div>

               <div className="head-title">
                  <h1>2) What is Custom Hook ? </h1> 
                  <p>Custom Hook can build custom anything else into this field. Can setup inside field like fetching api's, set localStorage or sessionStorage and any other can do this field.</p>
               </div>

               <div className="head-title">
                  <h1>3) What is UseRef and how is it work ? </h1> 
                  <p> useRef Hook used to allow you to persist data values between renders. it can used to deploy multiply values that can not cause a re-render when it will be updated. 
                  </p>
               </div>

               <div className="head-title">
                  <h1>4) What is UseMemo and how is it work ? </h1> 
                  <p>useMemo Hook is used to work at functional component of react returns memorized value.Think of memoization as caching a value so that it does not need to be recalculated.
                  </p>
               </div>

           </div>
        </div>
    );
};

export default Blog;