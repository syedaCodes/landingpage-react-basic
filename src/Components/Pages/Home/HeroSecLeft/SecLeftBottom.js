import React from 'react';
import Icons from '../../../../assets/sprite.svg';

const SecLeftBottom = () => {
  return (
    <div className="hero__left--bottom">
        <form className="get-access">
            <input type="email" placeholder="Enter your email address" value="" />
            <button type="submit" className="get-access-btn">Get access</button>
        </form>

        <ul className="hero__left--bottom--ul">
            <li>
                <svg>
                    <use xlinkHref={`${Icons}#icon-check`}></use>
                </svg>
                <p className="inline-a">Work anywhere</p>
            </li>

            <li>
                <svg>
                    <use xlinkHref={`${Icons}#icon-check`}></use>
                </svg>
                <p className="inline-a">Get rewarded</p>
            </li>

            <li>
                <svg>
                    <use xlinkHref={`${Icons}#icon-check`}></use>
                </svg>
                <p className="inline-a">No hidden fee</p>
            </li>
        </ul>
    </div>
  )
}

export default SecLeftBottom;