import React, { useContext } from 'react';
import classes from './Header.module.css';
import {Link} from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import LowerHeader from './LowerHeader';
import { BiCartAdd } from "react-icons/bi";
import { DataContext } from '../DataProvider/DataProvider';
import { auth } from "../../Utility/firebase";

const Header = () => {
  
    const [{user, basket},dispatch]=useContext(DataContext)
    const totalItem = basket?.reduce((amount,item)=>{
        return item.amount + amount
    },0)

  return (
    <>
    <section className={classes.fixed}>
     <div className={classes.header_container}> 
        {/* Logo */}
        <div className={classes.logo_container}>
            <Link t0="/">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt= "amazon log"/>
            </Link>
         

        {/* Delivery info */}
            <div className={classes.delivery}>
                <span>
                    <SlLocationPin size={25} />
                </span>
                <div>
                    <p>Delivering to</p>
                    <span>Updaated Loaction</span>
                </div>
            </div>
        </div>
        {/* Search product */}
        <div className={classes.search}>
            <select name="" id="">
                <option>All</option>
            </select>
            <input type="text" name="" id="" placeholder='search product' />
            <IoSearchSharp size={38} />
        </div>
        
        {/*Right side links  */}
        <div className={classes.order_container}>
            <Link to="/" className={classes.language}>
                <img src="https://image.shutterstock.com/image-vector/vector-image-american-flag-260nw-157626554.jpg" alt="" />
                <select name="" id="">
                    <option>EN</option>
                </select>
            </Link>
            {/* three components */}
            {/* sign in */}
            <Link to={!user && "/auth"}>
                <div>
                    {user? (
                        <>
                        <p>Hello {user?.email?.split("@")[0]} </p>
                        <span onClick={()=>auth.signOut()}>Sign Out</span>
                        </>
                        ) : (
                        <>
                        <p>Sign In</p>
                        <span>Account & Lists</span>
                        </>
                    )}
                </div>
                
            </Link>
            {/* orders */}
            <Link to="/orders">
                <p>Returns</p>
                <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
                <BiCartAdd size={40}/>
                <span>{totalItem}</span>
            </Link>

        </div>
     </div>
    <LowerHeader />
    </section>
    </>
  )
}

export default Header