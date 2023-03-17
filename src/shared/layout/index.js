import Header from "@shared/header";
import Footer from "@shared/footer";


export default function Layout(props){

    return (
        <>
            <Header/>
            {props.children}
            <Footer/>

        </>

    )
}