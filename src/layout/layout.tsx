import {Header} from "../components/header/header.tsx";
import {Footer} from "../components/footer/footer.tsx";
import './styles.scss';

interface ILayout {
    children?: React.ReactNode;
}

export const Layout = ({children}: ILayout) => {

    return(
        <>
            <header className="header">
                <Header />
            </header>
            <main style={{minHeight: 'calc(100vh - 166px)'}}>{children}</main>
            <footer className="footer">
                <Footer />
            </footer>
        </>
    )
}