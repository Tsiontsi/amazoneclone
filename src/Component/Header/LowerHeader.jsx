import React from 'react'
import { BiMenu } from "react-icons/bi"
import classes from './Header.module.css'

function LowerHeader() {
  return (
    <section>
        <div className={classes.lower_container}>
            <ul>
                <li>
                    <BiMenu />
                        <p>All</p>
                </li>
                <li>Valentine's Gifts</li>
                <li>
                    <select name="" id="">
                        <option>Medical Care</option>
                    </select>
                </li>
                <li>
                    <select name="" id="">
                        <option>Groceries</option>
                    </select>
                </li>
                <li>Best Sellers</li>
                <li>Amazon Basics</li>
                <li>
                    <select name="" id="">
                        <option>Prime</option>
                    </select>
                </li>
                <li>New Releases</li>
                <li>Today's Deals</li>
                <li>Customer Service</li>
                <li>Music</li>
                <li>Registry</li>
                <li>Books</li>
                <li>Pharmacy</li>
                <li>Amazon Home</li>
                <li>Fashion</li>
            </ul>
        </div>
    </section>
  )
}

export default LowerHeader;