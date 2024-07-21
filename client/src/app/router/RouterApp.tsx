import { Route, BrowserRouter, Routes } from "react-router-dom"
import ContainerPage from '../layout/container/Container';
import { Portfolio, Resume, Home, Contact, Stats } from '../pages';

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ContainerPage />}>
                    <Route index element={<Home />} />
                    <Route path="resume" element={<Resume />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="stats" element={<Stats />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp