import "../Styles/Header.css"

// const Header = () => { // inline styling method
//     return <div style={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         paddingInline: "2rem",
//         backgroundColor: "lightblue"
//     }}>
//         <div>Header Logo</div>
//         <div>
//             <ul style={{
//                 display: "flex",
//                 gap: "3rem",
//                 listStyle: "none"
//             }}>
//                 <li>HOME</li>
//                 <li>ABOUT</li>
//                 <li>BLOG</li>
//                 <li>CONTACT</li>
//             </ul>
//         </div>
//         <div>
//             <button>CONNECT ME</button>
//         </div>
//     </div>
// }

// export default Header

const Header = () => { // external styling method
    return <div className="navbar">
        <div>Header Logo</div>
        <div>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>BLOG</li>
                <li>CONTACT</li>
            </ul>
        </div>
        <div>
            <button>CONNECT ME</button>
        </div>
    </div>
}

export default Header