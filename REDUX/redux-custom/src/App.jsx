import React from 'react';
import {Link, Route , Routes} from 'react-router-dom';
import User from './User';
import Home from './Home'
function App() {

    return (
        <>
            <div className='h-screen w-screen bg-slate-500'>
          <nav>
    {
        ["user", "product"].map(elem => {
            return <Link className="bg-green-400" key={elem} to={elem}>{elem}</Link>
        })
    }
</nav>

<Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/user' element={<User/>} ></Route>
    <Route path='/product' ></Route>
</Routes>
            </div>
        </>
    );
}

export default App;
