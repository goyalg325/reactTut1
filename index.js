// ReactDOM.render(<ul><ol><li>me keha uncle ji</li></ol><ol><li>pehchanaya</li></ol></ul>,document.getElementById("root"))
// function mainContent(){
//     return(
//         <h1>hlo this is main</h1>
// )
// }
// ReactDOM.render(<div><mainContent/></div>,document.getElementById("root"))
// const h1 = document.createElement("h1")
// h1.textContent = "this is imperative way of coding"
// h1.className = "header"
// document.getElementById("root").append(h1)
// console.log(h1)
// const element = <h1 className = "header">hlo</h1>
// console.log(element)
// ReactDOM.render(element,document.getElementById("root"))
// const navbar = (
//     <nav>
//         <h1>mohit's tech blogs
//             <ul><li>pricing</li>
//             <li>about</li>
//             <li>contact</li></ul>
//         </h1>
//     </nav>  
// )
// // ReactDOM.render(navbar,document.getElementById("root"))
// document.getElementById("root").append(navbar)
// function MySite(){
//     return(<div>
//         <img src="./react logo.jpg"  width = "300vw" height = "300vh" alt="" />
//         <h1>reasons why i love react</h1>
//         <ul>
//             <li>because it has job oppurtunitites</li>
//         </ul>
//         </div>
//     )
// }
// ReactDOM.render(<MySite />,document.getElementById("root"))
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'


function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>

    )
}
ReactDOM.render(<Page />,document.getElementById("root"))