
import React from 'react'
import './index.css';

function Media() {
    // 2 cục zalo và instagram
    return (
        <div className="media">
            <div className="zalo">
                <a href="https://zalo.me/0961248596" target="_blank" rel="noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/zalo.png" alt="zalo" />
                </a>
            </div>
            <div className="instagram">
                <a href="https://www.instagram.com/ckd_vietnam/" target="_blank" rel="noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" alt="instagram" />
                </a>
            </div>
        </div>
    );
}

export default Media;